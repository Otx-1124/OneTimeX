import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  X,
  TrendingUp,
  Shield,
  PieChart,
  BarChart3,
  Zap,
  Building,
  Star,
  TrendingUpIcon,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const InvestmentCards = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    if (selectedCard) {
      window.lenis?.stop();
    } else {
      window.lenis?.start();
    }
  }, [selectedCard]);

  const cardData = [
    {
      id: "aif",
      title: "AIF",
      subtitle: "Alternative Investment Fund",
      icon: TrendingUp,
      color: "bg-gradient-to-br from-purple-500 to-pink-600",
      details: {
        what: "Alternative Investment Funds (AIFs) are investment vehicles that pool money from sophisticated investors to invest in alternative assets like private equity, hedge funds, real estate, commodities, and structured products.",
        why: "AIFs offer diversification beyond traditional stocks and bonds, potential for higher returns, access to exclusive investment opportunities, and professional management by experienced fund managers.",
        keyFeatures: [
          "Professional management – Your money is handled by top fund managers.",
          "Higher return potential – Compared to traditional stocks and bonds.",
          "Diversification – Reduce risks by investing beyond regular markets.",
          "Exclusive opportunities – Invest in private equity, hedge funds, and high-growth assets.",
          "Access to premium investments – Opportunities not available to regular investors.",
        ],
      },
      tagline: "AIF minimum investment – ₹1 Crore",
    },

    {
      id: "pms",
      title: "PMS",
      subtitle: "Portfolio Management Services",
      icon: Star,
      color: "bg-gradient-to-br from-indigo-500 to-blue-700",
      details: {
        what: "PMS offers tailored investment strategies managed by professional portfolio managers who invest in stocks, fixed income, and other assets on behalf of clients.",
        why: "PMS allows high-net-worth individuals to benefit from customized portfolio strategies and expert management for optimal returns.",
        keyFeatures: [
          "Customized investment portfolios",
          "Expert fund management",
          "Transparent performance tracking",
          "High entry threshold",
          "Diversified asset allocation",
        ],
      },
      tagline: "PMS min investement - 50L",
    },
    {
      id: "iap",
      title: "IAP",
      subtitle: "Intelligent Advisory Portfolio By Motilal Oswal",
      icon: BarChart3,
      color: "bg-gradient-to-br from-yellow-400 to-orange-600",
      details: {
        what: "Investor Awareness Programs (IAPs) educate individuals about financial markets, investment risks, returns, and regulatory frameworks.",
        why: "IAPs empower investors to make informed decisions, avoid fraud, and understand the rights and responsibilities in financial markets.",
        keyFeatures: [
          "Financial education initiatives",
          "Understanding investment products",
          "Awareness of regulatory safeguards",
          "Prevention of mis-selling",
          "Investor protection information",
        ],
      },
      tagline: "IAP min investement - 5L",
    },

    {
      id: "fo",
      title: "F&O",
      subtitle: "Futures & Options",
      icon: BarChart3,
      color: "bg-gradient-to-br from-green-500 to-emerald-600",
      details: {
        what: "Futures and Options are derivative instruments that derive their value from underlying assets like stocks, indices, or commodities. They allow investors to trade contracts for future delivery or the right to buy/sell assets.",
        why: "F&O trading offers leverage for potentially higher returns, hedging capabilities to protect existing positions, and opportunities to profit from both rising and falling markets.",
        keyFeatures: [
          "High leverage potential",
          "Hedging against market risks",
          "Lower capital requirements",
          "Profit from market volatility",
          "Short selling opportunities",
        ],
      },
    },

    {
      id: "stocks",
      title: "Stocks",
      subtitle: "Equity Investment",
      icon: TrendingUpIcon,
      color: "bg-gradient-to-br from-rose-400 to-red-600",
      details: {
        what: "Stocks represent ownership in a company and entitle shareholders to a portion of its profits. They are traded on stock exchanges and are a common way to build wealth.",
        why: "Stocks offer long-term growth potential, dividend income, and liquidity, making them a key component of most investment portfolios.",
        keyFeatures: [
          "Ownership in listed companies",
          "Potential for capital appreciation",
          "Dividend income",
          "High liquidity",
          "Accessible via stock exchanges",
        ],
      },
    },
    {
      id: "mutualfunds",
      title: "Mutual Funds",
      subtitle: "Pooled Investment Vehicles",
      icon: Star,
      color: "bg-gradient-to-br from-teal-400 to-cyan-600",
      details: {
        what: "Mutual funds pool money from investors to invest in diversified portfolios of stocks, bonds, or other securities, managed by professional fund managers.",
        why: "They offer diversification, professional management, and accessibility for retail investors with small capital.",
        keyFeatures: [
          "Diversified investments",
          "Professional fund management",
          "Affordable entry points",
          "Regulated by SEBI",
          "Suitable for long-term goals",
        ],
      },
    },
    {
      id: "healthinsurance",
      title: "Health Insurance",
      subtitle: "Medical Coverage Plans",
      icon: BarChart3,
      color: "bg-gradient-to-br from-pink-400 to-purple-700",
      details: {
        what: "Health insurance provides financial coverage for medical expenses such as hospitalization, surgeries, and treatments.",
        why: "It protects individuals and families from unexpected medical costs and ensures access to quality healthcare without financial strain.",
        keyFeatures: [
          "Cashless treatment options",
          "Covers hospitalization & surgeries",
          "Tax benefits under Section 80D",
          "Wide hospital network",
          "Family floater options available",
        ],
      },
      slogan: "स्वास्थ्य की सुरक्षा, हर कल की गारंटी — OneTimeX के साथ।",
    },

    {
      id: "lifeinsurance",
      title: "Life Insurance",
      subtitle: "Comprehensive Life Coverage",
      icon: TrendingUp,
      color: "bg-gradient-to-br from-blue-600 to-gray-800",
      details: {
        what: "Life Insurance is a contract that provides a lump-sum payment to your beneficiaries in the event of your death, helping them meet financial obligations like daily expenses, loans, and future goals.",
        why: "It ensures your family is financially protected even in your absence, offering peace of mind and long-term security. Some plans also provide maturity benefits or investment-linked returns.",
        keyFeatures: [
          "Financial protection for your loved ones",
          "Lump-sum payout on death",
          "Maturity and survival benefits (in endowment/ULIP plans)",
          "Optional riders for critical illness, disability, and accident",
          "Tax benefits under Sections 80C and 10(10D)",
        ],
      },
    },
    {
      id: "terminsurance",
      title: "Term Insurance",
      subtitle: "Pure Life Protection Plan",
      icon: Star,
      color: "bg-gradient-to-br from-red-500 to-red-800",
      details: {
        what: "Term Insurance is a type of life insurance that provides financial protection to the nominee in case of the policyholder’s untimely death during the policy term. It does not offer maturity benefits.",
        why: "Term insurance is an affordable way to secure your family’s future with high coverage at low premiums, ensuring they are financially protected even in your absence.",
        keyFeatures: [
          "High sum assured at low premiums",
          "No maturity benefits (pure protection)",
          "Optional riders like critical illness or accidental death",
          "Flexible premium payment options",
          "Tax benefits under Sections 80C and 10(10D)",
        ],
      },
    },
  ];

  const openPopup = (card) => {
    setSelectedCard(card);
  };

  const closePopup = () => {
    setSelectedCard(null);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-white px-5 md:px-20 py-5"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-cyan-300/30 blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-400/20 blur-[120px] rounded-full" />

        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="relative w-fit mx-auto mt-20 mb-12 group ">
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-purple-500/30 blur-2xl opacity-70 group-hover:opacity-100 transition duration-500 rounded-full" />

          {/* Premium Badge */}
          <div className="relative overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl px-8 py-4 shadow-2xl">
            {/* Shine Line */}
            <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[100%] transition-all duration-1000" />

            <div className="flex items-center gap-3 relative z-10">
              {/* Dot */}
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse" />

              <h2 className="text-lg md:text-2xl font-semibold tracking-wide text-gray-800">
                Premium Investing Starts Here
              </h2>

              {/* Small Premium Badge */}
              <span className="hidden md:flex px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-xs font-bold uppercase tracking-wider text-white">
                Exclusive
              </span>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                onClick={() => openPopup(card)}
                className=" group relative overflow-hidden rounded-[32px] border border-gray-900 bg-blue-150 backdrop-blur-2xl p-6 cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-cyan-900/30"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute -top-20 -right-20 w-52 h-52 bg-cyan-500/20 blur-3xl rounded-full" />
                  <div className="absolute -bottom-20 -left-20 w-52 h-52 bg-blue-500/20 blur-3xl rounded-full" />
                </div>

                {/* Top Blur Shine */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/20">
                      <IconComponent className="text-white" size={30} />
                    </div>

                    <div className="w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center group-hover:rotate-12 transition duration-500">
                      <TrendingUp className="text-cyan-900" size={18} />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="mb-4">
                    <h3 className="text-3xl font-black tracking-tight text-gray-500">
                      {card.title}
                    </h3>

                    <p className="text-sm text-gray-800 mt-2 leading-relaxed">
                      {card.subtitle}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-[1px] bg-white/10 my-5" />

                  {/* Bottom */}
                  <div className="flex items-center justify-between">
                    <div className="px-4 py-2 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/10">
                      <p className="text-xs font-semibold tracking-wide text-cyan-700">
                        {card.tagline}
                      </p>
                    </div>

                    <span className="text-sm text-gray-500 group-hover:text-gray-800 transition">
                      Explore →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Popup Modal */}
        {selectedCard && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50"
          >
            <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[99vh] overflow-y-hidden">
              <div className={`${selectedCard.color} p-6 rounded-t-2xl`}>
                <p className="text-xl text-center text-green-200  rounded-lg py-1">
                  {selectedCard.slogan}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <selectedCard.icon className="text-white" size={40} />
                    <div>
                      <h2 className="text-3xl font-bold text-white">
                        {selectedCard.title}
                      </h2>
                      <p className="text-white text-opacity-90">
                        {selectedCard.subtitle}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={closePopup}
                    className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              <div className="p-6 relative">
                <section className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    What is {selectedCard.title}?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedCard.details.what}
                  </p>
                </section>

                <section className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Why Choose {selectedCard.title}?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedCard.details.why}
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Key Features
                  </h3>
                  <ul className="space-y-1">
                    {selectedCard.details.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>
                <div
                  className={` absolute bottom-8  right-2 flex flex-col justify-center gap-3 p-5  rounded-lg`}
                >
                  <Link
                    to="/unlisted-data"
                    className="rounded-3xl px-3 py-2 bg-green-400 font-semibold"
                  >
                    Start Investing
                  </Link>

                  <h1 className="text-red-800 text-center">Need help..?</h1>
                  <a
                    className="text-4xl text-green-900 flex self-center"
                    href="https://wa.me/7045035773?text=Hi%2C%20I'm%20interested%20in%20your%20services"
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default InvestmentCards;
