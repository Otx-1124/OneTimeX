import React from 'react'
import unlisted from "../Data/UnlistedData.js";
import DashStocksCards from "./reusable-in-dash-comps/DashStockCards.jsx";

const RecentViewStock = () => {
  return (
    <div>
        <div className="flex justify-between items-center p-2">
          <h1 className="text-2xl font-semibold text-gray-800">
            Recent View Stocks
          </h1>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {unlisted.slice(0, 4).map((stock) => (
            <DashStocksCards key={stock.id} stock={stock} />
          ))}
        </div>
      </div>
  )
}

export default RecentViewStock