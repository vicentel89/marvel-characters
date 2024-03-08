import { config, getCharacters } from '@/modules/characters/application';
import classes from './character-list.module.css';
import CharacterCard from './character-card';

const CharacterList = async () => {
  const characters = await getCharacters(config.characterRepository);

  return (
    <ul className={classes.container}>
      {characters.map((character) => (
        <li key={character.id} className={classes.item}>
          <CharacterCard character={character} />
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;
