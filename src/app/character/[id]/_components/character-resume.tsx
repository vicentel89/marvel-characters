/* eslint-disable @next/next/no-img-element */
import classes from './character-resume.module.css';
import FavoriteButton from '@/app/_components/favorite-button';

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
            <FavoriteButton
              isActive
              classes={{
                button: classes.favoriteButton,
                icon: classes.icon,
                iconActive: classes.iconActive,
              }}
            />
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

export default CharacterResume;
