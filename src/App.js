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

function App() {
  return (
	<BrowserRouter>
		<Header>
		
			<Routes>
				<Route path='/employees' element={<Employees/>}/>
				<Route path='/' element='Default Page'/>
				<Route path='/customers' element={<Customers/>}/>
			</Routes>
	
		{/* <Employees/> */}
		</Header> 
	</BrowserRouter>
  );
}

export default App;
