import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const storedList = localStorage.getItem("WatchList");
    if (storedList) {
      try {
        const parsedList = JSON.parse(storedList);
        setWatchlist(parsedList);
        console.log(parsedList);
      } catch (err) {
        console.error("Error parsing WatchList from localStorage:", err);
      }
    }
  }, []);

  return (
    <div className="p-6">
      {watchlist.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {watchlist.map((item, index) => (
            <div key={index} className="border p-4 rounded-xl w-full shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600">Price: {item.price}</p>
              <p className="text-sm text-gray-500">ID: {index}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No orders in your watchlist yet.</p>
      )}
    </div>
  );
};

export default Cart;
