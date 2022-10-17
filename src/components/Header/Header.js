import logo from '../../logo.svg';
import './Header.css';
import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <div className="bg-gray-800 p-3">
      <div className="md:flex items-center justify-center">
        <div>
          <img src={logo} className="App-logo w-24 mx-auto" alt="logo" />
        </div>
        <h1 className="text-3xl font-extrabold text-center text-cyan-400">
          Developer's Laptop
        </h1>
      </div>
      <Navbar></Navbar>
    </div>
  );
};

export default Header;
