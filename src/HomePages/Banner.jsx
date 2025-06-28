import React, { useState } from "react";
import "../Flipcart.css";
import { CircleX, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const leftVariant = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { type: "spring", duration: 1 } },
};


const rightVariant = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { type: "spring", duration: 1 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Banner = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full md:h-screen sm:h-screen bg-[#009999] flex items-center container mx-auto justify-center px-6 sm:px-10 py-10 relative">
      <div className="max-w-7xl w-full flex flex-col md:flex-row px-6 items-center justify-between gap-10 ml-3">

        {/* Left Section */}
        <motion.div
          className="w-full md:w-1.5/2 text-center md:text-left"
          variants={leftVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight"
          >
            <span className="text-blue-600">Buy</span>,{" "}
            <span className="text-blue-600">Invest</span>,<br />
            <span className="text-green-500">Build Your Future</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-6 text-lg text-gray-700"
          >
            OnetimeX offers access to both <strong>unlisted</strong> and{" "}
            <strong>listed</strong> shares, empowering you to make informed
            investment decisions.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-8 flex flex-col sm:flex-row sm:justify-start gap-4"
          >
            <button
              onClick={() => setShowModal(true)}
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-green-500 transition duration-300"
            >
              Open Free Demat
            </button>
            <Link
              to="/login"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-green-500 hover:text-white transition duration-300"
            >
              Log In
            </Link>
            <Link
              className="sm:w-full md:w-1/5 px-2 py-3 rounded-3xl border border-blue-600 text-blue-500 hover:bg-blue-500 text-center hover:text-white"
              to="/signup"
            >
              SignUp
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Section: Flip Image (Hidden on small screens) */}
        <motion.div
          className="hidden md:flex md:w-1/2 justify-end"
          variants={rightVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flip-card w-60 h-96">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="/first-img.jpg"
                  alt="Front"
                  className="w-full h-full object-auto rounded-xl shadow-lg"
                />
              </div>
              <div className="flip-card-back">
                <img
                  src="/back-img.jpg"
                  alt="Back"
                  className="w-full h-full object-contain rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
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

              <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
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
                  <Link to="/terms&con" className="text-blue-600 underline">
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
    </div>
  );
};

export default Banner;
