import { cookies } from 'next/headers';

export const getFavoriteCharacters = () => {
  const favoriteCharactersCookie = cookies().get('favoriteCharacters')?.value;
  const favoriteCharacters = JSON.parse(favoriteCharactersCookie || '[]');

  return favoriteCharacters as number[];
};
