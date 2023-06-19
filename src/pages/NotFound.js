import { Link } from "react-router-dom"
export default function NotFound(){
	return(
		<>
		<p>Element Not Founded in API</p>
		<Link to="/customers">Try Again</Link>
		</>
	)
}