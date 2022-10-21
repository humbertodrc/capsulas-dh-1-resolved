import Character from './components/Character';
import useCounter from "./hooks/useCounter";

const App = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <article className="App">
      <Character count={count} />
      <div>
        <h2>Contador = {count}</h2>
        <span>
          <button onClick={increment}>Incrementar</button>
          <button onClick={decrement}>Decrementar</button>
        </span>
      </div>
    </article>
  );
};

export default App;