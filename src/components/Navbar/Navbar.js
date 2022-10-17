import React from 'react';

const Navbar = () => {
  return (
    <div className="mt-3 text-xl text-cyan-400 text-center ">
      <ul className="md:flex items-center justify-center space-x-5">
        <li>Home</li>
        <li>Customer's Review</li>
        <li>DashBoard</li>
        <li>Blog</li>
      </ul>
    </div>
  );
};

export default Navbar;
