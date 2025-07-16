import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
  X,
  XIcon,
} from "lucide-react";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";

const contacts = [
  { icon: <Phone />, text: "7045035773", color:"bg-gradient-to-br from-purple-800 to-blue-400" },
  { icon: <Mail />, text: "Connect@onetimex.in", color:"bg-gradient-to-br from-purple-800 to-blue-400" },
  { icon: <BsWhatsapp />, text: "7045035773" , color:"bg-green-500" },
];

const medie = [<Facebook />, <Instagram />, <Linkedin />, <FaXTwitter />];

const fadeInUp = {
  hidden: { opacity: 0, y: 40, scale: 2 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const fallIn = {
  hidden: { opacity: 0, y: -100, rotate: -15 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const Connect = () => {
  return (
    <motion.div
      className="w-full py-7 mt-10 md:mt-10 px-4 sm:px-6 lg:px-10 container relative mx-auto bg-gradient-to-br from-green-100 to-blue-100"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <h1 className="text-3xl text-purple-700 font-bold text-center rounded-xl py-3">
        Let's Connect
      </h1>

      <ul className="flex flex-wrap justify-center sm:justify-around mt-5 gap-3">
        {contacts.map((item, index) => (
          <li
            key={index}
              className={`${item.color} flex items-center gap-2 px-5 py-3 border shadow-xl border-gray-500  text-white rounded-lg min-w-[250px] justify-center`}
          >
            {item.icon} {item.text}
          </li>
        ))}
      </ul>

      <form className="flex flex-col lg:flex-row gap-10 justify-around mt-10 w-full px-2">
        <div className="w-full lg:w-1/2 flex flex-col gap-5">
          <input
            type="text"
            placeholder="Enter Name"
            className="px-3 py-2 border border-gray-300 rounded-md outline-none"
          />
          <input
            type="email"
            placeholder="Enter Email"
            className="px-3 py-2 border border-gray-300 rounded-md outline-none"
          />
          <input
            type="text"
            placeholder="Enter Phone"
            className="px-3 py-2 border border-gray-300 rounded-md outline-none"
          />

          <div className="flex flex-col sm:flex-row sm:gap-4 gap-2">
            <label className="flex items-center gap-1">
              <input type="radio" name="inquiryType" value="General" /> General Inquiry
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="inquiryType" value="Partnership" /> Partnership
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="inquiryType" value="Support" /> Support
            </label>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <textarea
            className="w-full px-3 py-2 h-40 rounded-md border border-gray-300 outline-none"
            placeholder="Enter your Queries"
          ></textarea>
          <input
            type="submit"
            className="self-end border border-blue-300 rounded-lg px-5 py-2 bg-gradient-to-br from-purple-800 to-blue-400 text-white cursor-pointer hover:bg-none hover:text-black transition-all duration-300"
            value="Submit"
          />
        </div>
      </form>

      {/* Floating social media icons - only visible on md and above */}
      <div className=" flex absolute bottom-0 md:top-[35%] right-4 flex-row md:flex-col gap-6">
        {medie.map((icon, index) => (
          <motion.li
            key={index}
            className="list-none text-xl hover:text-blue-500 cursor-pointer"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fallIn}
          >
            {icon}
          </motion.li>
        ))}
      </div>
    </motion.div>
  );
};

export default Connect;
