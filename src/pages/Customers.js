import { useEffect,useState } from "react"

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
			return <p>{customer.name}</p>
		}): null }
		</>
	)
}
