import { cookies } from 'next/headers';

import { Character } from '../domain/character';
import { CharacterApiResponse } from './character-api-response';

export function mapApiResponseToCharacter(
  characterApiResponse: CharacterApiResponse[]
): Character[] {
  const favoriteCharactersCookie = cookies().get('favoriteCharacters')?.value;
  const favoriteCharacters: number[] = JSON.parse(favoriteCharactersCookie || '[]');

  return characterApiResponse.map((character: CharacterApiResponse) => ({
    id: character.id,
    name: character.name,
    description: character.description,
    image: `${character.thumbnail.path}.${character.thumbnail.extension}`,
    isFavorite: favoriteCharacters.includes(character.id),
  }));
}
