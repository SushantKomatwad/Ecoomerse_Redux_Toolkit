import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const items = useSelector((state) => state.cart);

  return (
    <>
      <nav className='flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-32 font-bold text-2xl bg-gray-600 h-20'>
        <Link to='/'>Home</Link>
        <Link to='/cart'>Cart</Link>
        <span></span>
        <span className='text-base'>Items: {items.length}</span>
      </nav>
    </>
  );
};

export default Navbar;
