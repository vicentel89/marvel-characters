import { SearchParams } from '@/modules/core/domain/search-params';
import { BaseEndpointParams } from '@/modules/core/infrastructure/marvel-api/endpoint-params';
import { generateMarvelApiUrl } from '@/modules/core/infrastructure/marvel-api/generate-api-url';
import { fetchAndParse } from '@/modules/core/infrastructure/utils';
import { mapApiResponseToCharacter, markFavoriteCharacters } from '../utils';

interface CharacterEndpointParams extends BaseEndpointParams {
  nameStartsWith?: string;
}

export async function searchMany({ search, ...searchParams }: SearchParams) {
  const params: CharacterEndpointParams = { limit: 50, ...searchParams };
  if (search) params.nameStartsWith = search;

  const apiUrl = generateMarvelApiUrl('characters', params);
  const data = await fetchAndParse(apiUrl, { cache: 'no-store' });
  const mappedCharacters = mapApiResponseToCharacter(data.results);
  const characters = markFavoriteCharacters(mappedCharacters);

  return characters;
}
