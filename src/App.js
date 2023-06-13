import { useState } from 'react';
import Employee from './components/Employee';
import './Main.css';
import { v4 as uuidv4} from 'uuid';

function App() {
	const [info,setInfo]=useState('');
	const [employees,SetEmployes] = useState(
		[
			{
				name:"Rysiek",
				role:"Developer",
				img:"https://sm.ign.com/t/ign_pl/image/t/the-top-25/the-top-25-greatest-anime-characters-of-all-time_zm86.1280.jpg",
			},
			{
				name:"Miska",
				role:"dywan",
				img:"https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			},
			{
				name:"sale",
				role:"Junior-Developer",
				img:"https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			},
			{
				name:"Mokembe",
				role:"Software Engineer",
				img:"https://images.pexels.com/photos/4556737/pexels-photo-4556737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			},
			{
				name:"Mbappe",
				role:"Developer",
				img:"https://images.pexels.com/photos/2218786/pexels-photo-2218786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			},
			{
				name:"Nie lubie Divow",
				role:"Front-End",
				img:"https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			},

		]
	)
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
				key={uuidv4()}
				name={employee.name} 
				role={employee.role} 
				img={employee.img}/>
			})}
		
	 	</div>
	 </div>
	</>
  );
}

export default App;
