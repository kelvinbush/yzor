import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A2342] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Yzor</h3>
            <p className="text-sm text-gray-300">
              Empowering your financial future with expert guidance and
              personalized strategies.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/financial-planning"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Financial Planning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/investment-management"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Investment Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services/retirement-planning"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Retirement Planning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/tax-strategies"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Tax Strategies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm text-gray-300 mb-2">123 Financial Street</p>
            <p className="text-sm text-gray-300 mb-2">New York, NY 10001</p>
            <p className="text-sm text-gray-300 mb-2">Phone: (555) 123-4567</p>
            <p className="text-sm text-gray-300 mb-4">
              Email: contact@yzor.com
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Yzor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
