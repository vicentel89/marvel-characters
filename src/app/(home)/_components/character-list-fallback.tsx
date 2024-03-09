import Loader from '@/app/_components/loader';
import classes from './character-list-fallback.module.css';

const CharacterListFallback = () => {
  return (
    <div className={classes.container}>
      <Loader />
    </div>
  );
};

export default CharacterListFallback;
