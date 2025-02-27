import React from 'react';
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-bold text-indigo-400">Urban Vogue</h2>
          <p className="mt-2 text-gray-400">
            Elevate your style with our exclusive collections.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-xl font-semibold text-indigo-300">Quick Links</h3>
          <Link to="/about" className="text-gray-400 hover:text-white transition">About Us</Link>
          <Link to="/shop" className="text-gray-400 hover:text-white transition">Shop</Link>
          <Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link>
          <Link to="/faq" className="text-gray-400 hover:text-white transition">FAQs</Link>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-indigo-300">Subscribe</h3>
          <p className="text-gray-400 text-sm mb-3">Stay updated with our latest trends & offers.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-4 py-2 rounded-l-md text-gray-900 focus:outline-none"
            />
            <button className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-r-md text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center">
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition"><FaFacebookF size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition"><FaTwitter size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition"><FaInstagram size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition"><FaLinkedinIn size={20} /></a>
        </div>
        <p className="text-gray-500 mt-4 text-sm">
          &copy; {new Date().getFullYear()} Urban Vogue. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
