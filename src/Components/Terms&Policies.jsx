import React, { useEffect } from "react";
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

const policies = [
  {
    emoji: "📜",
    title: "Terms & Conditions (T&C)",
    link: "/terms-and-conditions",
    content:
      "Welcome to OneTimeX. By accessing our services, you agree to comply with our terms. We provide educational insights and stock market facilitation services. All information is for informational purposes and not investment advice. Misuse of our platform may lead to termination of access. We reserve the right to update our terms at any time.",
  },
  {
    emoji: "🔁",
    title: "Refund & Cancellation Policy",
    link: "/refund-policy",
    content:
      "OneTimeX does not provide refunds once the service is activated. In special cases where technical errors occur or double charges are made, refunds will be considered within 7 working days. Users are requested to review plans before confirming payments.",
  },
  {
    emoji: "🔒",
    title: "Privacy Policy",
    link: "/privacy-policy",
    content:
      "OneTimeX values your privacy. We collect only essential data for service delivery and do not sell or share user data with third parties. Users' contact and payment information is encrypted and secure. By using our platform, you consent to our privacy practices.",
  },
  {
    emoji: "📞",
    title: "Contact Us",
    link: "/contact-us",
    content: (
      <>
        Need help? Reach out to us at:
        <br />
        📧 Email: <a href="mailto:Connect@onetimex.in" className="text-blue-600 underline">Connect@onetimex.in</a>
        <br />
        📞 WhatsApp: <a href="https://wa.me/917045035773" className="text-green-600 underline">7045035773</a>
        <br />
        🕒 Operating Hours: Mon–Sat, 10 AM to 6 PM
      </>
    ),
  },
];



const TermsAndPolicies = () => {

  return (
    <div className="bg-gradient-to-br from-blue-100 to-green-100 min-h-screen px-6 py-10 md:px-20 mt-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="max-w-4xl mx-auto"
      >
        <motion.h1
          className="text-3xl font-bold text-gray-800 mb-8 text-center sm:mt-10"
          custom={0}
          variants={fadeInUp}
        >
          Legal & Support Policies
        </motion.h1>

        {policies.map((item, index) => (
          <motion.div
            key={index}
            custom={index + 1}
            variants={fadeInUp}
            className="bg-white shadow-md rounded-xl p-6 mb-6 border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
              {item.emoji}{" "}
              <a href={item.link} className="hover:text-blue-600 transition-colors duration-200">
                {item.title}
              </a>
            </h2>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              {item.content}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TermsAndPolicies;
