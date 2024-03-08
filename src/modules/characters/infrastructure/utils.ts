import { Character } from '../domain/character';
import { CharacterApiResponse } from './character-api-response';

export function mapApiResponseToCharacter(
  characterApiResponse: CharacterApiResponse[]
): Character[] {
  return characterApiResponse.map((character: CharacterApiResponse) => ({
    id: character.id,
    name: character.name,
    description: character.description,
    image: `${character.thumbnail.path}.${character.thumbnail.extension}`,
  }));
}
