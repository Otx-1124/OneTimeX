import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const KYCDetails = () => {
  const [formData, setFormData] = useState({
    pan: "",
    aadhaar: "",
    address: "",
  });

  // Load data from localStorage when component mounts
  useEffect(() => {
    const savedData = localStorage.getItem("kycDetails");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Update form state when user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Save data to localStorage
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("kycDetails", JSON.stringify(formData));
    alert("✅ KYC details saved successfully!");
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
          KYC Information
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4 flex-1">

          {/* PAN */}
          <div>
            <label className="block text-gray-700 mb-1">PAN Number</label>
            <input
              type="text"
              name="pan"
              value={formData.pan}
              onChange={handleChange}
              placeholder="ABCDE1234F"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg uppercase focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Aadhaar */}
          <div>
            <label className="block text-gray-700 mb-1">Aadhaar Number</label>
            <input
              type="text"
              name="aadhaar"
              value={formData.aadhaar}
              onChange={handleChange}
              placeholder="12-digit Aadhaar number"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 mb-1">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your full address"
              rows="3"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            ></textarea>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
          >
            Save KYC Details
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default KYCDetails;
