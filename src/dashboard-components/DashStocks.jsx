import React from "react";
import unlisted from "../Data/UnlistedData.js";
import DashStocksCards from "./reusable-in-dash-comps/DashStockCards.jsx";

const DashStocks = () => {
  // First 4 stocks
  const Data = unlisted.slice(0, 4);

  // Next 4 stocks (OneTimeX Preferred)
  const Data2 = unlisted.slice(4, 8);

  return (
    <div className="font-['Inter',sans-serif] space-y-8">

      {/* SECTION 1 */}
      <div>
        <div className="flex justify-between items-center p-2">
          <h1 className="text-2xl font-semibold text-gray-800">
            Top Unlisted Stocks
          </h1>
          <button className="mr-5 p-2 font-semibold bg-green-600 text-white hover:scale-110 transition duration-75 rounded-3xl">
            See all
          </button>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {Data.map((stock) => (
            <DashStocksCards key={stock.id} stock={stock} />
          ))}
        </div>
      </div>

      {/* SECTION 2 */}
      <div>
        <div className="flex justify-between items-center p-2">
          <h1 className="text-2xl font-semibold text-gray-800">
            OneTimeX Preferred
          </h1>
          <button className="mr-5 p-2 font-semibold bg-green-600 text-white hover:scale-110 transition duration-75 rounded-3xl">
            Explore
          </button>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {Data2.map((stock) => (
            <DashStocksCards key={stock.id} stock={stock} />
          ))}
        </div>
      </div>
      

    </div>
  );
};

export default DashStocks;