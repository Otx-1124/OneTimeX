import React, { useContext, useState } from "react";
import { unlistedData } from "../Data/unlistedDatas";
import BuySharePopup from "../PropComponent/buyCard";
import { motion, AnimatePresence } from "framer-motion";
import { SearchContext } from "../Context/SearchContext";
import NotFound from "../ReusableComponent/SearchNotFound";

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

  // Pagination logic
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedData = filteredData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );
  const totalPages = Math.ceil(unlistedData.length / ITEMS_PER_PAGE);

  // Handle Buy/Sell click
  const handleAction = (stock, actionType) => {
    setCurrentStock(stock);
    setOption(actionType);
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen p-4 bg-blue-50 mt-10">
      {/* Stock Cards */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
      >
        {selectedData.length > 0 ? (
          selectedData.map((stock, index) => (
            <motion.div
              onClick={() => {
                handleViewDetails(stock);
              }}
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.03 }}
              className="w-11/12 mx-auto bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 flex items-center gap-4 border border-gray-200 cursor-pointer"
            >
              {/* Logo */}
              <motion.img
                src={stock.logo}
                alt={stock.name}
                className="w-16 h-16 object-contain flex-shrink-0"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
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
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAction(stock, "Buy");
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="px-3 py-1 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700"
                >
                  Buy
                </motion.button>
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAction(stock, "Sell");
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="px-3 py-1 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700"
                >
                  Sell
                </motion.button>
              </div>
            </motion.div>
          ))
        ) : (
          <NotFound />
        )}
      </motion.div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-8 gap-2">
        <motion.button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          whileTap={{ scale: 0.9 }}
          className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
        >
          Prev
        </motion.button>

        <span className="text-gray-700 font-medium">
          Page {currentPage} of {totalPages}
        </span>

        <motion.button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          whileTap={{ scale: 0.9 }}
          className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </motion.button>
      </div>

      {/* Buy/Sell Popup */}
      <AnimatePresence>
        {isOpen && currentStock && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
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
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stock Details Popup */}
      <AnimatePresence>
        {isDetailsVisible && viewDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6 relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsDetailVisible(false)}
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl"
              >
                ✕
              </button>

              {/* Stock Info */}
              <div className="flex justify-center mb-4">
                <img
                  src={viewDetails.logo}
                  alt={viewDetails.name}
                  className="h-20"
                />
              </div>
              <h2 className="text-2xl font-bold mb-2">{viewDetails.name}</h2>
              <p className="text-gray-600 mb-4">{viewDetails.description}</p>

              <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                <p>
                  <span className="font-semibold">Founded:</span>{" "}
                  {viewDetails.founded}
                </p>
                <p>
                  <span className="font-semibold">Sector:</span>{" "}
                  {viewDetails.sector}
                </p>
                <p>
                  <span className="font-semibold">Price:</span>{" "}
                  {viewDetails.price}
                </p>
                <p>
                  <span className="font-semibold">IPO:</span>{" "}
                  {viewDetails.ipoStatus}
                </p>
              </div>

              <a
                href={viewDetails.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-600 font-medium hover:underline"
              >
                Visit Website →
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AllUnlistedData;
