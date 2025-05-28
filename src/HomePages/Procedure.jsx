import { ArrowBigLeft, ArrowBigRightDash } from "lucide-react";
import React from "react";

import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', duration: 1 } },
};


const Procedure = () => {
  return (
    <motion.div
  className="px-10 py-6 bg-gradient-to-br from-blue-50 container mx-auto to-green-50"
  variants={fadeInUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
>
  <div className="container mx-auto flex flex-col items-center justify-between px-10">
    <div className="flex justify-between container mx-auto">
      <h1 className="text-gray-700 font-bold text-[30px] text-center">
        We Are Associated By...
      </h1>
      <div className="flex justify-evenly">
        <img
          className="w-[180px] h-12 rounded-3xl object-cover cursor-pointer"
          src="https://mma.prnewswire.com/media/1251803/Motilal_Oswal_Logo.jpg?p=facebook"
          alt="Motilal Oswal"
        />
        <img
          className="w-[180px] h-12 rounded-3xl object-cover cursor-pointer border border-red-300 ml-10"
          src="/logoalice.png"
          alt="Alice Blue"
        />
      </div>
    </div>
    <div className="w-full">
      <hr className="mt-5 border border-gray-700" />
    </div>
  </div>

  <motion.div
    className="w-full px-10 py-10 flex gap-5"
    variants={fadeInUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
  >
    {/* Left: Steps */}
    <div className="w-1/2 flex flex-col shadow-md rounded-xl px-5 py-4 gap-5 text-gray-700">
      <h1 className="font-bold text-xl">
        Create your Demat Account in just 4 step
      </h1>
      {[1, 2, 3, 4].map((step) => (
        <p key={step} className="px-2 py-2 shadow-md rounded-lg">
          <strong>Step-{step} :</strong> Browse OnetimeX and go to the create
          Account section
        </p>
      ))}
    </div>

    {/* Right: CTA Cards */}
    <div className="w-1/2 flex flex-col shadow-md rounded-xl px-5 py-4 gap-5">
      <div className="flex">
        <h1 className="font-bold text-xl">
          Start Investing With{" "}
          <span className="text-green-600 border-b border-green-600">
            OnetimeX
          </span>
        </h1>
        <img
          className="w-1/6 ml-6"
          src="/undraw_bull-market_4a8e.svg"
          alt="market"
        />
      </div>
      <div className="flex flex-col gap-5 text-gray-700 font-bold">
        {["Unlisted Stock & Pre IPO", "Listed | Mutual Funds", "Insourance"].map((label, index) => (
          <div
            key={index}
            className="flex justify-between bg-orange-700 text-white cursor-pointer px-3 py-3 rounded-lg border border-gray-300 hover:bg-blue-400 hover:shadow-xl"
          >
            <h1>{label}</h1>
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
