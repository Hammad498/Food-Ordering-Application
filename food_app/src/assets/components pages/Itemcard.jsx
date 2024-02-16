import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { BsPlus } from "react-icons/bs";
import { HiMiniMinusSmall } from "react-icons/hi2";
import { useDispatch } from 'react-redux';
import { removefromcart,increment,decrement } from '../../redux/slices/Cartslices';
import toast, { Toaster } from 'react-hot-toast';
import { MdOutlineRemoveShoppingCart } from "react-icons/md";


const Itemcard = ({id,name,img,price,qty}) => {
  const dispatch=useDispatch();

 
  return (
    <>
  <div className='flex gap-2 shadow-md rounded-lg p-2 flex-row mb-3'>
    <div>
      <img
        src={img}
        className='w-[50px] h-[50px]'
      />
    </div>
    <div className='leading-5 '>
      <div className='flex justify-between mb-2'>
        <h2 className='text-gray-800 font-bold'>{name}</h2>
        <div className='absolute right-7'>

        <MdDeleteOutline onClick={()=>{
          dispatch(removefromcart({id,name,img,price,qty}));
          toast(`${name} removed from cart!`, {
            icon: <MdOutlineRemoveShoppingCart className='text-orange-500 size-7'/>,
          });
        }}

         className='cursor-pointer hover:text-orange-600 font-bold' />
        </div>
      </div>
      <div className='flex justify-between '>
        <h3 className='text-orange-400 font-bold'>PKR <span className='text-orange-400'>{price}</span></h3>
        
        <div className='flex justify-center gap-2 items-center absolute right-7'>
          <button onClick={()=>qty>1 ? dispatch(decrement({id})): (qty=0)} className='border-2 text-gray-600 border-gray-600 hover:text-white hover:bg-green-500 rounded-md text-xl transition-all ease-linear cursor-pointer'><HiMiniMinusSmall /></button>
          <span>{qty}</span>
          <button onClick={()=>qty>=1 ? dispatch(increment({id})) : qty=0 } className='border-2 text-gray-600 border-gray-600 hover:text-white hover:bg-green-500 rounded-md text-xl transition-all ease-linear cursor-pointer'><BsPlus /></button>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default Itemcard
