import classes from './comics.module.css';
import ComicCard from './comic-card';

const Comics = () => {
  return (
    <section className={classes.container}>
      <h1 className={classes.title}>Comics</h1>
      <ul className={classes.list}>
        <li className={classes.item}>
          <ComicCard />
        </li>
        <li className={classes.item}>
          <ComicCard />
        </li>
        <li className={classes.item}>
          <ComicCard />
        </li>
        <li className={classes.item}>
          <ComicCard />
        </li>
        <li className={classes.item}>
          <ComicCard />
        </li>
        <li className={classes.item}>
          <ComicCard />
        </li>
        <li className={classes.item}>
          <ComicCard />
        </li>
        <li className={classes.item}>
          <ComicCard />
        </li>
        <li className={classes.item}>
          <ComicCard />
        </li>
        <li className={classes.item}>
          <ComicCard />
        </li>
      </ul>
    </section>
  );
};

export default Comics;
