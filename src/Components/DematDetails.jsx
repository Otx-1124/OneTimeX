import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const DematDetails = () => {
  const [formData, setFormData] = useState({
    dpName: "",
    dpId: "",
    clientId: "",
    nomineeName: "",
  });

  // Load saved data from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("dematDetails");
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  // Update state on field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Save to localStorage on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("dematDetails", JSON.stringify(formData));
    alert("✅ Demat details saved locally!");
  };

  return (
    <div className="w-full h-[90vh] flex justify-center items-center bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white border border-gray-300 rounded-xl shadow-md p-8 w-[60vw] h-[90vh] flex flex-col overflow-y-auto"
      >
        <h3 className="text-2xl font-semibold mb-6 text-center text-blue-700">
          Demat Account Details
        </h3>

        <form onSubmit={handleSubmit} className="space-y-5 flex-1">
          {/* DP Name */}
          <div>
            <label className="block text-gray-700 mb-1">DP Name</label>
            <input
              type="text"
              name="dpName"
              value={formData.dpName}
              onChange={handleChange}
              placeholder="Enter DP Name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* DP ID */}
          <div>
            <label className="block text-gray-700 mb-1">DP ID</label>
            <input
              type="text"
              name="dpId"
              value={formData.dpId}
              onChange={handleChange}
              placeholder="Enter DP ID"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Client ID */}
          <div>
            <label className="block text-gray-700 mb-1">Client ID</label>
            <input
              type="text"
              name="clientId"
              value={formData.clientId}
              onChange={handleChange}
              placeholder="Enter Client ID"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Nominee Name */}
          <div>
            <label className="block text-gray-700 mb-1">Nominee Name</label>
            <input
              type="text"
              name="nomineeName"
              value={formData.nomineeName}
              onChange={handleChange}
              placeholder="Enter Nominee Name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
          >
            Save Demat Details
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default DematDetails;
