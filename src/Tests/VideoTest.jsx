import React from "react";

const VideoTest = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 py-10 bg-gradient-to-br from-green-100 to-yellow-100 w-full container mx-auto">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-2 text-center">Insights Video</h2>
      <p className="text-gray-700 mb-8 text-center">
        Explore short and long-format investment insights curated for Onetimex users.
      </p>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-8 w-full">
        {/* Left Column - 2 thumbnails side by side */}
        <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-2/5">
          {/* Thumbnail 1 */}
          <a href="#" className="flex flex-col gap-3 w-full sm:w-1/2">
            <img
              src="thumb1.JPG"
              alt="thumb1"
              className="rounded-2xl w-full h-64 object-cover shadow-md"
            />
            <p className="text-sm border border-gray-400 rounded-lg p-3 text-center bg-white shadow-sm">
              Billionaire Banne Ka Shortcut? 🚀 Startup Investing Before IPO
            </p>
          </a>

          {/* Thumbnail 2 */}
          <a href="#" className="flex flex-col gap-3 w-full sm:w-1/2">
            <img
              src="thumb1.JPG"
              alt="thumb2"
              className="rounded-2xl w-full h-64 object-cover shadow-md"
            />
            <p className="text-sm border border-gray-400 rounded-lg p-3 text-center bg-white shadow-sm">
              Unlisted Shares Explained – IPO Se Pehle Paisa Kaise Banaye?
            </p>
          </a>
        </div>

        {/* Right Column - 2 horizontal thumbnails with text */}
        <div className="flex flex-col gap-6 w-full lg:w-3/5">
          {/* Top: text left, image right */}
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <p className="text-sm border border-gray-400 rounded-lg p-3 bg-white shadow-sm w-full md:w-1/2 text-center md:text-left">
              Stock Market Mein Profit <span className="font-semibold text-red-600">Sabko Chahiye</span>, <span className="font-semibold text-red-600">Galtiyan Samajhne</span> Wale Kam Hai | ONETIMEX |
            </p>
            <img
              src="thumb1.JPG"
              alt="thumb3"
              className="rounded-2xl w-full md:w-1/2 h-40 object-cover shadow-md"
            />
          </div>

          {/* Bottom: image left, text right */}
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <img
              src="thumb1.JPG"
              alt="thumb4"
              className="rounded-2xl w-full md:w-1/2 h-40 object-cover shadow-md"
            />
            <p className="text-sm border border-gray-400 rounded-lg p-3 bg-white shadow-sm w-full md:w-1/2 text-center md:text-left">
              IPO Se <span className="font-semibold text-red-600">Pehle Invest Kaise Kare?</span>? Smart Investors <span className="font-semibold text-red-600">Ka First Choice</span> – ONETIMEX
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTest;
