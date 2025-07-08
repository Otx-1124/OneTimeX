import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    setCurrUser(formData); // Update parent state
    alert("Details saved successfully!");
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <h3 className="text-xl font-semibold mb-6 text-center">
        Personal Information
      </h3>

      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
        <InputField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <InputField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <InputField
          label="Date of Birth"
          name="dob"
          type="date"
          value={formData.dob}
          onChange={handleChange}
        />

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

        <InputField
          label="Stocks Invested In"
          name="stocks"
          value={formData.stocks}
          onChange={handleChange}
        />

        <div className="flex flex-col col-span-2">
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

      <div className="flex justify-end mt-6">
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
