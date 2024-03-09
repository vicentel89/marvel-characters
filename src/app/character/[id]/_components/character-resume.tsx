import Image from 'next/image';
import clsx from 'clsx';

import { Character } from '@/modules/characters/domain/character';
import FavoriteButton from '@/app/_components/favorite-button';
import classes from './character-resume.module.css';

type CharacterResumeProps = {
  character: Character;
};

const CharacterResume = ({ character }: CharacterResumeProps) => {
  const ariaLabelId = `character-name-${character.id}`;
  const isFallbackImage = character.image.includes('image_not_available');

  return (
    <section className={classes.container}>
      <div className={classes.content}>
        <div className={classes.imageWrapper}>
          <Image
            src={character.image}
            fill
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 278px, 320px"
            className={clsx(classes.image, { [classes.fallbackImage]: isFallbackImage })}
            alt=""
            aria-labelledby={ariaLabelId}
          />
        </div>
        <div className={classes.info}>
          <div className={classes.nameContainer}>
            <h1 id={ariaLabelId} className={classes.name}>
              {character.name}
            </h1>
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
          <p className={classes.description}>
            {character.description || 'No description available'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CharacterResume;
