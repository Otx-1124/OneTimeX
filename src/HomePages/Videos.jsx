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
    <div className=" bg-green-50 flex flex-col items-center justify-center px-20 py-10">
      <h1 className="mb-5 text-4xl font-semibold text-red-500">Join Our You Tube Community</h1>
      <a href="https://www.youtube.com/@onetimex.shorts" className=" w-full h-[356px] bg-gray-300 rounded-lg overflow-hidden shadow-lg ">
        <img src="/image.png" alt="" className="w-full h-full object-cover" />
      </a>
    </div>
  );
};

export default ImageGrid;
