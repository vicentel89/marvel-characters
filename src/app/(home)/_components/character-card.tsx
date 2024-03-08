/* eslint-disable @next/next/no-img-element */
import { Character } from '@/modules/characters/domain/character';
import FavoriteButton from '@/app/_components/favorite-button';
import classes from './character-card.module.css';

type CharacterCardProps = {
  character: Character;
};

const CharacterCard = async ({ character }: CharacterCardProps) => {
  return (
    <div className={classes.container}>
      <img src={character.image} alt="" className={classes.image} />
      <div className={classes.info}>
        <div className={classes.nameWrapper}>
          <h2 className={classes.name}>{character.name}</h2>
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
    </div>
  );
};

export default CharacterCard;
