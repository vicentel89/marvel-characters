'use client';

import { useOptimistic } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { Character } from '@/modules/characters/domain/character';
import FavoriteButton from '@/app/_components/favorite-button';
import classes from './character-card.module.css';

type CharacterCardProps = {
  character: Character;
};

const CharacterCard = ({ character }: CharacterCardProps) => {
  const ariaLabelId = `character-name-${character.id}`;
  const isFallbackImage = character.image.includes('image_not_available');

  const [mustDisplay, setMustDisplay] = useOptimistic<boolean, boolean>(
    true,
    (_currentState, optimisticValue) => optimisticValue
  );

  if (!mustDisplay) return null;

  return (
    <li className={classes.container}>
      <Link href={`/character/${character.id}`} className={classes.imageWrapper}>
        <Image
          src={character.image}
          fill
          priority
          sizes="(max-width: 480px) 50vw, (max-width: 768px) 25vw, 15vw"
          className={clsx(classes.image, { [classes.fallbackImage]: isFallbackImage })}
          alt=""
          aria-labelledby={ariaLabelId}
        />
      </Link>
      <div className={classes.info}>
        <div className={classes.nameWrapper}>
          <h3 id={ariaLabelId} className={classes.name}>
            {character.name}
          </h3>
          <FavoriteButton
            character={character}
            onOptimisticChange={setMustDisplay}
            classes={{
              button: classes.favoriteButton,
              icon: classes.icon,
              iconActive: classes.iconActive,
            }}
          />
        </div>
      </div>
    </li>
  );
};

export default CharacterCard;
