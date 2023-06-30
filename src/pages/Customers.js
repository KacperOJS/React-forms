import { useEffect,useState } from "react"
import { Link,useNavigate } from "react-router-dom";
import AddCustomer from "../components/AddCustomer";

export default function Customers(){
	const [customers,SetCustomers]=useState();
	const [error, setError] = useState(false);
	const [show,setShow] = useState(false);

	function toggleshow(){
		setShow(!show)
	}

	const navigate = useNavigate();

	useEffect(()=>{

		fetch('http://localhost:8000/api/customers/')
		.then(res =>{
			if(res.status ===401){
				navigate('/login'); 
			}
			return res.json()
		})
		.then(data => {
			console.log(data)
			SetCustomers(data.customers)
		})
		.catch(error=>{
			console.error(error);
			setError(true)
		})
	},[]);
	function newcustomer(name,industry){
		const data = {name:name,industry:industry};
		fetch('http://localhost:8000/api/customers/',{
			method:'POST',
			headers:{
				'Content-Type':'application/json'
			},
			body: JSON.stringify(data),
		}).then(res =>{
			if(!res.ok){
				throw new Error('Something went Wrong');
			}
			return res.json()
		}).then(data=>{
			toggleshow()
			SetCustomers([...customers , data.customer])
		}).catch(e=>{
			console.error(e);
		})
	}
	function deleteCustomer(){
		console.log('deleting');
	}
	if(error){
		return <p>Something went Wrong With API</p>
	}
	return (
		<>
		{customers ? customers.map((customer,idx)=>{
			return <p key={idx}><Link to={'/customers/'+customer.id} >{customer.name}</Link></p>
		}): null }
		<button onClick={deleteCustomer}>Delete</button>
		<br />
		<Link to="/customers">Go Back</Link>
		
		<AddCustomer newcustomer ={newcustomer} show={show} toggleshow={toggleshow}/>
		</>
	)
}
