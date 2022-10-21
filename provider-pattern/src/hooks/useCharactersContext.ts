import { useContext } from 'react';
import { CharactersContext } from '../context/CharacterContext';


export const useCharactersContext = () => {
  return useContext(CharactersContext)
}