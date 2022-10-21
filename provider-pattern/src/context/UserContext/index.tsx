import React, { createContext, FC, useState } from "react";

interface ContextUserProps {
  user: User;
  login: () => void;
  logout: () => void;
  favoriteCharacterUser: (idcharacter: number) => void;
}


interface ProviderUserProps {
  children: React.ReactNode;
}

interface User {
  id: number;
  name: string;
  favoriteCharacters: number[];
}


export const UserContext = createContext({} as ContextUserProps);

const initialUser = {
  id: 1,
  name: "Steve",
  favoriteCharacters: [],
};

const UserProvider: FC<ProviderUserProps> = ({ children }) => {
  const [user, setUser] = useState<User>(initialUser);

  const login = () => {
    setUser(initialUser);
  };

  const logout = () => {
    setUser({} as User);
  };

  const favoriteCharacterUser = (idcharacter: number) => {
    const isfavorite = user.favoriteCharacters.includes(idcharacter);
    const favoriteCharacters = isfavorite
      ? user.favoriteCharacters.filter(
          (idfavorite) => idfavorite !== idcharacter
        ) // Deleta
      : [...user.favoriteCharacters, idcharacter]; // Adiciona

    setUser({
      ...user,
      favoriteCharacters,
    });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
        favoriteCharacterUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
