import React from "react";
import { Bell, TrendingUp, Eye, Plus, Delete } from "lucide-react";
import { motion } from "framer-motion";
import Cart from "../Tests/Cart";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 p-8 font-sans mt-10 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex justify-between items-center mb-8 flex-col md:flex-row gap-3"
        >
          <div>
            <h1 className="text-3xl font-bold text-[#0f172a]">
              👋 Welcome back
            </h1>
            <p className="text-[#475569] mt-1">
              Your personal investment dashboard
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#009999] text-white rounded-xl shadow hover:bg-[#007777] transition">
            <Plus size={18} /> Add Investment
          </button>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            {
              title: "💼 Portfolio Value",
              value: "₹0,00,000",
              subtitle: "0% this month",
              color: "text-[#009999]",
            },
            {
              title: "📈 Total Gains",
              value: "₹00,000",
              subtitle: "Across all investments",
              color: "text-green-600",
            },
            {
              title: "🔔 Notifications",
              value: "No Notification yet",
              subtitle: "",
              color: "text-gray-600",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={index + 1}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <h2 className="text-xl font-semibold text-[#0f172a] mb-2">
                {item.title}
              </h2>
              <p className={`text-2xl font-bold ${item.color}`}>{item.value}</p>
              
              {item.subtitle && (
                <p className="text-sm text-gray-500 mt-1">{item.subtitle}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Watchlist */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition mb-10"
        >
          <h2 className="text-xl font-bold text-[#0f172a] mb-4 flex items-center gap-2">
            <Eye size={20} /> Watchlist
          </h2>
          <div className="">
            <Cart/>
          </div>
        </motion.div>

        {/* My Orders Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4.5}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition mb-10"
        >
          <h2 className="text-xl font-bold text-[#0f172a] mb-4 flex items-center gap-2">
            🛒 My Orders
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                name: "NSE",
                quantity: 10,
                price: "₹850",
                status: "Processing",
              },
              {
                name: "Tata Capital",
                quantity: 5,
                price: "₹320",
                status: "Completed",
              },
              {
                name: "HDB Financial",
                quantity: 3,
                price: "₹1120",
                status: "Pending",
              },
            ].map((order, i) => (
              <div key={i} className="border rounded-xl p-4 hover:shadow-md">
                <h3 className="font-semibold text-[#0f172a]">{order.name}</h3>
                <p className="text-sm text-gray-600">Qty: {order.quantity}</p>
                <p className="text-sm text-gray-600">Price: {order.price}</p>
                <p
                  className={`text-sm font-medium mt-1 ${
                    order.status === "Completed"
                      ? "text-green-600"
                      : order.status === "Pending"
                      ? "text-yellow-600"
                      : "text-blue-600"
                  }`}
                >
                  {order.status}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-bold text-[#0f172a] mb-4 flex items-center gap-2">
            <TrendingUp size={20} /> Recent Activity
          </h2>
          <ul className="list-disc pl-6 text-[#334155] space-y-2">
            <li>No Recent Activity</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
