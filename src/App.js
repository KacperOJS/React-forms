
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
import { createContext, useState } from 'react';
export const LoginContext = createContext();

function App() {
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
