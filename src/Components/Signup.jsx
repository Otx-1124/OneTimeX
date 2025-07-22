import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user , setUser] = useState({name:"" , email:"" , password:""});
  
  const navigate = useNavigate()
 const handleSubmit = (e) => {
  e.preventDefault();

  const currUser = { name, email, password }; // create the object

  setUser(currUser); // set state (optional if you just want to store in localStorage)
  localStorage.setItem("user", JSON.stringify(currUser)); // store in localStorage

  console.log("User saved:", currUser);
  navigate("/")
  window.location.reload()
};



  return (
    <motion.section
      className="min-h-screen bg-green-50 flex items-center justify-center px-4 py-10 w-full mt-10 fixed"
      initial="hidden"
      animate="show"
      variants={fadeInUp}
    >
      <div className="bg-white p-6 md:p-8 rounded-2xl relative shadow-lg w-full max-w-sm">
        <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
          Create Your Account
        </h2>
        <Link to="/">
          <X className="absolute top-5 right-5" />
        </Link>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Full Name
            </label>
            <input
              onChange={(e)=>{setName(e.target.value)}}
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              onChange={(e)=>{setEmail(e.target.value)}}
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="1234567890"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input
              onChange={(e)=>{setPassword(e.target.value)}}
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="••••••••"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            className="w-full bg-orange-600 text-white text-sm font-medium py-2 rounded-lg hover:bg-orange-700 transition"
          >
            Sign Up
          </motion.button>
        </form>

        <p className="text-center text-xs text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-orange-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </motion.section>
  );
}
