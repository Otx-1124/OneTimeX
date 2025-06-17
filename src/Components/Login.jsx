import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cross, CrosshairIcon, CrossIcon, X } from "lucide-react";
import { GrMultiple } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function LoginPage() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [user, setUser] = useState({ email: "", password: "" });
const [error, setError] = useState("");
const navigate = useNavigate()

const handleLogin = (e) => {
  e.preventDefault();

  // Get the saved user from localStorage
  const savedUser = JSON.parse(localStorage.getItem("user"));

  // If no user is saved
  if (!savedUser) {
    setError("No user found. Please register first.");
    return;
  }

  // Check if credentials match
  if (savedUser.email === email && savedUser.password === password) {
    setUser({ email, password });
    setError(""); // Clear any existing error
    console.log("Login successful");
    navigate("/")
    // Optionally: redirect or show profile
  } else {
    setError("Invalid email or password");
  }
};




  return (
    <motion.section
      className="min-h-screen bg-green-50 flex items-center justify-center px-6 py-20 mt-10 w-full fixed"
      initial="hidden"
      animate="show"
      variants={fadeInUp}
    >
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md  relative">
        <h2 className="text-3xl font-bold text-gray-800 mb-3 text-center">
          Welcome Back
        </h2>
        <p className="text-red-500 mx-auto">{error}</p>
        <Link to="/"><X className="absolute top-5 right-5"/></Link>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              onChange={(e)=>{setEmail(e.target.value)}}
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              onChange={(e)=>{setPassword(e.target.value)}}
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="••••••••"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            className="w-full bg-orange-600 text-white font-semibold py-2 rounded-xl transition-all duration-300 hover:bg-orange-700"
          >
            Log In
          </motion.button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <a href="/signup" className="text-orange-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </motion.section>
  );
}
