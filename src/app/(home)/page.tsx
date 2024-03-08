import Container from './_components/container';
import CharacterList from './_components/character-list';
import Search from './_components/search';

export default async function Home() {
  return (
    <Container>
      <h1 className="sr-only">Marvel characters</h1>
      <Search />
      <CharacterList />
    </Container>
  );
}
