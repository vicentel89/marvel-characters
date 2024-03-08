import Link from 'next/link';

import classes from './favorite-counter.module.css';
import HeartIcon from '../icons/heart';

const FavoriteCounter = () => {
  return (
    <Link href="/favorites" title="Favorite characters" className={classes.container}>
      <HeartIcon className={classes.icon} title="Favorite characters" />
      <span className={classes.counter} aria-hidden="true">
        0
      </span>
    </Link>
  );
};

export default FavoriteCounter;
