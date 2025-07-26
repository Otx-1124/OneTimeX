import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const OnetimexIntro = () => {
  return (
    <section className="bg-gradient-to-br from-white to-gray-100 py-20 px-6 md:px-20 text-gray-800">
      <div className="max-w-5xl mx-auto space-y-10">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center text-green-700"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Invest Beyond Limits
        </motion.h1>

        <motion.p
          className="text-xl text-center max-w-3xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Onetimex is a modern investment platform that empowers retail investors
          to access high-growth opportunities in{" "}
          <strong>unlisted startups</strong>,{" "}
          <strong>pre-IPO shares</strong>, and{" "}
          <strong>top-performing listed stocks</strong> — all in one place.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white shadow rounded-xl p-6 space-y-4 border-l-4 border-green-600"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-semibold text-green-700">Our Mission</h2>
            <p>
              To democratize access to exclusive investment opportunities and help
              retail investors build long-term wealth through curated, transparent,
              and intelligent financial products.
            </p>
          </motion.div>

          <motion.div
            className="bg-white shadow rounded-xl p-6 space-y-4 border-l-4 border-blue-600"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-semibold text-blue-700">Key Offerings</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>🚀 Unlisted Shares: Invest in high-potential startups</li>
              <li>📈 Listed Stocks: SIPs, Large/Mid/Small Cap insights</li>
              <li>🧠 Intelligent Advisory Portfolio (IAP)</li>
              <li>💼 Pre-IPO Access with expert guidance</li>
              <li>🔒 Fully secure & compliant investments</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="bg-purple-50 rounded-lg shadow p-6 text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-bold text-purple-700 mb-2">
            Start Investing Smarter
          </h3>
          <p className="text-gray-700 mb-4">
            Join thousands of retail investors exploring the future of wealth with Onetimex.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full shadow transition">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default OnetimexIntro;
