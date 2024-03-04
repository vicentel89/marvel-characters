import classes from './index.module.css';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <section className={classes.container}>{children}</section>;
};

export default Container;
