import React,{useEffect, useState} from 'react'
import { HashLoader } from 'react-spinners'
import { BiHappyHeartEyes } from "react-icons/bi";

const Success = () => {
  const [loading,setloading]=useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setloading(false);
    }, 3000);
  },[])

  return (
    <>
    
    <div className='flex justify-center items-center flex-col h-screen bg-orange-400'>
      {
        loading ? <HashLoader color="#36d7b7"  /> : 
        <div>
      <h2 className='font-semibold text-xl mb-4'>Order Successful!</h2>
      <p className='flex gap-1'>Your order has been successfully placed.<BiHappyHeartEyes  className='size-10 text-orange-700 relative bottom-3'/></p>
      </div>
      }
      
    </div>
    </>
  )
}

export default Success
