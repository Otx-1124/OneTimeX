import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const WhyChooseOnetimex = () => {
  const benefits = [
    "End-to-end support for Unlisted & Listed investments, from research to execution.",
    "Expert-backed insights & help you make profitable investment decisions.",
    "Strong partnerships with, ensuring trusted financial solutions and secure transactions.",
  ];

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-white px-6 md:px-20 py-10">
      <motion.section
        className="container mx-auto bg-gradient-to-br from-green-200 to-blue-50 py-12 px-6 md:px-16 lg:px-24 rounded-xl shadow-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <motion.h2
          className="text-gray-500 text-sm font-semibold tracking-wide uppercase mb-2"
          custom={0}
          variants={fadeInUp}
        >
          ONETIMEX: Your Trusted Investment Partner!
        </motion.h2>

        <motion.h1
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
          custom={1}
          variants={fadeInUp}
        >
          Why Choose <span className="text-blue-600">ONETIMEX</span>?
        </motion.h1>

        <div className="space-y-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4"
              custom={i + 2}
              variants={fadeInUp}
            >
              <div className="text-green-600 text-2xl">✅</div>
              <p className="text-lg text-gray-700">{benefit}</p>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-10 text-center" custom={5} variants={fadeInUp}>
          <p className="text-xl font-semibold text-gray-900">
            <span className="inline-flex items-center gap-1">
              🌟 Invest Smart, Invest with{" "}
              <span className="text-blue-600 font-bold">ONETIMEX</span>! 💰🚀
            </span>
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default WhyChooseOnetimex;
