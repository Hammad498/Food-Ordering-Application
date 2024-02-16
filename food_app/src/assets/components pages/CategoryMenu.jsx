import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setcategory } from '../../redux/slices/Categoryslice';
import FoodData from '../data/FoodData'

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategory = () => {
    const unique = [...new Set(FoodData.map((food) => food.category))];
    setCategories(unique);
    console.log(unique);
  };

  useEffect(() => {
    listUniqueCategory();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);


  return (
    <div>
      <div className='ml-6 '>
        <h3 className='text-xl font-semibold'>Categories</h3>
        <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
          <button
            onClick={() => dispatch(setcategory("All"))}
            className={`px-3 py-2 bg-gray-200 font-bold border rounded-lg hover:bg-orange-500 transition-all hover:text-white ${selectedCategory === "All" && "bg-orange-500 text-white"}` }
          >
            All
          </button>
          {categories.map((category, index) => (
            <button
              onClick={() => dispatch(setcategory(category))}
              key={index}
              className={`px-3 py-2 bg-gray-200 font-bold border rounded-lg hover:bg-orange-500 transition-all hover:text-white ${selectedCategory === category && "bg-orange-500 text-white"}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;

