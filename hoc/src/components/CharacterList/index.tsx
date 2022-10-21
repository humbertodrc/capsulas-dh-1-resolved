import Hoc from "../../Hoc";

interface CharacterProps {
  id: number;
  image: string;
  name: string;
  status: string;
  species: string;
  gender: string;
}

function CharacterList({ rickandmortyData }: any) {
  return (
    <section>
      {rickandmortyData.map((data: CharacterProps) => {
        return (
          <article key={data.id} className="character">
            <img src={data.image} alt={data.name} />
            <div>
              <p>Nome: {data.name}</p>
              <p>Status: {data.status}</p>
              <p>Espécie: {data.species}</p>
              <p>Gênero: {data.gender}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default Hoc(CharacterList);
