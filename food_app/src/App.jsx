import React from 'react';
import { useState, useEffect } from 'react';
import {BrowserRouter, Route , Routes } from 'react-router-dom';
import Home from './components/Home';
import Success from './components/Success';

import Error from './components/Error';
import ProtectedRoute from './assets/components pages/ProtectedRoute';
import SplashScreen from './components/SplashScreen';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => setShowSplash(false), 4000);
  }, []);
  return (
   <BrowserRouter>
    {showSplash ? (
        <SplashScreen />
      ) : (
    <Routes>
    
      <Route path='/' element={<Home/>}></Route>
      <Route path='/success' element={<ProtectedRoute element={<Success />} />} />

      
      <Route path='/*' element={<Error/>}></Route>
    </Routes>
      )}
   </BrowserRouter>
  )
}

export default App

