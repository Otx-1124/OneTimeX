import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import{Search} from 'lucide-react'

const Navbar = () => {

    const [suggestion, setSuggestion] = useState("")

    const suggestions = [
        "Bitcoin",
        "Ethereum",
        "Mutual Funds",
        "Stock Market",
        "SIP Plans",
    ];

    let handleSearch = ()=>{
        
    }


  return (
    <nav className="w-full flex items-center container mx-auto justify-between px-8 py-4 shadow-md bg-gradient-to-br from-green-100 to-yellow-50 fixed top-0 z-50">
      {/* Logo Section */}
      <div className="w-1/6 max-w-[150px]">
        <img
          className="w-full h-16 object-cover rounded-xl"
          src="/logoOne2.png"
          alt="logoOneTimeX"
        />
      </div>

      {/* Search Bar */}
      <div className="flex-1 mx-8 relative">
        <input
          onClick={handleSearch}
          type="text"
          placeholder="Search Markets..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div >
          <Search className="absolute top-2 right-5" />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6 text-gray-700 font-medium">
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
    </nav>
  );
};

export default Navbar;
