import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Dictionary = () => {
	const[word,setWord]=useState('');
	const navigate = useNavigate();
	//[tylko odpala co jest w tablicy]
  return (
	<div className=''>
		<form className='flex justify-center space-x-2' onSubmit={()=>{
			navigate('/definition/' + word);
		}}>
			<input 
			className='px-2  m-2 rounded-lg'
			placeholder='Kredki'
			type="text" 
			onChange={(e)=>{
				setWord(e.target.value); 
			}}/>
			<button className=' rounded-lg border-2 bg-sky-500/75 px-4 border-sky-500'>Search </button>
		</form>
	</div>


  )
}

export default Dictionary