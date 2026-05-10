import React from "react";

const StockCard = ({ stock }) => {
  const isPositive = stock.change.includes("+");

  return (
    <div className="w-[180px] h-[140px] bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 flex flex-col justify-between cursor-pointer border border-gray-100 hover:-translate-y-1">
      
      {/* Top Section */}
      <div className="flex items-center gap-3">
        <img
          src={stock.logo}
          alt={stock.name}
          className="w-10 h-10 object-contain rounded-full"
        />
        <h2 className="text-sm font-semibold text-gray-800">
          {stock.name}
        </h2>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-end">
        <p className="text-lg font-bold text-gray-900">
          {stock.price}
        </p>

        <p
          className={`text-sm font-semibold ${
            isPositive ? "text-green-600" : "text-red-500"
          }`}
        >
          {stock.change}
        </p>
      </div>
    </div>
  );
};

export default StockCard;