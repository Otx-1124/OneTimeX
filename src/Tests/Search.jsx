import React, { useState } from "react";

const suggestions = [
  "Reliance Retail",
  "Tata Technologies",
  "How to buy unlisted shares",
  "What are unlisted shares?",
  "IPO advisory",
  "Unlisted vs Listed Shares",
];

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);

  const handleChange = (e) => {
    const input = e.target.value;
    setQuery(input);
    if (input.length > 0) {
      const results = suggestions.filter((item) =>
        item.toLowerCase().includes(input.toLowerCase())
      );
      setFiltered(results);
    } else {
      setFiltered([]);
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto mt-5">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search for stocks, topics, services..."
      />
      {filtered.length > 0 && (
        <ul className="absolute bg-white w-full mt-1 rounded-md shadow-md z-10 max-h-60 overflow-y-auto">
          {filtered.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
              onClick={() => {
                setQuery(item);
                setFiltered([]);
                // Optional: Redirect to matched page or perform search
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
