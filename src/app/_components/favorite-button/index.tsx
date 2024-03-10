'use client';

import { useOptimistic, useTransition } from 'react';
import clsx from 'clsx';

import { Character } from '@/modules/characters/domain/character';
import { addFavorite } from '@/app/character/[id]/_actions/add-favorite';
import { removeFavorite } from '@/app/character/[id]/_actions/remove-favorite';
import IconButton from '../icon-button';
import HeartIcon from '../icons/heart';

type FavoriteButtonProps = {
  character: Character;
  isFavorite: boolean;
  classes?: {
    button?: string;
    icon?: string;
    iconActive?: string;
  };
};

const FavoriteButton = ({ character, isFavorite, classes }: FavoriteButtonProps) => {
  // Change favorite state
  const [isPending, startTransition] = useTransition();
  const [optimisticIsFavorite, setOptimisticIsFavorite] = useOptimistic<boolean, boolean>(
    isFavorite,
    (_currentState, optimisticValue) => optimisticValue
  );

  const handleClick = async () => {
    if (isFavorite) {
      await removeFavorite(character.id);
      startTransition(() => {
        setOptimisticIsFavorite(false);
      });
    } else {
      await addFavorite(character.id);
      startTransition(() => {
        setOptimisticIsFavorite(true);
      });
    }
  };

  // Setup
  const iconVariant = optimisticIsFavorite ? 'filled' : 'outlined';
  const activeClass = classes?.iconActive || '';
  const label = optimisticIsFavorite
    ? `Remove ${character.name} from favorites`
    : `Add ${character.name} to favorites`;

  return (
    <IconButton
      onClick={handleClick}
      disabled={isPending}
      className={classes?.button}
      icon={
        <HeartIcon
          title={label}
          titleId={`favorite-${character.id}`}
          variant={iconVariant}
          className={clsx(classes?.icon, {
            [activeClass]: classes?.iconActive && optimisticIsFavorite,
          })}
        />
      }
    />
  );
};

export default FavoriteButton;
