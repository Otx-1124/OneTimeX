
import { ArrowBigRightIcon } from "lucide-react";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

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

const UnlistedListed = () => {
  const data = [
  
  {
    name: "NSE",
    logo: "/nse.jpg",
    alt: "nse-logo",
    price: "₹2,220.39/-",
  },
  {
    name: "HDB Financial",
    logo: "/Hbd.jpg",
    alt: "hdb-financial-logo",
    price: "₹846.88/-",
  },
  {
    name: "Tata Capital",
    logo: "/tataCap.jpg",
    alt: "tata-capital-logo",
    price: "₹880.52/-",
  },
  {
    name: "boAt",
    logo: "https://cdn.freelogovectors.net/wp-content/uploads/2023/11/boat-logo-freelogovectors.net_.png",
    alt: "boat-logo",
    price: "₹1,800.00/-",
  },
  {
    name: "Chennai Super Kings (CSK)",
    logo: "/csk.svg.png",
    alt: "csk-logo",
    price: "₹180.67/-",
  },
  {
    name: "Hero FinCorp",
    logo: "/Fincorp.jpg",
    alt: "hero-fincorp-logo",
    price: "₹1,640.23/-",
  },
  {
    name: "PharmEasy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/PharmEasy_logo.png/800px-PharmEasy_logo.png",
    alt: "pharmeasy-logo",
    price: "₹7.11/-",
  },
  {
    name: "Zepto",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Zepto_Logo.svg/2560px-Zepto_Logo.svg.png",
    alt: "zepto-logo",
    price: "₹2,730.32/-",
  },
  {
    name: "Hexaware",
    logo: "/hexa.png",
    alt: "hexaware-logo",
    price: "₹850.00/-",
  },
];

   


  let data2 = [
    {
      name: "Listed Co. A",
      logo: "https://1000logos.net/wp-content/uploads/2021/09/Reliance-Industries-Limited-Logo.png",
      alt: "Reliance-Industries-Limited-Logo",
      price: "₹1,229.30/-",
    },
    {
      name: "Listed Co. B",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png",
      alt: "Tata_Consultancy_Services_Logo",
      price: "₹4,066.20/-",
    },
    {
      name: "Listed Co. B",
      logo: "https://seeklogo.com/images/H/hdfc-bank-logo-A0A2CDE793-seeklogo.com.png",
      alt: "hdfc-bank-logo",
      price: "₹1,629.70/-",
    },
    {
      name: "Listed Co. B",
      logo: "https://logolook.net/wp-content/uploads/2024/01/Infosys-Logo.png",
      alt: "Infosys-Logo",
      price: "₹1,822.00/-",
    },
    {
      name: "Listed Co. B",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/2560px-ICICI_Bank_Logo.svg.png",
      alt: "ICICI_Bank_Logo",
      price: "₹1,228.00/-",
    },
    {
      name: "Listed Co. B",
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Zomato-Logo.png",
      alt: "Zomato-Logo",
      price: "₹206.15/-",
    },
    {
      name: "Listed Co. B",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Persistent_Systems_Logo.svg/2560px-Persistent_Systems_Logo.svg.png",
      alt: "Persistent_Systems_Logo",
      price: "₹6,255.00/-",
    },
    {
      name: "Listed Co. B",
      logo: "Unlisted img//file-removebg-preview.png",
      alt: "polycab-logo",
      price: "₹4,500.00/-",
    },
    {
      name: "Listed Co. B",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Coforge-Logo.png",
      alt: "Coforge-Logo",
      price: "₹5,000.00/-",
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

  return (
    <motion.div
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
      <motion.div className="flex flex-col gap-5 px-4 sm:px-10 py-4 mt-5" custom={2} variants={fadeInUp}>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => { setCurrData(data); setActiveTab("unlisted"); }}
            className={`font-bold text-base sm:text-xl px-4 py-2 rounded transition duration-300 transform ${
              activeTab === "unlisted"
                ? "text-white bg-[#009999] scale-105 shadow-md"
                : "text-[#009999] hover:text-white bg-transparent hover:bg-[#009999]"
            }`}
          >
            Unlisted Stock
          </button>
          <button
            onClick={() => { setCurrData(data2); setActiveTab("listed"); }}
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
            key={company.name + index}
            className="flex flex-col sm:flex-row border shadow-md items-center justify-between px-4 py-3 rounded-lg hover:shadow-xl cursor-pointer"
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
                <h1 className="font-bold  text-base sm:text-lg">{company.name}</h1>
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
