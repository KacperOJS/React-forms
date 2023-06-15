import { useEffect, useState } from "react";
import { v4 as uuidv4, v4} from 'uuid';

export default function Definition(){
	const [word,setWord] = useState();

	useEffect(()=>{
		fetch('https://api.dictionaryapi.dev/api/v2/entries/en/Motorcycle')
		.then(res => res.json())
		.then(data => {
				setWord(data[0].meanings)
				console.log(data[0].meanings);
			})
	},[])
	return (
		<>
			<p>This is Example of fetching API</p>
			{word ? word.map((meaning)=>{
				return <p key={v4()}>{meaning.definitions[0].definition}</p>
			}): null}
		</>
	)
}