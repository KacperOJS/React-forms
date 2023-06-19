import { useEffect,useState } from "react"
import { Link } from "react-router-dom";

export default function Customers(){
	const [customers,SetCustomers]=useState();
	const [error, setError] = useState(false);
	useEffect(()=>{
	
		fetch('http://localhost:8000/api/customers/')
		.then(res =>res.json())
		.then(data => {
			console.log(data)
			SetCustomers(data.customers)
		})
		.catch(error=>{
			console.error(error);
			setError(true)
		})
	},[]);
	if(error){
		return <p>Something went Wrong With API</p>
	}
	return (
		<>
		{customers ? customers.map((customer,idx)=>{
			return <p key={idx}><Link to={'/customers/'+customer.id} >{customer.name}</Link></p>
		}): null }
		</>
	)
}
