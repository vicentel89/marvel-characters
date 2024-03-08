import { CharacterRepository } from '../domain/character-repository';

export async function getCharacters(characterRepository: CharacterRepository) {
  const data = await characterRepository.getAll();

  return data;
}
