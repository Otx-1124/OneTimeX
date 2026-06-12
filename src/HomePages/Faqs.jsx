import { useState } from "react";

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

  const Faqs = () => {

    const [openIndex, setOpenIndex] = useState(null);
      
      const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };
  return (
     <div title="Frequently Asked Questions" badge="07">
        <div className="flex items-center gap-3 mb-5">
          <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
          <span className="bg-green-100 text-green-700 text-sm font-semibold px-2.5 py-0.5 rounded">
            07
          </span>
        </div>
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
          </div>
    );
};


export default Faqs;