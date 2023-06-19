import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Customer(){
	const [customer,setCustomer]=useState(); 
	const [error,setError]=useState(false); 
	const navigate = useNavigate();
	const { id }=useParams();
	useEffect(()=>{
		const url = 'http://localhost:8000/api/customers/' + id;
		fetch(url)
		.then((res)=>{
			if(res.status ===404){
				navigate('/404');
			}

			return res.json();
		})
		.then(data =>{
			console.log(data);
			setCustomer(data.customer);
		})
		// .catch((error)=>{
		// 	console.error(error);
		// 	setError(true);
		// })
	},[])
	// if(error){
	// 	return( 
	// 		<>
	// 			<p>You went in wrong Place</p>
	// 			<Link to="/customers">Go back</Link>
	// 		</>
	// 	)
	// }
	return(
		<>
			{customer ? 
			<div>
				<p>{customer.id}</p>
				<p>{customer.name}</p>
				<p>{customer.industry}</p>
			</div> 
			: null }
			<Link to="/customers">Go back</Link>
		</>
	)
}