import { getFavoriteCharacters } from '@/app/character/[id]/_actions/utils';
import classes from './favorite-counter.module.css';
import HeartIcon from '../icons/heart';

const FavoriteCounter = () => {
  const favoriteCharacters = getFavoriteCharacters();

  return (
    <div className={classes.container}>
      <HeartIcon
        className={classes.icon}
        title="Favorite characters"
        titleId="favorite-characters"
      />
      <span className={classes.counter} aria-hidden="true">
        {favoriteCharacters.length}
      </span>
    </div>
  );
};

export default FavoriteCounter;
