import 'server-only';

import { ComicRepository } from '../domain/comic-repository';

export async function getComicsByCharacterId(
  characterRepository: ComicRepository,
  characterId: number
) {
  const data = await characterRepository.getByCharacterId(characterId);

  return data;
}
