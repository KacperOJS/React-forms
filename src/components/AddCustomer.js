import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function AddCustomer(props) {
  const [show, setShow] = useState(props.show);

  const [name, setName] = useState('');
  const [industry, setIndustry] = useState('');


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
	<button onClick={props.toggleshow} 
	className="block translate-y-[50px] mx-auto px-4 py-1 text-sm text-white font-semibold rounded-full border bg-purple-600 border-purple-200 hover:text-white hover:bg-purple-800 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
		Add customer
	</button>
     

      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
	<>
	<div className="w-full ">
		<form onSubmit={(e)=>{
			e.preventDefault();
		
			setName('')
			setIndustry('')
			
			props.newcustomer(name,industry);
		}} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-2"
		id="editmodal"
		>
			<div className="mb-4">
		<label className="block text-gray-700 text-sm font-bold mb-2" 
			for="Name">
				Customer Name
			</label>
				<input 
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="industry" 
					type="text" 
					placeholder="Rycho"
					value={name}
					onChange={(e)=>{
						setName(e.target.value);
					}}/>
				</div>
			<div className="mb-1">
					<label className="block text-gray-700 text-sm font-bold mb-1" for="password">
						Industry
					</label>
				<input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
				placeholder='Nike'
				id="industry"
				type="text" 
				value={industry}
				onChange={(e)=>{
					 setIndustry(e.target.value);
				}}/>
				
			</div>
			
				
		</form>
	</div>
</>
		</Modal.Body>
        <Modal.Footer>

		  <button className='bg-slate-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={props.toggleshow}>Close</button>
		  <button 
			onClick={handleClose}
			className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded' form='editmodal'>Add
		  </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCustomer;