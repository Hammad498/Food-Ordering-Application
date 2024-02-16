import React from 'react'
import { FaStar } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { addtocart } from '../../redux/slices/Cartslices';

const Foodcard = ({id,name,price,desc,img,rating,handleToast}) => {

  const dispatch=useDispatch();

  return (
    <div className='font-bold w-[250px] bg-white rounded-sm flex flex-col p-5 gap-3 '>
      <img src={img} className='cursor-grab w-auto h-[130px] hover:scale-110 transition-all duration-500 ease-in-out overflow-hidden'/>
      <div className='text-sm flex justify-between'>
        <h3>{name}</h3>
        <span className='text-orange-500'>PKR {price}</span>
      </div>
      <p className='text-sm font-normal'>{desc.slice(0,67)}...</p>
      <div className='flex justify-between'>
        <span className='flex justify-center items-center'>
        <FaStar  className='mr-1 text-yellow-300'/>{rating}
        </span>
        <button onClick={()=>{
          dispatch(addtocart({id,name,price,img,rating,qty:1}));
          handleToast(name);
        }} 
         className='p-1 rounded-lg text-sm bg-orange-500 hover:bg-orange-600 text-white'>Add to cart</button>
      </div>
    </div>
  )
}

export default Foodcard
