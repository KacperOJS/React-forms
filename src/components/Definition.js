import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4, v4} from 'uuid';

export default function Definition(){
	const [word,setWord] = useState();
	const [error, setError] = useState(false);
	const navigate = useNavigate();
	let {search} =useParams();

	useEffect(()=>{
		fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+search) 
		.then((res) => {
			if (!res.ok) {
			  throw new Error("Word not found");
			}
			return res.json();
		  })
		.then(data => {
				setWord(data[0].meanings)
				console.log(data[0].meanings);
			})
		.catch((error) => {
			setError(true);
			console.log(error);
		  });
	},[])
	if (error) {
		return <>
		<div>We cant find information about {search}</div>
		<Link to ='/dictionary'>Try Again</Link>
		
		</>
		;
	  }
	return (
		<>

			{word ? word.map((meaning)=>{
				return(
					<>
					<h1>Welcome in Definition</h1>
					<p key={v4()}>{meaning.definitions[0].definition}</p>
					</>
				)
				
				
			}): null}
			
		</>
	)
}