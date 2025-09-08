import React, { useContext, useState, useEffect } from "react";
import { unlistedData } from "../Data/unlistedDatas";
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
    startIndex + ITEMS_PER_PAGE
  );
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  // Handle Buy/Sell click
  const handleAction = (stock, actionType) => {
    setCurrentStock(stock);
    setOption(actionType);
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 lg:p-6 mt-10">
      {/* Stock Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 py-10 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 max-w-screen-2xl mx-auto mb-8">
        {selectedData.length > 0 ? (
          selectedData.map((stock, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              whileHover={{ y: -2 }}
              onClick={() => handleViewDetails(stock)}
              className="bg-white rounded-lg shadow-sm hover:shadow-md border border-gray-200 p-3 sm:p-4 cursor-pointer transition-all duration-200"
            >
              {/* Card Content */}
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-50 rounded-lg flex items-center justify-center p-2">
                  <img
                    src={stock.logo}
                    alt={stock.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="px-2 py-0.5 text-xs bg-yellow-100 text-yellow-800 rounded">
                  {stock.ipoStatus}
                </span>
              </div>

              <div className="mb-3">
                <h3 className="font-medium text-gray-900 text-sm mb-1 line-clamp-2">
                  {stock.name}
                </h3>
                <p className="text-base font-semibold text-green-600">
                  {stock.price}
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAction(stock, "Buy");
                  }}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white text-xs py-1.5 px-2 rounded transition-colors"
                >
                  Buy
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAction(stock, "Sell");
                  }}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white text-xs py-1.5 px-2 rounded transition-colors"
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
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            {" "}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto"
            >
              {" "}
              {/* Header */}{" "}
              <div className="p-4 border-b border-gray-200">
                {" "}
                <div className="flex items-center justify-between">
                  {" "}
                  <div className="flex items-center gap-3">
                    {" "}
                    <img
                      src={viewDetails.logo}
                      alt={viewDetails.name}
                      className="w-12 h-12 object-contain"
                    />{" "}
                    <div>
                      {" "}
                      <h2 className="font-semibold text-lg text-gray-900">
                        {" "}
                        {viewDetails.name}{" "}
                      </h2>{" "}
                      <p className="text-sm text-gray-600">
                        {viewDetails.price}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <button
                    onClick={() => setIsDetailVisible(false)}
                    className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600"
                  >
                    {" "}
                    ✕{" "}
                  </button>{" "}
                </div>{" "}
              </div>{" "}
              {/* Content */}{" "}
              <div className="p-4">
                {" "}
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {" "}
                  {viewDetails.description}{" "}
                </p>{" "}
                <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                  {" "}
                  <div>
                    {" "}
                    <span className="font-medium text-gray-900">
                      Founded:
                    </span>{" "}
                    <p className="text-gray-600">{viewDetails.founded}</p>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <span className="font-medium text-gray-900">
                      Sector:
                    </span>{" "}
                    <p className="text-gray-600">{viewDetails.sector}</p>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <span className="font-medium text-gray-900">IPO:</span>{" "}
                    <p className="text-gray-600">{viewDetails.ipoStatus}</p>{" "}
                  </div>{" "}
                </div>{" "}
                <a
                  href={viewDetails.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-500 hover:bg-blue-600 text-white text-center py-2.5 rounded font-medium transition-colors"
                >
                  {" "}
                  Visit Website{" "}
                </a>{" "}
              </div>{" "}
            </motion.div>{" "}
          </div>
        )}{" "}
      </AnimatePresence>
    </div>
  );
};

export default AllUnlistedData;
