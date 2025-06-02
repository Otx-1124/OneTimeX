import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

const traderProfiles = [
  { title: "Day Trader", image: "/day.jpg" },
  { title: "Momentum Trader", image: "/momentum.jpg" },
  { title: "Option Trader", image: "/option.jpg" },
  { title: "Swing Trader", image: "/swing.jpg" },
  { title: "Trend Trader", image: "/trend.jpg" },
  { title: "Buy and Hold Investor", image: "/invest.jpg" },
];

const ServicesOfOnetimeX = () => {
  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-green-50  px-20 md:py-5 sm:py-10">
      <h1 className="text-3xl font-bold text-gray-700 text-center mb-10">
        Trader Profiles We Serve
      </h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {traderProfiles.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col gap-3 items-center text-center"
            variants={itemVariants}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full aspect-square object-cover rounded-lg shadow-md"
            />
            <p className="text-lg font-semibold text-gray-800">{item.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesOfOnetimeX;
