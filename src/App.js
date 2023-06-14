import { useState } from 'react';
import Employee from './components/Employee';
import './Main.css';
import { v4 as uuidv4} from 'uuid';
import AddEmployee from './components/AddEmployee';

function App() {
	const [info,setInfo]=useState('');
	const [employees,SetEmployes] = useState(
		[
			{
				id:1,
				name:"Rysiek",
				role:"Developer",
				img:"https://sm.ign.com/t/ign_pl/image/t/the-top-25/the-top-25-greatest-anime-characters-of-all-time_zm86.1280.jpg",
			},
			{
				id:2,
				name:"Miska",
				role:"dywan",
				img:"https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			},
			{
				id:3,
				name:"sale",
				role:"Junior-Developer",
				img:"https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			},
			{
				id:4,
				name:"Mokembe",
				role:"Software Engineer",
				img:"https://images.pexels.com/photos/4556737/pexels-photo-4556737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			},
			{
				id:5,
				name:"Mbappe",
				role:"Developer",
				img:"https://images.pexels.com/photos/2218786/pexels-photo-2218786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			},
			{
				id:6,
				name:"Nie lubie Divow",
				role:"Front-End",
				img:"https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			},

		]
	)
	function NewEmployee(name,role,img){
		const NewEmployee={
			id: uuidv4(),
			name:name,
			role:role,
			img:img,
		}
		SetEmployes([...employees,NewEmployee])
	}
	function updateEmployee(id,newName,newRole){
		console.log('updateEmployee on app.js');
		const updateEmployees = employees.map((employee)=>{
			if(id == employee.id){
				return {...employee ,name:newName,role:newRole}
			}
			return employee
		});
		SetEmployes(updateEmployees)
	}
  return (

	<>
	<div className='App'>
		<input type='text' onChange={(e)=>{
		setInfo(e.target.value);
		}}
		/>
	 	<div className='flex flex-wrap justify-center'>
			{employees.map((employee,id)=>{
				return <Employee
				key={employee.id}
				id={employee.id}
				name={employee.name} 
				role={employee.role} 
				img={employee.img}
				updateEmployee={updateEmployee}
				/>
			})}
		
	 	</div>
		<AddEmployee NewEmployee={NewEmployee}/>
	 </div>
	</>
  );
}

export default App;
