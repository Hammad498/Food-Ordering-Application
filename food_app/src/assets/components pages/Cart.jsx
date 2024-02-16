import React,{useState} from 'react'
import { IoMdClose } from "react-icons/io";
import Itemcard from './Itemcard';
import { useSelector } from 'react-redux';
import { FaOpencart } from "react-icons/fa";
import { IoSadOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";



const Cart = () => {
 
  const cartitems=useSelector((state)=>state.cart.cart);
  const totalqty=cartitems.reduce((totalqty,item)=>totalqty + item.qty,0);
  const totalprice=cartitems.reduce((totalprice,item)=>totalprice + item.qty * item.price ,0);

  console.log(cartitems);

  const [activestate,setactivestate]=useState(false);
  const navigate=useNavigate();

  return (
  <>
    <div className={`fixed right-0 top-0 w-full h-full bg-white lg:w-[20vw] p-5 border rounded-t-3xl shadow-2xl shadow-orange-500 opacity-1 bg-blend-darken rounded-r-none transition-all duration-500 z-50 ${activestate ? "translate-x-0" : "translate-x-full"}`}
>
     
      <div className='flex justify-between items-center my-3'>
        <span className='text-xl font-bold text-gray-800'>My Order</span>
        <IoMdClose onClick={()=>setactivestate(!activestate)} className='border-2 border-gray-600 text-gray-600 font-bold rounded-md p-1 text-xl hover:border-orange-400 hover:text-orange-400 cursor-pointer '/>
      </div>
     

     {
      cartitems.length > 0 ? cartitems.map((food)=>{
        return <Itemcard key={food.id} id={food.id}  
        name={food.name}
        price={food.price} 
        desc={food.desc} 
        rating={food.rating}
        img={food.img}
        qty={food.qty}/>
      } ): <h2 className='text-xl font-bold text-gray-800 text-center flex justify-center py-10'>Your cart is empty!   <IoSadOutline  className='text-xl font-bold size-7 text-orange-600'/></h2>
     }


      <div className='absolute bottom-0'>
        <h3 className='font-semi-bold text-gray-800'>Items:  {totalqty}</h3>
        <h3 className='font-semi-bold text-gray-800'>Total Amount:  {totalprice} </h3>
        <hr className='w-[85vw] lg:w-[18vw] my-2'/>
        <button onClick={()=>navigate("/success")} className='bg-orange-500 px-1.5 py-1 rounded-md my-1 hover:bg-orange-600 transition-all duration-100  lg:w-[18vw] w-[85vw] mb-5'>Checkout</button>
      </div>
      
    </div>
    <FaOpencart onClick={()=>setactivestate(!activestate)} className={`rounded-full bg-orange-400 shahdow-md text-5xl p-3 fixed bottom-4 cursor-pointer text-white hover:scale-150 transition-all ease-in-out 
    ${totalqty > 0 && "animate-bounce delay-500 transition-all"}`} />
  </>
  )
}

export default Cart
