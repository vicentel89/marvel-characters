import { getCharacterById, config } from '@/modules/characters/application';
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
    <article>
      <CharacterResume character={character} />
      <Comics characterId={+id} />
    </article>
  );
};

export default CharacterPage;
