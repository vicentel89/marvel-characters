import Link from 'next/link';

import classes from './favorite-counter.module.css';
import HeartIcon from '../icons/heart';

const FavoriteCounter = () => {
  return (
    <Link href="/" className={classes.container}>
      <HeartIcon className={classes.icon} />
      <span className={classes.counter}>0</span>
    </Link>
  );
};

export default FavoriteCounter;
