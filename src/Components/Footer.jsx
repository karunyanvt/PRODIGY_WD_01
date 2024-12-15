import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-lg">
          &copy; {new Date().getFullYear()} Prodigy. All rights reserved.
        </p>
        <div className="mt-4">
          <a href="#home" className="text-gray-400 hover:text-white transition duration-300 mx-4">
            Home
          </a>
          <a href="#about" className="text-gray-400 hover:text-white transition duration-300 mx-4">
            About
          </a>
          <a href="#services" className="text-gray-400 hover:text-white transition duration-300 mx-4">
            Services
          </a>
          <a href="#contact" className="text-gray-400 hover:text-white transition duration-300 mx-4">
            Contact
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
