import { generateMarvelApiUrl } from '@/modules/core/infrastructure/marvel-api/generate-api-url';
import { SearchParams } from '@/modules/core/domain/search-params';
import { BaseEndpointParams } from '@/modules/core/infrastructure/marvel-api/endpoint-params';
import { CharacterRepository } from '../domain/character-repository';
import { mapApiResponseToCharacter } from './utils';

export function createCharacterApiRepository(): CharacterRepository {
  return {
    getAll,
    getById,
  };
}

interface CharacterEndpointParams extends BaseEndpointParams {
  nameStartsWith?: string;
}

async function getAll({ searchQuery, ...searchParams }: SearchParams) {
  const params: CharacterEndpointParams = { limit: 50, ...searchParams };
  if (searchQuery) params.nameStartsWith = searchQuery;

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
