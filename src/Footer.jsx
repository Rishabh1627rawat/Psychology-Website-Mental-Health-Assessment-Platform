import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Hipno</h2>
            <p className="text-gray-400">We’re Here When You’re Ready.</p>
          </div>

          {/* Contact Info */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-center space-x-2">
                <FaPhone className="text-blue-500" />
                <span>0761-8523-398</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-blue-500" />
                <span>info@domainname.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-blue-500" />
                <span>123 High Street LN1 IAB United Kingdom</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Join Our Community */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Join Our Community</h3>
            <p className="text-gray-400 mb-4">
              Join Us Today for Resources, Insight & Connection
            </p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
              Join Now
            </button>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            Copyright © 2024 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;