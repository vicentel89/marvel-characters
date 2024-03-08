import { config, getCharacters } from '@/modules/characters/application';
import Container from './_components/container';
import CharacterList from './_components/character-list';
import Search from './_components/search';

export default async function Home() {
  const characters = await getCharacters(config.characterRepository);

  return (
    <Container>
      <Search />
      <CharacterList characters={characters} />
    </Container>
  );
}
