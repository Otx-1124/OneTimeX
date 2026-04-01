import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Cross, CrosshairIcon, CrossIcon, X } from "lucide-react";
import { GrMultiple } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import api from "../../api/api";
import { useAuth } from "../ContextFile/authContext";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { setUser } = useAuth();

  const verifyUser = async () => {
    try {
      if (!email || !password) {
        toast.error("Email and Password are required");
        return;
      }
      setLoading(true);
      const res = await api.post("/user/login", { email, password });
      setUser(res.data.success.email);
      toast.success("Login successful");
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await verifyUser();
      setInterval(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    }
  };

  const handleGoogleAuth = async () => {
    window.location.href = "http://localhost:5500/api/v1/user/auth/google";
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
        <Link to="/">
          <X className="absolute top-5 right-5" />
        </Link>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="••••••••"
            />
          </div>

          <div className="flex gap-3 mt-4">
            {/* Email Login */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              disabled={loading}
              className="w-2/3 bg-orange-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:bg-orange-700 flex items-center justify-center"
            >
              {loading ? "Logging in..." : "Login"}
            </motion.button>

            {/* Google Login */}
            <button
              onClick={handleGoogleAuth}
              className="w-2/3 bg-white border hover:bg-gray-50 border-gray-300 rounded-xl flex items-center justify-center gap-2 overflow-hidden group transition-all duration-300 hover:w-2/3"
            >
              {/* Google Icon */}
              <img
                src="https://developers.google.com/identity/images/g-logo.png"
                alt="Google"
                className="w-6 h-6 shrink-0 "
              />

              {/* Hidden Text (appears on hover) */}
              <span className="text-sm font-medium text-gray-700  transition-all duration-300 whitespace-nowrap">
                Login with Google
              </span>
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-orange-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </motion.section>
  );
}
