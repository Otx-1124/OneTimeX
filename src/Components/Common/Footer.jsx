import { Phone, Mail, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  return (
    <footer className="bg-gradient-to-br from-blue-100 to-green-100 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 ml-5 mr-2">
          
          {/* Company Info - Takes 2 columns on large screens */}
          <div className="lg:col-span-2 pr-8">
            <div className="mb-6 md:flex sm:block gap-10 md:flex-row">
              <img
                src="/logoOne2.png"
                alt="Onetimex"
                className="h-20 w-auto object-cover "
              />
              <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-sm">
                Onetimex is a comprehensive financial services platform providing stock market insights, investment opportunities, and innovative financial products.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center text-sm text-gray-700">
                <Phone className="w-4 h-4 text-gray-500 mr-3 flex-shrink-0" />
                <span>+91 7045035773</span>
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <Mail className="w-4 h-4 text-gray-500 mr-3 flex-shrink-0" />
                <span>connect@onetimex.in</span>
              </div>
              <div className="flex items-start text-sm text-gray-700">
                <MapPin className="w-4 h-4 text-gray-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Shop no.1 - 1st Floor, Savarkar Nagar, Opp. Gyanoday Vidya Mandir School, Beside Panchamrut Society, Thane 400606
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
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4 md:mb-4">
                Services
              </h3>
              <ChevronDown className={`w-4 h-4 text-gray-600 md:hidden transition-transform ${openSections.services ? 'rotate-180' : ''}`} />
            </button>
            <ul className={`space-y-3 md:block ${openSections.services ? 'block' : 'hidden'}`}>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Open Demat Account</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Financial Services</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Listed IPO</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Unlisted IPO</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">AIF & PMS</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Trading Types</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <button 
              onClick={() => toggleSection('company')}
              className="flex items-center justify-between w-full text-left md:cursor-default"
            >
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4 md:mb-4">
                Company
              </h3>
              <ChevronDown className={`w-4 h-4 text-gray-600 md:hidden transition-transform ${openSections.company ? 'rotate-180' : ''}`} />
            </button>
            <ul className={`space-y-3 md:block ${openSections.company ? 'block' : 'hidden'}`}>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">About</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Events</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <button 
              onClick={() => toggleSection('support')}
              className="flex items-center justify-between w-full text-left md:cursor-default"
            >
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4 md:mb-4">
                Support
              </h3>
              <ChevronDown className={`w-4 h-4 text-gray-600 md:hidden transition-transform ${openSections.support ? 'rotate-180' : ''}`} />
            </button>
            <ul className={`space-y-3 md:block ${openSections.support ? 'block' : 'hidden'}`}>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Downloads</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">System Status</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Partners</a></li>
            </ul>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mt-5 border-t border-gray-200 ml-5 mr-2">
          <button 
            onClick={() => toggleSection('partners')}
            className="flex items-center justify-between w-full text-left md:cursor-default"
          >
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4 md:mb-4">
              Partners
            </h3>
            <ChevronDown className={`w-4 h-4 text-gray-600 md:hidden transition-transform ${openSections.partners ? 'rotate-180' : ''}`} />
          </button>
          <div className={`md:block ${openSections.partners ? 'block' : 'hidden'}`}>
            <div className="flex items-center">
              <span className="text-sm text-gray-600 bg-white border border-gray-200 px-4 py-2 rounded-md">
                Alice Blue
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gradient-to-br from-green-100 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <a href="/terms&con" className="text-xs text-gray-500 hover:text-gray-900">
                Terms & Conditions
              </a>
              <a href="/terms&con" className="text-xs text-gray-500 hover:text-gray-900">
                Privacy Policy
              </a>
             
            </div>
            <div className="mt-4 md:mt-0 md:order-1">
              <p className="text-xs text-gray-500">
                © 2025 Onetimex Financial Services. All rights reserved.
              </p>
            
            </div>
          </div>
        </div>
      </div>

      {/* Regulatory Disclaimer */}
     
    </footer>
  );
}