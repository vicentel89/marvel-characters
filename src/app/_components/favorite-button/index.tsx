import clsx from 'clsx';

import IconButton from '../icon-button';
import HeartIcon from '../icons/heart';

type FavoriteButtonProps = {
  isActive?: boolean;
  classes?: {
    button?: string;
    icon?: string;
    iconActive?: string;
  };
};

const FavoriteButton = ({ isActive, classes }: FavoriteButtonProps) => {
  const iconVariant = isActive ? 'filled' : 'outlined';
  const activeClass = classes?.iconActive || '';

  return (
    <IconButton
      className={classes?.button}
      icon={
        <HeartIcon
          className={clsx(classes?.icon, { [activeClass]: classes?.iconActive && isActive })}
          variant={iconVariant}
        />
      }
      aria-label={isActive ? 'Remove from favorites' : 'Add to favorites'}
    />
  );
};

export default FavoriteButton;
