import { config, searchCharacters } from '@/modules/characters/application';
import { SearchParams } from '@/modules/core/domain/search-params';
import CharacterList from './_components/character-list';
import Search from './_components/search';
import Counter from './_components/counter';
import Container from './_components/container';

export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  const characters = await searchCharacters(config.characterRepository, {
    searchParams: searchParams.search ? searchParams : {},
  });

  return (
    <Container>
      <h1 className="sr-only">Marvel characters</h1>
      <Search>
        <Counter count={characters.length} />
      </Search>
      <CharacterList characters={characters} />
    </Container>
  );
}
