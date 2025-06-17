import React, { useState } from "react";
import { motion } from "framer-motion";
import { User2, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProfileSection = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleProfile = () => setIsOpen(!isOpen);
  const savedUser = JSON.parse(localStorage.getItem("user"));
  console.log(savedUser);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload();
  };

  const Details = [
    { name: "Account Details" },
    { name: "Personal Details" },
    { name: "Demat Details" },
    { name: "KYC Details" },
    { name: "Charges & Fees" },
    { name: "Close OneTimeX Account" },
  ];

  return (
    <div className="relative">
      {/* Profile Icon */}
      <button onClick={toggleProfile} className="flex items-center flex-col">
        <User2 />
        {props.name}
      </button>

      {/* Sidebar */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 w-80 h-full bg-gradient-to-br from-blue-100 to-green-100 shadow-lg z-50 p-6 border-l border-gray-200"
        >
          {/* Close Button */}
          <button onClick={toggleProfile} className="absolute top-4 right-4">
            <X size={24} className="hover:text-red-600" />
          </button>

          {/* Profile Info */}
          <div className="mt-12">
            <h2 className="text-xl font-bold mt-4">{props.name}</h2>
            <p className="text-gray-500">{props.email}</p>

            <div className="mt-6 space-y-4">
              {Details.map((items) => {
                return (
                  <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-900">
                    {items.name}
                  </button>
                );
              })}

              <button
                onClick={handleLogout}
                className="w-full py-2 bg-red-500 text-white rounded-lg"
              >
                Logout
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ProfileSection;
