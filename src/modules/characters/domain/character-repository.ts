import { SearchParams } from '@/modules/core/domain/search-params';
import { Character } from './character';

export interface CharacterRepository {
  searchMany(searchParams?: SearchParams): Promise<Character[]>;
  getById(id: number): Promise<Character>;
  getAll(): Promise<Character[]>;
}
