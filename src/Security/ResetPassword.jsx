import React, { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import api from "../../api/api";
import { form } from "framer-motion/client";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const[loading, setLoading] = useState(false);

  const token = new URLSearchParams(window.location.search).get("token");

  const navigate = useNavigate();

  const handleResetPassword = async(e) => {
    e.preventDefault();
    setLoading(true);
    // Add your password reset logic here
    try {      // Example: Call an API to reset the password
        if(password !== confirmPassword){
            toast.error("Passwords do not match");
            return;
        }
        if(password.length < 6){
            toast.error("Password must be at least 6 characters");
            return;
        }
        if(!token){
            toast.error("Invalid or missing token");
            return;
        }

        const res = await api.post(`/user/resetPassword`, { password, confirmPassword , token });
        toast.success(res.data.message);
        navigate("/login");
        
    } catch (error) {
      console.error("Error resetting password:", error);
      toast.error("Failed to reset password");
    }finally{
        setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 mt-10">
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-2">
          Reset Password
        </h2>

        <p className="text-center text-gray-500 mb-6 text-sm">
          Enter your details to reset your password
        </p>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleResetPassword}>
         

          {/* New Password */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              New Password
            </label>

            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 pr-10"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-2.5 right-3 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
