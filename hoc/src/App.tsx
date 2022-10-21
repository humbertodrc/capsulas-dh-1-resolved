import axios from "axios";
import { useState } from "react";
import "./App.css";
import CharacterList from "./components/CharacterList";
import Input from "./components/Input";
import { Character } from "./interface/character";

const App = () => {
	const [rickandmorty, setRickandmorty] = useState(0);
	const [rickandmortyData, setRickandmortyData] = useState<Character[]>([]);

	const handleChange = (e: any) => {
		setRickandmorty(e.target.value);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		getRickandmorty();
	};

	const getRickandmorty = async () => {
		const toArray = [];
		try {
			const res = await axios.get<Character>(
				`https://rickandmortyapi.com/api/character/${rickandmorty}`
			);
			toArray.push(res.data);

			setRickandmortyData(toArray);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<>
			<Input handleSubmit={handleSubmit} handleChange={handleChange} />
			<CharacterList rickandmortyData={rickandmortyData} />
		</>
	);
};

export default App;
