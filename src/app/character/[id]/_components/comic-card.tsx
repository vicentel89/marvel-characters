import Image from 'next/image';

import { Comic } from '@/modules/comics/domain/comic';
import classes from './comic-card.module.css';

type ComicCardProps = {
  comic: Comic;
};

const ComicCard = ({ comic }: ComicCardProps) => {
  const ariaLabelId = `comic-name-${comic.id}`;

  return (
    <div className={classes.container}>
      <div className={classes.imageWrapper}>
        <Image
          src={comic.image}
          fill
          sizes="(max-width: 480px) 50vw, (max-width: 768px) 25vw, 20vw"
          className={classes.image}
          alt=""
          aria-labelledby={ariaLabelId}
        />
      </div>
      <div className={classes.info}>
        <h2 className={classes.title} id={ariaLabelId}>
          {comic.title}
        </h2>
        <span className={classes.year}>{comic.year}</span>
      </div>
    </div>
  );
};

export default ComicCard;
