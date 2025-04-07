import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  FiChevronDown,
  FiGlobe,
  FiInfo,
  FiUser,
  FiHeart,
  FiShoppingCart,
  FiSearch,
  FiHome,
  FiTruck,
  FiClock,
  FiMapPin,
  FiDollarSign,
  FiMenu,
} from "react-icons/fi";

const Header = () => {
  const [isUkOpen, setIsUkOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white shadow-sm">
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-auto mb-2 md:mb-0 flex items-center space-x-6">
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search here"
                className="border border-gray-700 bg-gray-800 text-white rounded-md py-1 px-3 pl-8 text-sm w-full focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400"
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-sm mb-2 md:mb-0">
            <Link
              to="/buybitcoin"
              className="hover:text-blue-400 whitespace-nowrap"
            >
              Buy Bitcoin
            </Link>

            <Link to="/earn" className="hover:text-blue-400 whitespace-nowrap">
              Earn
            </Link>

            <Link to="/terms" className="hover:text-blue-400 whitespace-nowrap">
              T&C
            </Link>

            <Link
              to="/contact"
              className="hover:text-blue-400 whitespace-nowrap"
            >
              Contract
            </Link>
          </div>

          <div className="hidden sm:flex items-center space-x-6">
            <div className="relative">
              <button
                className="flex items-center space-x-1 focus:outline-none"
                onClick={() => setIsUkOpen(!isUkOpen)}
              >
                <FiGlobe className="text-gray-300" />
                <span className="font-medium">United Kingdom</span>
                <FiChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isUkOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isUkOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-black rounded-md shadow-lg z-10 border border-gray-700">
                  <div className="py-1">
                    <div className="px-4 py-2 font-medium border-b border-gray-700">
                      United Kingdom
                    </div>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                      onClick={() => setIsUkOpen(false)}
                    >
                      Europe
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                      onClick={() => setIsUkOpen(false)}
                    >
                      USA
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                className="flex items-center space-x-1 focus:outline-none"
                onClick={() => setIsLangOpen(!isLangOpen)}
              >
                <FiInfo className="text-gray-300" />
                <span className="font-medium">English</span>
                <FiChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isLangOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-black rounded-md shadow-lg z-10 border border-gray-700">
                  <div className="py-1">
                    <div className="px-4 py-2 text-sm font-medium text-white bg-gray-700">
                      English
                    </div>
                    {[
                      "Spanish",
                      "German",
                      "French",
                      "Portuguese",
                      "Italian",
                    ].map((language) => (
                      <button
                        key={language}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        onClick={() => setIsLangOpen(false)}
                      >
                        {language}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-3 bg-black">
        <div className="flex justify-between items-center">
          {/* Logo and Shop button */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <span className="font-semibold text-blue-400">CRYPTO</span>
              <span className="font-semibold text-white">TAPORUS</span>
            </div>
            <button className="hidden md:block px-4 py-2 hover:text-blue-400">
              Shop
            </button>
          </div>

          <button
            className="md:hidden p-2 hover:text-blue-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FiMenu className="h-6 w-6" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <Link to="/" className="hover:text-blue-400 flex items-center">
              <FiHome className="mr-1" /> Home
            </Link>
            <Link
              to="/automotive"
              className="hover:text-blue-400 flex items-center"
            >
              <FiTruck className="mr-1" /> Automotive
            </Link>
            <Link
              to="watches"
              className="hover:text-blue-400 flex items-center"
            >
              <FiClock className="mr-1" /> Watches
            </Link>
            <Link
              to="property"
              className="hover:text-blue-400 flex items-center"
            >
              <FiMapPin className="mr-1" /> Property
            </Link>
            <Link to="sell" className="hover:text-blue-400 flex items-center">
              <FiDollarSign className="mr-1" /> Sell
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/sign" className="hover:text-blue-400 flex items-center">
              <FiUser className="mr-1" /> My account
            </Link>
            <a href="#" className="hover:text-blue-400 flex items-center">
              <FiHeart className="mr-1" /> Wish List
            </a>
            <a href="#" className="hover:text-blue-400 flex items-center">
              <FiShoppingCart className="mr-1" /> Cart
            </a>
          </div>
        </div>

        {/* <div className="border-b border-gray-700 mt-3"></div> */}

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <div className="flex flex-col space-y-2">
              <a
                href="#"
                className="hover:text-blue-400 flex items-center py-2"
              >
                <FiHome className="mr-2" /> Home
              </a>
              <a
                href="#"
                className="hover:text-blue-400 flex items-center py-2"
              >
                <FiTruck className="mr-2" /> Automotive
              </a>
              <a
                href="#"
                className="hover:text-blue-400 flex items-center py-2"
              >
                <FiClock className="mr-2" /> Watches
              </a>
              <a
                href="#"
                className="hover:text-blue-400 flex items-center py-2"
              >
                <FiMapPin className="mr-2" /> Property
              </a>
              <a
                href="#"
                className="hover:text-blue-400 flex items-center py-2"
              >
                <FiDollarSign className="mr-2" /> Sell
              </a>
            </div>

            <div className="border-t border-gray-700 pt-4">
              <div className="flex flex-col space-y-2">
                <a
                  href="#"
                  className="hover:text-blue-400 flex items-center py-2"
                >
                  <FiUser className="mr-2" /> My account
                </a>
                <a
                  href="#"
                  className="hover:text-blue-400 flex items-center py-2"
                >
                  <FiHeart className="mr-2" /> Wish List
                </a>
                <a
                  href="#"
                  className="hover:text-blue-400 flex items-center py-2"
                >
                  <FiShoppingCart className="mr-2" /> Cart
                </a>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-4">
              <div className="flex space-x-4">
                <div className="relative">
                  <button
                    className="flex items-center space-x-1 focus:outline-none"
                    onClick={() => setIsUkOpen(!isUkOpen)}
                  >
                    <FiGlobe className="text-gray-300" />
                    <span className="font-medium">United Kingdom</span>
                    <FiChevronDown
                      className={`h-4 w-4 transition-transform ${
                        isUkOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                <div className="relative">
                  <button
                    className="flex items-center space-x-1 focus:outline-none"
                    onClick={() => setIsLangOpen(!isLangOpen)}
                  >
                    <FiInfo className="text-gray-300" />
                    <span className="font-medium">English</span>
                    <FiChevronDown
                      className={`h-4 w-4 transition-transform ${
                        isLangOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
