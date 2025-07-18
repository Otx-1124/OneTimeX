import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import OnetimexBlog from "../Tests/blogtest";

const container = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, when: "beforeChildren" },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Section = ({ title, children, icon }) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5 }}
    className="relative"
  >
    <div className="flex items-start mb-6">
      {icon && <div className="mr-4 mt-1">{icon}</div>}
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h3>
    </div>
    <div className="ml-10 pl-2 border-l-2 border-blue-200">{children}</div>
  </motion.section>
);

const BlogPage = () => {
  const investReasons = [
    {
      title: "Early Entry to High-Growth Companies",
      desc: "Invest before IPO at lower valuations",
      icon: "🚀",
      color: "from-purple-500 to-blue-500",
    },
    {
      title: "Diversification",
      desc: "Balance risk alongside listed investments",
      icon: "🔄",
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Potential for Higher Returns",
      desc: "Pre-IPO stocks often offer multi-bagger opportunities",
      icon: "💰",
      color: "from-yellow-500 to-orange-500",
    },
  ];
  const steps = [
    "Visit our platform",
    "Browse verified companies",
    "Place your interest",
    "Complete payment",
    "Receive shares",
  ];
  const companies = [
    "🛒 Reliance Retail",
    "🏦 HDFC Securities",
    "🚗 Tata Capital",
    "💻 Hexaware Technologies",
  ];
  const risks = [
    "⏳ Liquidity Risk",
    "📊 Valuation Uncertainty",
    "⚖️ Regulatory Changes",
  ];
  const features = [
    "Trusted by Indian investors",
    "SEBI-compliant partners",
    "Real-time price discovery",
    "End-to-end support",
    "Transparent pricing",
    "Verified research",
  ];
  const faqs = [
    [
      "Can retail investors buy unlisted shares?",
      "Yes, any investor with a PAN and demat account can invest.",
    ],
    [
      "Are unlisted shares profitable?",
      "Many early investors have earned multi-fold returns post-IPO.",
    ],
    [
      "Is KYC required?",
      "Yes, standard KYC (PAN, Aadhaar, bank proof) is required.",
    ],
    [
      "Can I invest using UPI?",
      "Yes, OneTimeX supports UPI, Net Banking, and IMPS/NEFT.",
    ],
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-yellow-100 to-blue-50 py-20 px-4 sm:px-6 lg:px-8 font-sans mt-10">
      <motion.div
        className="max-w-5xl mx-auto bg-gradient-to-br from-green-50 to-yellow-50 relative"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.div className="text-center mb-16" variants={item}>
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
            <span className="text-sm font-semibold">2025 EDITION</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight font-serif">
            <span className="relative inline-block">
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-300 opacity-60 z-0"></span>
              <span className="relative z-10">📘 Complete Guide</span>
            </span>
            <br />
            to Unlisted Shares in India
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your definitive resource for pre-IPO investing
          </p>
        </motion.div>

        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/20"
          variants={item}
        >
          <div className="p-10 space-y-16">
            <Section title="🔍 What Are Unlisted Shares?">
              <p className="text-gray-700 leading-relaxed">
                Unlisted shares are equity shares not listed on NSE/BSE, traded
                OTC or through platforms like OneTimeX.
              </p>
            </Section>

            <Section title="📈 Why Invest?">
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                {investReasons.map((i, idx) => (
                  <div
                    key={idx}
                    className={`bg-gradient-to-br ${i.color} p-0.5 rounded-xl`}
                  >
                    <div className="bg-white rounded-lg p-5 h-full flex flex-col">
                      <div className="text-3xl mb-3">{i.icon}</div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        {i.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{i.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="🧾 How to Buy?">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {steps.map((text, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-white border-4 border-blue-100 flex items-center justify-center text-2xl mb-3">
                      {"🌐🔎📝💳🎉"[i]}
                    </div>
                    <div className="text-center">
                      <div className="text-xs font-semibold text-blue-600 mb-1">
                        STEP {i + 1}
                      </div>
                      <p className="text-sm text-gray-700">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="💡 Popular Companies">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {companies.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl border p-5 flex flex-col items-center"
                  >
                    <div className="text-3xl mb-3">{item.split(" ")[0]}</div>
                    <h4 className="text-center">
                      {item.split(" ").slice(1).join(" ")}
                    </h4>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="📉 Risks">
              <div className="grid md:grid-cols-3 gap-6">
                {risks.map((r, i) => (
                  <div key={i} className="flex items-start">
                    <div className="text-2xl mr-4 mt-1">{r.split(" ")[0]}</div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-1">
                        {r.split(" ")[1]}
                      </h4>
                      <p className="text-gray-700 text-sm">
                        {
                          [
                            "Selling may take time",
                            "No daily market price",
                            "SEBI regulations may change",
                          ][i]
                        }
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="🛡 Why OneTimeX?">
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">{f}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="🧠 FAQs">
              <div className="space-y-6">
                {faqs.map(([q, a], i) => (
                  <div key={i} className="group">
                    <div className="flex items-start">
                      <div className="bg-blue-100 text-blue-600 rounded-lg p-2 mr-4 font-bold">
                        Q{i + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{q}</h4>
                        <p className="mt-1 text-gray-700">{a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <motion.div className="text-center p-10 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl">
              <h3 className="text-3xl font-bold mb-4">
                Ready to explore hidden gems?
              </h3>
              <p className="mb-8">
                Join OneTimeX for exclusive pre-IPO investment opportunities.
              </p>
              <Link
                to="/signup"
                className="inline-flex items-center bg-white text-blue-700 font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-50"
              >
                Start Investing Now
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      <OnetimexBlog />
    </div>
  );
};

export default BlogPage;
