import React, { useContext, useState, useEffect } from "react";
import BuySharePopup from "../PropComponent/buyCard";
import { motion, AnimatePresence } from "framer-motion";
import { SearchContext } from "../Context/SearchContext";
import NotFound from "../ReusableComponent/SearchNotFound";
import StockCardPopup from "../ReusableComponent/StockCard";

const ITEMS_PER_PAGE = 30;

const AllUnlistedData = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStock, setCurrentStock] = useState(null);
  const [option, setOption] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { filteredData } = useContext(SearchContext);

  // Stock details popup
  const [viewDetails, setViewDetails] = useState(null);
  const [isDetailsVisible, setIsDetailVisible] = useState(false);

  // Show stock details popup
  const handleViewDetails = (stock) => {
    setViewDetails(stock);
    setIsDetailVisible(true);
  };

  // ✅ Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // Pagination logic
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedData = filteredData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  // Handle Buy/Sell click
  const handleAction = (stock, actionType) => {
    setCurrentStock(stock);
    setOption(actionType);
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen bg-white p-3 sm:p-4 lg:p-6 mt-10">
      
      {/* Stock Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 py-10 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 max-w-screen-2xl mx-auto mb-8">
        
        {selectedData.length > 0 ? (
          selectedData.map((stock, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: index * 0.02 }}
              whileHover={{ y: -3 }}
              onClick={() => handleViewDetails(stock)}
              className="group bg-white border border-gray-200 rounded-2xl p-5 cursor-pointer 
               hover:shadow-md transition-all duration-200"
            >
              {/* Top Row */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-[11px] px-2.5 py-1 rounded-full 
                       bg-gray-100 text-gray-600 font-medium"
                >
                  {stock.ipoStatus}
                </span>

                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>

              {/* Company Info */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={stock.logo}
                  alt={stock.name}
                  className="w-10 h-10 object-contain rounded-md border"
                />

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 leading-tight">
                    {stock.name}
                  </h3>
                  <p className="text-xs text-gray-500">{stock.sector}</p>
                </div>
              </div>

              {/* Price */}
              <div className="mb-4">
                <p className="text-xl font-semibold text-gray-900">
                  {stock.price}
                </p>
              </div>

              {/* Divider */}
              <div className="h-[1px] bg-gray-100 mb-4" />

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAction(stock, "Buy");
                  }}
                  className="flex-1 py-2 rounded-lg bg-green-500 text-white text-sm font-medium 
                   hover:bg-green-600 transition"
                >
                  Buy
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAction(stock, "Sell");
                  }}
                  className="flex-1 py-2 rounded-lg border border-gray-300 
                   text-sm font-medium bg-red-500 hover:bg-red-600 text-white transition"
                >
                  Sell
                </button>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full">
            <NotFound />
          </div>
        )}
      </div>
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1.5 bg-white border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Prev
          </button>

          <span className="px-3 py-1.5 bg-blue-500 text-white rounded text-sm">
            {currentPage} of {totalPages}
          </span>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1.5 bg-white border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
      {/* Popups remain same */}
      <AnimatePresence>
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
      </AnimatePresence>
      {/* Stock Details Modal */}{" "}
      <AnimatePresence>
        {" "}
        {isDetailsVisible && viewDetails && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 40 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-lg max-h-[90vh] overflow-y-auto 
               rounded-2xl bg-white/80 backdrop-blur-xl 
               shadow-2xl border border-white/30"
            >
              {/* 🔷 Header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-md">
                    <img
                      src={viewDetails.logo}
                      alt={viewDetails.name}
                      className="w-10 h-10 object-contain"
                    />
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 tracking-tight">
                      {viewDetails.name}
                    </h2>
                    <p className="text-sm text-gray-500">{viewDetails.price}</p>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setIsDetailVisible(false)}
                  className="w-9 h-9 flex items-center justify-center 
                   rounded-full bg-gray-100 hover:bg-gray-200 
                   transition-all duration-200"
                >
                  ✕
                </button>
              </div>

              {/* 🔷 Content */}
              <div className="p-5 space-y-5">
                {/* Description */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {viewDetails.description}
                  </p>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 border shadow-sm">
                    <p className="text-xs text-gray-400">Founded</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {viewDetails.founded}
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-4 border shadow-sm">
                    <p className="text-xs text-gray-400">Sector</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {viewDetails.sector}
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-4 border shadow-sm col-span-2">
                    <p className="text-xs text-gray-400">IPO Status</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {viewDetails.ipoStatus}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
              </div>
            </motion.div>
          </div>
        )}{" "}
      </AnimatePresence>
    </div>
  );
};

export default AllUnlistedData;
