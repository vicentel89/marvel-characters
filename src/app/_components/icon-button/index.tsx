import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

import classes from './index.module.css';

type IconButtonProps = {
  icon: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton = ({ icon, className, ...buttonProps }: IconButtonProps) => {
  return (
    <button {...buttonProps} className={clsx(classes.wrapper, className)}>
      {icon}
    </button>
  );
};

export default IconButton;
