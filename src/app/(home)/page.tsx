import Container from './_components/container';
import CharacterList from './_components/character-list';
import Search from './_components/search';

export default function Home() {
  return (
    <Container>
      <Search />
      <CharacterList />
    </Container>
  );
}
