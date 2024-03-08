import { generateMarvelApiUrl } from '@/modules/core/infrastructure/marvel-api/generate-api-url';
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
  const apiUrl = generateMarvelApiUrl('characters', { limit: 50 });
  const res = await fetch(apiUrl);
  const { data } = await res.json();
  const characters = mapApiResponseToCharacter(data.results);

  return characters;
}

async function getById(id: number) {
  const apiUrl = generateMarvelApiUrl(`characters/${id}`);
  const res = await fetch(apiUrl);
  const { data } = await res.json();

  return data as Character;
}
