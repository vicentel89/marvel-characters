import classes from './character-list.module.css';
import CharacterCard from './character-card';
import { Character } from '@/modules/characters/domain/character';

type CharacterListProps = {
  characters: Character[];
};

const CharacterList = async ({ characters }: CharacterListProps) => {
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
