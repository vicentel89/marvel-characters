import { generateMarvelApiUrl } from '@/modules/core/infrastructure/marvel-api/generate-api-url';
import { checkFetchResponse } from '@/modules/core/infrastructure/utils';
import { CharacterRepository } from '../domain/character-repository';
import { Character } from '../domain/character';
import { mapApiResponseToCharacter } from './utils';

export function createCharacterApiRepository(): CharacterRepository {
  return {
    getAll,
    getById,
  };
}

async function getAll() {
  const apiUrl = generateMarvelApiUrl('characters');
  const res = await fetch(apiUrl);
  const { data } = await checkFetchResponse(res);
  const characters = mapApiResponseToCharacter(data.results);

  return characters;
}

async function getById(id: number) {
  const apiUrl = generateMarvelApiUrl(`characters/${id}`);
  const res = await fetch(apiUrl);
  const { data } = await checkFetchResponse(res);

  return data as Character;
}
