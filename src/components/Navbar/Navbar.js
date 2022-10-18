import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-3 text-xl text-cyan-400 text-center">
      <div onClick={() => setOpen(!open)} className="w-8 h-6  md:hidden">
        {open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>}
      </div>
      <ul
        className={`md:flex items-center justify-center space-x-5 mt-3 ${
          open ? 'block' : 'hidden'
        }`}
      >
        <li className="hover:text-white">
          <Link to="/home">Home</Link>
        </li>
        <li className="hover:text-white">
          <Link to="/customer_reviews">Customer Reviews</Link>
        </li>
        <li className="hover:text-white">
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="hover:text-white">
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
      <hr className="mt-2" />
    </div>
  );
};

export default Navbar;
