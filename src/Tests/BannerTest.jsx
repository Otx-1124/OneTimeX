import React, { useState } from "react";
import { X, TrendingUp, Star } from "lucide-react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
 



const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const leftShrink = {
  hidden: { opacity: 1, scale: 1, x: 0 },
  show: {
    opacity: 1,
    scale: 0.8,
    x: "-10%",
    transition: {
      duration: 0.5,
    },
  },
};



const Banner = () => {
  const [showModal, setShowModal] = useState(false);



  return (
    <div className="w-full min-h-screen bg-[url('/bgDiwali1.png')] bg-cover bg-center bg-opacity-50 flex items-center justify-center px-6 py-10">
      <motion.div
        className="max-w-6xl w-full text-center space-y-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        {/* Trust Badge */}
        <motion.div
          className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-blue-200"
          variants={fadeInUp}
        >
          <Star className="w-5 h-5 text-yellow-500 mr-2" />
          <span className="text-blue-800 text-sm Md:font-semibold">India's Trusted Investment Platform</span>
        </motion.div>

        {/* Main Heading */}
        <motion.div className="space-y-6" variants={fadeInUp}>
          <motion.h1
            className="text-5xl sm:text-7xl font-bold text-gray-900 leading-tight"
            variants={fadeInUp}
          >
            Invest Early. <span className="text-blue-600">Grow Steady</span>.
          </motion.h1>

          <motion.p
            className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Your Gateway to <span className="font-bold text-green-600">Unlisted & Listed Stocks</span>
          </motion.p>

          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            <span className="font-semibold">OnetimeX</span> makes investing simple. Access high-growth stocks with just one click.
          </motion.p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
          variants={fadeInUp}
        >
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4  shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-gray-700 font-medium">Investors Onboarded</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">Cr+ Traded</div>
            <div className="text-gray-700 font-medium">High-Growth Unlisted Details</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">Returns </div>
            <div className="text-gray-700 font-medium">Backed by login , Not luck</div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          variants={fadeInUp}
        >
          <button
            onClick={() => setShowModal(true)}
            className="px-10 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white text-sm md:text-lg font-semibold rounded-2xl hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-3"
          >
            <TrendingUp className="w-6  md:h-6" />
            <span>Open Free Demat Account</span>
          </button>

          <Link to="/onetimex-intro" className="px-10 py-4 bg-white/80 backdrop-blur-sm text-gray-800 text-lg font-semibold rounded-2xl hover:bg-white transition-all duration-300 shadow-lg border border-gray-200">
            Learn More
          </Link>
        </motion.div>

        {/* Features */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto pt-8"
          variants={fadeInUp}
        >
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="font-semibold text-white  mb-2">100% Secure</h3>
            <p className="text-white text-sm">Bank-grade security for all your investments</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-semibold text-white mb-2">Instant Trading</h3>
            <p className="text-white text-sm">Execute trades in seconds, not minutes</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="font-semibold text-white mb-2">Expert Insights</h3>
            <p className="text-white text-sm">Get market analysis from top experts</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl w-[90%] max-w-md p-6 relative shadow-lg animate-scaleIn">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              <X size={24} />
            </button>

            <h2  className="text-2xl font-bold text-center text-blue-900 mb-6">
              Open Free Demat Account with <span className="text-blue-900">AliceBlue</span>
            </h2>

            <div className="flex items-center border rounded-md px-3 py-2 mb-4">
              <span className="mr-2 text-gray-500">👤</span>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full focus:outline-none"
              />
            </div>

            <div className="flex items-center border rounded-md px-3 py-2 mb-4">
              <span className="mr-2 text-gray-500">+91</span>
              <input
                type="tel"
                placeholder="Enter Phone Number"
                className="w-full focus:outline-none"
              />
            </div>

            <label className="flex items-start gap-2 text-sm mb-6">
              <input type="checkbox" className="accent-blue-600 mt-1" />
              <span>
                By proceeding you’re agreeing to our{" "}
                <Link to="/terms-con" className="text-blue-600 underline">
                  T&C
                </Link>
              </span>
            </label>

            <button className="bg-yellow-400 w-full text-white font-bold py-3 rounded-lg hover:bg-yellow-500 transition">
              OPEN DEMAT ACCOUNT
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
