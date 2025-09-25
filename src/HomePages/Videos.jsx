import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    img: "/thumb1.JPG",
    title: "Top Govt Stocks",
  },
  {
    id: 2,
    img: "/images/stock2.jpg",
    title: "Quick Trading Tips",
  },
  {
    id: 3,
    img: "/images/stock3.jpg",
    title: "Understanding Unlisted Stock",
  },
  {
    id: 4,
    img: "/images/stock4.jpg",
    title: "Invest Before Companies Go Public",
  },
  {
    id: 5,
    img: "/images/stock5.jpg",
    title: "Investment Myths",
  },
  {
    id: 6,
    img: "/images/stock6.jpg",
    title: "Portfolio Basics",
  },
  {
    id: 7,
    img: "/images/stock7.jpg",
    title: "How to Get Profit via Investing",
  },
  {
    id: 8,
    img: "/images/stock8.jpg",
    title: "How to Invest Before IPO",
  },
];

const ImageGrid = () => {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center px-20 py-10">
      <h1 className="mb-5 text-4xl font-semibold ">Gain More Knowledge.</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-sm font-semibold text-gray-800">
                {card.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
