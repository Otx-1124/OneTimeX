import React from "react";
import { Play } from "lucide-react";

const ImageGrid = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-20 py-10">

      {/* Heading */}
      <h1 className="mb-6 text-2xl sm:text-3xl md:text-4xl font-semibold text-red-500 text-center">
        Join Our YouTube Community
      </h1>

      {/* Card */}
      <a
        href="https://www.youtube.com/@onetimex.shorts"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-5xl bg-gradient-to-r from-green-700 to-green-500 rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 relative overflow-hidden"
      >
        {/* Left Icon */}
        <div className="bg-red-600 w-20 h-16 sm:w-24 sm:h-18 md:w-28 md:h-20 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
          <Play className="text-white w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 fill-white" />
        </div>

        {/* Right Content */}
        <div className="flex-1 text-center sm:text-left">

          {/* Logo */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            OneTime<span className="text-yellow-400">X</span>
          </h1>

          {/* Subheading */}
          <p className="text-white/80 mt-2 text-sm sm:text-base">
            Unlisted Shares | Listed Stocks | Insurance
          </p>

          {/* Divider */}
          <div className="w-full h-[2px] bg-yellow-400 my-3"></div>

          {/* CTA */}
          <p className="text-white/80 text-sm sm:text-base">
            Click to visit our
          </p>

          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
            YouTube Channel →
          </h2>
        </div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:40px_40px]" />
      </a>
    </div>
  );
};

export default ImageGrid;