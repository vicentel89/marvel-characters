import clsx from 'clsx';

import classes from './container.module.css';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <section className={clsx(classes.container)}>{children}</section>;
};

export default Container;
