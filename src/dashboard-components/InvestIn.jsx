import React from 'react'

const InvestIn = () => {
    const investData = ["IPO", "Pre-IPO", "Unlisted Shares", "Startups", "Mutual Funds", "Real Estate" , "Cryptocurrency", "Bonds", "Commodities", "ETFs", "Venture Capital", "Private Equity"  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <h1 className="text-2xl font-semibold text-gray-800 col-span-full">
            Invest In 
          </h1> 
      {investData.map((item, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800">{item}</h3>
        </div>
      ))}
    </div>
  )
}

export default InvestIn