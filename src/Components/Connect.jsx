import React, { useState } from "react";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";

import api from "../../api/api";
import { toast } from "react-toastify";

const contacts = [
  {
    icon: <Phone size={20} />,
    text: "+91 7045035773",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: <Mail size={20} />,
    text: "Connect@onetimex.in",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: <BsWhatsapp size={20} />,
    text: "WhatsApp Support",
    color: "from-emerald-500 to-green-500",
    url: "https://wa.me/7045035773?text=Hi%2C%20I'm%20interested%20in%20your%20services",
  },
];

const media = [
  {
    icon: <Facebook size={18} />,
    url: "#",
  },
  {
    icon: <Instagram size={18} />,
    url: "#",
  },
  {
    icon: <Linkedin size={18} />,
    url: "#",
  },
  {
    icon: <FaXTwitter size={18} />,
    url: "#",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Connect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  // Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (
        !formData.name ||
        !formData.email ||
        !formData.phone ||
        !formData.inquiryType ||
        !formData.message
      ) {
        toast.info("Please fill all the fields");
        return;
      }

      if (!/\S+@\S+\.\S+/.test(formData.email)) {
        toast.info("Please enter a valid email");
        return;
      }

      if (formData.message.length < 10) {
        toast.info("Message should be at least 10 characters long");
        return;
      }

      const res = await api.post("/user/enquiry", formData);

      if (res.status === 201) {
        toast.success("Your enquiry has been submitted successfully!");
      } else {
        toast.error("Something went wrong. Please try again later.");
      }

      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: "",
      });
    } catch (error) {
      toast.error("Error submitting form");
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-10 bg-blue-100"
    >
      {/* Soft Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top Gradient */}
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-cyan-300/30 blur-[120px] rounded-full" />

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-400/20 blur-[120px] rounded-full" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-cyan-700 uppercase tracking-[4px] text-sm font-semibold">
            Contact Us
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mt-4">
            Let's Connect
          </h1>

          <p className="text-slate-600 max-w-2xl mx-auto mt-5 text-base sm:text-lg leading-relaxed">
            Whether you want to invest in unlisted shares, explore pre-IPO
            opportunities, or partner with OneTimeX — our team is here to help.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contacts.map((item, index) => (
            <a
              href={item.url || "#"}
              key={index}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-[28px] border border-white/40 bg-white/70 backdrop-blur-xl p-6 shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Hover Glow */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br ${item.color} blur-3xl`}
              />

              <div className="relative z-10 flex items-center gap-5">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}
                >
                  {item.icon}
                </div>

                {/* Text */}
                <div>
                  <p className="text-sm text-slate-500 mb-1">Contact Detail</p>

                  <h3 className="text-slate-900 font-semibold text-lg break-all">
                    {item.text}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* LEFT */}
          <div className="bg-white/70 border border-white/50 backdrop-blur-xl rounded-[32px] p-8 sm:p-10 shadow-xl">
            <p className="text-cyan-700 uppercase tracking-[4px] text-sm font-semibold">
              Reach Out
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 leading-tight">
              We'd Love To Hear From You
            </h2>

            <p className="text-slate-600 mt-6 leading-relaxed">
              Connect with our experts for investment guidance, partnership
              opportunities, or customer support.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-5">
              {[
                "Expert Investment Guidance",
                "Fast Customer Support",
                "Secure & Trusted Platform",
                "Dedicated Relationship Team",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.7)]" />

                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="mt-12">
              <p className="text-slate-500 mb-5">Follow Us</p>

              <div className="flex flex-wrap gap-4">
                {media.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    className="w-12 h-12 rounded-2xl border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:bg-cyan-500 hover:text-white hover:scale-110 transition-all duration-300 shadow-md"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white/70 border border-white/50 backdrop-blur-xl rounded-[32px] p-8 sm:p-10 shadow-xl">
            <div className="mb-8">
              <p className="text-cyan-700 uppercase tracking-[4px] text-sm font-semibold">
                Send Message
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mt-3">
                Get In Touch
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="text-sm text-slate-600 mb-2 block">
                  Full Name
                </label>

                <input
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 placeholder:text-slate-400 outline-none focus:border-cyan-500 transition-all duration-300"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-slate-600 mb-2 block">
                  Email Address
                </label>

                <input
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 placeholder:text-slate-400 outline-none focus:border-cyan-500 transition-all duration-300"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm text-slate-600 mb-2 block">
                  Phone Number
                </label>

                <input
                  value={formData.phone}
                  onChange={handleChange}
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 placeholder:text-slate-400 outline-none focus:border-cyan-500 transition-all duration-300"
                />
              </div>

              {/* Inquiry */}
              <div>
                <label className="text-sm text-slate-600 mb-4 block">
                  Inquiry Type
                </label>

                <div className="flex flex-wrap gap-3">
                  {["General Inquiry", "Partnership", "Support"].map((type) => (
                    <label
                      key={type}
                      className={`cursor-pointer px-5 py-3 rounded-2xl border transition-all duration-300
                    ${
                      formData.inquiryType === type
                        ? "border-cyan-500 bg-cyan-500 text-white"
                        : "border-slate-200 bg-white text-slate-700"
                    }`}
                    >
                      <input
                        type="radio"
                        name="inquiryType"
                        value={type}
                        checked={formData.inquiryType === type}
                        onChange={handleChange}
                        className="hidden"
                      />

                      {type}
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-sm text-slate-600 mb-2 block">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full h-40 resize-none bg-white border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 placeholder:text-slate-400 outline-none focus:border-cyan-500 transition-all duration-300"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-8 py-4 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Connect;
