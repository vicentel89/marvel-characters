'use client';

import { useOptimistic } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { Character } from '@/modules/characters/domain/character';
import FavoriteButton from '@/app/_components/favorite-button';
import classes from './character-card.module.css';
import { useParams } from 'next/navigation';

type CharacterCardProps = {
  character: Character;
};

const CharacterCard = ({ character }: CharacterCardProps) => {
  const ariaLabelId = `character-name-${character.id}`;
  const isFallbackImage = character.image.includes('image_not_available');

  // If it is in favorites page and it is removed from favorites, hide the card
  const params = useParams<{ slug?: string[] }>();
  const isFavoritesPage = params?.slug?.[0] === 'favorites-legacy';

  const [mustDisplay, setMustDisplay] = useOptimistic<boolean, boolean>(
    true,
    (_currentState, optimisticValue) => optimisticValue
  );

  if (isFavoritesPage && !mustDisplay) return null;

  return (
    <li className={classes.container} data-test="character-card">
      <Link
        href={`/character/${character.id}`}
        className={classes.imageWrapper}
        data-test="character-card-link"
      >
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
          <h3 id={ariaLabelId} className={classes.name} data-test="character-card-name">
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
