// Teamcard.jsx

import React from "react";
import { motion } from "framer-motion";

const Teamcard = ({ name, role, img, founder }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className={`group relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/5 backdrop-blur-xl
      ${
        founder
          ? "w-full max-w-sm p-8"
          : "w-full p-6"
      }`}
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-gray-400/10 to-blue-400/10" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-slate-900 blur-2xl opacity-20 rounded-full" />

          <img
            src={img}
            alt={name}
            className={`relative object-cover rounded-full border-4 border-emerald-400 shadow-2xl
            ${
              founder
                ? "w-36 h-36"
                : "w-28 h-28"
            }`}
          />
        </div>

        {/* Name */}
        <h3 className="text-2xl font-bold mt-6 text-white">
          {name}
        </h3>

        {/* Role */}
        <p className="text-emerald-300 mt-2 text-sm tracking-wide">
          {role}
        </p>

        {/* Divider */}
        <div className="w-16 h-[2px] bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mt-5" />

        {/* Bottom Text */}
        <p className="text-slate-400 text-sm leading-relaxed mt-5">
          Passionately contributing to the growth and innovation of OneTimeX.
        </p>
      </div>
    </motion.div>
  );
};

export default Teamcard;