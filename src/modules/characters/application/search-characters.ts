import 'server-only';

import { SearchParams } from '@/modules/core/domain/search-params';
import { CharacterRepository } from '../domain/character-repository';

interface searchCharactersOptions {
  searchParams: SearchParams;
}

export async function searchCharacters(
  characterRepository: CharacterRepository,
  options?: searchCharactersOptions
) {
  const characters = await characterRepository.searchMany(options?.searchParams);

  return characters;
}
