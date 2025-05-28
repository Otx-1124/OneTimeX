import { useState } from "react";
import { X } from "lucide-react";

const DematPopup = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Button to open modal */}
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold"
      >
        Open Popup
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl w-[90%] max-w-md p-6 relative shadow-lg animate-scaleIn">
            {/* Close icon */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              <X size={24} />
            </button>

            {/* Title */}
            <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
              Open Free Demat Account
            </h2>

            {/* Name input */}
            <div className="flex items-center border rounded-md px-3 py-2 mb-4">
              <span className="mr-2 text-gray-500">👤</span>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full focus:outline-none"
              />
            </div>

            {/* Phone input */}
            <div className="flex items-center border rounded-md px-3 py-2 mb-4">
              <span className="mr-2 text-gray-500">+91</span>
              <input
                type="tel"
                placeholder="Enter Phone Number"
                className="w-full focus:outline-none"
              />
            </div>

            {/* T&C */}
            <label className="flex items-start gap-2 text-sm mb-6">
              <input type="checkbox" className="accent-blue-600 mt-1" />
              <span>
                By proceeding you’re agreeing to our{" "}
                <a href="#" className="text-blue-600 underline">
                  T&C
                </a>
              </span>
            </label>

            {/* CTA Button */}
            <button className="bg-yellow-400 w-full text-white font-bold py-3 rounded-lg hover:bg-yellow-500 transition">
              OPEN DEMAT ACCOUNT
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DematPopup;
