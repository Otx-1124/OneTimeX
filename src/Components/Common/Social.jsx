
import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter
} from "react-icons/fa6";

const SocialFooter = () => {
  const icons = [
    {
      icon: FaFacebookF,
      name: "Facebook",
      company: "OnetimeX",
      url: "https://www.facebook.com/share/15g8s2Kec3/", // Replace with actual
    },
    {
      icon: FaYoutube,
      name: "YouTube",
      company: "OnetimeX",
      url: "https://www.youtube.com/@onetimex.shorts", // Replace with actual
    },
     {
      icon: FaXTwitter,
      name: "X",
      company: "OnetimeX",
      url: "https://x.com/ONETIMEX_IN?t=-OqRd2S9HeRpbMUCbdwCKw&s=08", // Replace with actual
    },
    {
      icon: FaInstagram,
      name: "Instagram",
      company: "OnetimeX",
      url: "https://www.instagram.com/onetimex.in", // Replace with actual
    },
    {
      icon: FaLinkedinIn,
      name: "LinkedIn",
      company: "OnetimeX",
      url: "https://www.linkedin.com/in/vishal-dubey-53a923219", // Replace with actual
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-100 to-green-100 text-black py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-sm uppercase tracking-wide text-gray-400 mb-2">
          Social
        </h3>
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">
          Follow us for the latest updates
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-sm">
          {icons.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 hover:opacity-80 transition"
            >
              <item.icon className="text-2xl text-green-800" />
              <div>
                <p className="uppercase text-gray-400">{item.company}</p>
                <p className="font-semibold">{item.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default SocialFooter;



