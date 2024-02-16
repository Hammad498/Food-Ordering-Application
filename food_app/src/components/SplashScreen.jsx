import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => navigate('/'), 3000); 
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="flex justify-center items-center flex-col h-screen bg-orange-400">
      <img src="/src/assets/logo.png" alt="" className='h-20 animated-image'/>
      <h1 className='text-2xl font-bold text-white mb-1 '>Bites<span className='text-orange-700'> Bliss</span></h1>
      <h5 className='text-sm  flex gap-1'>Buy the best around you!</h5>
      
      
    </div>
  );
};

export default SplashScreen;

