import { useContext } from "react";
import { CharactersContext } from "../../context/CharacterContext";
import Picture from '../Picture';

const ListPicture = () => {
  const { characters } = useContext(CharactersContext);

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
