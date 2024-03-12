import { Metadata, ResolvingMetadata } from 'next';

import { getCharacterById, config } from '@/modules/characters/application';
import CharacterResume from './_components/character-resume';
import Comics from './_components/comics';

type CharacterPageProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata(
  { params: { id } }: CharacterPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentMetadata = await parent;
  const character = await getCharacterById(config.characterRepository, +id);

  return {
    title: `${character.name} | ${parentMetadata.title?.absolute}`,
    description: character.description || parentMetadata.description,
    keywords: [character.name, ...(parentMetadata.keywords || [])],
  };
}

const CharacterPage = async ({ params: { id } }: CharacterPageProps) => {
  const character = await getCharacterById(config.characterRepository, +id);

  return (
    <article>
      <CharacterResume character={character} />
      <Comics characterId={+id} />
    </article>
  );
};

export default CharacterPage;
