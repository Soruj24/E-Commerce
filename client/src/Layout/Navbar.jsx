import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">E-Commerce</div>
          <div className="hidden md:flex space-x-4 items-center flex-grow justify-center">
            <Link
              to="/"
              className="text-gray-300 hover:text-white flex items-center"
            >
              <FaHome className="mr-1" /> Home
            </Link>
            <Link
              to="/cart"
              className="text-gray-300 hover:text-white flex items-center"
            >
              <FaShoppingCart className="mr-1" /> Cart
            </Link>
            <Link
              to="/login"
              className="text-gray-300 hover:text-white flex items-center"
            >
              <FaUser className="mr-1" /> Login
            </Link>
            
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <Link
              to="/"
              className="block px-2 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              <FaHome className="mr-1 inline" /> Home
            </Link>
            <Link
              to="/cart"
              className="block px-2 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              <FaShoppingCart className="mr-1 inline" /> Cart
            </Link>
            <Link
              to="/login"
              className="block px-2 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              <FaUser className="mr-1 inline" /> Login
            </Link>
           
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
