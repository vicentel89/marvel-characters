import { ComicRepository } from '../domain/comic-repository';
import { getByCharacterId } from './methods';

export function createComicApiRepository(): ComicRepository {
  return {
    getByCharacterId,
  };
}
