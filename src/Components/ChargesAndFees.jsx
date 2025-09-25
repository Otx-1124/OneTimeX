import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const SubscriptionPlans = () => {
  const containerRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    // Attach Lenis to this component
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3), // smooth easing
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const plans = [
    {
      name: "ONELITE",
      amount: "₹10K – ₹49K",
      fees: "₹1,499 – ₹2,999",
    },
    {
      name: "ONETRAIL",
      amount: "₹50K – ₹1,99L",
      fees: "₹4,999 – ₹7,999",
    },
    {
      name: "ONEMANAGE",
      amount: "₹2L – ₹5L",
      fees: "₹10K – ₹15K PA",
    },
    {
      name: "ONEPREMIUM (IAP)",
      amount: "₹5L+",
      fees: "Fund Mgmt by MO | 2% of AUM (Annual)",
    },
  ];

  return (
    <div ref={containerRef} className="max-w-6xl mx-auto px-4 py-6">

      {/* Subscription Models */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-xl md:text-2xl font-semibold ">
          Subscription Models of <span className="text-orange-500">ONETIMEX</span>
        </h2>
        <h1 className="mb-6">Open with only 100 rupees</h1>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 text-gray-700 text-sm md:text-base">
              <tr>
                <th className="px-4 py-3 text-left">Plan</th>
                <th className="px-4 py-3 text-left">Investment Amount</th>
                <th className="px-4 py-3 text-left">Fees (PA)</th>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base">
              {plans.map((plan, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3 font-medium">{plan.name}</td>
                  <td className="px-4 py-3">{plan.amount}</td>
                  <td className="px-4 py-3">{plan.fees}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Partner Overview */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Partner Overview
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Motilal Oswal – Full-service broker</li>
          <li>Alice Blue – Discount broker</li>
          <li>Account Opening – Free (but subscription mandatory)</li>
        </ul>
      </motion.div>

      {/* Unlisted Shares Model */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Unlisted Shares Model
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Transaction fee based, 1–2%</li>
          <li>100% Transparent pricing</li>
          <li>Paperless execution</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default SubscriptionPlans;
