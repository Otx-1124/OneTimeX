import React from "react";
import DashStocks from "../dashboard-components/DashStocks";
import RecentViewStock from "../dashboard-components/RecentViewStock";
import UserBtnControll from "../dashboard-components/UserBtnControll";
import BlogSection from "../Tests/blogtest";
import BuyProcess from "../HomePages/BuyProcess";
import InvestIn from "../dashboard-components/InvestIn";
import { BsWhatsapp } from "react-icons/bs";

const blogData = [
  {
    id: 1,
    title: "How I Started OneTimeX",
    author: "Vishal Dubey, Founder & CEO – OneTimeX",
    content:
      "When I started OneTimeX in January 2024, I wasn’t just building a platform—I was solving a problem I personally experienced. I realized that unlisted shares and early-stage investments were practically inaccessible for retail investors like me.",
    slug: "/blogs/how-i-started-onetimex",
  },
  {
    id: 2,
    title: "Why I Believe Retail Investors Deserve Private Equity Access",
    author: "Vishal Dubey, Founder & CEO – OneTimeX",
    content:
      "India is witnessing a startup revolution, but the wealth generated often benefits only institutions. At OneTimeX, we believe retail investors deserve a fair share. Unlisted shares are powerful—but need transparency and accessibility.",
    slug: "/blogs/retail-investors-private-equity",
  },
];
const Dashboard = () => {
  return (
    <div className="flex  max-w-full flex-col md:flex-row gap-1 bg-blue-100">
      <div className="p-5 pt-10  w-[70%] mt-10 space-y-5">
        <UserBtnControll />
        <DashStocks />
        <RecentViewStock />
        <InvestIn />
        <a
          href="https://wa.me/7045035773?text=Hi%2C%20I'm%20interested%20in%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsWhatsapp className="fixed bottom-5 right-5  text-green-700 text-4xl  z-10 cursor-pointer transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover:text-green-600" />
        </a>
      </div>
      <div className="p-10 font-['inter','sans-serif'] bg-blue-100 w-[30%] mt-10 h-screen sticky top-0 overflow-y-hidden space-y-5">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="bg-white h-[280px] shadow-md rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition duration-300"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{blog.author}</p>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-5">
                {blog.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
