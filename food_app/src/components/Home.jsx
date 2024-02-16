import React from 'react'
import Navbar from '../assets/components pages/Navbar'
import CategoryMenu from '../assets/components pages/CategoryMenu'
import Fooditem from '../assets/components pages/Fooditem'
import Cart from '../assets/components pages/Cart'

const Home = () => {
  return (
    <>
    <Navbar/>
    <CategoryMenu/>
    <Fooditem/>
    <Cart/>
    </>
  )
}

export default Home
