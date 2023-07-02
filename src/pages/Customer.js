import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { LoginContext } from "../App";

export default function Customer(){
	const {loggedIn,setloggedIn} = useContext(LoginContext)
	const [customer,setCustomer]=useState(); 
	const [error,setError]=useState(false); 
	const navigate = useNavigate();
	const [tempCustomer,SettempCustomer]=useState();
	const { id }=useParams();
	const [change,setChange]=useState(false);
	const location = useLocation();
	useEffect(()=>{
		console.log('customer',customer);
		console.log('customer',tempCustomer);
	});
	useEffect(() => {
		const url = 'http://localhost:8000/api/customers/' + id;
		fetch(url , {
			headers:{
				'Content-Type':'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('access'),
			},
		})
		  .then((res) => {
			if (res.status === 404) {
			  navigate('/404');
			} else if (res.status === 401) {
			  setloggedIn(false)
			  navigate('/login',{
				state:{
					previousUrl: location.pathname
				}
			  });
			} else if (!res.ok) {
			  throw new Error('Something went wrong try again');
			}
			return res.json();
		  })
		  .then((data) => {
			console.log(data);
			setCustomer(data.customer);
			SettempCustomer(data.customer);
		  })
		  .catch((error) => {
			console.error(error);
			setError(true);
		  });
	  }, []);
	  
	function updateCustomer(){
		const url = 'http://localhost:8000/api/customers/' + id;
		fetch(url,{ method:'POST',
		headers:{
			'Content-Type':'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('access'),
		},
	body:JSON.stringify(tempCustomer)
	}).then(res => {
		if(res.status === 401) {
			navigate('/login');
		  } 
		  if(!res.ok) throw new Error('something went wrong2');
			return res.json();
		})
		.then(data =>{
			setCustomer(data.customer)
			setChange(false)
			console.log(data);
		})
	}
	useEffect(()=>{
		if(!customer) return;
		if(!tempCustomer) return;
		let equal = true;
		if(customer.name !== tempCustomer.name){
		   equal=false
		}
		if(customer.industry !== tempCustomer.industry){
		   equal=false
		}
		if(equal){
		   setChange(false);
		}
	},[])
	
	function deleteCustomer(){
		const url ='http://localhost:8000/api/customers/' + id;
		console.log('deleting');
		fetch(url,{method:'DELETE',
		headers:{
			'Content-Type':'application/json',
			Authorization: 'Bearer ' + localStorage.getItem('access'),
		},
	}).then(res =>{
			if(res.status === 401) {
				navigate('/login');
			  } 
			if(!res.ok){
				throw new Error('Something went wrong')
			}
			navigate('/customers')
		})
		.catch((e)=>{
			console.error(e);
		})
	}
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
				<p  className="m-2 block px-2">ID: {tempCustomer.id}</p>
				<input onChange={(e)=>{
					setChange(true);
					SettempCustomer({...tempCustomer,name:e.target.value})
				
				}} className="m-2 block px-2" type="text" value={tempCustomer.name}/>
				<input onChange={(e)=>{
					setChange(true);
					SettempCustomer({...tempCustomer,industry:e.target.value})
				
				}} className="m-2 block px-2" type="text" value={tempCustomer.industry}/>
				{change ? (
				<>
				<button onClick={(e)=>{
					SettempCustomer({...customer})
					setChange(false)
				}}>Cancel</button> <button
				onClick={updateCustomer}
				> Save</button>
				</>
				): null}
		
			<button onClick={deleteCustomer}>Delete</button> 
			</div> 
			: null }
			<br />
			<Link to="/customers">Go back</Link>
		</>
	)
}