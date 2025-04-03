import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand & Copyright */}
          <div>
            <Logo width="120px" />
            <p className="text-sm mt-4">
              &copy; {new Date().getFullYear()} DevUI. All Rights Reserved.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li><Link className="hover:text-blue-400 transition" to="/">Features</Link></li>
              <li><Link className="hover:text-blue-400 transition" to="/">Pricing</Link></li>
              <li><Link className="hover:text-blue-400 transition" to="/">Affiliate Program</Link></li>
              <li><Link className="hover:text-blue-400 transition" to="/">Press Kit</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-2">
              <li><Link className="hover:text-blue-400 transition" to="/">Account</Link></li>
              <li><Link className="hover:text-blue-400 transition" to="/">Help</Link></li>
              <li><Link className="hover:text-blue-400 transition" to="/">Contact Us</Link></li>
              <li><Link className="hover:text-blue-400 transition" to="/">Customer Support</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              <li><Link className="hover:text-blue-400 transition" to="/">Terms & Conditions</Link></li>
              <li><Link className="hover:text-blue-400 transition" to="/">Privacy Policy</Link></li>
              <li><Link className="hover:text-blue-400 transition" to="/">Licensing</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-10 flex justify-center gap-6">
          <a href="#" className="text-gray-400 hover:text-blue-400 transition">
            <i className="fab fa-facebook text-2xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition">
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
