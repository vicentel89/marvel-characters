/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';

import IconButton from '@/app/_components/icon-button';
import HeartIcon from '@/app/_components/icons/heart';
import classes from './character-resume.module.css';

const CharacterResume = () => {
  return (
    <section className={classes.container}>
      <div className={classes.content}>
        <img
          src={'https://cdn.marvel.com/content/1x/002irm_ons_crd_03.jpg'}
          alt=""
          className={classes.image}
        />
        <div className={classes.info}>
          <div className={classes.nameContainer}>
            <h1 className={classes.name}>Name</h1>
            <FavoriteButton />
          </div>
          <p className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, sapien nec
            gravida elementum, eros ante fermentum nunc, vitae luctus libero nunc nec justo. Nullam
            at est nec nunc ullamcorper luctus. Nulla facilisi. Nulla facilisi. Nulla facilisi.
          </p>
        </div>
      </div>
    </section>
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

export default CharacterResume;
