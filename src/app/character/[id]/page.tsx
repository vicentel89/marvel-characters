import { config, getCharacterById } from '@/modules/characters/application';
import CharacterResume from './_components/character-resume';
import Comics from './_components/comics';

const CharacterPage = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const character = await getCharacterById(config.characterRepository, +id);

  return (
    <>
      <CharacterResume character={character} />
      <Comics />
    </>
  );
};

export default CharacterPage;
