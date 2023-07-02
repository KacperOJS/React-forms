
import './Main.css';

import Header from'./components/Header';
import Employees from './pages/Employees';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Customers from './pages/Customers';
import Dictionary from './components/Dictionary';
import Definition from './components/Definition';
import Customer from './pages/Customer';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import { createContext, useEffect, useState } from 'react';
export const LoginContext = createContext();

function App() {
	useEffect(()=>{
		function refreshTokens(){
			if(localStorage.refresh){
				const url ="http://localhost:8000/api/token/refresh/";
				fetch(url,{
					method:'POST',
					headers:{
						'Content-Type': 'application/json'
					},
					body:JSON.stringify({
						refresh:localStorage.refresh,
					}),
				}).then((res)=>{
					return res.json()
				}).then((data)=>{
					console.log(data);
					localStorage.access = data.access;
					localStorage.refresh = data.refresh;
					setLoggedIn(true)
					
				})
			}
		}
		const minutes = 1000 * 60;
		refreshTokens(); 
		setInterval(refreshTokens, minutes * 3);
	},[])
	const [loggedIn ,setLoggedIn]=useState(localStorage.access ? true : false);
	// const [loggedIn ,setLoggedIn]=useState(false);
  return (
	<LoginContext.Provider value={{loggedIn,setLoggedIn}}>
	<BrowserRouter>
		<Header>
		
			<Routes>
				<Route path='/employees' element={<Employees/>}/>
				<Route path='/' element='Default Page'/>
				<Route path='/definition/:search' element={<Definition/>}/>
				<Route path='/dictionary' element={<Dictionary/>}/>
				<Route path='/customers' element={<Customers/>}/>
				<Route path='/customers/:id' element={<Customer/>}/>
				<Route path='/login' element={<Login/>}/>
				<Route path='/404' element={<NotFound/>}/>
				<Route path='/*' element={<NotFound/>}/>
				
			</Routes>
	
		{/* <Employees/> */}
		</Header> 
	</BrowserRouter>
	</LoginContext.Provider>
  );
}

export default App;
