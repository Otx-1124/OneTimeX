import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { toast } from "react-toastify";

import api from "../../api/api";

/* -------------------------------- Animations -------------------------------- */

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Register API Call
  const registerUser = async (data) => {
    return await api.post("/user/signup", data);
  };

  // Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password } = formData;

    // Basic Validation
    if (!name || !email || !password) {
      toast.error("All fields are required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Invalid email format");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    try {
      setLoading(true);

      await registerUser(formData);

      toast.success("Signup successful. Please verify your email.");
      navigate("/verify-email");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      className="fixed mt-10 min-h-screen w-full bg-green-50 flex items-center justify-center px-4 py-10"
      initial="hidden"
      animate="show"
      variants={fadeInUp}
    >
      <div className="relative w-full max-w-sm rounded-2xl bg-white p-6 md:p-8 shadow-lg">
        <Link to="/">
          <X className="absolute right-5 top-5 cursor-pointer" />
        </Link>

        <h2 className="mb-4 text-center text-xl font-semibold text-gray-800">
          Create Your Account
        </h2>

        <form className="space-y-3" onSubmit={handleSubmit}>
          <Input
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
          />

          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />

          <Input
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            disabled={loading}
            className="w-full rounded-lg bg-orange-600 py-2 text-sm font-medium text-white transition hover:bg-orange-700 disabled:opacity-70"
          >
            {loading ? "Sending verification email..." : "Sign Up"}
          </motion.button>
        </form>

        <p className="mt-4 text-center text-xs text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </motion.section>
  );
};

const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
}) => (
  <div>
    <label className="mb-1 block text-sm text-gray-700">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
    />
  </div>
);

export default Signup;
