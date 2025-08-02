import React, { useEffect } from 'react';
import { useUnlisted } from '../Context/UnlistedContext';
import { useNavigate } from 'react-router-dom';
import {
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

const UnlistedProp = () => {
  const { selectedDetail } = useUnlisted();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(selectedDetail);
  }, [selectedDetail]);

  if (!selectedDetail) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto p-8 mt-10 bg-white rounded-3xl shadow-xl">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-3 mt-2 px-5 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full text-sm transition"
      >
        ← Back
      </button>

      <div className="flex flex-col lg:flex-row gap-10 ">
        {/* Left Side Graph */}
        <div className="w-full lg:w-[40vw]">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Price History (1 Year)</h3>
          <div className="h-80 rounded-lg border">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={selectedDetail.graphData}>
                <XAxis dataKey="date" />
                <YAxis domain={['dataMin - 10', 'dataMax + 10']} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#0d9488"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Side Details */}
        <div className="flex-1 space-y-5">
          <div>
            <div className='flex gap-3 items-center'>
                <img className='w-20 rounded-lg ' src={selectedDetail.logo}/>
                <h2 className="text-3xl font-bold text-gray-900">{selectedDetail.name}</h2>
            </div>
            <p className="text-gray-600 text-sm mt-1">
              Founded: {selectedDetail.founded} | Sector: {selectedDetail.sector}
            </p>
            <p className="text-2xl font-semibold text-green-600 mt-2">{selectedDetail.price}</p>
          </div>

          <p className="text-gray-700">{selectedDetail.description}</p>

          <div className="space-y-1">
            <p className="text-sm text-blue-700">
              IPO Status: {selectedDetail.ipoStatus}
            </p>
            <a
              href={`https://${selectedDetail.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-500 hover:underline"
            >
              Visit Website
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">FY25 Financials</h3>
            <ul className="text-sm text-gray-800 grid grid-cols-2 gap-x-4 gap-y-1">
              <li>Assets: ₹{selectedDetail.financialsFY25.assets} Cr</li>
              <li>Net Worth: ₹{selectedDetail.financialsFY25.netWorth} Cr</li>
              <li>Revenue Growth: {selectedDetail.financialsFY25.revenueGrowth}%</li>
              <li>ROE: {selectedDetail.financialsFY25.ROE}%</li>
              <li>Profit YoY: {selectedDetail.financialsFY25.profitYoY}%</li>
            </ul>
          </div>

          <div className="flex gap-4 mt-6">
            <button className="px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition">
              Buy
            </button>
            <button className="px-6 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition">
              Sell
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlistedProp;
