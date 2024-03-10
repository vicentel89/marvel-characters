import 'server-only';

import { CharacterRepository } from '../domain/character-repository';

export async function getAllCharacters(characterRepository: CharacterRepository) {
  const characters = await characterRepository.getAll();

  return characters;
}

export const preloadGetAllCharacters = (characterRepository: CharacterRepository) => {
  void getAllCharacters(characterRepository);
};
