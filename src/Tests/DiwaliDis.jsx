// Components/DiwaliDisclaimer.jsx
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const DiwaliDisclaimer = ({ show, onClose }) => {
  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(() => {
      onClose(); // Auto close after 20 sec
    }, 20000);
    return () => clearTimeout(timer);
  }, [show, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* ✨ Background Glow or Pattern */}
          <div className="absolute inset-0 bg-[url('https://www.shutterstock.com/image-vector/diwali-greeting-card-3d-paper-600nw-1502728568.jpg')] bg-cover bg-center opacity-30"></div>

          {/* 🌟 Main Popup Card */}
          <motion.div
            className="relative z-10 bg-white/10 border border-yellow-400 rounded-3xl shadow-2xl backdrop-blur-sm flex flex-col md:flex-row overflow-hidden max-w-3xl w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 15 }}
          >
            {/* 🖼️ Left Side - Poster Image */}
            <div className="md:w-1/2 w-full bg-black/30">
              <img
                src="/diwalidis.jpg"
                alt="Diwali Muhurat Trading Poster"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 🎉 Right Side - Content */}
            <div className="md:w-1/2 w-full flex flex-col items-center justify-center text-center p-8">
              {/* Close Icon */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-yellow-300 hover:text-white transition"
              >
                <X size={22} />
              </button>

              {/* Diya Icon */}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB6WknJ21HY-oPvtKukdpa0MYgVYdTy_BSAA&s"
                className="w-16 h-16 mb-4 animate-pulse bg-transparent"
              />

              <h2 className="text-3xl font-bold text-yellow-300 mb-3">
                Happy Diwali ✨
                Celebrate This Diwali With OneTimeX and Team .
              </h2>

              <p className="text-white/90 text-sm mb-6 leading-relaxed">
                Celebrate this <b>Festival of Lights</b> with positivity,
                prosperity, and new investment beginnings.  
                May this Diwali bring you <b>wealth, wisdom,</b> and
                <b> infinite opportunities!</b>
              </p>

              {/* Skip Button */}
              <button
                onClick={onClose}
                className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition-all"
              >
                Skip
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DiwaliDisclaimer;
