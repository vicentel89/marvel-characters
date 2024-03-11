import { config, getAllCharacters } from '@/modules/characters/application';
import { SearchParams } from '@/modules/core/domain/search-params';
import CharacterList from '../_components/character-list';
import Container from '../_components/container';
import Counter from '../_components/counter';
import Search from '../_components/search';
import classes from './page.module.css';

export default async function Favorites({
  searchParams: { search },
}: {
  searchParams: SearchParams;
}) {
  const allCharacters = await getAllCharacters(config.characterRepository);

  const favoriteCharacters = allCharacters.filter((character) => {
    if (!character.isFavorite) return false;

    if (search) {
      return character.name.toLowerCase().includes(search.toLowerCase());
    }

    return true;
  });

  return (
    <Container>
      <h1 className={classes.title}>Favorites</h1>
      <Search>
        <Counter count={favoriteCharacters.length} />
      </Search>
      <CharacterList characters={favoriteCharacters} />
    </Container>
  );
}
