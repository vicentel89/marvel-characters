'use server';

import { cookies } from 'next/headers';

export async function removeFavorite(characterId: number) {
  const favoriteCharactersCookie = cookies().get('favoriteCharacters')?.value;
  const favoriteCharacters = JSON.parse(favoriteCharactersCookie || '[]');

  const newFavoriteCharacters = favoriteCharacters.filter((id: number) => id !== characterId);
  cookies().set('favoriteCharacters', JSON.stringify(newFavoriteCharacters));
}
