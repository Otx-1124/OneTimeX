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
      name: "Unlisted Co. A",
      logo: "https://cdn.freelogovectors.net/wp-content/uploads/2023/11/boat-logo-freelogovectors.net_.png",
      alt: "boat-logo",
      price: "₹1,733.00/-",
    },
    {
      name: "Unlisted Co. B",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Zepto_Logo.svg/2560px-Zepto_Logo.svg.png",
      alt: "Zepto_Logo",
      price: "₹2,750.00/-",
    },
    {
      name: "Unlisted Co. B",
      logo: "https://brandlogos.net/wp-content/uploads/2023/09/swiggy-logo_brandlogos.net_fplmb-512x150.png",
      alt: "swiggy-logo",
      price: "₹361.00/-",
    },
    {
      name: "Unlisted Co. B",
      logo: "https://upload.wikimedia.org/wikipedia/en/8/87/FirstCry_logo.png",
      alt: "FirstCry_logo",
      price: "₹410.00/-",
    },
    {
      name: "Unlisted Co. B",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/PharmEasy_logo.png/800px-PharmEasy_logo.png",
      alt: "PharmEasy_logo",
      price: "₹9.00/-",
    },
    {
      name: "Unlisted Co. B",
      logo: "https://cdn.worldvectorlogo.com/logos/digit-insurance.svg",
      alt: "digit-insurance-logo",
      price: "₹298.60/-",
    },
    {
      name: "Unlisted Co. B",
      logo: "https://financesaathi.com/adm/uploads/ipo/_1223_63dbfb73b7ed4f3efdf76a7d_yq4PqPLfwDuMjZJ4fP8AAM3CiffSttXiHlBftRekJiE.png",
      alt: "ola-electric-logo",
      price: "₹64.62/-",
    },
    {
      name: "Unlisted Co. B",
      logo: "https://cdn.worldvectorlogo.com/logos/mobikwik-logo.svg",
      alt: "mobikwik-logo",
      price: "₹350.10/-",
    },
    {
      name: "Unlisted Co. B",
      logo: "listed img//Paperboat+Packaging_Packaging_Elephant+Design+13-removebg-preview.png",
      alt: "Paperboat-logo",
      price: "₹1,675.00/-",
    },
    {
      name: "Unlisted Co. B",
      logo: "https://trackings.in/wp-content/uploads/2024/04/Meesho-Orders-Delivery-Tracking.webp",
      alt: "Meesho_logo",
      price: "₹2,408.00/-",
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
    {
      name: "Listed Co. B",
      logo: "https://www.mepmiddleeast.com/cloud/2021/07/07/brand-logo.png",
      alt: "voltas-logo",
      price: "₹1,000.00/-",
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
      className="container mx-auto bg-gradient-to-br from-blue-50 to-green-50 w-full px-10 py-5 flex flex-col"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      {/* Heading */}
      <motion.div
        className="flex flex-col justify-center items-center px-10 gap-3"
        custom={1}
        variants={fadeInUp}
      >
        <h1 className="text-4xl font-bold">
          Buy & Sell Pre-IPO Shares with Ease
        </h1>
        <p className="text-xl">
          Get early access to India’s top companies—before they go public and
          Access <strong>Unlisted Stocks</strong> of top Indian companies.{" "}
          <br />
        </p>
        <h3 className="text-blue-500 text-xl font-bold">
          Start investing today with just 1 share!
        </h3>
      </motion.div>

      {/* Tabs */}
      <motion.div
        className="flex flex-col gap-5 px-10 py-2 mt-5"
        custom={2}
        variants={fadeInUp}
      >
        <div className="flex gap-5">
          <button
            onClick={changeData}
            className={`font-bold text-xl px-4 py-2 rounded transition duration-300 transform ${
              activeTab === "unlisted"
                ? "text-white bg-blue-600 scale-105 shadow-md"
                : "text-blue-600 bg-transparent hover:bg-blue-100"
            }`}
          >
            Unlisted Stock
          </button>
          <button
            onClick={overData}
            className={`font-bold text-xl px-4 py-2 rounded transition duration-300 transform ${
              activeTab === "listed"
                ? "text-white bg-blue-600 scale-105 shadow-md"
                : "text-blue-600 bg-transparent hover:bg-blue-100"
            }`}
          >
            Listed Stock
          </button>
        </div>
        <hr />
      </motion.div>

      {/* Company Cards Grid - REMOUNT on tab change */}
      <motion.div
        key={activeTab} // 🔁 this causes re-mount, hence animation retriggers
        className="grid grid-cols-3 px-10 py-5 gap-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {currData.map((company, index) => (
          <motion.div
            key={company.name + index}
            className="flex border shadow-md items-center justify-around px-2 py-3 rounded-lg hover:shadow-xl cursor-pointer"
            custom={index}
            variants={fadeInUp}
          >
            <div className="w-1/3">
              <img
                className="w-full object-cover"
                src={company.logo}
                alt={company.alt}
              />
            </div>
            <div className="flex justify-between w-1/2 items-center">
              <div className="flex flex-col gap-3">
                <h1 className="font-bold text-blue-800">{company.name}</h1>
                <p>{company.price}</p>
              </div>
              <ArrowBigRightIcon className="hover:text-yellow-700 text-xl" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default UnlistedListed;
