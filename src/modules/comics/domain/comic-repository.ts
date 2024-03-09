import { Comic } from './comic';

export interface ComicRepository {
  getByCharacterId(characterId: number): Promise<Comic[]>;
}
