import clsx from 'clsx';

import classes from './container.module.css';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className={clsx(classes.container)}>{children}</div>;
};

export default Container;
