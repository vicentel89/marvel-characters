import Image from 'next/image';
import clsx from 'clsx';

import { Character } from '@/modules/characters/domain/character';
import FavoriteButton from '@/app/_components/favorite-button';
import classes from './character-card.module.css';

type CharacterCardProps = {
  character: Character;
};

const CharacterCard = async ({ character }: CharacterCardProps) => {
  const ariaLabelId = `character-name-${character.id}`;
  const isFallbackImage = character.image.includes('image_not_available');

  return (
    <div className={classes.container}>
      <div className={classes.imageWrapper}>
        <Image
          src={character.image}
          fill
          sizes="(max-width: 480px) 50vw, (max-width: 768px) 25vw, 15vw"
          className={clsx(classes.image, { [classes.fallbackImage]: isFallbackImage })}
          alt=""
          aria-labelledby={ariaLabelId}
        />
      </div>
      <div className={classes.info}>
        <div className={classes.nameWrapper}>
          <h2 id={ariaLabelId} className={classes.name}>
            {character.name}
          </h2>
          <FavoriteButton
            character={character}
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
