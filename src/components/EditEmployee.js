import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function EditEmplooyee(props) {
  const [show, setShow] = useState(false);

  const [name, setName] = useState(props.name);
  const [role, setRole] = useState(props.role);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
	<button onClick={handleShow} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
		Message
	</button>
     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
	<>
	<div className="w-full ">
		<form onSubmit={(e)=>{
			handleClose();
			e.preventDefault();
			console.log('dziala z edit employee');
			console.log(props.id,name,role);
			props.updateEmployee(props.id,name,role);
		}} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
		id="editmodal"
		>
			<div className="mb-4">
		<label className="block text-gray-700 text-sm font-bold mb-2" 
			for="role">
				Name
			</label>
				<input 
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="role" 
					type="text" 
					placeholder="Username"
					value={name}
					onChange={(e)=>{
						setName(e.target.value);
					}}/>
				</div>
			<div className="mb-6">
					<label className="block text-gray-700 text-sm font-bold mb-2" for="password">
						Role
					</label>
				<input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
				id="password"
				type="text" 
				value={role}
				onChange={(e)=>{
					 setRole(e.target.value);
				}}/>
				
			</div>
				
		</form>
	</div>
</>
		</Modal.Body>
        <Modal.Footer>

		  <button className='bg-slate-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={handleClose}>Close</button>
		  <button 
		  
		  className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded' form='editmodal'>Update</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmplooyee;