/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';

import IconButton from '@/app/_components/icon-button';
import HeartIcon from '@/app/_components/icons/heart';
import classes from './character-card.module.css';

const CharacterCard = () => {
  return (
    <div className={classes.container}>
      <img
        src={'https://cdn.marvel.com/content/1x/002irm_ons_crd_03.jpg'}
        alt=""
        className={classes.image}
      />
      <div className={classes.info}>
        <h2 className={classes.name}>Name</h2>
        <FavoriteButton isActive />
      </div>
    </div>
  );
};

const FavoriteButton = ({ isActive }: { isActive?: boolean }) => {
  const iconVariant = isActive ? 'filled' : 'outlined';

  return (
    <IconButton
      className={classes.favoriteButton}
      icon={
        <HeartIcon
          className={clsx(classes.icon, { [classes.iconActive]: isActive })}
          variant={iconVariant}
        />
      }
      aria-label="Add to favorites"
    />
  );
};

export default CharacterCard;
