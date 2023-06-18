import { useParams } from "react-router-dom"
export default function Customer(){
	const { id }=useParams();
	return(
		<>
			<p>{id}</p>
		</>
	)
}