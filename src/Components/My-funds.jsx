import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MyFunds = () => {
  const [activeTab, setActiveTab] = useState("deposit");
  const [amount, setAmount] = useState("");

  const quickAmounts = [10000, 50000, 100000, 200000];

  const paymentMethods = [
    { name: "UPI", time: "Instant" },
    { name: "Bank Transfer", time: "24 hrs" },
    { name: "Net Banking", time: "48 hrs" },
  ];

  // Door close animation (Y-axis rotation)
  const doorVariants = {
    hidden: {
      rotateY: 90,
      opacity: 0,
      transformOrigin: "left center",
    },
    visible: {
      rotateY: 0,
      opacity: 1,
      transformOrigin: "left center",
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    exit: {
      rotateY: -90,
      opacity: 0,
      transformOrigin: "right center",
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen py-20">
      {/* Main container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side - Balance Summary */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-bold mb-4">My Funds</h2>
          <div className="mb-6">
            <p className="text-gray-500">Total Balance</p>
            <h1 className="text-3xl font-bold text-green-600">₹0,00,000</h1>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-3 bg-gray-100 rounded-lg">
              <p className="text-sm text-gray-500">Credits</p>
              <p className="font-semibold">₹0,00,000</p>
            </div>
            <div className="p-3 bg-gray-100 rounded-lg">
              <p className="text-sm text-gray-500">Debits</p>
              <p className="font-semibold">₹0,00,000</p>
            </div>
            <div className="p-3 bg-gray-100 rounded-lg">
              <p className="text-sm text-gray-500">Cashback</p>
              <p className="font-semibold">₹0,000</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Recent Transactions</h3>
            <div className="text-gray-500 text-sm">No transactions yet</div>
          </div>
        </div>

        {/* Right Side - Deposit / Withdraw */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <div className="flex space-x-4 mb-4">
            <button
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === "deposit"
                  ? "bg-[#009999] text-white"
                  : "bg-gray-100"
              }`}
              onClick={() => setActiveTab("deposit")}
            >
              Deposit
            </button>
            <button
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === "withdraw"
                  ? "bg-red-500 text-white"
                  : "bg-gray-100"
              }`}
              onClick={() => setActiveTab("withdraw")}
            >
              Withdraw
            </button>
          </div>

          {/* Door Closing Animation Section */}
          <div className="relative min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={doorVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute w-full"
              >
                {/* Amount Input */}
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium">
                    Enter Amount
                  </label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                    placeholder="₹0.00"
                  />
                </div>

                {/* Quick Amounts */}
                <div className="flex gap-2 mb-4 flex-wrap">
                  {quickAmounts.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setAmount(amt)}
                      className="px-3 py-1 bg-gray-100 rounded-lg text-sm hover:bg-gray-200"
                    >
                      +₹{amt.toLocaleString()}
                    </button>
                  ))}
                </div>

                {/* Payment Methods */}
                <div>
                  <h3 className="font-semibold mb-2">Payment Methods</h3>
                  <div className="space-y-2">
                    {paymentMethods.map((method, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center border p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                      >
                        <span>{method.name}</span>
                        <span className="text-sm text-gray-500">
                          {method.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-6">
                  <button
                    className={`w-full py-3 rounded-lg ${
                      activeTab === "deposit"
                        ? "bg-[#009999] hover:bg-green-600"
                        : "bg-red-500 hover:bg-red-600"
                    } text-white font-semibold`}
                  >
                    {activeTab === "deposit" ? "Add Funds" : "Withdraw Funds"}
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFunds;
