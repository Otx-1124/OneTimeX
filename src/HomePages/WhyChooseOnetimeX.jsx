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
  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-white px-20 py-5">
    <motion.section
      className=" py-12 px-6 md:px-16 lg:px-24 rounded-xl shadow-xl  container mx-auto bg-gradient-to-br from-green-200 to-blue-50"
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
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-4"
            custom={i + 2}
            variants={fadeInUp}
          >
            <div className="text-green-600 text-2xl">✅</div>
            <p className="text-lg text-gray-700">
              {i === 0 && (
                <>
                  End-to-end support for <strong>Unlisted & Listed investments</strong>, from research to execution.
                </>
              )}
              {i === 1 && (
                <>
                  Expert-backed insights & help you make <strong>profitable investment decisions</strong>.
                </>
              )}
              {i === 2 && (
                <>
                  Strong partnerships with, ensuring <strong>trusted financial solutions</strong> and secure transactions.
                </>
              )}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div className="mt-10 text-center" custom={5} variants={fadeInUp}>
        <p className="text-xl font-semibold text-gray-900">
          <span className="inline-flex items-center gap-1">
            🌟 Invest Smart, Invest with <span className="text-blue-600 font-bold">ONETIMEX</span>! 💰🚀
          </span>
        </p>
      </motion.div>
    </motion.section>
    </div>
  );
};

export default WhyChooseOnetimex;
