import Link from 'next/link';

import { getFavoriteCharacters } from '@/app/character/[id]/_actions/utils';
import classes from './favorite-counter.module.css';
import HeartIcon from '../icons/heart';

const FavoriteCounter = () => {
  const favoriteCharacters = getFavoriteCharacters();

  return (
    <Link href="/favorites" title="Favorite characters" className={classes.container}>
      <HeartIcon
        className={classes.icon}
        title="Favorite characters"
        titleId="favorite-characters"
      />
      <span className={classes.counter} aria-hidden="true">
        {favoriteCharacters.length}
      </span>
    </Link>
  );
};

export default FavoriteCounter;
