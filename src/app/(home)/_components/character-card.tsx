import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { Character } from '@/modules/characters/domain/character';
import { getFavoriteCharacters } from '@/app/character/[id]/_actions/utils';
import FavoriteButton from '@/app/_components/favorite-button';
import classes from './character-card.module.css';

type CharacterCardProps = {
  character: Character;
};

const CharacterCard = ({ character }: CharacterCardProps) => {
  const ariaLabelId = `character-name-${character.id}`;
  const isFallbackImage = character.image.includes('image_not_available');

  const favoriteCharacters = getFavoriteCharacters();
  const isFavorite = favoriteCharacters.some((favorite) => favorite === character.id);

  return (
    <div className={classes.container}>
      <Link href={`/character/${character.id}`} className={classes.imageWrapper}>
        <Image
          src={character.image}
          fill
          sizes="(max-width: 480px) 50vw, (max-width: 768px) 25vw, 15vw"
          className={clsx(classes.image, { [classes.fallbackImage]: isFallbackImage })}
          alt=""
          aria-labelledby={ariaLabelId}
        />
      </Link>
      <div className={classes.info}>
        <div className={classes.nameWrapper}>
          <h2 id={ariaLabelId} className={classes.name}>
            {character.name}
          </h2>
          <FavoriteButton
            character={character}
            isFavorite={isFavorite}
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
