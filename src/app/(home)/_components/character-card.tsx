/* eslint-disable @next/next/no-img-element */
import classes from './character-card.module.css';
import FavoriteButton from '@/app/_components/favorite-button';

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
        <FavoriteButton
          isActive
          classes={{
            button: classes.favoriteButton,
            icon: classes.icon,
            iconActive: classes.iconActive,
          }}
        />
      </div>
    </div>
  );
};

export default CharacterCard;
