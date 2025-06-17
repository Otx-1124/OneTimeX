import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter, X, XIcon } from "lucide-react";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";




const Connect = () => {
  return (
    <div className=" w-full py-10 mt-20 px-10">
      <h1 className="font-bold text-3xl text-purple-700">Let's Connect</h1>
      <div className="container mx-auto flex gap-20 py-5 border border-green-400 ">
        <div className=" rounded-lg w-1/2">
          <ul className="space-y-6">
            <li className="border-b border-gray-400 py-3 flex gap-2"><span><Phone /></span>+91-9199124294</li>
            <li className="border-b border-gray-400 py-3 flex gap-2"><span><Phone /></span>+91-9199124294</li>
            <li className="border-b border-gray-400 py-3 flex gap-2"><span><Mail /></span>sandeepOnetimex@gmail.com</li>
          </ul>
          <div className="flex justify-between py-6 border-b border-gray-400 items-center">
            <Instagram/>
            <Linkedin/>
            <FaXTwitter/>
            <Facebook/>
          </div>
           <div className="pt-4">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.073095353859!2d77.2295!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce392d3b93581%3A0xaaa6b0cc407!2sMIQB%20Coworking%20Space!5e0!3m2!1sen!2sin!4v1682429297424!5m2!1sen!2sin"
              width="100%"
              height="250"
              allowFullScreen
              loading="lazy"
              className="rounded-lg border"
            ></iframe>
          </div>
        </div>
        <div className="border border-blue-500 rounded-lg w-1/2">

        </div>
      </div>
    </div>
  );
};

export default Connect;
