import { ArrowBigRightDash } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { type: "spring", duration: 1 } },
};

const Procedure = () => {
  return (
    <motion.div
      className="px-4 sm:px-6 lg:px-10 py-6 bg-gradient-to-br from-blue-50 to-green-50"
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Top Section: Logos and Title */}
      <div className="w-full flex flex-col px-10 gap-4 sm:flex-row items-center justify-between mb-6">
        <h1 className="text-gray-700 font-bold text-2xl sm:text-3xl text-center sm:text-left">
          We Are Associated By...
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
          <img
            className="w-44 h-12 rounded-3xl object-cover cursor-pointer"
            src="https://mma.prnewswire.com/media/1251803/Motilal_Oswal_Logo.jpg?p=facebook"
            alt="Motilal Oswal"
          />
          <img
            className="w-44 h-12 rounded-3xl object-cover cursor-pointer border border-red-300"
            src="/logoalice.png"
            alt="Alice Blue"
          />
        </div>
      </div>

      <hr className="my-4 border border-gray-300" />

      {/* Main Content: Steps & CTA */}
      <motion.div
        className="w-full flex flex-col lg:flex-row gap-6"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left: Steps */}
        <div className="w-full lg:w-1/2 flex flex-col shadow-md rounded-xl px-4 sm:px-6 py-6 gap-5 text-gray-700">
          <h2 className="font-bold text-xl sm:text-2xl text-center lg:text-left">
            Create your Demat Account in just 4 steps
          </h2>
          {[1, 2, 3, 4].map((step) => (
            <p
              key={step}
              className="px-4 py-3 shadow-sm rounded-lg shadow-md text-sm sm:text-base"
            >
              <strong>Step-{step}:</strong> Browse OnetimeX and go to the
              create Account section
            </p>
          ))}
        </div>

        {/* Right: CTA Cards */}
        <div className="w-full lg:w-1/2 flex flex-col shadow-md rounded-xl px-4 sm:px-6 py-6 gap-5">
          <div className="flex flex-col sm:flex-row items-center sm:justify-between">
            <h2 className="font-bold text-xl sm:text-2xl text-center sm:text-left">
              Start Investing With{" "}
              <span className="text-green-600 border-b border-green-600">
                OnetimeX
              </span>
            </h2>
            <img
              className="w-24 h-auto mt-4 sm:mt-0"
              src="/undraw_bull-market_4a8e.svg"
              alt="market"
            />
          </div>
          <div className="flex flex-col gap-4 text-gray-700 font-semibold">
            {[
              "Unlisted Stock & Pre IPO",
              "Listed | Mutual Funds",
              "Insurance",
            ].map((label, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-orange-700 text-white cursor-pointer px-4 py-3 rounded-lg hover:bg-blue-400 hover:shadow-xl transition"
              >
                <h3 className="text-sm sm:text-base">{label}</h3>
                <ArrowBigRightDash />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Procedure;
