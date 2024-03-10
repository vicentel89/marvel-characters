import 'server-only';

import { SearchParams } from '@/modules/core/domain/search-params';
import { CharacterRepository } from '../domain/character-repository';

interface GetCharactersOptions {
  searchParams: SearchParams;
}

export async function getCharacters(
  characterRepository: CharacterRepository,
  options?: GetCharactersOptions
) {
  const characters = await characterRepository.getAll(options?.searchParams);

  return characters;
}
