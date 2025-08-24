import React, { useState } from "react";
import { unlistedData } from "../Data/unlistedDatas";
import BuySharePopup from "../PropComponent/buyCard";

const ITEMS_PER_PAGE = 30;

const AllUnlistedData = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStock, setCurrentStock] = useState(null);
  const [option, setOption] = useState(""); 
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination logic
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedData = unlistedData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );
  const totalPages = Math.ceil(unlistedData.length / ITEMS_PER_PAGE);

  // Handle Buy/Sell click
  const handleAction = (stock, actionType) => {
    setCurrentStock(stock);
    setOption(actionType); // "Buy" or "Sell"
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen p-4 bg-blue-50 mt-10">
      {/* Stock Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {selectedData.map((stock, index) => (
          <div
            key={index}
            className="w-11/12 mx-auto bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 flex items-center gap-4 border border-gray-200"
          >
            {/* Logo */}
            <img
              src={stock.logo}
              alt={stock.name}
              className="w-16 h-16 object-contain flex-shrink-0"
            />

            {/* Details */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-900">
                {stock.name}
              </h2>
              <p className="text-sm text-gray-600">{stock.price}</p>
              <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-700 rounded-full">
                {stock.ipoStatus}
              </span>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button
                onClick={() => handleAction(stock, "Buy")}
                className="px-3 py-1 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700"
              >
                Buy
              </button>
              <button
                onClick={() => handleAction(stock, "Sell")}
                className="px-3 py-1 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700"
              >
                Sell
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-8 gap-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
        >
          Prev
        </button>

        <span className="text-gray-700 font-medium">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Popup */}
      {isOpen && currentStock && (
        <BuySharePopup
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          stock={{
            name: currentStock.name,
            logo: currentStock.logo,
            price: currentStock.price,
            option: option,
          }}
        />
      )}
    </div>
  );
};

export default AllUnlistedData;
