import { useState } from 'react';
import Employee from './components/Employee';
import './Main.css';
import { v4 as uuidv4} from 'uuid';
import AddEmployee from './components/AddEmployee';
import EditEmplooyee from './components/EditEmployee';
import Header from'./components/Header';
import Employees from './pages/Employees';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Customers from './pages/Customers';
import Dictionary from './components/Dictionary';
import Definition from './components/Definition';
import Customer from './pages/Customer';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

function App() {
  return (
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
  );
}

export default App;
