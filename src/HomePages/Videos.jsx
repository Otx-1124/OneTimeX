import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const shorts = [
  {
    title: "Short: Top Govt Stocks",
    url: "https://youtube.com/shorts/83ZLuvdVIFs?si=UuY0E8XYtPT54hQg"
  },
  {
    title: "Short: Quick Trading Tips",
    url: "https://www.youtube.com/embed/0zuHYgAMUVo"
  },
  {
    title: "Short: Investment Myths",
    url: "https://youtube.com/shorts/0zuHYgAMUVo?si=M4lxBgurmNQyDRSb"
  },
  {
    title: "Short: Portfolio Basics",
    url: "https://youtube.com/shorts/0FLTIIcwouE?si=pCXyTuxUFDFOf0B3"
  }
];

const longs = [
  {
    title: "Understanding Stock Market Index | Options Trading",
    url: "https://youtu.be/MTV5qv2NUhU?si=6zPVmv1pJkBkoJy0"
  },
  {
    title: "Savings Devalue Over Time | Smart Investment Strategies",
    url: "https://www.youtube.com/embed/LONG_VIDEO_ID2"
  },
  {
    title: "How to Build a Diversified Portfolio",
    url: "https://www.youtube.com/embed/LONG_VIDEO_ID3"
  },
  {
    title: "Beginner’s Guide to Mutual Funds",
    url: "https://youtu.be/QlVACaoYckw?si=r1HA-MZiuEhL2PIZ"
  }
];

export default function InsightsVideoSection() {
  return (
    <motion.section
      className="bg-green-50 rounded-3xl px-6 py-16 md:px-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="text-center mb-14 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Insights Video
        </h2>
        <p className="text-gray-600">
          Explore short and long-format investment insights curated for Onetimex users.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Shorts */}
        <div className="grid grid-cols-2 gap-4">
          {shorts.map((video, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-2">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="rounded-md w-full"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="mt-2 text-sm font-medium text-gray-700 text-center">
                {video.title}
              </p>
            </div>
          ))}
        </div>

        {/* Long videos */}
        <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
          {longs.map((video, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow p-4"
              variants={fadeInUp}
            >
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="rounded-md w-full"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="mt-4 text-gray-800 font-semibold text-center text-base">
                {video.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
