/* eslint-disable @next/next/no-img-element */
import classes from './comic-card.module.css';

const ComicCard = () => {
  return (
    <div className={classes.container}>
      <img
        src="https://cdn.marvel.com/u/prod/marvel/i/mg/6/10/6554ef0de2312/detail.jpg"
        alt="Comic title"
        className={classes.image}
      />
      <div>
        <h2 className={classes.title}>
          Comic title: Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
          consectetur. Lorem ipsum dolor sit amet consectetur.
        </h2>
        <span className={classes.year}>Year</span>
      </div>
    </div>
  );
};

export default ComicCard;
