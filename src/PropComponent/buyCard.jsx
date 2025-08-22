import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { TbHandClick } from "react-icons/tb";
import { Navigate, useNavigate } from "react-router-dom";

const BuySharePopup = ({ isOpen, onClose, stock }) => {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen) return null;

  const price = parseFloat(stock.price.replace(/[^\d.]/g, ""));
  const totalPrice = (price * quantity).toFixed(2);
  const navigate = useNavigate();

  const HandleOrder = () => {
    const newOrder = {
      ...stock,
      quantity,
      totalPrice,
      orderDate: new Date().toISOString(),
    };

    // Get existing orders (if any)
    const existingOrders =
      JSON.parse(localStorage.getItem("confirmed-Orders")) || [];

    // Add the new order
    existingOrders.push(newOrder);

    // Save back to localStorage
    localStorage.setItem("confirmed-Orders", JSON.stringify(existingOrders));

    navigate("/processing")
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-[400px] rounded-2xl shadow-lg border bg-white p-6 space-y-4">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Buy Shares</h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Stock Info */}
          <div className="flex items-center gap-3">
            <img
              src={stock.logo}
              alt={stock.name}
              className="w-10 h-10 rounded"
            />
            <div>
              <h3 className="font-medium">{stock.name}</h3>
              <p className="text-sm text-gray-500">{stock.price} per share</p>
            </div>
          </div>

          {/* Quantity */}
          <div className="space-y-1">
            <label className="text-sm font-medium">Quantity</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Summary */}
          <div className="flex justify-between items-center">
            <p className="text-gray-600">Total</p>
            <p className="font-semibold">₹{totalPrice}</p>
          </div>

          {/* Action */}
          <button
            onClick={HandleOrder}
            className="w-full rounded-xl bg-green-600 hover:bg-green-700 text-white py-2 font-medium"
          >
            Confirm {stock.option}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default BuySharePopup;
