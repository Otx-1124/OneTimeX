import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import api from "../../api/api";
import { toast } from "react-toastify";

const PersonalDetailsSection = ({ user = {}, setUser }) => {
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
  const [error, setError] = useState("");

  useEffect(() => {
    setFormData({
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || "",
      dob: user?.dob || "",
      gender: user?.gender || "",
      fatherName: user?.fatherName || "",
      income: user?.income || "",
      stocks: user?.stocks || "",
      investment: user?.investment || "",
    });
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.includes("@")) return "Invalid email";
    if (formData.phone.length < 10) return "Invalid phone number";
    return "";
  };

  const handleSave = async() => {
    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const res = await api.put("/user/updateAccountInfo", formData);
      if (res.data.statusCode === 200) {
        toast.success(res.data.message || "Details updated successfully");
      }
    } catch (error) {
      toast.error("Failed to update details");
    }
    setUser(formData);

    setError("");
    setAlertVisible(true);

    setTimeout(() => setAlertVisible(false), 3000);
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence>
        {alertVisible && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md mb-4 flex justify-between"
          >
            <span>Details saved successfully!</span>
            <button onClick={() => setAlertVisible(false)}>&times;</button>
          </motion.div>
        )}
      </AnimatePresence>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
          {error}
        </div>
      )}

      <h3 className="text-xl font-semibold mb-6 text-center">
        Personal Information
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField label="Name" name="name" value={formData.name} onChange={handleChange} />
        <InputField label="Email" name="email" value={formData.email} onChange={handleChange} />
        <InputField label="Phone" name="phone" value={formData.phone} onChange={handleChange} />
        <InputField label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleChange} />

        <SelectField label="Gender" name="gender" value={formData.gender} onChange={handleChange} options={["male","female","other"]} />

        <InputField label="Father's Name" name="fatherName" value={formData.fatherName} onChange={handleChange} />

        <SelectField label="Income Range" name="income" value={formData.income} onChange={handleChange} options={["below1L","1-5L","5-10L","10L+"]} />

        <InputField label="Stocks Invested In" name="stocks" value={formData.stocks} onChange={handleChange} />

        <div className="md:col-span-2">
          <InputField label="Total Investment (₹)" name="investment" type="number" value={formData.investment} onChange={handleChange} />
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button
          onClick={handleSave}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
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
      className="border px-3 py-2 rounded-md"
    />
  </div>
);

const SelectField = ({ label, name, value, onChange, options }) => (
  <div className="flex flex-col">
    <label className="text-sm text-gray-600">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="border px-3 py-2 rounded-md"
    >
      <option value="">Select {label}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

export default PersonalDetailsSection;