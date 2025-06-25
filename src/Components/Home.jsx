import React from "react";
import Banner from "../HomePages/Banner";
import Procedure from "../HomePages/Procedure";
import UnlistedListed from "../HomePages/UnlistedListed";
import WhyChooseOnetimex from "../HomePages/WhyChooseOnetimeX";
import ServicesOfOnetimeX from "../HomePages/ServicesOfOnetimeX";
import InvestmentSection from "../HomePages/InvestmentCollection";
import FinancialServices from "../HomePages/FinancialServices";
import InsightsVideo from "../HomePages/Videos";
import { BsWhatsapp } from "react-icons/bs";
import VideoInsights from "../Tests/VideoTest";
import VideoTest from "../Tests/VideoTest";
import InsightsVideoSection from "../HomePages/Videos";
import Footer from "./Common/Footer";
import Banner2 from "../Tests/BannerTest";



const Home = () => {
  return (
    <div className="mt-10 ">
      <a
        href="https://wa.me/7045035773?text=Hi%2C%20I'm%20interested%20in%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsWhatsapp className="fixed bottom-5 right-5  text-green-700 text-4xl  z-10 cursor-pointer transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover:text-green-600" />
      </a>
      <Banner2/>
      <UnlistedListed />
      <Procedure />
      <WhyChooseOnetimex />
      <ServicesOfOnetimeX/>
      <InvestmentSection />
      <InsightsVideoSection/>
    </div>
  );
};

export default Home;
