// AboutPage.jsx

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  Building2,
  ArrowRight,
} from "lucide-react";

import Teamcard from "../Tests/Teamcard";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
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
      name: "Tushar More",
      role: "Brand & Design Lead",
      img: "/newImage.png",
    },
  ];

  const verticals = [
    {
      title: "Unlisted Shares",
      desc: "Early access to high-growth private companies before IPO.",
      icon: TrendingUp,
    },
    {
      title: "Listed Equities",
      desc: "Smart investing in NSE/BSE listed companies with insights.",
      icon: Building2,
    },
    {
      title: "Insurance",
      desc: "Protect wealth with customized financial protection plans.",
      icon: ShieldCheck,
    },
  ];

  const features = [
    "Trusted Investment Platform",
    "SEBI-Compliant Processes",
    "Personalized Support",
    "Fast Digital Experience",
    "Built For Indian Investors",
  ];

  return (
    // Main Wrapper
<div className="bg-blue-100 text-slate-900 overflow-hidden">

  {/* HERO SECTION */}
  <motion.section
    variants={fadeInUp}
    initial="hidden"
    whileInView="show"
    className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-10 py-20"
  >
    {/* Background Effects */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-300/30 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-400/20 blur-[120px] rounded-full" />

      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
    </div>

    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">

      {/* LEFT */}
      <div>
        <div className="inline-flex items-center gap-2 border border-cyan-300 bg-white/60 backdrop-blur-xl px-4 py-2 rounded-full mb-6 shadow-md">
          <span className="w-2 h-2 bg-cyan-500 rounded-full" />

          <p className="text-sm text-cyan-700 tracking-wide font-medium">
            Next Generation Investment Platform
          </p>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-slate-900">
          About{" "}
          <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            OneTimeX
          </span>
        </h1>

        <p className="text-slate-700 mt-8 text-base sm:text-lg leading-relaxed">
          Founded by <strong>Vishal Dubey</strong> in 2024, OneTimeX helps
          Indian investors access curated opportunities in{" "}
          <strong>unlisted shares, pre-IPO investments, listed equities</strong>{" "}
          and wealth protection products.
        </p>

        <p className="text-slate-600 mt-5 leading-relaxed">
          We are building a trusted ecosystem where retail and HNI investors
          can invest confidently with transparency, research, and
          personalized support.
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-7 py-3 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl">
            Explore Platform
          </button>

          <button className="border border-slate-200 bg-white/70 backdrop-blur-xl px-7 py-3 rounded-2xl flex items-center gap-2 hover:bg-white transition-all duration-300 shadow-md">
            Learn More <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* RIGHT */}
      <div className="relative flex justify-center">
        <div className="absolute w-[320px] h-[320px] bg-cyan-300/30 blur-[120px] rounded-full" />

        <div className="relative bg-white/70 border border-white/50 backdrop-blur-2xl rounded-[32px] p-8 max-w-md w-full shadow-2xl">
          <img
            src={ceo.img}
            alt={ceo.name}
            className="w-40 h-40 object-cover rounded-full mx-auto border-4 border-cyan-500 shadow-xl"
          />

          <div className="text-center mt-6">
            <h2 className="text-3xl font-bold text-slate-900">
              {ceo.name}
            </h2>

            <p className="text-cyan-700 mt-2 font-medium">
              {ceo.role}
            </p>

            <p className="text-slate-600 text-sm mt-5 leading-relaxed">
              Leading OneTimeX with a mission to democratize premium
              investment opportunities for every Indian investor.
            </p>
          </div>
        </div>
      </div>
    </div>
  </motion.section>

  {/* VERTICALS */}
  <section className="px-4 sm:px-6 lg:px-10 py-20">
    <div className="max-w-7xl mx-auto">

      <div className="text-center mb-14">
        <p className="text-cyan-700 uppercase tracking-[4px] text-sm font-semibold">
          Our Expertise
        </p>

        <h2 className="text-4xl sm:text-5xl font-bold mt-4 text-slate-900">
          Core Verticals
        </h2>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {verticals.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="group relative bg-white/70 border border-white/60 backdrop-blur-xl rounded-[28px] p-8 overflow-hidden shadow-lg"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-cyan-400/10 to-blue-400/10" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white mb-6 shadow-lg">
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-slate-900">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>

  {/* FEATURES */}
  <section className="px-4 sm:px-6 lg:px-10 py-20">
    <div className="max-w-7xl mx-auto">

      <div className="text-center mb-14">
        <p className="text-cyan-700 uppercase tracking-[4px] text-sm font-semibold">
          Why OneTimeX
        </p>

        <h2 className="text-4xl sm:text-5xl font-bold mt-4 text-slate-900">
          Why Investors Trust Us
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white/70 border border-white/60 rounded-3xl p-6 text-center hover:-translate-y-2 transition-all duration-300 shadow-lg"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white flex items-center justify-center mx-auto font-bold text-lg mb-5 shadow-lg">
              {index + 1}
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              {feature}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* VISION */}
  <section className="px-4 sm:px-6 lg:px-10 py-24">
    <div className="max-w-4xl mx-auto text-center">

      <p className="text-cyan-700 uppercase tracking-[4px] text-sm font-semibold">
        Our Vision
      </p>

      <h2 className="text-4xl sm:text-5xl font-bold mt-5 leading-tight text-slate-900">
        Making Premium Investments Accessible To Everyone
      </h2>

      <blockquote className="text-2xl sm:text-3xl italic text-cyan-700 mt-10 leading-relaxed font-medium">
        “Bada investor banne ke liye bada paisa nahi, sahi platform
        chahiye.”
      </blockquote>

      <p className="text-slate-600 mt-8 text-lg leading-relaxed">
        OneTimeX is building a future where every Indian investor can access
        wealth-building opportunities with trust, simplicity, and
        transparency.
      </p>
    </div>
  </section>
        {/* TEAM SECTION */}
<section className="px-4 sm:px-6 lg:px-10 py-24">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-20">
      <p className="text-cyan-700 uppercase tracking-[4px] text-sm font-semibold">
        Our Team
      </p>

      <h2 className="text-4xl sm:text-5xl font-bold mt-4 text-slate-900">
        Meet The People Behind OneTimeX
      </h2>

      <p className="text-slate-600 max-w-2xl mx-auto mt-5 leading-relaxed">
        A passionate team focused on building trust, transparency, and
        premium investment opportunities for Indian investors.
      </p>
    </div>


    {/* Department Cards */}
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

      {/* Management */}
      <div className="group relative overflow-hidden rounded-[30px] bg-white/70 border border-white/60 backdrop-blur-xl shadow-xl p-8 hover:-translate-y-2 transition-all duration-500">
        
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-cyan-400/10 to-blue-400/10" />

        <div className="relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
            1
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-8">
            Management
          </h3>

          <p className="text-slate-600 mt-4 leading-relaxed">
            Strategic leadership and relationship management driving the
            company forward.
          </p>

          <div className="mt-8 flex items-center justify-between">
            <span className="text-cyan-700 font-semibold">
              1 Member
            </span>

            <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700 font-bold">
              →
            </div>
          </div>
        </div>
      </div>

      {/* Sales */}
      <div className="group relative overflow-hidden rounded-[30px] bg-white/70 border border-white/60 backdrop-blur-xl shadow-xl p-8 hover:-translate-y-2 transition-all duration-500">
        
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-blue-400/10 to-cyan-400/10" />

        <div className="relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
            3
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-8">
            Sales Team
          </h3>

          <p className="text-slate-600 mt-4 leading-relaxed">
            Helping investors discover opportunities and guiding them
            throughout the journey.
          </p>

          <div className="mt-8 flex items-center justify-between">
            <span className="text-blue-700 font-semibold">
              3 Members
            </span>

            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
              →
            </div>
          </div>
        </div>
      </div>

      {/* IT */}
      <div className="group relative overflow-hidden rounded-[30px] bg-white/70 border border-white/60 backdrop-blur-xl shadow-xl p-8 hover:-translate-y-2 transition-all duration-500">
        
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-cyan-400/10 to-blue-400/10" />

        <div className="relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
            2
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-8">
            IT Department
          </h3>

          <p className="text-slate-600 mt-4 leading-relaxed">
            Building scalable digital products and delivering seamless
            experiences.
          </p>

          <div className="mt-8 flex items-center justify-between">
            <span className="text-cyan-700 font-semibold">
              2 Members
            </span>

            <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700 font-bold">
              →
            </div>
          </div>
        </div>
      </div>

      {/* Social */}
      <div className="group relative overflow-hidden rounded-[30px] bg-white/70 border border-white/60 backdrop-blur-xl shadow-xl p-8 hover:-translate-y-2 transition-all duration-500">
        
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-blue-400/10 to-cyan-400/10" />

        <div className="relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
            2
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-8">
            Social Team
          </h3>

          <p className="text-slate-600 mt-4 leading-relaxed">
            Creating engaging content, branding, and digital presence for
            OneTimeX.
          </p>

          <div className="mt-8 flex items-center justify-between">
            <span className="text-blue-700 font-semibold">
              2 Members
            </span>

            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
              →
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
  );
}