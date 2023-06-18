import { useEffect,useState } from "react"
import { Link } from "react-router-dom";

export default function Customers(){
	const [customers,SetCustomers]=useState();
	useEffect(()=>{
		fetch('http://localhost:8000/api/customers/')
		.then(res =>res.json())
		.then(data => {
			console.log(data)
			SetCustomers(data.customers)
		})
	},[]);
	return (
		<>
		{customers ? customers.map((customer)=>{
			return <p><Link to={`/customers/${customer.id}`} >{customer.name}</Link></p>
		}): null }
		</>
	)
}
