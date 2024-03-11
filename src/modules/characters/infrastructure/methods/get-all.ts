import { unstable_cache } from 'next/cache';

import { generateMarvelApiUrl } from '@/modules/core/infrastructure/marvel-api/generate-api-url';
import { fetchAndParse } from '@/modules/core/infrastructure/utils';
import { markFavoriteCharacters, mapApiResponseToCharacter } from '../utils';

export async function getAll() {
  const cachedCharacters = unstable_cache(fetchGetAll, ['all-characters'], {
    revalidate: 60 * 60 * 24 * 3, // 3 days
    tags: ['all-characters'],
  });

  const result = await cachedCharacters();
  const allCharacters = markFavoriteCharacters(result);

  return allCharacters;
}

async function fetchGetAll() {
  const limit = 100;
  const initialResponse = await fetchAndParse(
    generateMarvelApiUrl('characters', { offset: 0, limit }),
    { cache: 'no-store' }
  );
  const total = initialResponse.total;
  const requests = [];

  for (let offset = limit; offset < total; offset += limit) {
    requests.push(
      fetchAndParse(generateMarvelApiUrl('characters', { offset, limit }), { cache: 'no-store' })
    );
  }

  const responses = await Promise.all(requests);
  const allResults = responses.reduce(
    (acc, response) => [...acc, ...response.results],
    initialResponse.results
  );

  return mapApiResponseToCharacter(allResults);
}
