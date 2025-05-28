import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const services = [
  {
    "title": "Equity Shares",
    "description": "Onetimex offers equity sharing solutions with flexible investment terms and competitive returns to help investors collaborate effectively.",
    "buttonText": "Apply Now",
    "icon": "https://img.icons8.com/fluency/48/combo-chart.png"
  },
  {
    "title": "Mutual Funds",
    "description": "Onetimex offers expert-managed mutual funds with flexible investment options, and risk-based choices to match your financial goals.",
    "buttonText": "Apply Now",
    "icon": "https://img.icons8.com/fluency/48/investment-portfolio.png"
  },
  {
    "title": "PMS/AIF",
    "description": "Onetimex offers expert-driven PMS & AIF strategies for personalized portfolio management and high-return alternative investments.",
    "buttonText": "Apply Now",
    "icon": "https://img.icons8.com/fluency/48/bank-cards.png"
  },
  {
    "title": "Health Insurance",
    "description": "Onetimex offers comprehensive health insurance plans with cashless hospitalization, extensive coverage.",
    "buttonText": "Apply Now",
    "icon": "https://img.icons8.com/fluency/48/heart-with-pulse.png"
  },
  {
    "title": "Life Insurance",
    "description": "Onetimex offers comprehensive life insurance plans with affordable premiums, high coverage, and flexible payout options to protect your family’s future.",
    "buttonText": "Apply Now",
    "icon": "https://img.icons8.com/fluency/48/family--v2.png"
  },
  {
    "title": "Term Insurance",
    "description": "Onetimex offers affordable term insurance plans with high coverage, flexible payout options, and tax benefits to ensure your loved ones are financially secure.",
    "buttonText": "Apply Now",
    "icon": "https://img.icons8.com/fluency/48/contract.png"
  }
]



const FinancialServices = () => {
  return (
    <motion.section
      className="bg-green-50 rounded-3xl px-6 py-5 md:px-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="text-center mb-14 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Financial Services
        </h2>
        <p className="text-gray-600">
          Discover a wide range of financial services tailored to your needs. Onetimex makes your financial journey smoother and smarter.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            variants={fadeInUp}
            whileHover={{ scale: 1.03 }}
          >
            <div className="mb-4"><img src={item.icon} alt={item.title} /></div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-6">{item.description}</p>
            <button className="text-black border border-blue-500 rounded-3xl  font-semibold hover:bg-blue-600 hover:text-white px-4 py-3 ">
              Apply Now
            </button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default FinancialServices;
