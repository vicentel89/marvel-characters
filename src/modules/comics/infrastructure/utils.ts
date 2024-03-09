import { Comic } from '../domain/comic';
import { ComicApiResponse } from './comic-api-response';

export function mapApiResponseToComic(comicApiResponse: ComicApiResponse[]): Comic[] {
  return comicApiResponse.map((comic: ComicApiResponse) => {
    const onSaleDate = comic.dates.find((date) => date.type === 'onsaleDate');
    const year = Number(onSaleDate?.date.split('-')[0]) ?? 0;

    return {
      id: comic.id,
      title: comic.title,
      year,
      image: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
    };
  });
}
