import { unstable_cache } from 'next/cache';

import { SearchParams } from '@/modules/core/domain/search-params';
import { BaseEndpointParams } from '@/modules/core/infrastructure/marvel-api/endpoint-params';
import { generateMarvelApiUrl } from '@/modules/core/infrastructure/marvel-api/generate-api-url';
import { fetchAndParse } from '@/modules/core/infrastructure/utils';
import { mapApiResponseToCharacter, markFavoriteCharacters } from '../utils';

interface CharacterEndpointParams extends BaseEndpointParams {
  nameStartsWith?: string;
}

export async function searchMany(searchParams: SearchParams) {
  const cachedCharacters = unstable_cache(
    async (searchParams) => fetchSearchMany(searchParams),
    ['search-characters'],
    {
      revalidate: 60 * 60 * 24 * 3, // 3 days
      tags: ['search-characters'],
    }
  );

  const result = await cachedCharacters(searchParams);
  const allCharacters = markFavoriteCharacters(result);

  return allCharacters;
}

export async function fetchSearchMany({ search, ...searchParams }: SearchParams) {
  const params: CharacterEndpointParams = { limit: 50, ...searchParams };
  if (search) params.nameStartsWith = search;

  const apiUrl = generateMarvelApiUrl('characters', params);
  const data = await fetchAndParse(apiUrl);
  const mappedCharacters = mapApiResponseToCharacter(data.results);
  const characters = markFavoriteCharacters(mappedCharacters);

  return characters;
}
