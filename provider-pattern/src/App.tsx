import ListPicture from "./components/ListPicture";
import Navbar from "./components/Navbar";
import CharacterProvider from "./context/CharacterContext";
import UserProvider from "./context/UserContext";

const App = () => {
  return (
    <UserProvider>
      <CharacterProvider>
        <Navbar />
        <ListPicture />
      </CharacterProvider>
    </UserProvider>
  );
};

export default App;

