import React, { useState } from "react";
import { X, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Banner = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative w-full min-h-screen bg-white flex flex-col justify-center px-6 py-10 overflow-hidden ">

      {/* 🔥 Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-cyan-300/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-400/20 blur-[120px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* 🔥 MAIN SECTION */}
      <motion.div
        className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10"
        initial="hidden"
        whileInView="show"
        variants={fadeInUp}
      >

        {/* LEFT */}
        <div className="space-y-6 text-center md:text-left">

          <div className="inline-block bg-blue-100 px-4 py-2 rounded-full text-sm text-blue-700 font-medium">
            🚀 India's Most Trusted Investment Platform
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Invest Early. <br />
            <span className="text-blue-600">Grow Steady.</span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg max-w-lg mx-auto md:mx-0">
            Your gateway to Pre-IPO, Unlisted & Listed Stocks — expert-guided,
            research-backed, and built for long-term wealth.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition"
            >
              <TrendingUp size={18} />
              Start Investing
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 transition">
              WhatsApp Us
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-6 sm:gap-8 pt-4 flex-wrap justify-center md:justify-start">
            <div>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">150+</p>
              <p className="text-gray-500 text-sm">Active Investors</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">₹3Cr+</p>
              <p className="text-gray-500 text-sm">Total Traded</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">2+ Yrs</p>
              <p className="text-gray-500 text-sm">Since 2024</p>
            </div>
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid sm:grid-cols-2 gap-6">

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-blue-600 mb-1">
              OneTimeX
            </h3>
            <p className="text-sm text-gray-500 mb-4">Our own platform</p>

            <ul className="space-y-2 text-sm text-gray-900">
              <li>✔ Unlisted Shares</li>
              <li>✔ Pre-IPO Investments</li>
              <li>✔ SME & Startup Equity</li>
              <li>✔ Direct B2B Deals</li>
              <li>✔ Competitive Pricing</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-orange-500 mb-1">
              Motilal Oswal
            </h3>
            <p className="text-sm text-gray-500 mb-4">Via our franchise</p>

            <ul className="space-y-2 text-sm text-gray-900">
              <li>✔ Listed Stocks & Equity</li>
              <li>✔ Mutual Funds & SIP</li>
              <li>✔ IPO Applications</li>
              <li>✔ F&O Trading</li>
              <li>✔ Demat Account Opening</li>
            </ul>

            <div className="mt-4 text-xs text-orange-500 border border-orange-200 px-3 py-1 rounded inline-block">
              38 Yr+ Legacy
            </div>
          </div>
        </div>
      </motion.div>

      {/* 🔥 CATEGORY BOXES */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto relative z-10">

        <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 text-center shadow-sm hover:shadow-md transition hover:-translate-y-1">
          <h3 className="text-lg sm:text-xl font-semibold text-blue-600">IPO</h3>
          <p className="text-gray-500 text-sm mt-2">
            Invest in upcoming IPOs
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 text-center shadow-sm hover:shadow-md transition hover:-translate-y-1">
          <h3 className="text-lg sm:text-xl font-semibold text-green-600">Listed</h3>
          <p className="text-gray-500 text-sm mt-2">
            Trade listed stocks
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 text-center shadow-sm hover:shadow-md transition hover:-translate-y-1">
          <h3 className="text-lg sm:text-xl font-semibold text-purple-600">Unlisted</h3>
          <p className="text-gray-500 text-sm mt-2">
            Pre-IPO share buying
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 text-center shadow-sm hover:shadow-md transition hover:-translate-y-1">
          <h3 className="text-lg sm:text-xl font-semibold text-orange-500">Insurance</h3>
          <p className="text-gray-500 text-sm mt-2">
            Secure your future
          </p>
        </div>
      </div>

      {/* 🔥 MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4">

          <div className="bg-white rounded-2xl w-full max-w-md p-5 sm:p-6 relative shadow-xl">

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              <X size={20} />
            </button>

            <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">
              Open Free Demat Account
            </h2>

            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full border px-3 py-2 rounded-lg mb-3 focus:outline-none focus:border-blue-500"
            />

            <input
              type="tel"
              placeholder="Enter Phone Number"
              className="w-full border px-3 py-2 rounded-lg mb-4 focus:outline-none focus:border-blue-500"
            />

            <button className="bg-blue-600 text-white w-full py-2.5 rounded-lg">
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;