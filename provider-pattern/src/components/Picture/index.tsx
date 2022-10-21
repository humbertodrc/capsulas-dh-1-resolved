import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

interface PictureProps {
  character: {
    id: number;
    imageUrl: string;
    title: string;
    desc: string;
  };
}

const Picture = ({ character }: PictureProps) => {
  const { user, favoriteCharacterUser } = useContext(UserContext);
  const isFavorite = user?.favoriteCharacters?.includes(character.id);

  return (
    <article>
      <img src={character.imageUrl} alt={character.title} />
      <div>
        <h1>{character.title}</h1>
        <p>{character.desc}</p>
        {user?.id && (
          <button
            className={`${isFavorite ? "btn-success" : "btn-primary"}`}
            onClick={() => favoriteCharacterUser(character.id)}
          >
            {`${isFavorite ? "Favoritado" : "Favoritar"}`}
          </button>
        )}
      </div>
    </article>
  );
};

export default Picture;
