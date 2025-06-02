import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Search, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [suggestion, setSuggestion] = useState("");

  const suggestions = [
    "Bitcoin",
    "Ethereum",
    "Mutual Funds",
    "Stock Market",
    "SIP Plans",
  ];

  let handleSearch = () => {
    // Search logic here
  };

  return (
    <nav className="w-full flex items-center container mx-auto justify-between px-8 lg:py-4 sm:py-3 md:py-4 shadow-md bg-gradient-to-br from-green-100 to-yellow-50 fixed top-0 z-50">
      {/* Logo Section */}
      <div className="w-1/6 max-w-[150px]">
        <img
          className="w-full h-16 object-cover rounded-xl"
          src="/logoOne2.png"
          alt="logoOneTimeX"
        />
      </div>

      {/* Search Bar */}
      <div className="flex-1 mx-8 relative hidden lg:block">
        <input
          onClick={handleSearch}
          type="text"
          placeholder="Search Markets..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div>
          <Search className="absolute top-2 right-5" />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex space-x-6 text-gray-700 font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 border-b-2 border-blue-600"
              : "hover:text-blue-500"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/trade"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 border-b-2 border-blue-600"
              : "hover:text-blue-500"
          }
        >
          Trade & Invest
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 border-b-2 border-blue-600"
              : "hover:text-blue-500"
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="/mutualFunds"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 border-b-2 border-blue-600"
              : "hover:text-blue-500"
          }
        >
          Mutual Funds & SIP
        </NavLink>
        <NavLink
          to="/product"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 border-b-2 border-blue-600"
              : "hover:text-blue-500"
          }
        >
          Product
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 border-b-2 border-blue-600"
              : "hover:text-blue-500"
          }
        >
          About
        </NavLink>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white px-4 pb-4 space-y-2 text-gray-700 font-medium lg:hidden">
          <div className="mt-4 relative">
            <input
              onClick={handleSearch}
              type="text"
              placeholder="Search Markets..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute top-2 right-3 text-gray-500" />
          </div>
          <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "block text-blue-600 border-l-4 border-blue-600 pl-2" : "block hover:text-blue-500"}>Home</NavLink>
          <NavLink to="/trade" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "block text-blue-600 border-l-4 border-blue-600 pl-2" : "block hover:text-blue-500"}>Trade & Invest</NavLink>
          <NavLink to="/blog" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "block text-blue-600 border-l-4 border-blue-600 pl-2" : "block hover:text-blue-500"}>Blog</NavLink>
          <NavLink to="/mutualFunds" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "block text-blue-600 border-l-4 border-blue-600 pl-2" : "block hover:text-blue-500"}>Mutual Funds & SIP</NavLink>
          <NavLink to="/product" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "block text-blue-600 border-l-4 border-blue-600 pl-2" : "block hover:text-blue-500"}>Product</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "block text-blue-600 border-l-4 border-blue-600 pl-2" : "block hover:text-blue-500"}>About</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
