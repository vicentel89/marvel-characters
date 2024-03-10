import clsx from 'clsx';

import classes from './container.module.css';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className={clsx(classes.container)}>
      <h1 className="sr-only">Marvel characters</h1>
      {children}
    </div>
  );
};

export default Container;
