import 'server-only';

import { CharacterRepository } from '../domain/character-repository';

export async function getCharacterById(characterRepository: CharacterRepository, id: number) {
  const data = await characterRepository.getById(id);

  return data;
}
