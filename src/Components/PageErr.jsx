import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] px-4">
      <h1 className="text-[8rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow-lg">
        404
      </h1>
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mt-4">
        Oops! Page not found.
      </h2>
      <p className="text-lg text-gray-600 mt-2 text-center max-w-md">
        The page you're looking for might have been removed, renamed, or it never existed.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full font-medium shadow-md hover:shadow-xl transition"
      >
        Go back Home
      </Link>
    </div>
  );
};

export default NotFound;
