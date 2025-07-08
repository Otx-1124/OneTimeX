import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const BlogPage = () => {
  return ( 
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-yellow-100 to-blue-50 py-20 px-4 sm:px-6 lg:px-8 font-sans mt-10">
      {/* Floating Decorative Elements */}
      <div className="fixed top-20 left-10 w-32 h-32 rounded-full bg-blue-200 opacity-20 blur-xl "></div>
      <div className="fixed bottom-40 right-20 w-48 h-48 rounded-full bg-indigo-200 opacity-15 blur-xl"></div>
      
      {/* Main Container */}
      <motion.div 
        className="max-w-5xl mx-auto relative bg-gradient-to-br from-green-50 to-yellow-50 "
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Decorative Corner Accents */}
        <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-blue-500 rounded-tl-xl"></div>
        <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-indigo-500 rounded-br-xl"></div>
        
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16 relative z-10"
          variants={itemVariants}
        >
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
            <span className="text-sm font-semibold tracking-wider">2025 EDITION</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-serif leading-tight">
            <span className="relative inline-block">
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-300 opacity-60 z-0"></span>
              <span className="relative z-10">📘 Complete Guide</span>
            </span><br/>
            to Unlisted Shares in India
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your definitive resource for pre-IPO investing in the Indian market
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/20 relative z-10 bg-gradient-to-br from-green-50 to-yellow-50"
          variants={itemVariants}
        >
          {/* Decorative Header */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-800 opacity-95"></div>
            <div className="relative z-10 p-8 flex items-center">
              <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mr-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Investor's Handbook</h2>
                <p className="text-blue-100">Unlock pre-IPO opportunities with confidence</p>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="p-10 space-y-16">
            {/* What Are Unlisted Shares */}
            <Section 
              title="🔍 What Are Unlisted Shares?" 
              icon={
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              }
            >
              <motion.p 
                className="text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                Unlisted shares are equity shares of companies that are not listed on any stock exchange like NSE or BSE. These shares are typically bought and sold over-the-counter (OTC) or through private placement platforms like OneTimeX.
              </motion.p>
            </Section>

            {/* Why Invest */}
            <Section 
              title="📈 Why Should You Invest in Unlisted Shares?" 
              icon={
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              }
            >
              <motion.div 
                className="grid md:grid-cols-3 gap-6 mt-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
              >
                {[
                  {
                    title: "Early Entry to High-Growth Companies",
                    desc: "Invest before IPO at lower valuations",
                    icon: "🚀",
                    color: "from-purple-500 to-blue-500"
                  },
                  {
                    title: "Diversification",
                    desc: "Balance risk alongside listed investments",
                    icon: "🔄",
                    color: "from-green-500 to-teal-500"
                  },
                  {
                    title: "Potential for Higher Returns",
                    desc: "Pre-IPO stocks often offer multi-bagger opportunities",
                    icon: "💰",
                    color: "from-yellow-500 to-orange-500"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className={`bg-gradient-to-br ${item.color} p-0.5 rounded-xl`}
                    variants={itemVariants}
                  >
                    <div className="bg-white rounded-lg p-5 h-full flex flex-col">
                      <div className="text-3xl mb-3">{item.icon}</div>
                      <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </Section>

            {/* How to Buy */}
            <Section 
              title="🧾 How to Buy Unlisted Shares on OneTimeX?" 
              icon={
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
              }
            >
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full border-t-2 border-dashed border-gray-200"></div>
                </div>
                <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8">
                  {[
                    { step: 1, text: "Visit our platform", icon: "🌐" },
                    { step: 2, text: "Browse verified companies", icon: "🔎" },
                    { step: 3, text: "Place your interest", icon: "📝" },
                    { step: 4, text: "Complete payment", icon: "💳" },
                    { step: 5, text: "Receive shares", icon: "🎉" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex flex-col items-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-white border-4 border-blue-100 shadow-sm flex items-center justify-center text-2xl mb-3 z-10">
                        {item.icon}
                      </div>
                      <div className="text-center">
                        <div className="text-xs font-semibold text-blue-600 mb-1">STEP {item.step}</div>
                        <p className="text-sm font-medium text-gray-700">{item.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Section>

            {/* Popular Companies */}
            <Section 
              title="💡 Popular Unlisted Companies in 2025" 
              icon={
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              }
            >
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
              >
                {[
                  { name: "Reliance Retail", logo: "🛒" },
                  { name: "HDFC Securities", logo: "🏦" },
                  { name: "Tata Capital", logo: "🚗" },
                  { name: "Hexaware Technologies", logo: "💻" }
                ].map((company, index) => (
                  <motion.div 
                    key={index} 
                    className="group relative overflow-hidden rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300"
                    variants={itemVariants}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 p-5 flex flex-col items-center">
                      <div className="text-3xl mb-3 group-hover:text-blue-600 transition-colors">{company.logo}</div>
                      <h4 className="font-medium text-gray-900 text-center">{company.name}</h4>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </Section>

            {/* Risks Section */}
            <Section 
              title="📉 What Are the Risks Involved?" 
              icon={
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
              }
            >
              <motion.div 
                className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl border-l-4 border-red-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Liquidity Risk",
                      desc: "Selling may take time",
                      icon: "⏳"
                    },
                    {
                      title: "Valuation Uncertainty",
                      desc: "No daily market price",
                      icon: "📊"
                    },
                    {
                      title: "Regulatory Changes",
                      desc: "SEBI regulations may impact trading norms",
                      icon: "⚖️"
                    }
                  ].map((risk, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="text-2xl mr-4 mt-1">{risk.icon}</div>
                      <div>
                        <h4 className="font-semibold text-red-700 mb-1">{risk.title}</h4>
                        <p className="text-gray-700 text-sm">{risk.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Section>

            {/* Why OneTimeX */}
            <Section 
              title="🛡 Why OneTimeX for Unlisted Shares?" 
              icon={
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              }
            >
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl blur opacity-10"></div>
                <div className="relative bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                  <div className="grid md:grid-cols-2 gap-8">
                    {[
                      "Trusted by Indian investors who value smart investing",
                      "SEBI-compliant partners",
                      "Real-time price discovery",
                      "End-to-end support from inquiry to demat",
                      "Transparent pricing",
                      "Verified company research"
                    ].map((item, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-start"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                      >
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                        </div>
                        <p className="ml-3 text-gray-700">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Section>

            {/* FAQs */}
            <Section 
              title="🧠 FAQs on Unlisted Shares" 
              icon={
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              }
            >
              <motion.div 
                className="space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
              >
                {[
                  {
                    q: "Can retail investors buy unlisted shares?",
                    a: "Yes, any investor with a PAN and demat account can invest in unlisted shares via platforms like OneTimeX."
                  },
                  {
                    q: "Are unlisted shares profitable?",
                    a: "Many early investors have earned multi-fold returns post-IPO. However, like any investment, returns depend on research and risk."
                  },
                  {
                    q: "Is KYC required?",
                    a: "Yes, standard KYC (PAN, Aadhaar, bank proof) is required for compliance."
                  },
                  {
                    q: "Can I invest using UPI?",
                    a: "Yes, OneTimeX supports payments through UPI, Net Banking, and IMPS/NEFT."
                  }
                ].map((faq, index) => (
                  <motion.div 
                    key={index} 
                    className="group"
                    variants={itemVariants}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-lg p-2 mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <span className="font-bold">Q{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{faq.q}</h4>
                        <p className="mt-1 text-gray-700">{faq.a}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </Section>

            {/* CTA */}
            <motion.div 
              className="relative overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-95"></div>
              <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/10"></div>
              <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-indigo-400/20"></div>
              <div className="relative z-10 p-10 text-center">
                <h3 className="text-3xl font-bold text-white mb-4">Ready to explore hidden gems before they go public?</h3>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                  Join OneTimeX today and gain access to exclusive pre-IPO investment opportunities with complete transparency and security.
                </p>
                <a 
                  href="https://www.onetimex.com" 
                  className="inline-flex items-center justify-center bg-white text-blue-700 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Link to="/signup">Start Investing Now</Link>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

// Enhanced Section Component
const Section = ({ title, children, icon }) => {
  return (
    <motion.section 
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start mb-6">
        {icon && (
          <div className="flex-shrink-0 mr-4 mt-1">
            {icon}
          </div>
        )}
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
          {title}
        </h3>
      </div>
      <div className="ml-10 pl-2 border-l-2 border-blue-200">
        {children}
      </div>
    </motion.section>
  );
};

export default BlogPage;