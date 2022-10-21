import {createContext, FC} from "react";
import initialCharacters from "../../data.json";
import {Character} from "../../interface/Character";

interface CharacterProvierProps {
	children: React.ReactNode;
}

interface CharacterContextData {
	characters: Character[];
}

export const CharactersContext = createContext({} as CharacterContextData);

const CharactersProvider: FC<CharacterProvierProps> = ({children}) => {
	const characters = initialCharacters;

	return (
		<CharactersContext.Provider
			value={{
				characters,
			}}
		>
			{children}
		</CharactersContext.Provider>
	);
};

export default CharactersProvider;
