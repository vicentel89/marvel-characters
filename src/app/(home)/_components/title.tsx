import classes from './title.module.css';

type TitleProps = {
  isFavoritesPage: boolean;
};

const Title = ({ isFavoritesPage }: TitleProps) => {
  const title = isFavoritesPage ? 'Favorites' : 'Marvel characters';
  const className = isFavoritesPage ? classes.favorites : 'sr-only';

  return <h1 className={className}>{title}</h1>;
};

export default Title;
