import { useState } from 'react';
import Employee from './components/Employee';
import './Main.css';
import { v4 as uuidv4} from 'uuid';
import AddEmployee from './components/AddEmployee';
import EditEmplooyee from './components/EditEmployee';
import Header from'./components/Header';
import Employees from './pages/Employees';

function App() {
  return (
	<Header>
		<Employees/>
	</Header>
  );
}

export default App;
