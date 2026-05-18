import { Phone, Mail, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  return (
    <footer className="bg-slate-900 border-t border-gray-200 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 ml-5 mr-2">
          
          {/* Company Info - Takes 2 columns on large screens */}
          <div className="lg:col-span-2 pr-8">
            <div className="mb-6 md:flex sm:block gap-10 md:flex-row">
              <img
                src="/slogo.png"
                alt="Onetimex"
                className="h-[90px] w-auto object-cover rounded-lg "
              />
              <p className=" text-sm leading-relaxed mb-6 max-w-sm">
                Onetimex is a comprehensive financial services platform providing stock market insights, investment opportunities, and innovative financial products.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center text-sm">
                <Phone className="w-4 h-4 text-gray-500 mr-3 flex-shrink-0" />
                <span>+91 7045035773</span>
              </div>
              <div className="flex items-center text-sm ">
                <Mail className="w-4 h-4 text-gray-500 mr-3 flex-shrink-0" />
                <span>connect@onetimex.in</span>
              </div>
              <div className="flex items-start text-sm ">
                <MapPin className="w-4 h-4 text-gray-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Address: OneTimeX - 1st Floor, above Jai Bhavani Medical, opp. Veer Hospital, Savarkar Nagar, Thane West, Mumbai, Thane, Maharashtra 400606
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <button 
              onClick={() => toggleSection('services')}
              className="flex items-center justify-between w-full text-left md:cursor-default"
            >
              <h3 className="text-sm font-semibold  uppercase tracking-wider mb-4 md:mb-4">
                Services
              </h3>
              <ChevronDown className={`w-4 h-4  md:hidden transition-transform ${openSections.services ? 'rotate-180' : ''}`} />
            </button>
            <ul className={`space-y-3 md:block ${openSections.services ? 'block' : 'hidden'}`}>
              <li><a href="#" className="text-sm  transition-colors">Open Demat Account</a></li>
              <li><a href="#" className="text-sm  transition-colors">Unlisted IPO</a></li>
              <li><a href="#" className="text-sm  transition-colors">AIF & PMS</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <button 
              onClick={() => toggleSection('company')}
              className="flex items-center justify-between w-full text-left md:cursor-default"
            >
              <h3 className="text-sm font-semibold  uppercase tracking-wider mb-4 md:mb-4">
                Company
              </h3>
              <ChevronDown className={`w-4 h-4 text-gray-600 md:hidden transition-transform ${openSections.company ? 'rotate-180' : ''}`} />
            </button>
            <ul className={`space-y-3 md:block ${openSections.company ? 'block' : 'hidden'}`}>
              <li><a href="#" className="text-sm  transition-colors">About</a></li>
              <li><a href="#" className="text-sm  transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm  transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-sm  transition-colors">Events</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <button 
              onClick={() => toggleSection('support')}
              className="flex items-center justify-between w-full text-left md:cursor-default"
            >
              <h3 className="text-sm font-semibold  uppercase tracking-wider mb-4 md:mb-4">
                Support
              </h3>
              <ChevronDown className={`w-4 h-4 text-gray-600 md:hidden transition-transform ${openSections.support ? 'rotate-180' : ''}`} />
            </button>
            <ul className={`space-y-3 md:block ${openSections.support ? 'block' : 'hidden'}`}>
              <li><a href="#" className="text-sm transition-colors">Help Center</a></li>
              <li><a href="#" className="text-sm transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-sm transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm transition-colors">Downloads</a></li>
              <li><a href="#" className="text-sm transition-colors">Partners</a></li>
            </ul>
          </div>
        </div>
       
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <Link to="/terms-con" className="text-xs text-gray-500 hover:text-gray-900">
                Terms & Conditions
              </Link>
              <Link to="/terms-con" className="text-xs text-gray-500 hover:text-gray-900">
                Privacy Policy
              </Link>
             
            </div>
            <div className="mt-4 md:mt-0 md:order-1">
              <p className="text-xs text-gray-500">
                © 2026 Onetimex Financial Services. All rights reserved.
              </p>
            
            </div>
          </div>
        </div>
      </div>

      {/* Regulatory Disclaimer */}
     
    </footer>
  );
}