import { ComicRepository } from '../domain/comic-repository';
import { createComicApiRepository } from '../infrastructure/comic-api-repository';

interface Config {
  comicRepository: ComicRepository;
}

export const config: Config = {
  comicRepository: createComicApiRepository(),
};
