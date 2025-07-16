import React, { useState } from "react";
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

const InvestmentCards = () => {
  const [selectedCard, setSelectedCard] = useState(null);

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
        "Higher minimum investment requirements",
        "Less liquid than traditional investments",
        "Sophisticated investment strategies",
        "Potential for higher returns",
        "Access to alternative asset classes",
      ],
    },
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
  },
  {
    id: "iap",
    title: "IAP",
    subtitle: "Investor Awareness Program",
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
}
,
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
}

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
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
     className="min-h-screen bg-[#009999]  bg-opacity-20 px-5 md:px-20 py-5"
      initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent text-center mt-10 md:mt-20 mb-12">
          Investment Options
        </h1>

        {/* Cards Grid */}
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardData.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                onClick={() => openPopup(card)}
                className={`${card.color} p-2 rounded-2xl shadow-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-3xl`}
              >
                <div className="flex items-center justify-between mb-4">
                  <IconComponent className="text-white" size={32} />
                  <div className="bg-white bg-opacity-20 rounded-full p-2">
                    <TrendingUp className="text-white" size={20} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-white text-opacity-90 text-sm">
                  {card.subtitle}
                </p>
                <div className="mt-4 flex justify-end">
                  <span className="text-white text-opacity-70 text-sm">
                    Click to learn more →
                  </span>
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
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className={`${selectedCard.color} p-6 rounded-t-2xl`}>
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
                  <ul className="space-y-2">
                    {selectedCard.details.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>
                <div className="absolute bottom-[25%] right-5 flex flex-col justify-center gap-3">
                 <h1 className="text-red-600 text-center">Need help..?</h1>
                 <a className="text-4xl text-green-700 flex self-center" href="https://wa.me/7045035773?text=Hi%2C%20I'm%20interested%20in%20your%20services"><FaWhatsapp/></a>
                 <div  className={`${selectedCard.color} p-2 rounded-t-2xl text-white`}>
                    <p>Or Contact : 7045035773</p>
                 </div>
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
