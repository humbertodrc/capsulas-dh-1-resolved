import { useCharactersContext } from '../../hooks/useCharactersContext';
import Picture from '../Picture';

const ListPicture = () => {

  const {characters} = useCharactersContext()

  return (
    <section>
      {characters.map((character: any) => (
        <div key={character.id}>
          <Picture character={character} />
        </div>
      ))}
    </section>
  );
};

export default ListPicture;
