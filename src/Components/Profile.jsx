import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { User2, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { fieldset } from "framer-motion/client";

const ProfileSection = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const riskAvailable = localStorage.getItem("riskDisclosureAccepted");

  const toggleProfile = () => setIsOpen(!isOpen);
  const savedUser = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const savedPic = localStorage.getItem("profilePic");

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("riskDisclosureAccepted");
    navigate("/login");
    window.location.reload();
  };

  const Details = [{ name: "Personal Details and more.." }];

  const firstLetter = props.name.slice(0, 1);

  useEffect(() => {
    console.log(firstLetter);
  });

  return (
    <div className="relative">
      {/* Profile Icon */}
      <button onClick={toggleProfile} className="flex items-center flex-col">
        {savedPic ? (
          <img
            className="w-[35px] h-[35px] rounded-[50%] "
            src={savedPic}
            alt=""
          />
        ) : (
          <div className="w-[35px] h-[35px] rounded-[50%] border border-blue-400 text-center text-xl font-semibold">
            <p>{firstLetter}</p>
          </div>
        )}
      </button>

      {/* Sidebar */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 w-80 h-auto bg-white rounded-lg mt-20 mr-10 shadow-lg z-50 p-6 border-l border-gray-200"
        >
          {/* Close Button */}
          <button onClick={toggleProfile} className="absolute top-4 right-4">
            <X size={24} className="hover:text-red-600" />
          </button>

          {/* Profile Info */}
          <div className="mt-5">
            <h1 className="font-bold text-2xl text-[#009999]">
              Account Details
            </h1>
            <h2 className="text-xl font-bold mt-4">{props.name}</h2>
            <p className="text-gray-500">{props.email}</p>

            <div className="mt-6 space-y-4 flex flex-col">
              {Details.map((items) => {
                return (
                  <Link
                    to="/profile-section"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className="w-full py-2 bg-white  text-center rounded-lg hover:bg-gray-200 border border-gray-300"
                  >
                    {items.name}
                  </Link>
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
