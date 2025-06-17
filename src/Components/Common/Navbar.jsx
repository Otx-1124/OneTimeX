import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Search,
  Menu,
  X,
  ContactRound,
  Link2,
  User,
  User2,
  HeadphonesIcon,
} from "lucide-react";
import ProfileSection from "../Profile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [suggestion, setSuggestion] = useState("");
  const navigate = useNavigate();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/explore", label: "Explore" },
    { path: "/blog", label: "Blog" },
    { path: "/mutualFunds", label: "Trade & Invest" },
    { path: "/about", label: "About" },
    { path: "/connectUs", label: <HeadphonesIcon /> },
  ];

  const suggestions = [
    "Bitcoin",
    "Ethereum",
    "Mutual Funds",
    "Stock Market",
    "SIP Plans",
  ];

  const handleSearch = () => {
    // Search logic here
  };

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-blue-100 to-green-100  fixed top-0 z-50 shadow-md ">
      <nav className="max-w-screen-xl mx-auto flex items-center justify-between px-4 md:px-8 md:py-4 sm:py-3">
        {/* Logo Section */}
        <Link to="/" className="w-1/6 max-w-[150px]">
          <img
            className="w-full h-16 object-cover rounded-xl"
            src="/logoOne2.png"
            alt="logoOneTimeX"
          />
        </Link>

        {/* Search Bar */}
        <div className="flex-1 mx-8 relative hidden lg:block ml-20">
          <input
            onClick={handleSearch}
            type="text"
            placeholder="Search Markets..."
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div>
            <Search className="absolute top-2 right-5 text-gray-500" />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex space-x-6 text-gray-700 font-medium items-center">
          {navItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "hover:text-blue-500"
              }
            >
              {label}
            </NavLink>
          ))}

          {user ? (
            <Link
              to="/"
              className="flex flex-col text-blue-600 justify-center items-center"
            >
              <ProfileSection name={user.name} email={user.email} />
            </Link>
          ) : (
            <Link
              to="/login"
              className="rounded-3xl px-5 py-2 border border-blue-600 hover:bg-gradient-to-br from-blue-400 to-green-700 mr-2 hover:text-white"
            >
              Login
            </Link>
          )}
        </div>
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="w-full bg-slate-200  px-4 pb-4 space-y-4 text-gray-700 font-medium lg:hidden">
          <div className="mt-4 relative">
            <input
              onClick={handleSearch}
              type="text"
              placeholder="Search Markets..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute top-2 right-3 text-gray-500" />
          </div>
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block text-blue-600 border-l-4 border-blue-600 pl-2"
                : "block hover:text-blue-500"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/trade"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block text-blue-600 border-l-4 border-blue-600 pl-2"
                : "block hover:text-blue-500"
            }
          >
            Trade & Invest
          </NavLink>
          <NavLink
            to="/blog"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block text-blue-600 border-l-4 border-blue-600 pl-2"
                : "block hover:text-blue-500"
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/mutualFunds"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block text-blue-600 border-l-4 border-blue-600 pl-2"
                : "block hover:text-blue-500"
            }
          >
            Mutual Funds & SIP
          </NavLink>
          <NavLink
            to="/product"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block text-blue-600 border-l-4 border-blue-600 pl-2"
                : "block hover:text-blue-500"
            }
          >
            Product
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block text-blue-600 border-l-4 border-blue-600 pl-2"
                : "block hover:text-blue-500"
            }
          >
            About
          </NavLink>
          {user ? (
            <Link
              to="/"
              className="flex flex-col text-blue-600 mt-5 items-center"
            >
              <ProfileSection name={user.name} email={user.email} />
            </Link>
          ) : (
            <Link
      
              to="/login"
              className="rounded-3xl px-5 py-2 flex justify-center hover:bg-gradient-to-br from-blue-400 to-green-700  border border-blue-600 hover:bg-green-300 mr-2 hover:border-none"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
