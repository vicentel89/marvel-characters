import { CharacterRepository } from '../domain/character-repository';
import { createCharacterApiRepository } from '../infrastructure/character-api-repository';

interface Config {
  characterRepository: CharacterRepository;
}

export const config: Config = {
  characterRepository: createCharacterApiRepository(),
};
