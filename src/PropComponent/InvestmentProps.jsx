import React, { useEffect, useRef } from "react";
import { useInvestment } from "../Context/InvestmentContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { investments } from "../Data/InvestmentData.js";
import InvestmentSection from "../HomePages/InvestmentCollection.jsx";

const fadeInUp = {
  hidden: { opacity: 0, y: 40, scale: 2 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const InvestmentProps = () => {
  const { selectedDetail } = useInvestment();
  const navigate = useNavigate();
  const detailRef = useRef(null);

  // Redirect if no investment is selected
  useEffect(() => {
    if (!selectedDetail) {
      navigate("/");
    }
  }, [selectedDetail, navigate]);

  // Scroll into view whenever a new investment is selected
  useEffect(() => {
    if (selectedDetail && detailRef.current) {
      requestAnimationFrame(() => {
        detailRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [selectedDetail?.title]); // key: listen to selectedDetail title change

  if (!selectedDetail) return null;

  return (
    <motion.div
      className="min-h-screen w-full bg-green-100 py-20 px-6 md:px-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <InvestmentSection />

      {/* ✅ Scroll target section */}
      <div ref={detailRef} className="max-w-5xl mx-auto space-y-10">
        <h1 className={`${selectedDetail.detail.color} text-4xl md:text-5xl font-bold text-center`}>
          {selectedDetail.title}
        </h1>

        <Section title={`What is ${selectedDetail.title}?`}>
          <p>{selectedDetail.detail.description}</p>
        </Section>

        <Section title={`Why ${selectedDetail.title}?`}>
          <p>{selectedDetail.detail.why}</p>
        </Section>

        <Section title="Key Features">
          <ul className="list-disc list-inside">
            {selectedDetail.detail.keyFeatures.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </Section>

        <Section title="Who Should Invest">
          <ul className="list-disc list-inside">
            {selectedDetail.detail.whoShouldInvest.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section title="Examples">
          <ul className="list-disc list-inside">
            {selectedDetail.detail.examples.map((example, idx) => (
              <li key={idx}>{example}</li>
            ))}
          </ul>
        </Section>

        <Section title="Risks">
          <ul className="list-disc list-inside text-red-600">
            {selectedDetail.detail.risks.map((risk, idx) => (
              <li key={idx}>{risk}</li>
            ))}
          </ul>
        </Section>

        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-600">
          <h3 className="text-2xl font-semibold text-purple-700 mb-2">
            💡 Pro Tip
          </h3>
          <p className="text-gray-700">{selectedDetail.detail.proTip}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Section = ({ title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow space-y-2">
    <h2 className="text-2xl font-semibold text-blue-700">{title}</h2>
    <div className="text-lg text-gray-700">{children}</div>
  </div>
);

export default InvestmentProps;
