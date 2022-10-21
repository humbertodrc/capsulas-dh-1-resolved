import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Navbar = () => {
  const { user, login, logout } = useContext(UserContext);

  return (
    <nav>
      <span>
        <h3>{user ? `Olá ${user.name}, bem-vindo!` : ""}</h3>
      </span>

      {user ? (
        <button onClick={logout}>Encerrar sessão</button>
      ) : (
        <button onClick={login}>Iniciar sessão</button>
      )}
    </nav>
  );
};

export default Navbar;
