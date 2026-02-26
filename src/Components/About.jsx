import React from "react";
import { motion } from "framer-motion";
import Teamcard from "../Tests/Teamcard";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AboutPage() {
  const ceo = {
    name: "Vishal Dubey",
    role: "Founder & CEO",
    img: "/CeoLogo.jpg",
  };
  const team = [
    { name: "Parag Yadav", role: "IT Backend Developer", img: "/parag.jpg" },
    { name: "Sandeep Pandit", role: "Frontend Developer", img: "/sandeep.jpg" },
    { name: "Ankkit Ghag", role: "Marketing & Sales Lead", img: "/ankit.jpg" },
    {
      name: "Prabhat",
      role: "Senior Business Development Executive",
      img: "/logoOne.jpg",
    },
    {
      name: "Shravani",
      role: "Business Development Executive",
      img: "/logoOne.jpg",
    },
    {
      name: "Raj Duani",
      role: "Senior Relationship Manager",
      img: "/logoOne.jpg",
    },

    {
      name: "Aashtha Shrivastava",
      role: "Video Content Creator",
      img: "/logoOne.jpg",
    },
    {
      name: "Shiksha",
      role: "Business Development Executive",
      img: "/shiksha2.jpg",
    },
    {
      name:"Tushar More",
      role:"Brand & Design Lead",
      img:"/newImage.png"
    },
  ];

  const verticals = [
    {
      title: "Unlisted Shares",
      desc: "Early access to pre-IPO opportunities with research.",
    },
    {
      title: "Listed Shares",
      desc: "NSE/BSE investments with expert insights.",
    },
    {
      title: "Insurance",
      desc: "Customized insurance plans from trusted providers.",
    },
  ];

  const features = [
    "Transparent & Trusted",
    "Research & Insights",
    "Personalized Support",
    "Digital Experience",
    "Built for Indians",
  ];

  return (
    <div className="bg-white mt-10 md:mt-10">
      {/* Hero */}
      <motion.section
        className="bg-[#009999] px-6 py-10"
        initial="hidden"
        whileInView="show"
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-6">About OneTimeX</h1>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl bg-gradient-to-br from-gray-200 to-white bg-clip-text text-transparent opacity-90">
            <p className="text-justify">
              Founded by <strong>Vishal Dubey</strong> in January 2024, OneTimeX
              is a next-generation investment platform helping Indian investors
              access curated opportunities in{" "}
              <strong>unlisted shares, Pre-IPO deals, listed equities,</strong>{" "}
              and <strong>wealth protection products.</strong>
            </p>{" "}
            <br />
            <p className="text-justify">
              Built with a mission to democratize private equity access for
              retail and HNI investors, OneTimeX bridges the gap between
              early-stage wealth-building assets and trusted SEBI-compliant
              channels.
            </p>
            <br />
            <p className="text-justify">
              Today, under the leadership of Vishal Dubey (Founder & CEO),
              OneTimeX is growing rapidly with support from reputed B2B partners
              like <strong>Alice Blue</strong> and top insurance distributors
              across India.
            </p>
          </p>
        </div>
      </motion.section>

      {/* Verticals */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Verticals
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {verticals.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="font-bold text-blue-600">{i + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16 bg-[#009999] text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose OneTimeX?
          </h2>
          <div className="grid md:grid-cols-5 gap-6 text-center">
            {features.map((feature, i) => (
              <div key={i}>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold">{i + 1}</span>
                </div>
                <p className="text-sm text-gray-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Vision</h2>
          <p className="text-lg text-gray-700 mb-8">
            Make premium financial opportunities accessible for every Indian
            investor.
          </p>
          <blockquote className="text-2xl italic text-green-600 mb-6">
            "Bada investor banne ke liye bada paisa nahi, sahi platform
            chahiye."
          </blockquote>
          <p className="text-gray-600">
            Vishal Dubey leads OneTimeX to democratize investing with
            transparency, simplicity, and trust.
          </p>
        </div>
      </section>

      {/* Team */}
      {/* Team */}
      <section className="px-6 py-16 bg-[#009999] bg-opacity-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Meet Our Team
          </h2>

          {/* CEO */}
          <div className="flex justify-center mb-20">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-1 rounded-2xl shadow-xl">
              <div className="bg-white rounded-2xl p-6 w-72 text-center">
                <img
                  src={ceo.img}
                  alt={ceo.name}
                  className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-indigo-500 shadow-lg"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {ceo.name}
                </h3>
                <p className="text-gray-600 text-lg">{ceo.role}</p>
              </div>
            </div>
          </div>

          {/* Management Team */}
          <div className="text-center mb-16">
            <h4 className="text-2xl font-semibold text-[#009999] mb-8">
              Management Team
            </h4>
            <div className="flex justify-center gap-6 flex-wrap">
              {team
                .filter((member) => ["Raj Duani"].includes(member.name))
                .map((member, index) => (
                  <Teamcard
                    key={index}
                    name={member.name}
                    img={member.img}
                    role={member.role}
                  />
                ))}
            </div>
          </div>

          {/* Sales Team */}
          <div className="text-center mb-16">
            <h4 className="text-2xl font-semibold text-[#009999] mb-8">
              Sales Team
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center max-w-5xl mx-auto">
              {team
                .filter(
                  (member) =>
                    ![
                      "Raj Duani",
                      "Aashtha Shrivastava",
                      "Sandeep Pandit",
                      "Parag Yadav",
                      "Tushar More",
                    ].includes(member.name)
                )
                .map((member, index) => (
                  <Teamcard
                    key={index}
                    name={member.name}
                    img={member.img}
                    role={member.role}
                  />
                ))}
            </div>
          </div>

          {/* IT Team */}
          <div className="text-center mb-16">
            <h4 className="text-2xl font-semibold text-[#009999] mb-8">
              IT Department
            </h4>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              {team
                .filter((member) =>
                  ["Sandeep Pandit", "Parag Yadav"].includes(member.name)
                )
                .map((member, index) => (
                  <Teamcard
                    key={index}
                    name={member.name}
                    img={member.img}
                    role={member.role}
                  />
                ))}
            </div>
          </div>

          {/* Social Team */}
          <div className="text-center">
            <h4 className="text-2xl font-semibold text-[#009999] mb-8">
              Social Team
            </h4>
            <div className="flex justify-center gap-6 flex-wrap">
              {team
                .filter((member) =>
                  ["Aashtha Shrivastava" , "Tushar More" ].includes(member.name)
                )
                .map((member, index) => (
                  <Teamcard
                    key={index}
                    name={member.name}
                    img={member.img}
                    role={member.role}
                  />
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
