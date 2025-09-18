import React from "react";
import { SearchX } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const NotFound = ({ query }) => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "917045035773"; // with country code
    const message = `Hello, I couldn't find "${query}" on your site. Please help me.`;
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 mt-10 to-gray-100 flex flex-col items-center justify-center text-gray-800 px-6">
      {/* Top Icon */}
      <div className="flex flex-col items-center">
        <div className="bg-red-100 p-6 rounded-full shadow-md">
          <SearchX size={52} className="text-red-500" />
        </div>
        <h1 className="mt-6 text-4xl font-extrabold text-gray-900">
          No Results Found
        </h1>
        <p className="mt-3 text-center text-gray-600 max-w-md">
          We couldn’t find anything matching{" "}
          <span className="font-semibold text-gray-900">“{query}”</span>. <br />
          Please try searching with different keywords.
        </p>
      </div>

      {/* Support Card */}
      <div className="mt-10 bg-white shadow-lg border border-gray-200 rounded-2xl p-6 text-center max-w-sm w-full">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          Need Assistance?
        </h3>
        <p className="text-sm text-gray-500 mb-3">
          Our team is happy to help you.
        </p>
        <p className="text-xl font-bold text-gray-900">+91 70450 35773</p>
        <button
          onClick={handleWhatsAppClick}
          className="mt-5 w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-medium transition"
        >
          <FaWhatsapp size={22} />
          Chat on WhatsApp
        </button>
      </div>
    </div>
  );
};

export default NotFound;
