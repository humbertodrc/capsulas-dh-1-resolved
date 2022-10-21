import { useEffect, useState } from "react";

interface CharacterProps {
  count: number;
}

const Character = ({ count }: CharacterProps) => {
  const [character, setCharacter] = useState("");

  useEffect(() => {
    const fetchCharacter = (count: number) =>
      fetch(`https://rickandmortyapi.com/api/character/${count}`)
        .then((response) => response.json())
        .then((character) => {
          setCharacter(character.image);
        });
    fetchCharacter(count);
  }, [count]);

  return (
    <div>
      <img src={character} alt="Personagem de Rick and Morty" />
    </div>
  );
};

export default Character;
