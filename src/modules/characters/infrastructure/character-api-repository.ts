import { CharacterRepository } from '../domain/character-repository';
import { searchMany, getAll, getById } from './methods';

export function createCharacterApiRepository(): CharacterRepository {
  return {
    searchMany,
    getAll,
    getById,
  };
}
