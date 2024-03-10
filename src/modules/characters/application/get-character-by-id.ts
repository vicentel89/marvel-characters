import 'server-only';

import { CharacterRepository } from '../domain/character-repository';

export async function getCharacterById(characterRepository: CharacterRepository, id: number) {
  const character = await characterRepository.getById(id);

  return character;
}
