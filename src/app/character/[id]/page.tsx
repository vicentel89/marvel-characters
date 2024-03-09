import { Suspense } from 'react';

import { config as characterConfig, getCharacterById } from '@/modules/characters/application';
import { config as comicConfig, getComicsByCharacterId } from '@/modules/comics/application';
import CharacterResume from './_components/character-resume';
import Comics from './_components/comics';

const CharacterPage = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const characterData = getCharacterById(characterConfig.characterRepository, +id);
  const comicsData = getComicsByCharacterId(comicConfig.comicRepository, +id);

  const [character, comics] = await Promise.all([characterData, comicsData]);

  return (
    <>
      <Suspense>
        <CharacterResume character={character} />
      </Suspense>
      <Suspense>
        <Comics comics={comics} />
      </Suspense>
    </>
  );
};

export default CharacterPage;
