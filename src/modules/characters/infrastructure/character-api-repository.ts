import { generateMarvelApiUrl } from '@/modules/core/infrastructure/marvel-api/generate-api-url';
import { SearchParams } from '@/modules/core/domain/search-params';
import { BaseEndpointParams } from '@/modules/core/infrastructure/marvel-api/endpoint-params';
import { CharacterRepository } from '../domain/character-repository';
import { mapApiResponseToCharacter } from './utils';
import { CharacterApiResponse } from './character-api-response';

export function createCharacterApiRepository(): CharacterRepository {
  return {
    searchMany,
    getById,
    getAll,
  };
}

interface CharacterEndpointParams extends BaseEndpointParams {
  nameStartsWith?: string;
}

async function searchMany({ search, ...searchParams }: SearchParams) {
  const params: CharacterEndpointParams = { limit: 50, ...searchParams };
  if (search) params.nameStartsWith = search;

  const apiUrl = generateMarvelApiUrl('characters', params);
  const res = await fetch(apiUrl);
  const { data } = await res.json();

  const characters = mapApiResponseToCharacter(data.results);

  return characters;
}

async function getById(id: number) {
  const apiUrl = generateMarvelApiUrl(`characters/${id}`);
  const res = await fetch(apiUrl);
  const { data } = await res.json();

  const character = mapApiResponseToCharacter(data.results);

  return character[0];
}

async function getAll() {
  const charactersResponse = await getMany();

  const allCharacters = mapApiResponseToCharacter(charactersResponse);

  return allCharacters;
}

async function getMany(
  offset: number = 0,
  characterApiResponse?: { total: number; results: CharacterApiResponse[] }
) {
  // As the maximum number of characters per request is 100, we need to make multiple requests
  const limit = 100;
  const apiUrl = generateMarvelApiUrl('characters', { offset, limit });

  // The response will be cached for 24 hours
  const revalidate = 60 * 60 * 24;
  const res = await fetch(apiUrl, { next: { revalidate } });
  const { data } = await res.json();

  const accumulatedResults = {
    total: data.total,
    results: characterApiResponse
      ? [...characterApiResponse.results, ...data.results]
      : data.results,
  };

  if (accumulatedResults.results.length < data.total) {
    return getMany(offset + limit, accumulatedResults);
  }

  return accumulatedResults.results;
}
