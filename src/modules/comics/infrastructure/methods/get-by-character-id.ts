import { unstable_cache } from 'next/cache';

import { BaseEndpointParams } from '@/modules/core/infrastructure/marvel-api/endpoint-params';
import { generateMarvelApiUrl } from '@/modules/core/infrastructure/marvel-api/generate-api-url';
import { fetchAndParse } from '@/modules/core/infrastructure/utils';
import { mapApiResponseToComic } from '../utils';

export async function getByCharacterId(characterId: number) {
  const cachedComics = unstable_cache(
    async (id) => fetchGetByCharacterId(id),
    ['comics-by-character'],
    {
      revalidate: 60 * 60 * 24 * 1, // 1 day
      tags: [`comics-by-character-${characterId}`],
    }
  );

  const comics = await cachedComics(characterId);

  return comics;
}

async function fetchGetByCharacterId(characterId: number) {
  const params: BaseEndpointParams = { limit: 20 };

  const apiUrl = generateMarvelApiUrl(`characters/${characterId}/comics`, params);
  const data = await fetchAndParse(apiUrl, { cache: 'no-store' });

  const comics = mapApiResponseToComic(data.results);

  return comics;
}
