import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PersonalDetailsSection = ({ currUser, setCurrUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    fatherName: "",
    income: "",
    stocks: "",
    investment: "",
  });

  const [alertVisible, setAlertVisible] = useState(false);

  useEffect(() => {
    setFormData({
      name: currUser.name || "",
      email: currUser.email || "",
      phone: currUser.phone || "",
      dob: currUser.dob || "",
      gender: currUser.gender || "",
      fatherName: currUser.fatherName || "",
      income: currUser.income || "",
      stocks: currUser.stocks || "",
      investment: currUser.investment || "",
    });
  }, [currUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(formData));
    setCurrUser(formData);
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 5000); // Auto hide after 3s
    window.location.reload()
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration:0.5, stiffness: 200, damping: 20}}
    >
      {/* Alert Section */}
      <AnimatePresence>
        {alertVisible && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md mb-4 flex items-center justify-between"
          >
            <span className="font-medium">Details saved successfully!</span>
            <button
              onClick={() => setAlertVisible(false)}
              className="text-green-700 hover:text-green-900"
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <h3 className="text-xl font-semibold mb-6 text-center">
        Personal Information
      </h3>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        <InputField label="Name" name="name" value={formData.name} onChange={handleChange} />
        <InputField label="Email" name="email" value={formData.email} onChange={handleChange} />
        <InputField label="Phone" name="phone" value={formData.phone} onChange={handleChange} />
        <InputField label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleChange} />

        <div className="flex flex-col">
          <label className="text-sm text-gray-600">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border px-3 py-2 rounded-md"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <InputField
          label="Father's Name"
          name="fatherName"
          value={formData.fatherName}
          onChange={handleChange}
        />

        <div className="flex flex-col">
          <label className="text-sm text-gray-600">Income Range</label>
          <select
            name="income"
            value={formData.income}
            onChange={handleChange}
            className="border px-3 py-2 rounded-md"
          >
            <option value="">Select Income Range</option>
            <option value="below1L">Below ₹1 Lakh</option>
            <option value="1-5L">₹1 Lakh - ₹5 Lakhs</option>
            <option value="5-10L">₹5 Lakhs - ₹10 Lakhs</option>
            <option value="10L+">Above ₹10 Lakhs</option>
          </select>
        </div>

        <InputField label="Stocks Invested In" name="stocks" value={formData.stocks} onChange={handleChange} />

        <div className="flex flex-col md:col-span-2">
          <label className="text-sm text-gray-600">Total Investment (₹)</label>
          <input
            type="number"
            name="investment"
            value={formData.investment}
            onChange={handleChange}
            className="border px-3 py-2 rounded-md"
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-center md:justify-end mt-6">
        <button
          onClick={handleSave}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
        >
          Save Details
        </button>
      </div>
    </motion.div>
  );
};

const InputField = ({ label, name, value, onChange, type = "text" }) => (
  <div className="flex flex-col">
    <label className="text-sm text-gray-600">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={`Enter ${label.toLowerCase()}`}
      className="border px-3 py-2 rounded-md"
    />
  </div>
);

export default PersonalDetailsSection;
