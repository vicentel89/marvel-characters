import classes from './comics.module.css';
import ComicCard from './comic-card';
import { Comic } from '@/modules/comics/domain/comic';

type ComicsProps = {
  comics: Comic[];
};

const Comics = ({ comics }: ComicsProps) => {
  return (
    <section className={classes.container}>
      <h1 className={classes.title}>Comics</h1>
      {!!comics[0] && (
        <ul className={classes.list}>
          {comics.map((comic) => (
            <li key={comic.id} className={classes.item}>
              <ComicCard comic={comic} />
            </li>
          ))}
        </ul>
      )}

      {!comics[0] && <span>No comics found</span>}
    </section>
  );
};

export default Comics;
