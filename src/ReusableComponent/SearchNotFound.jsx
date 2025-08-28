import React from "react";
import { SearchX } from "lucide-react"; // optional icon

const NotFound = ({ query }) => {
  return (
    <div className="flex flex-col items-center  py-5 text-gray-700">
      <SearchX size={64} className="text-red-500 mb-4" />
      <h2 className="text-2xl font-semibold">No Results Found</h2>
      <p className="mt-2 text-gray-500">
        We couldn’t find anything matching !
        <span className="font-medium text-gray-800">“{query}”</span>.
      </p>
      <p className="mt-1 text-sm text-gray-400">
        Try searching with different keywords.
      </p>
    </div>
  );
};

export default NotFound;
