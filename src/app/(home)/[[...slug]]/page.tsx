import { redirect } from 'next/navigation';

import { config, getCharacters } from '@/modules/characters/application';
import { SearchParams } from '@/modules/core/domain/search-params';
import CharacterList from '../_components/character-list';
import Search from '../_components/search';
import Counter from '../_components/counter';
import Container from '../_components/container';
import Title from '../_components/title';

export default async function Home({
  params: { slug },
  searchParams,
}: {
  params: { slug?: string[] };
  searchParams: SearchParams;
}) {
  // Redirect to home if has invalid slug
  if (!!slug && slug[0] !== 'favorites') redirect('/');

  // Get characters
  let characters = await getCharacters(config.characterRepository, {
    searchParams: searchParams.searchQuery ? searchParams : {},
  });

  // Filter non-favorite characters
  const isFavoritesPage = slug?.[0] === 'favorites';

  if (isFavoritesPage) {
    characters = characters.filter((character) => character.isFavorite);
  }

  return (
    <Container>
      <Title isFavoritesPage={isFavoritesPage} />
      <Search>
        <Counter count={characters.length} />
      </Search>
      <CharacterList characters={characters} />
    </Container>
  );
}
