import { Suspense } from 'react';

import { config, getCharacters } from '@/modules/characters/application';
import { SearchParams } from '@/modules/core/domain/search-params';
import Container from './_components/container';
import CharacterList from './_components/character-list';
import Search from './_components/search';
import Counter from './_components/counter';
import CharacterListFallback from './_components/character-list-fallback';

export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  const characters = await getCharacters(config.characterRepository, {
    searchParams: searchParams.searchQuery ? searchParams : {},
  });

  return (
    <Container>
      <h1 className="sr-only">Marvel characters</h1>
      <Search>
        <Counter count={characters.length} />
      </Search>
      <Suspense key={`characters-${searchParams.searchQuery}`} fallback={<CharacterListFallback />}>
        <CharacterList characters={characters} />
      </Suspense>
    </Container>
  );
}
