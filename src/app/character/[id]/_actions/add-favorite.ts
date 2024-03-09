'use server';

import { cookies } from 'next/headers';

import { getFavoriteCharacters } from './utils';

export async function addFavorite(characterId: number) {
  const favoriteCharacters = getFavoriteCharacters();

  if (favoriteCharacters.includes(characterId)) return;

  favoriteCharacters.push(characterId);
  cookies().set('favoriteCharacters', JSON.stringify(favoriteCharacters));
}
