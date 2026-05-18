import React from "react";
import { motion } from "framer-motion";
import OnetimexBlog from "../Tests/blogtest";
import { BsWhatsapp } from "react-icons/bs";
import { useState } from "react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Section = ({ title, children, badge }) => (
  <motion.section
    variants={item}
    className="relative overflow-hidden rounded-[32px]
    border border-white/50 bg-white/70 backdrop-blur-2xl
    shadow-xl p-6 sm:p-8 lg:p-10"
  >
    {/* Glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-400/5" />

    <div className="relative z-10">
      <div className="flex items-center gap-4 mb-8">
        {badge && (
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white flex items-center justify-center font-bold text-xl shadow-lg">
            {badge}
          </div>
        )}

        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
          {title}
        </h3>
      </div>

      {children}
    </div>
  </motion.section>
);

const BlogPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const investReasons = [
    {
      title: "Early Entry",
      desc: "Invest before IPO at lower valuations",
      icon: "🚀",
    },
    {
      title: "Diversification",
      desc: "Balance risk with unlisted opportunities",
      icon: "📊",
    },
    {
      title: "Higher Returns",
      desc: "Potential multi-bagger opportunities",
      icon: "💰",
    },
  ];

  const steps = [
    "Visit Platform",
    "Browse Companies",
    "Place Interest",
    "Complete Payment",
    "Receive Shares",
  ];

  const companies = [
    "Reliance Retail",
    "HDFC Securities",
    "Tata Capital",
    "Hexaware",
  ];

  const risks = [
    {
      title: "Liquidity Risk",
      desc: "Selling may take time",
      icon: "⏳",
    },
    {
      title: "Valuation Risk",
      desc: "No daily market price",
      icon: "📉",
    },
    {
      title: "Regulatory Risk",
      desc: "SEBI rules may change",
      icon: "⚖️",
    },
  ];

  const features = [
    "Trusted by Investors",
    "SEBI-Compliant Partners",
    "Transparent Pricing",
    "Verified Research",
    "Real-Time Discovery",
    "Dedicated Support",
  ];

  const faqs = [
    {
      question: "What investment opportunities does Onetimex provide?",
      answer:
        "Onetimex provides access to premium investment opportunities including unlisted shares, PMS, AIFs, equity investments, and curated wealth management solutions for growth-focused investors.",
    },
    {
      question: "Who should invest through Onetimex?",
      answer:
        "Onetimex is designed for serious investors, HNIs, business owners, and individuals seeking strategic long-term wealth creation through premium financial products.",
    },
    {
      question: "What are unlisted shares and why are they valuable?",
      answer:
        "Unlisted shares are shares of companies not publicly traded on stock exchanges. They offer early access to high-growth companies before IPO listings, creating potential for significant long-term returns.",
    },
    {
      question:
        "What is the minimum investment amount for premium investment products?",
      answer:
        "Minimum investment requirements vary depending on the product category such as AIFs, PMS, and private market opportunities. Certain premium products may require higher investment commitments.",
    },
    {
      question: "Why do sophisticated investors choose unlisted investments?",
      answer:
        "Sophisticated investors often choose unlisted investments for portfolio diversification, access to private market growth, and opportunities unavailable in traditional retail investing.",
    },
    {
      question: "How does Onetimex help investors make informed decisions?",
      answer:
        "Onetimex focuses on research-driven opportunities, market insights, professional guidance, and curated investment options tailored for disciplined investors.",
    },
    {
      question: "What is Portfolio Management Services (PMS)?",
      answer:
        "Portfolio Management Services (PMS) offer customized investment strategies managed by professional fund managers to help investors optimize returns and manage risks efficiently.",
    },
    {
      question: "What are Alternative Investment Funds (AIFs)?",
      answer:
        "Alternative Investment Funds (AIFs) are professionally managed investment vehicles that invest in private equity, hedge funds, real estate, and other alternative asset classes.",
    },
    {
      question: "Is investing in unlisted shares risky?",
      answer:
        "Like all investments, unlisted shares involve market risks and lower liquidity. However, with proper research and long-term strategy, they can become valuable portfolio assets.",
    },
    {
      question: "Why is diversification important for wealth creation?",
      answer:
        "Diversification helps reduce investment risk by spreading capital across multiple asset classes, sectors, and investment opportunities.",
    },
    {
      question:
        "Can investors build long-term wealth through private market investments?",
      answer:
        "Private market investments can offer strong long-term growth potential, especially when investors gain early access to emerging and fundamentally strong businesses.",
    },
    {
      question:
        "How does Onetimex differ from traditional investment platforms?",
      answer:
        "Onetimex focuses on curated premium opportunities, strategic investing, and access to exclusive private market assets rather than mass-market retail investing.",
    },
    {
      question: "What are the benefits of investing before an IPO?",
      answer:
        "Pre-IPO investing provides early exposure to companies before public listing, potentially allowing investors to benefit from future valuation growth.",
    },
    {
      question: "Does Onetimex provide expert investment guidance?",
      answer:
        "Yes, Onetimex helps investors explore suitable opportunities through market research, investment insights, and professional assistance.",
    },
    {
      question:
        "Why are premium investment platforms gaining popularity in India?",
      answer:
        "Premium investment platforms are gaining popularity because investors increasingly seek alternative assets, private market exposure, and advanced wealth-building opportunities beyond traditional investments.",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-white py-20 px-4 sm:px-6 lg:px-10 mt-10">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-cyan-300/30 blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-400/20 blur-[120px] rounded-full" />

        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* HERO */}
        <motion.div variants={item} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 border border-cyan-300 bg-white/60 backdrop-blur-xl px-5 py-2 rounded-full shadow-md mb-6">
            <span className="w-2 h-2 bg-cyan-500 rounded-full" />

            <p className="text-sm font-medium text-cyan-700 tracking-wide">
              2026 Investment Guide
            </p>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
            Complete Guide To{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Unlisted Shares
            </span>
          </h1>

          <p className="text-slate-600 max-w-3xl mx-auto mt-8 text-lg leading-relaxed">
            Everything you need to know about investing in pre-IPO and unlisted
            companies in India.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="space-y-10">
          {/* WHAT */}
          <Section title="What Are Unlisted Shares?" badge="01">
            <p className="text-slate-600 text-lg leading-relaxed">
              Unlisted shares are company shares not traded on NSE or BSE. These
              shares are traded privately through trusted platforms like
              OneTimeX and give investors early access before IPO.
            </p>
          </Section>

          {/* WHY INVEST */}
          <Section title="Why Invest In Unlisted Shares?" badge="02">
            <div className="grid md:grid-cols-3 gap-6">
              {investReasons.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-[28px] p-6 border border-slate-100 hover:-translate-y-2 transition-all duration-300 shadow-lg"
                >
                  <div className="text-5xl mb-5">{item.icon}</div>

                  <h4 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h4>

                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* STEPS */}
          <Section title="How To Buy?" badge="03">
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative bg-white rounded-[28px] p-6 text-center shadow-lg border border-slate-100"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white flex items-center justify-center mx-auto text-2xl font-bold shadow-lg">
                    {index + 1}
                  </div>

                  <h4 className="font-bold text-slate-900 mt-5">{step}</h4>

                  {index !== steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500" />
                  )}
                </div>
              ))}
            </div>
          </Section>

          {/* COMPANIES */}
          <Section title="Popular Companies" badge="04">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[28px] p-8 border border-slate-100 text-center shadow-lg hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 mx-auto flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    {index + 1}
                  </div>

                  <h4 className="text-xl font-bold text-slate-900 mt-6">
                    {company}
                  </h4>
                </div>
              ))}
            </div>
          </Section>

          {/* RISKS */}
          <Section title="Risks To Consider" badge="05">
            <div className="grid md:grid-cols-3 gap-6">
              {risks.map((risk, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[28px] p-6 border border-slate-100 shadow-lg"
                >
                  <div className="text-5xl mb-5">{risk.icon}</div>

                  <h4 className="text-xl font-bold text-red-600 mb-3">
                    {risk.title}
                  </h4>

                  <p className="text-slate-600">{risk.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* WHY ONETIMEX */}
          <Section title="Why OneTimeX?" badge="06">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-md border border-slate-100"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white flex items-center justify-center font-bold">
                    ✓
                  </div>

                  <p className="font-medium text-slate-700">{feature}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* FAQ */}
          <Section title="Frequently Asked Questions" badge="07">
            <div className="space-y-5">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-md cursor-pointer transition-all duration-300"
                  onClick={() => handleToggle(index)}
                >
                  {/* Question */}
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-bold text-slate-900">
                      Q{index + 1}. {faq.question}
                    </h4>

                    <span className="text-xl">
                      {openIndex === index ? "-" : "+"}
                    </span>
                  </div>

                  {/* Answer */}
                  {openIndex === index && (
                    <p className="text-slate-600 mt-3 leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <h1 className="text-sm text-slate-500 mt-6">
              Investments are subject to market risks. Past performance is not
              indicative of future returns. Please read all offer documents
              carefully before investing. OneTimeX facilitates investment
              opportunities and does not provide personalized investment advice.
            </h1>
          </Section>

          {/* CTA */}
          <motion.div
            variants={item}
            className="relative overflow-hidden rounded-[40px]
            bg-gradient-to-r from-cyan-500 to-blue-600
            text-white p-10 sm:p-16 text-center shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_40%)]" />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
                Ready To Explore Hidden Investment Gems?
              </h2>

              <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
                Join OneTimeX and access premium pre-IPO investment
                opportunities before they hit the market.
              </p>

              <a
                href="https://wa.me/7045035773?text=Hi%2C%20I'm%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-10 bg-white text-cyan-700 font-bold px-8 py-4 rounded-2xl shadow-xl hover:scale-105 transition-all duration-300"
              >
                <BsWhatsapp size={22} />
                Start Investing On WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="relative z-10">
        <OnetimexBlog />
      </div>
    </div>
  );
};

export default BlogPage;
