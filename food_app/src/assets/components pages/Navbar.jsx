import React, { useDebugValue } from 'react';
import 'tailwindcss/tailwind.css'; 
import { useDispatch } from 'react-redux';
import { setsearch } from '../../redux/slices/Searchslice';

const Navbar = () => {
  const dispatch=useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10">
      <div className=' text-grey-500 '>
      <h1 className='text-2xl font-bold text-white'>Bites<span className='text-orange-400'>Bliss</span></h1>
      <h5 className='text-sm '>Buy the best around you</h5>
        
       
      </div>
      <div className='flex flex-col gap-1'>
      <h3 className='text-orange-500 font-bold text-xl fixed right-0 bottom-1 items-center justify-center'>{new Date().toUTCString().slice(0,16)}</h3>
        <input onChange={(e)=>dispatch(setsearch(e.target.value))} type="search" name='search' placeholder='Search here' autoComplete='off' 
        className='p-3 border border-grey-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]' />
      </div>
    </nav>
  );
}

export default Navbar;

