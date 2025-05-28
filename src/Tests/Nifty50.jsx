import React, { useEffect, useState } from "react";
import axios from "axios";

const StockLive = ({ symbol = "IBM" }) => {
  const [price, setPrice] = useState(null);
  const [change, setChange] = useState(null);
  const [percentChange, setPercentChange] = useState(null);

  const fetchStockData = async () => {
    try {
      const res = await axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=demo`
      );

      const timeSeries = res.data["Time Series (Daily)"];
      if (!timeSeries) throw new Error("Invalid response from API");

      const dates = Object.keys(timeSeries);
      const latestDate = dates[0];
      const prevDate = dates[1];

      const latestClose = parseFloat(timeSeries[latestDate]["4. close"]);
      const prevClose = parseFloat(timeSeries[prevDate]["4. close"]);

      const diff = latestClose - prevClose;
      const percent = ((diff / prevClose) * 100).toFixed(2);

      setPrice(latestClose.toFixed(2));
      setChange(diff.toFixed(2));
      setPercentChange(percent);
    } catch (error) {
      console.error("Error fetching stock data:", error);
    }
  };

  useEffect(() => {
    fetchStockData();
    const interval = setInterval(fetchStockData, 60000); // update every 60s
    return () => clearInterval(interval);
  }, [symbol]);

  return (
    <div className="flex items-center gap-4 text-lg font-medium">
      <span className="text-gray-800 font-bold">{symbol}</span>
      <span style={{ width: "70px", textAlign: "right" }}>
        {price || "Loading..."}
      </span>
      <span
        style={{ width: "120px", textAlign: "right" }}
        className={`font-bold ${
          change?.includes("-") ? "text-red-600" : "text-green-600"
        }`}
      >
        {change && percentChange ? `${change} (${percentChange}%)` : ""}
      </span>
    </div>
  );
};

export default StockLive;
