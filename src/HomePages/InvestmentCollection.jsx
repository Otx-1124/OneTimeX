import { motion } from "framer-motion";
import { details } from "framer-motion/client";
import { useEffect, useState } from "react";
import {
  FaChartLine,
  FaRupeeSign,
  FaPiggyBank,
  FaBuilding,
  FaIndustry,
  FaCubes,
} from "react-icons/fa";

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

const investments = [
  {
    icon: <FaChartLine className="text-4xl text-blue-600" />,
    title: "High-return",
    desc: "Expert high-return investment options for maximizing wealth growth.",
    detail: {
      title: "High-return Investments",
      slug: "high-return",
      color: "text-blue-600",
      what: "High-return investments focus on maximizing capital appreciation over time, often by taking higher risk positions in the market.",
      why: "They offer the potential for exponential growth, ideal for wealth creation if you can manage volatility and risk.",
      description:
        "High-return investments are strategies designed to generate substantial profits over time. These often come with increased risk but also offer the potential for exponential growth.",
      keyFeatures: [
        "Aimed at aggressive wealth building",
        "Suitable for long-term goals",
        "High market volatility",
        "High reward potential",
      ],
      examples: [
        "Growth stocks",
        "Sectoral/thematic funds (AI, EV)",
        "Cryptocurrencies",
        "Startup investing",
      ],
      whoShouldInvest: [
        "Young investors with a long time horizon",
        "People with high risk tolerance",
        "Those aiming for fast wealth accumulation",
      ],
      risks: [
        "Can lead to significant losses",
        "Highly sensitive to market fluctuations",
        "Requires active monitoring",
      ],
      proTip:
        "Diversify your high-return portfolio with safer assets to reduce downside risk.",
    },
  },
  {
    icon: <FaRupeeSign className="text-4xl text-green-600" />,
    title: "SIP – 500",
    desc: "Start SIP from ₹500 to invest regularly and build wealth with ease.",
    detail: {
      title: "SIP Starting from ₹500",
      slug: "sip-500",
      color: "text-green-600",
      what:
        "A Systematic Investment Plan (SIP) allows you to invest small amounts regularly, starting from ₹500, into mutual funds.",
      why:
        "SIPs encourage disciplined investing, eliminate timing the market, and help in rupee cost averaging and compounding.",
      description:
        "Systematic Investment Plans (SIPs) let you invest a fixed amount at regular intervals, starting from as little as ₹500 per month.",
      keyFeatures: [
        "Promotes regular saving and investing",
        "Builds wealth through compounding",
        "Reduces market timing risks",
        "Flexible and beginner-friendly",
      ],
      examples: [
        "SBI Bluechip Fund",
        "Nippon India Small Cap Fund",
        "ICICI Prudential Balanced Advantage Fund",
      ],
      whoShouldInvest: [
        "Beginners in investing",
        "Students and salaried professionals",
        "Anyone with a small monthly surplus",
      ],
      risks: [
        "Market-dependent returns",
        "Short-term volatility",
        "Fund manager performance variability",
      ],
      proTip:
        "Start early—even ₹500/month can turn into lakhs over decades due to compounding.",
    },
  },
  {
    icon: <FaPiggyBank className="text-4xl text-yellow-600" />,
    title: "Tax Savings",
    desc: "Tax-saving investment strategies to maximize returns and reduce tax liability.",
    detail: {
      title: "Tax Saving Investments",
      slug: "tax-savings",
      color: "text-yellow-600",
      what:
        "Tax-saving investments are financial instruments that reduce your taxable income while generating returns.",
      why:
        "They help you save money on taxes while also building wealth, making them a dual-benefit option for smart financial planning.",
      description:
        "These are investment options that help you reduce your taxable income while simultaneously growing your wealth.",
      keyFeatures: [
        "Eligible under Section 80C of the Income Tax Act",
        "Some offer guaranteed returns, others are market-linked",
        "Lock-in periods vary (3 to 15 years)",
        "Helps in dual benefit: saving tax + investing",
      ],
      examples: [
        "ELSS (Equity Linked Saving Scheme)",
        "PPF (Public Provident Fund)",
        "NPS (National Pension Scheme)",
        "5-Year Tax-saving FD",
        "Life Insurance premiums",
      ],
      whoShouldInvest: [
        "Salaried taxpayers in 10% to 30% tax bracket",
        "Self-employed individuals",
        "Anyone planning tax-efficient wealth growth",
      ],
      risks: [
        "Returns vary based on the investment type",
        "ELSS has market risk",
        "Lock-in limits liquidity",
      ],
      proTip:
        "Use ELSS funds for high returns and shortest lock-in (3 years) under 80C.",
    },
  },
  {
    icon: <FaBuilding className="text-4xl text-indigo-600" />,
    title: "Large Cap",
    desc: "Stable investment in well-established companies with strong market presence.",
    detail: {
      title: "Large Cap Investments",
      slug: "large-cap",
      color: "text-indigo-600",
      what:
        "Large Cap investments involve putting money into well-established companies with a strong financial track record and high market capitalization.",
      why:
        "These stocks offer stability, regular dividends, and are great for conservative investors looking for steady growth.",
      description:
        "Large Cap companies are well-established businesses with a market capitalization in the top 100. These are leaders in their sectors with strong fundamentals.",
      keyFeatures: [
        "Stable long-term performance",
        "Lower volatility",
        "Often pay regular dividends",
        "Ideal for core portfolio",
      ],
      examples: ["Reliance Industries", "HDFC Bank", "Infosys", "TCS"],
      whoShouldInvest: [
        "Conservative investors",
        "People nearing retirement",
        "Investors seeking steady long-term growth",
      ],
      risks: [
        "Lower return potential compared to mid/small caps",
        "Limited upside during bull markets",
      ],
      proTip:
        "Use large cap funds as your portfolio’s foundation for stable performance.",
    },
  },
  {
    icon: <FaIndustry className="text-4xl text-purple-600" />,
    title: "Mid Cap",
    desc: "Balanced growth with moderate risk in growing mid-sized companies.",
    detail: {
      title: "Mid Cap Investments",
      slug: "mid-cap",
      color: "text-purple-600",
      what:
        "Mid Cap companies are ranked 101–250 by market capitalization. They are growing businesses with significant expansion potential.",
      why:
        "They offer a balance of growth and risk, perfect for investors looking to diversify beyond large caps while managing volatility.",
      description:
        "Mid Cap companies rank between 101–250 in terms of market capitalization. These are growing companies that balance risk and reward.",
      keyFeatures: [
        "Greater growth than large caps",
        "Moderate volatility",
        "Faster expansion potential",
        "Often overlooked gems",
      ],
      examples: [
        "Tata Elxsi",
        "L&T Finance",
        "Dixon Technologies",
        "Polycab India",
      ],
      whoShouldInvest: [
        "Moderate risk-takers",
        "Investors with a 5+ year investment horizon",
        "Those building a balanced equity portfolio",
      ],
      risks: [
        "Sensitive to economic downturns",
        "Less predictable than large caps",
      ],
      proTip:
        "Use mid cap funds to balance the safety of large caps and aggression of small caps.",
    },
  },
  {
    icon: <FaCubes className="text-4xl text-pink-600" />,
    title: "Small Cap",
    desc: "High-growth potential investments in emerging small-sized companies.",
    detail: {
      title: "Small Cap Investments",
      slug: "small-cap",
      color: "pink-600",
      what:
        "Small Cap investments are in companies ranked below 250 by market capitalization, often in early growth stages.",
      why:
        "They can offer explosive returns and are ideal for young investors or those with a high-risk appetite and long investment horizon.",
      description:
        "Small Cap companies rank beyond the top 250 in market capitalization. These are emerging businesses with high growth potential and higher risk.",
      keyFeatures: [
        "High potential for exponential growth",
        "Volatile and risky",
        "Often under-researched",
        "Best suited for long-term investing",
      ],
      examples: [
        "KPIT Technologies",
        "Tanla Platforms",
        "Borosil Renewables",
        "Electronics Mart India",
      ],
      whoShouldInvest: [
        "High-risk investors",
        "Young investors with long horizons",
        "Those aiming to boost portfolio returns",
      ],
      risks: [
        "High volatility",
        "Liquidity challenges",
        "Business uncertainty",
      ],
      proTip:
        "Limit small caps to 10–20% of your portfolio and review performance annually.",
    },
  },
];


import { Link, Navigate, useNavigate } from "react-router-dom";
import { useInvestment } from "../Context/InvestmentContext";

export default function InvestmentSection() {
  const { setSelectedDetail } = useInvestment();

  const navigate = useNavigate();

  const handleShowData = (item, idx) => {
    setSelectedDetail(item); // Save data
    navigate("/investment-props");
  };

  return (
    <motion.section
      className="bg-white rounded-3xl px-6 py-5 md:px-20 "
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
     
      <div className="container mx-auto">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Explore Our Investment Collections
          </h2>
          <p className="text-gray-600">
            Unlock smart investing with Onetimex. From SIPs and tax-saving
            strategies to diverse market caps, we offer financial solutions
            tailored to your goals.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {investments.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white shadow-md rounded-xl p-3 text-center hover:shadow-xl transition-all duration-300 cursor-pointer"
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              onClick={() => {
                handleShowData(item, idx);
              }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4">{item.desc}</p>
              <Link
                to="/investment-props"
                className="text-orange-600 font-semibold hover:underline"
              >
                Learn more
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
