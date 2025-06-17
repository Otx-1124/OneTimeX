import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AboutPage() {
  const ceo = { name: "Vishal Dubey", role: "Founder & CEO", img: "/CeoLogo.jpg" };

  const team = [
    { name: "Parag Yadav", role: "IT Backend Developer", img: "/logoOne.jpg" },
    { name: "Sandeep", role: "Frontend Developer", img: "/sandeep.jpg" },
    { name: "Ankkit Ghag", role: "Marketing & Sales Lead", img: "/ankit.jpg" },
    { name: "Shravani", role: "Business Development Executive (BDE)", img: "/logoOne.jpg" },
    { name: "Prabhat", role: "Senior Business Development Executive (Sr. BDE)", img: "/logoOne.jpg" }
  ];

  return (
    <motion.section
      className="bg-gradient-to-br from-green-100 to-blue-100 px-6 py-16 md:px-20  md:mt-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-bold text-gray-800 mb-4 md:text-4xl sm:text-2xl">🏢 About OneTimeX</h2>
        <p className="text-gray-600 mb-6">
          Founded on 1st January 2024, OneTimeX is a next-generation investment platform dedicated to simplifying wealth creation for modern investors.
        </p>
        <p className="text-gray-600 mb-2">We operate across three core verticals:</p>
        <ul className="text-gray-700 list-disc list-inside mb-6">
          <li><strong>Unlisted Shares –</strong> Get early access to pre-IPO opportunities with in-depth research and real-time data.</li>
          <li><strong>Listed Shares –</strong> Invest in NSE/BSE-listed companies with expert insights and transparent processes.</li>
          <li><strong>Insurance Solutions –</strong> Secure your financial future with customized insurance plans from trusted providers.</li>
        </ul>
        <p className="text-gray-600 mb-6">
          At OneTimeX, our mission is clear: to bridge the gap between complex financial markets and everyday investors by offering easy, secure, and informed investment options.
        </p>

        <h3 className="text-2xl font-bold text-gray-800 mb-4">💡 Why Choose OneTimeX?</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4  text-gray-700 mb-10">
          <li>🔒 Transparent & Trusted</li>
          <li>📊 In-depth Research & Insights</li>
          <li>📞 Personalized Support</li>
          <li>🌐 Seamless Digital Experience</li>
          <li>🇮🇳 Built for Indian Investors</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-800 mb-4">🚀 Our Vision</h3>
        <p className="text-gray-600 mb-6">
          At OneTimeX, our vision is simple yet powerful: To make premium financial opportunities accessible, transparent, and profitable for every Indian investor — regardless of background, capital, or experience.
        </p>
        <ul className=" text-gray-700 list-disc list-inside mb-10">
          <li>Unlisted shares aren’t just for HNIs, but for everyone DO more with your investments.</li>
          <li>Listed stocks come with deep research and easy access.</li>
          <li>Insurance is explained in your language, not through complex clauses.</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-800 mb-4">🌟 Leadership Vision</h3>
        <blockquote className="text-xl italic text-green-600 mb-2">“Bada investor banne ke liye bada paisa nahi, sahi platform chahiye.”</blockquote>
        <p className="text-gray-600 mb-6">
          Vishal Dubey isn’t just a founder — he’s a first-generation entrepreneur on a mission to level the playing field for every Indian investor. Coming from humble beginnings, he understood early on how complicated, risky, and biased traditional investing could be — especially for retail investors.
        </p>
        <p className="text-gray-600 mb-6">
          That’s why he created OneTimeX — not as just another finance platform, but as a movement to bring unlisted shares, listed stocks, and insurance into the hands of the everyday investor, with full transparency and zero false promises.
        </p>
        <p className="text-gray-600 mb-10">
          With a strong belief in action, innovation, and trust, Vishal leads from the front — blending street-smart strategies with deep financial insights. His leadership is grounded in clarity, speed, and a "no-jargon" approach, empowering thousands of investors to take control of their financial journeys.
        </p>

        <h3 className="text-2xl font-bold text-gray-800 mb-6">👨‍💼 Our Core Team</h3>
        <div className="flex justify-center mb-12">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-300 shadow-lg mb-4">
              <img src={ceo.img} alt={ceo.name} className="w-full h-full object-cover" />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 text-center">{ceo.name}</h4>
            <p className="text-sm text-gray-600 text-center">{ceo.role}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {team.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-200 shadow-md mb-3">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="text-base font-semibold text-gray-800 text-center">{member.name}</h4>
              <p className="text-sm text-gray-600 text-center">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
