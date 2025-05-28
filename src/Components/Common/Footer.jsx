import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-green-100 to-yellow-100 text-gray-800 px-6 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-6 gap-10">
        {/* Left Info */}
        <div className="md:col-span-2 space-y-4">
          <div className="mb-10">
            <img src="/logoOne2.png" alt="Onetimex Logo" className="h-16 object-cover w-2/5 mb-2 mt-2 " />
            <p className="text-sm">
              Onetimex is a financial services platform that provides stock market-related information, investment opportunities, and financial products. It is designed as a one-stop solution for investment needs, catering to traders, investors, and financial enthusiasts.
            </p>
          </div>


          {/* Contact Info */}
          <div className="space-y-2 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <FiPhone className="text-blue-600" />
              <span className="font-semibold">+91 7045035773</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMail className="text-blue-600" />
              <span>onetimexbusiness@gmail.com</span>
            </div>
            <div className="flex items-start gap-2">
              <FiMapPin className="text-blue-600 mt-1" />
              <span>
                Gala no.1 - 1st Floor, Savarkar Nagar, Opp. Gyanoday Vidya Mandir School, Beside Panchamrut Society, Thane 400606
              </span>
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Open Demat Account</li>
            <li>Financial Services</li>
            <li>Unlisted and Listed IPO</li>
            <li>Types of Traders</li>
            <li>AIF & PMS & AIF</li>
          </ul>
        </div>

        {/* Platforms */}
        <div>
          <h4 className="font-semibold mb-3">Partner's</h4>
          <ul className="space-y-2 text-sm">
            <li>Motilal Oswal</li>
            <li>Alice Blue</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Portfolio</li>
            <li>Events</li>
          </ul>
        </div>

        {/* Additional */}
        <div>
          <h4 className="font-semibold mb-3">Additional</h4>
          <ul className="space-y-2 text-sm">
            <li>FAQ</li>
            <li>Partners</li>
            <li>Support</li>
            <li>Contact</li>
            <li>News</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t mt-10 pt-4 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center">
        <div className="flex gap-4 mb-2 md:mb-0">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Security</a>
        </div>
        <p>© 2025 Onetimex. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
