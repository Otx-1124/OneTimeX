import React from "react";
import { motion } from "framer-motion";

const LiveScrollData = () => {
  const items = [
    "Unlisted Stock",
    "Listed Stock",
    "Health Insurance",
    "Life Insurance",
    "Term Insurance",
    "F & O Stock",
    "IPO",
    "Mutual Funds",
  ];

  return (
    <div className="w-full overflow-hidden border-y border-white/10 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 backdrop-blur-xl py-3 sm:py-4 relative">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.08),transparent_70%)] pointer-events-none" />

      {/* Left Fade */}
      <div className="absolute left-0 top-0 h-full w-12 sm:w-24 bg-gradient-to-r from-slate-950 to-transparent z-10" />

      {/* Right Fade */}
      <div className="absolute right-0 top-0 h-full w-12 sm:w-24 bg-gradient-to-l from-slate-950 to-transparent z-10" />

      <motion.div
        className="flex items-center gap-6 sm:gap-10 md:gap-14 whitespace-nowrap w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 14,
          repeat: Infinity,
        }}
      >
        {/* Original Items */}
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-3 shrink-0">
            {/* Dot */}
            <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />

            {/* Text */}
            <h1 className='text-xs sm:text-sm md:text-base font-["Exo_2","sans-serif"] text-white/90 font-medium tracking-wide uppercase'>
              {item}
            </h1>
          </div>
        ))}

        {/* Duplicate Items */}
        {items.map((item, index) => (
          <div
            key={`dup-${index}`}
            className="flex items-center gap-3 shrink-0"
          >
            {/* Dot */}
            <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />

            {/* Text */}
            <h1 className='text-xs sm:text-sm md:text-base font-["Exo_2","sans-serif"] text-white/90 font-medium tracking-wide uppercase'>
              {item}
            </h1>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LiveScrollData;
