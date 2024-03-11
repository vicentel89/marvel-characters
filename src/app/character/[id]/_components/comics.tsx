import { Suspense } from 'react';

import { getComicsByCharacterId, config } from '@/modules/comics/application';
import classes from './comics.module.css';
import ComicCard from './comic-card';

type ComicsProps = {
  characterId: number;
};

const Comics = ({ characterId }: ComicsProps) => {
  return (
    <section className={classes.container} data-test="comics-section">
      <h2 className={classes.title}>Comics</h2>
      <Suspense fallback={<Loading />}>
        <ComicList characterId={characterId} />
      </Suspense>
    </section>
  );
};

const ComicList = async ({ characterId }: ComicsProps) => {
  const comics = await getComicsByCharacterId(config.comicRepository, +characterId);

  return (
    <>
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
    </>
  );
};

const Loading = () => (
  <div className={classes.loadingSkeleton}>
    <div>
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={`comic-loading-${index}`} />
      ))}
    </div>
  </div>
);

export default Comics;
