import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // ⬅ Import Framer Motion
import { useUnlisted } from "../Context/UnlistedContext";
import { useNavigate } from "react-router-dom";
import {
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { SlEarphones } from "react-icons/sl";
import { CheckCircle } from "lucide-react";

const UnlistedProp = () => {
  const { selectedDetail } = useUnlisted();
  const navigate = useNavigate();

  const [showNotification , setShowNotification] = useState(false)

  const handleAddtoCart = () => {
    setShowNotification(true)
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
    const existingWatchList =
      JSON.parse(localStorage.getItem("WatchList")) || [];
    const updatedWatchList = [selectedDetail, ...existingWatchList];
    localStorage.setItem("WatchList", JSON.stringify(updatedWatchList));
  };

  if (!selectedDetail)
    return (
      <div className="fixed inset-0 z-50 flex items-center flex-col gap-2 justify-center bg-green-50 backdrop-blur-sm">
        <div className="w-16 h-16 border-[5px] border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-800 text-lg font-semibold tracking-wide animate-pulse">
          Loading, please wait...
        </p>
      </div>
    );

  return (
    <motion.div
      initial={{ scale: 1.1, opacity: 0 }} // Start zoomed in & invisible
      animate={{ scale: 1, opacity: 1 }} // Zoom out to normal & fade in
      exit={{ scale: 0.9, opacity: 0 }} // Optional: zoom out on exit
      transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
      className="max-w-7xl mx-auto p-8 mt-10 bg-white rounded-3xl shadow-xl"
    >
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-3 mt-2 px-5 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full text-sm transition"
      >
        ← Back
      </button>

      <div className="flex flex-col lg:flex-row gap-10 ">
        {/* Left Side Graph */}
        <div className="w-full lg:w-[40vw]">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Price History (1 Year)
          </h3>
          <div className="h-80 rounded-lg border">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={selectedDetail.graphData}>
                <XAxis dataKey="date" />
                <YAxis domain={["dataMin - 10", "dataMax + 10"]} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#0d9488"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Side Details */}
        <div className="flex-1 space-y-5">
          <div>
            <div className="flex flex-col lg:flex-row md:flex-row gap-3 items-start lg:items-center justify-between">
              <div className="flex gap-3 items-center">
                <img
                  className="w-20 rounded-lg"
                  src={selectedDetail.logo}
                  alt={selectedDetail.name}
                />
                <h2 className="text-3xl font-bold text-gray-900">
                  {selectedDetail.name}
                </h2>
              </div>
              <div
                onClick={handleAddtoCart}
                className="bg-green-600 cursor-pointer hover:bg-green-700 rounded-lg px-3 py-2 text-white w-fit"
              >
                Add to Watchlist
              </div>
            </div>

            <p className="text-gray-600 text-sm mt-1">
              Founded: {selectedDetail.founded} | Sector:{" "}
              {selectedDetail.sector}
            </p>
            <p className="text-2xl font-semibold text-green-600 mt-2">
              {selectedDetail.price}
            </p>
          </div>

          <p className="text-gray-700">{selectedDetail.description}</p>

          <div className="space-y-1">
            <p className="text-sm text-blue-700">
              IPO Status: {selectedDetail.ipoStatus}
            </p>
            <a
              href={`https://${selectedDetail.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-500 hover:underline"
            >
              Visit Website
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">FY25 Financials</h3>
            <ul className="text-sm text-gray-800 grid grid-cols-2 gap-x-4 gap-y-1">
              <li>Assets: ₹{selectedDetail.financialsFY25.assets} Cr</li>
              <li>Net Worth: ₹{selectedDetail.financialsFY25.netWorth} Cr</li>
              <li>
                Revenue Growth: {selectedDetail.financialsFY25.revenueGrowth}%
              </li>
              <li>ROE: {selectedDetail.financialsFY25.ROE}%</li>
              <li>Profit YoY: {selectedDetail.financialsFY25.profitYoY}%</li>
            </ul>
          </div>

          <div className="flex gap-4 mt-6">
            <button className="px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition">
              Buy
            </button>
            <button className="px-6 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition">
              Sell
            </button>
          </div>
        </div>
      </div>
      {showNotification? <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-5 right-5 bg-white shadow-lg rounded-xl border border-gray-200 flex items-center gap-3 px-4 py-3 z-50"
          >
            <CheckCircle className="text-green-600" size={22} />
            <div>
              <p className="font-semibold text-gray-800">Added to Cart</p>
              <p className="text-sm text-gray-500">
                Your item has been successfully added.
              </p>
            </div>
          </motion.div>:""}
    </motion.div>
  );
};

export default UnlistedProp;
