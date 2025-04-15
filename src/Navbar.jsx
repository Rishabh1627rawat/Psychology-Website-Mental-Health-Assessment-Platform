import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-transparent p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          Logo
        </div>

        {/* Navigation Links and Buttons */}
        <div className="flex space-x-4 items-center">
          <Link to="/" className="text-white text-[10px] hover:text-gray-300">Home</Link>
          <Link to="/about" className="text-white text-[10px] hover:text-gray-300">About Us</Link>
          <Link to="/services" className="text-white text-[10px] hover:text-gray-300">Services</Link>
          <Link to="/ContactUs" className="text-white text-[10px] hover:text-gray-300">Contact Us</Link>
          <Link to="/Subscription" className="text-white text-[10px] hover:text-gray-300">Subscription</Link>
          <Link
            to="/book"
            className="bg-[#9b9a84] text-white px-3 py-1.5 text-sm rounded-lg hover:bg-blue-600 transition"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
