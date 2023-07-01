import { useContext, useEffect,useState } from "react"
import { Link,useLocation,useNavigate } from "react-router-dom";
import AddCustomer from "../components/AddCustomer";
import { LoginContext } from "../App";

export default function Customers(){
	const [customers,SetCustomers]=useState();
	const [error, setError] = useState(false);
	const [show,setShow] = useState(false);
	const {loggedIn,setLoggedIn} = useContext(LoginContext);

	function toggleshow(){
		setShow(!show)
	}
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(()=>{

		fetch('http://localhost:8000/api/customers/',{
			headers:{
				'Content-Type': 'application/json',
				Authorization:'Bearer ' + localStorage.getItem('access')
			},

		})
		.then(res =>{
			if(res.status===401){
				setLoggedIn(false);
				navigate('/login',{state:{previousUrl:location.pathname}}); 
			}
			return res.json()
		})
		.then(data => {
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
