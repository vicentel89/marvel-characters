import { unstable_cache } from 'next/cache';

import { generateMarvelApiUrl } from '@/modules/core/infrastructure/marvel-api/generate-api-url';
import { fetchAndParse } from '@/modules/core/infrastructure/utils';
import { markFavoriteCharacters, mapApiResponseToCharacter } from '../utils';

export async function getById(id: number) {
  const cachedCharacter = unstable_cache(async (id) => fetchGetById(id), ['character-by-id'], {
    revalidate: 60 * 60 * 24 * 3, // 3 days
    tags: [`character-by-id-${id}`],
  });

  const result = await cachedCharacter(id);
  const character = markFavoriteCharacters(result);

  return character[0];
}

const fetchGetById = async (id: number) => {
  const apiUrl = generateMarvelApiUrl(`characters/${id}`);
  const data = await fetchAndParse(apiUrl, { cache: 'no-store' });
  const results = mapApiResponseToCharacter(data.results);

  return results;
};
