import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, TrendingDown, DollarSign, Percent } from "lucide-react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const SimpleTradingCalculator = () => {
  const [buyPrice, setBuyPrice] = useState('');
  const [sellPrice, setSellPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  // Animation variants
  const fadeInUpVariants = {
    hidden: { 
      opacity: 0, 
      y: 60 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const calculateResults = () => {
    const buy = parseFloat(buyPrice) || 0;
    const sell = parseFloat(sellPrice) || 0;
    const qty = parseInt(quantity) || 0;

    if (buy === 0 || qty === 0) return null;

    const investment = buy * qty;
    const returns = sell * qty;
    const profitLoss = returns - investment;
    const profitPercentage = ((profitLoss / investment) * 100);

    return {
      investment,
      returns,
      profitLoss,
      profitPercentage,
      isProfit: profitLoss >= 0
    };
  };

  const results = calculateResults();

  const tradingTips = [
    { type: "Day Trading", tip: "Buy and sell within the same day", success: "High Risk, High Reward" },
    { type: "Swing Trading", tip: "Hold for days to weeks", success: "Moderate Risk" },
    { type: "Long Term", tip: "Hold for months to years", success: "Lower Risk" },
  ];

   

  return (

   

    <div className="w-full bg-gradient-to-br from-blue-50 to-green-50 pt-24 pb-12 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-3 flex items-center justify-center">
            <Calculator className="w-8 h-8 mr-3 text-blue-600" />
            Trading Profit Calculator
          </h1>
          <p className="text-lg text-gray-600">
            Calculate your potential profits and losses before you trade
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 "
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          
          {/* Calculator Section */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-3"
            variants={fadeInUpVariants}
          >
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <DollarSign className="w-5 h-5 mr-2 text-green-600" />
              Enter Trade Details
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Buy Price (₹)
                </label>
                <input
                  type="number"
                  value={buyPrice}
                  onChange={(e) => setBuyPrice(e.target.value)}
                  placeholder="Enter buy price"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sell Price (₹)
                </label>
                <input
                  type="number"
                  value={sellPrice}
                  onChange={(e) => setSellPrice(e.target.value)}
                  placeholder="Enter sell price"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity (Shares)
                </label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="Enter quantity"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Quick Examples */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-700 mb-2">Quick Examples:</h4>
                <div className="space-y-2 text-sm">
                  <button 
                    onClick={() => {
                      setBuyPrice('2400');
                      setSellPrice('2500');
                      setQuantity('10');
                    }}
                    className="block w-full text-left px-3 py-2 bg-blue-100 rounded hover:bg-blue-200 transition-colors"
                  >
                    Reliance: Buy ₹2400 → Sell ₹2500 (10 shares)
                  </button>
                  <button 
                    onClick={() => {
                      setBuyPrice('3600');
                      setSellPrice('3500');
                      setQuantity('5');
                    }}
                    className="block w-full text-left px-3 py-2 bg-red-100 rounded hover:bg-red-200 transition-colors"
                  >
                    TCS: Buy ₹3600 → Sell ₹3500 (5 shares)
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-6"
            variants={fadeInUpVariants}
          >
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Percent className="w-5 h-5 mr-2 text-purple-600" />
              Calculation Results
            </h2>

            {results ? (
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-sm text-blue-600 font-medium">Total Investment</div>
                  <div className="text-2xl font-bold text-blue-800">₹{results.investment.toLocaleString()}</div>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-sm text-green-600 font-medium">Total Returns</div>
                  <div className="text-2xl font-bold text-green-800">₹{results.returns.toLocaleString()}</div>
                </div>

                <div className={`rounded-lg p-4 ${results.isProfit ? 'bg-green-100' : 'bg-red-100'}`}>
                  <div className={`text-sm font-medium flex items-center ${results.isProfit ? 'text-green-600' : 'text-red-600'}`}>
                    {results.isProfit ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                    {results.isProfit ? 'Profit' : 'Loss'}
                  </div>
                  <div className={`text-2xl font-bold ${results.isProfit ? 'text-green-800' : 'text-red-800'}`}>
                    ₹{Math.abs(results.profitLoss).toLocaleString()}
                  </div>
                  <div className={`text-lg font-semibold ${results.isProfit ? 'text-green-700' : 'text-red-700'}`}>
                    ({results.profitPercentage.toFixed(2)}%)
                  </div>
                </div>

                {/* Risk Assessment */}
                <div className="bg-yellow-50 rounded-lg p-4">
                  <div className="text-sm text-yellow-700 font-medium">Risk Assessment</div>
                  <div className="text-sm text-yellow-800 mt-1">
                    {Math.abs(results.profitPercentage) > 10 
                      ? "High volatility trade - Consider position sizing"
                      : Math.abs(results.profitPercentage) > 5
                      ? "Moderate risk - Good for swing trading"
                      : "Low volatility - Suitable for conservative trading"
                    }
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Calculator className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <p>Enter trade details to see calculations</p>
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* Trading Tips */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-6 mt-8"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-xl font-bold text-gray-900 mb-6">Trading Strategies</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {tradingTips.map((tip, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-4 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{tip.type}</h3>
                <p className="text-sm text-gray-600 mb-2">{tip.tip}</p>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  {tip.success}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-8"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Link to="/signup" className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Start Trading with OnetimeX
          </Link>
          <p className="text-gray-600 mt-2">Calculate before you trade - Trade smart, not hard</p>
        </motion.div>
      </div>
    </div>
  );
};

export default SimpleTradingCalculator;