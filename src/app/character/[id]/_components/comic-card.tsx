import Image from 'next/image';

import { Comic } from '@/modules/comics/domain/comic';
import classes from './comic-card.module.css';

type ComicCardProps = {
  comic: Comic;
};

const ComicCard = ({ comic }: ComicCardProps) => {
  return (
    <div className={classes.container}>
      <div className={classes.imageWrapper}>
        <Image
          src={comic.image}
          fill
          sizes="(max-width: 480px) 50vw, (max-width: 768px) 25vw, 20vw"
          className={classes.image}
          alt=""
        />
      </div>
      <div className={classes.info}>
        <h3 className={classes.title}>{comic.title}</h3>
        <span className={classes.year}>{comic.year}</span>
      </div>
    </div>
  );
};

export default ComicCard;
