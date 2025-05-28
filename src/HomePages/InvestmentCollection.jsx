import { motion } from 'framer-motion';
import {
  FaChartLine,
  FaRupeeSign,
  FaPiggyBank,
  FaBuilding,
  FaIndustry,
  FaCubes,
} from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const investments = [
  {
    icon: <FaChartLine className="text-4xl text-blue-600" />,
    title: 'High-return',
    desc: 'Expert high-return investment options for maximizing wealth growth.',
  },
  {
    icon: <FaRupeeSign className="text-4xl text-green-600" />,
    title: 'SIP – 500',
    desc: 'Start SIP from ₹500 to invest regularly and build wealth with ease.',
  },
  {
    icon: <FaPiggyBank className="text-4xl text-yellow-600" />,
    title: 'Tax Savings',
    desc: 'Tax-saving investment strategies to maximize returns and reduce tax liability.',
  },
  {
    icon: <FaBuilding className="text-4xl text-indigo-600" />,
    title: 'Large Cap',
    desc: 'Stable investment in well-established companies with strong market presence.',
  },
  {
    icon: <FaIndustry className="text-4xl text-purple-600" />,
    title: 'Mid Cap',
    desc: 'Balanced growth with moderate risk in growing mid-sized companies.',
  },
  {
    icon: <FaCubes className="text-4xl text-pink-600" />,
    title: 'Small Cap',
    desc: 'High-growth potential investments in emerging small-sized companies.',
  },
];

export default function InvestmentSection() {
  return (
    <motion.section
      className="bg-green-50 rounded-3xl px-6 py-16 md:px-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="text-center mb-14 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Explore Our Investment Collections
        </h2>
        <p className="text-gray-600">
          Unlock smart investing with Onetimex. From SIPs and tax-saving strategies to diverse market caps, we offer financial solutions tailored to your goals.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {investments.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300"
            variants={fadeInUp}
            whileHover={{ scale: 1.03 }}
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.desc}</p>
            <a href="#" className="text-orange-600 font-semibold hover:underline">
              Learn more
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
