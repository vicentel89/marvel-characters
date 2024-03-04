import classes from './character-list.module.css';
import CharacterCard from './character-card';

const CharacterList = () => {
  return (
    <ul className={classes.container}>
      <li className={classes.item}>
        <CharacterCard />
      </li>
      <li className={classes.item}>
        <CharacterCard />
      </li>
      <li className={classes.item}>
        <CharacterCard />
      </li>
      <li className={classes.item}>
        <CharacterCard />
      </li>
      <li className={classes.item}>
        <CharacterCard />
      </li>{' '}
      <li className={classes.item}>
        <CharacterCard />
      </li>
      <li className={classes.item}>
        <CharacterCard />
      </li>
      <li className={classes.item}>
        <CharacterCard />
      </li>
      <li className={classes.item}>
        <CharacterCard />
      </li>
      <li className={classes.item}>
        <CharacterCard />
      </li>{' '}
      <li className={classes.item}>
        <CharacterCard />
      </li>
      <li className={classes.item}>
        <CharacterCard />
      </li>
      <li className={classes.item}>
        <CharacterCard />
      </li>
      <li className={classes.item}>
        <CharacterCard />
      </li>
      <li className={classes.item}>
        <CharacterCard />
      </li>
    </ul>
  );
};

export default CharacterList;
