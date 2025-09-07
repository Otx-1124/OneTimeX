import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Delete } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const UserOrder = ({ confirmOrder, orderStatus }) => {
  // ✅ Store orders in local state
  const [orders, setOrders] = useState(confirmOrder || []);

  // ✅ Keep state in sync if confirmOrder changes
  useEffect(() => {
    setOrders(confirmOrder || []);
  }, [confirmOrder]);

  // ✅ Delete function
  const handleDelete = (orderToDelete) => {
    const updatedOrders = orders.filter((item) => item !== orderToDelete);
    setOrders(updatedOrders);
  };

  // ✅ Calculate grand total
  const grandTotal = orders.reduce((acc, order) => {
    const price = parseFloat(order.price.replace(/[^\d.]/g, "")) || 0;
    return acc + price * order.quantity;
  }, 0);

  return (
    <div className="mt-20 container mx-auto px-6">
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: "easeOut" }}
        variants={fadeInUp}
        className="bg-white shadow-xl rounded-2xl p-6 w-full lg:w-[70%] mx-auto"
      >
        <h1 className="text-2xl font-bold text-gray-800 border-b pb-4 mb-6">
          Your {orderStatus} Order
        </h1>

        {orders && orders.length > 0 ? (
          <div className="space-y-4">
            {orders.map((order, index) => {
              const price =
                parseFloat(order.price.replace(/[^\d.]/g, "")) || 0;
              const totalPrice = (price * order.quantity).toFixed(2);

              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                  }}
                  className="flex items-center justify-between bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition"
                >
                  {/* Left - Logo + Name */}
                  <div className="flex items-center gap-4">
                    <img
                      src={order.logo}
                      alt={order.name}
                      className="w-14 h-14 object-contain bg-white border rounded-xl p-1"
                    />
                    <div className="w-20">
                      <h2 className="font-semibold text-gray-900">
                        {order.name}
                      </h2>
                      <p className="text-sm text-gray-500">{order.option}</p>
                    </div>
                  </div>

                  {/* Middle - Quantity */}
                  <div className="text-gray-600 font-medium">
                    Qty: {order.quantity}
                  </div>

                  {/* Right - Price */}
                  <div className="text-right w-[20%]">
                    <p className="font-bold text-lg text-gray-800">
                      ₹{totalPrice}
                    </p>
                    <p className="text-sm text-gray-500">(₹{price} each)</p>
                  </div>

                  {/* Delete Button */}
                  <div>
                    <Delete
                      onClick={() => handleDelete(order)}
                      className="cursor-pointer hover:text-red-500 transition"
                    />
                  </div>
                </motion.div>
              );
            })}

            {/* ✅ Grand Total */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: orders.length * 0.2 }}
              className="flex justify-between items-center border-t pt-4 mt-6"
            >
              <h2 className="text-xl font-bold text-gray-800">Grand Total</h2>
              <p className="text-2xl font-extrabold text-green-600">
                ₹{grandTotal.toFixed(2)}
              </p>
            </motion.div>
          </div>
        ) : (
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="text-center text-gray-600"
          >
            No Orders Found
          </motion.h1>
        )}
      </motion.div>
    </div>
  );
};

export default UserOrder;
