import { ArrowBigRightIcon } from "lucide-react";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useUnlisted } from "../Context/UnlistedContext";
import { useNavigate } from "react-router-dom";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
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

const UnlistedListed = ({id}) => {
  const data = [
    {
  "name": "Groww",
  "logo": "	https://resources.groww.in/web-assets/img/website-logo/groww-logo-270.webp",
  "alt": "Groww Logo",
  "price": "₹139 per share (unlisted market estimate, 2025)",
  "foundedYear": 2016,
  "sector": "Fintech / WealthTech",
  "description": "Groww is a leading Indian online investment platform that allows users to invest in stocks, mutual funds, IPOs, ETFs, and fixed deposits through a simple and user-friendly interface. It has become one of India's fastest growing fintech startups, focusing on democratizing access to financial products.",
  "ipoStatus": "Planned (Filed DRHP with SEBI in 2025 for ~₹7,000 Cr IPO)",
  "website": "https://groww.in/",
  "financialsFY25": {
    "revenue": "₹4,056 Cr",
    "netProfit": "₹1,819 Cr",
    "growth": "Tripled net profit compared to FY24"
  },
  "ipoDetails": {
    "ipoSize": "₹7,000 Cr (approx.)",
    "expectedListing": "2025-26",
    "valuation": "$7 Billion"
  },
  "priceHistory": [
    { "year": 2021, "price": "₹120" },
    { "year": 2022, "price": "₹300" },
    { "year": 2023, "price": "₹550" },
    { "year": 2024, "price": "₹720" },
    { "year": 2025, "price": "₹820" }
  ]
}
,
    {
      name: "NSE",
      logo: "/nse.jpg",
      alt: "NSE Logo",
      price: "₹2,220.39/-",
      founded: 1992,
      sector: "Stock Exchange & Financial Infrastructure",
      description:
        "The National Stock Exchange (NSE) is India’s largest stock exchange and a key player in financial infrastructure. It introduced electronic trading to India and continues to be a leader in innovation, liquidity, and trading volume.",
      ipoStatus: "Draft red herring prospectus filed; IPO expected in 2025.",
      website: "https://www.nseindia.com/",
      financialsFY25: {
        assets: 48000,
        netWorth: 21000,
        revenueGrowth: 12.5,
        ROE: 18.4,
        profitYoY: 14.2,
      },
      graphData: [
        { date: "2025-07-01", price: 2145 },
        { date: "2025-07-05", price: 2160 },
        { date: "2025-07-10", price: 2188 },
        { date: "2025-07-15", price: 2199 },
        { date: "2025-07-20", price: 2215 },
        { date: "2025-07-25", price: 2220.39 },
      ],
    },
    {
      name: "HDB Financial Services",
      logo: "/Hbd.jpg",
      alt: "HDB Financial Logo",
      price: "₹846.88/-",
      founded: 2007,
      sector: "Housing & Development Finance (NBFC)",
      description:
        "A subsidiary of HDFC Bank, HDB Financial Services provides personal loans, business loans, and asset financing. It plays a major role in India's retail lending ecosystem.",
      ipoStatus: "Filed ₹12,500 crore IPO; expected to go public by 2025 end.",
      website: "https://www.hdbfs.com/",
      financialsFY25: {
        assets: 108000,
        netWorth: 14936.5,
        revenueGrowth: 15,
        ROE: 14.72,
        profitYoY: -2,
      },
      graphData: [
        { date: "2025-07-01", price: 820 },
        { date: "2025-07-05", price: 828 },
        { date: "2025-07-10", price: 834 },
        { date: "2025-07-15", price: 841 },
        { date: "2025-07-20", price: 846 },
        { date: "2025-07-25", price: 846.88 },
      ],
    },
    {
      name: "Tata Capital",
      logo: "/tataCap.jpg",
      alt: "Tata Capital Logo",
      price: "₹880.52/-",
      founded: 2007,
      sector: "Financial Services",
      description:
        "Tata Capital, part of the Tata Group, offers loans, wealth management, and infrastructure financing. It’s known for its customer-centric approach and wide financial footprint.",
      ipoStatus: "Unlisted; potential IPO under evaluation by Tata Sons.",
      website: "https://www.tatacapital.com/",
      financialsFY25: {
        assets: 98000,
        netWorth: 13200,
        revenueGrowth: 10.8,
        ROE: 12.9,
        profitYoY: 9.6,
      },
      graphData: [
        { date: "2025-07-01", price: 855 },
        { date: "2025-07-05", price: 860 },
        { date: "2025-07-10", price: 865 },
        { date: "2025-07-15", price: 870 },
        { date: "2025-07-20", price: 877 },
        { date: "2025-07-25", price: 880.52 },
      ],
    },
    {
      name: "boAt",
      logo: "https://cdn.freelogovectors.net/wp-content/uploads/2023/11/boat-logo-freelogovectors.net_.png",
      alt: "boAt Logo",
      price: "₹1,800.00/-",
      founded: 2016,
      sector: "Consumer Electronics (D2C)",
      description:
        "boAt is a leading audio and wearable brand in India, known for its stylish and affordable tech products. It has gained massive popularity among millennials.",
      ipoStatus: "IPO was postponed in 2023, now expected by 2026.",
      website: "https://www.boat-lifestyle.com/",
      financialsFY25: {
        assets: 1500,
        netWorth: 850,
        revenueGrowth: 22,
        ROE: 30.2,
        profitYoY: 18.4,
      },
      graphData: [
        { date: "2025-07-01", price: 1700 },
        { date: "2025-07-05", price: 1725 },
        { date: "2025-07-10", price: 1760 },
        { date: "2025-07-15", price: 1780 },
        { date: "2025-07-20", price: 1795 },
        { date: "2025-07-25", price: 1800 },
      ],
    },
    {
      name: "Chennai Super Kings (CSK)",
      logo: "/csk.svg.png",
      alt: "CSK Logo",
      price: "₹180.67/-",
      founded: 2008,
      sector: "Sports & Entertainment",
      description:
        "CSK is one of the most successful IPL franchises. It has a massive fan base, strong brand value, and revenue from merchandising, sponsorships, and match-day sales.",
      ipoStatus: "Unlisted; traded in the unlisted market actively.",
      website: "https://www.chennaisuperkings.com/",
      financialsFY25: {
        assets: 720,
        netWorth: 540,
        revenueGrowth: 19,
        ROE: 25.1,
        profitYoY: 16.3,
      },
      graphData: [
        { date: "2025-07-01", price: 170 },
        { date: "2025-07-05", price: 174 },
        { date: "2025-07-10", price: 176.5 },
        { date: "2025-07-15", price: 179 },
        { date: "2025-07-20", price: 180 },
        { date: "2025-07-25", price: 180.67 },
      ],
    },
    
    {
      name: "PharmEasy",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/PharmEasy_logo.png/800px-PharmEasy_logo.png",
      alt: "PharmEasy Logo",
      price: "₹7.11/-",
      founded: 2015,
      sector: "Healthcare E-commerce",
      description:
        "PharmEasy is a leading online pharmacy and diagnostics provider. It delivers medicines, health devices, and offers lab test booking online.",
      ipoStatus:
        "IPO postponed due to market conditions; expected around 2026.",
      website: "https://pharmeasy.in/",
      financialsFY25: {
        assets: 2300,
        netWorth: 400,
        revenueGrowth: 12,
        ROE: -9.4,
        profitYoY: -12.3,
      },
      graphData: [
        { date: "2025-07-01", price: 6.85 },
        { date: "2025-07-05", price: 6.91 },
        { date: "2025-07-10", price: 7.0 },
        { date: "2025-07-15", price: 7.08 },
        { date: "2025-07-20", price: 7.1 },
        { date: "2025-07-25", price: 7.11 },
      ],
    },
    {
      name: "Zepto",
      logo: "",
      alt: "Zepto Logo",
      price: "₹2,730.32/-",
      founded: 2021,
      sector: "Quick Commerce (Q-Commerce)",
      description:
        "Zepto is India’s fastest-growing 10-minute grocery delivery startup. It has raised funds from top VCs and is redefining hyperlocal delivery.",
      ipoStatus:
        "Recently raised funding at $3.5B valuation; IPO expected in 2026.",
      website: "https://www.zepto.com/",
      financialsFY25: {
        assets: 650,
        netWorth: 310,
        revenueGrowth: 40.1,
        ROE: -5.2,
        profitYoY: -8.8,
      },
      graphData: [
        { date: "2025-07-01", price: 2600 },
        { date: "2025-07-05", price: 2650 },
        { date: "2025-07-10", price: 2705 },
        { date: "2025-07-15", price: 2725 },
        { date: "2025-07-20", price: 2730 },
        { date: "2025-07-25", price: 2730.32 },
      ],
    },
    {
      name: "Hexaware",
      logo: "/hexa.png",
      alt: "Hexaware Logo",
      price: "₹850.00/-",
      founded: 1990,
      sector: "IT Services & Consulting",
      description:
        "Hexaware is a global IT services company providing automation, cloud, and digital transformation. It was taken private by Carlyle in 2021.",
      ipoStatus: "Privately held; potential re-listing considered.",
      website: "https://hexaware.com/",
      financialsFY25: {
        assets: 8900,
        netWorth: 3000,
        revenueGrowth: 11.2,
        ROE: 19.6,
        profitYoY: 7.8,
      },
      graphData: [
        { date: "2025-07-01", price: 810 },
        { date: "2025-07-05", price: 825 },
        { date: "2025-07-10", price: 835 },
        { date: "2025-07-15", price: 842 },
        { date: "2025-07-20", price: 848 },
        { date: "2025-07-25", price: 850 },
      ],
    },
  ];

  let data2 = [
    {
      name: "Listed Co. A",
      logo: "https://1000logos.net/wp-content/uploads/2021/09/Reliance-Industries-Limited-Logo.png",
      alt: "Reliance-Industries-Limited-Logo",
     
    },
    {
      name: "Listed Co. B",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png",
      alt: "Tata_Consultancy_Services_Logo",
     
    },
    {
      name: "Listed Co. B",
      logo: "https://seeklogo.com/images/H/hdfc-bank-logo-A0A2CDE793-seeklogo.com.png",
      alt: "hdfc-bank-logo",
  
    },
    {
      name: "Listed Co. B",
      logo: "https://logolook.net/wp-content/uploads/2024/01/Infosys-Logo.png",
      alt: "Infosys-Logo",
      
    },
    {
      name: "Listed Co. B",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/2560px-ICICI_Bank_Logo.svg.png",
      alt: "ICICI_Bank_Logo",
      
    },
    {
      name: "Listed Co. B",
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Zomato-Logo.png",
      alt: "Zomato-Logo",
     
    },
    {
      name: "Listed Co. B",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Persistent_Systems_Logo.svg/2560px-Persistent_Systems_Logo.svg.png",
      alt: "Persistent_Systems_Logo",
   
    },
    {
      name: "Listed Co. B",
      logo: "Unlisted img//file-removebg-preview.png",
      alt: "polycab-logo",
      
    },
    {
      name: "Listed Co. B",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Coforge-Logo.png",
      alt: "Coforge-Logo",
     
    },
  ];

  const [currData, setCurrData] = useState(data);
  const [activeTab, setActiveTab] = useState("unlisted");

  const changeData = () => {
    setCurrData(data);
    setActiveTab("unlisted");
  };

  const overData = () => {
    setCurrData(data2);
    setActiveTab("listed");
  };

  const { setSelectedDetail } = useUnlisted();
  const navigate = useNavigate();

  const handleSetData = (company) => {
    setSelectedDetail(company);
    navigate("/unlisted-detail");
  };

  return (
    <motion.div
      id={id}
      className=" bg-gradient-to-br from-blue-50 to-green-50 w-full px-4 sm:px-6 lg:px-10 py-5 flex flex-col"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      {/* Heading */}
      <div className="container mx-auto">
        <motion.div
          className="flex flex-col justify-center items-center px-4 sm:px-10 gap-3 text-center "
          custom={1}
          variants={fadeInUp}
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Buy & Sell Pre-IPO Shares with Ease
          </h1>
          <p className="text-base sm:text-lg">
            Get early access to India’s top companies—before they go public and
            access <strong>Unlisted Stocks</strong> of top Indian companies.
          </p>
          <h3 className="text-[#009999] text-lg sm:text-xl font-bold">
            Start investing today !
          </h3>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex flex-col gap-5 px-4 sm:px-10 py-4 mt-5"
          custom={2}
          variants={fadeInUp}
        >
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => {
                setCurrData(data);
                setActiveTab("unlisted");
              }}
              className={`font-bold text-base sm:text-xl px-4 py-2 rounded transition duration-300 transform ${
                activeTab === "unlisted"
                  ? "text-white bg-[#009999] scale-105 shadow-md"
                  : "text-[#009999] hover:text-white bg-transparent hover:bg-[#009999]"
              }`}
            >
              Unlisted Stock
            </button>
            <button
              onClick={() => {
                setCurrData(data2);
                setActiveTab("listed");
              }}
              className={`font-bold text-base sm:text-xl px-4 py-2 rounded transition duration-300 transform ${
                activeTab === "listed"
                  ? "text-white bg-[#009999] scale-105 shadow-md"
                  : "text-[#009999] hover:text-white bg-transparent hover:bg-[#009999]"
              }`}
            >
              Listed Stock
            </button>
          </div>
          <hr />
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          key={activeTab}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 sm:px-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {currData.map((company, index) => (
            <motion.div
              onClick={() => {
                handleSetData(company);
              }}
              key={company.name + index}
              className="flex flex-col sm:flex-row border shadow-md items-center justify-between px-4 py-3 rounded-lg hover:shadow-xl  cursor-pointer"
              custom={index}
              variants={fadeInUp}
            >
              <div className="w-28 h-20 sm:w-32 sm:h-24 mb-3 sm:mb-0 rounded-lg overflow-hidden flex items-center justify-center shadow-inner">
                <img
                  src={company.logo}
                  alt={company.alt}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center sm:w-2/3 sm:pl-4 gap-2 sm:gap-0">
                <div className="flex flex-col text-center sm:text-left">
                  <h1 className="font-bold  text-base sm:text-lg">
                    {company.name}
                  </h1>
                  <p className="text-sm sm:text-base">{company.price}</p>
                </div>
                <ArrowBigRightIcon className="text-xl hover:text-yellow-700" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UnlistedListed;
