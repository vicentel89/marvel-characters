import { generateMarvelApiUrl } from '@/modules/core/infrastructure/marvel-api/generate-api-url';
import { BaseEndpointParams } from '@/modules/core/infrastructure/marvel-api/endpoint-params';
import { ComicRepository } from '../domain/comic-repository';
import { mapApiResponseToComic } from './utils';

export function createComicApiRepository(): ComicRepository {
  return {
    getByCharacterId,
  };
}

async function getByCharacterId(characterId: number) {
  const params: BaseEndpointParams = { limit: 20 };

  const apiUrl = generateMarvelApiUrl(`characters/${characterId}/comics`, params);
  const res = await fetch(apiUrl);
  const { data } = await res.json();

  const comics = mapApiResponseToComic(data.results);

  return comics;
}
