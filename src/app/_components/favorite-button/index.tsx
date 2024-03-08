import clsx from 'clsx';

import { Character } from '@/modules/characters/domain/character';
import IconButton from '../icon-button';
import HeartIcon from '../icons/heart';

type FavoriteButtonProps = {
  character: Character;
  isActive?: boolean;
  classes?: {
    button?: string;
    icon?: string;
    iconActive?: string;
  };
};

const FavoriteButton = ({ character, isActive, classes }: FavoriteButtonProps) => {
  const iconVariant = isActive ? 'filled' : 'outlined';
  const activeClass = classes?.iconActive || '';

  return (
    <IconButton
      className={classes?.button}
      icon={
        <HeartIcon
          title={character.name}
          variant={iconVariant}
          className={clsx(classes?.icon, { [activeClass]: classes?.iconActive && isActive })}
        />
      }
      aria-label={
        isActive ? `Remove ${character.name} from favorites` : `Add ${character.name} to favorites`
      }
    />
  );
};

export default FavoriteButton;
