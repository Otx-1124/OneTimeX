// components/NSEChart.jsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const nseData = [
  { date: "Jan", price: 192.3 },
  { date: "Feb", price: 205.1 },
  { date: "Mar", price: 210.7 },
  { date: "Apr", price: 198.2 },
  { date: "May", price: 215.6 },
  { date: "Jun", price: 223.4 },
  { date: "Jul", price: 219.8 },
];

const NSEChart = () => {
  return (
    <div className="bg-white rounded-2xl mt-20 shadow-xl p-6 w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        NSE Stock Performance (Dummy Data)
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={nseData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis domain={["auto", "auto"]} tick={{ fontSize: 12 }} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NSEChart;
