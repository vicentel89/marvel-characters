import { Character } from '@/modules/characters/domain/character';
import classes from './character-list.module.css';
import CharacterCard from './character-card';

type CharacterListProps = {
  characters: Character[];
};

const CharacterList = ({ characters }: CharacterListProps) => {
  return (
    <section>
      <h2 className="sr-only">Found characters</h2>
      <ul className={classes.container}>
        {characters.map((character) => (
          <li key={character.id} className={classes.item}>
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CharacterList;
