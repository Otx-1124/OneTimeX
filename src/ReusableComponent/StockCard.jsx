import React, {useState , useEffect } from "react";



const StockCardPopup = ({ stock }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        View {stock.name}
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-lg relative p-6">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl"
            >
              ✕
            </button>

            {/* Logo */}
            <div className="flex justify-center mb-4">
              <img
                src={stock.logo}
                alt={stock.alt}
                className="h-20 object-contain"
              />
            </div>

            {/* Details */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              {stock.name}
            </h2>
            <p className="text-gray-600 text-sm mb-4">{stock.description}</p>

            <div className="grid grid-cols-2 gap-2 text-sm mb-4">
              <p><span className="font-medium">Founded:</span> {stock.founded}</p>
              <p><span className="font-medium">Sector:</span> {stock.sector}</p>
              <p><span className="font-medium">Price:</span> {stock.price}</p>
              <p><span className="font-medium">IPO Status:</span> {stock.ipoStatus}</p>
            </div>

          
          </div>
        </div>
      )}
    </>
  );
};

export default StockCardPopup;