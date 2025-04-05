import React from "react";
import HeroImg from "../assets/hero.jpg";
import BitcoinistImg from "../assets/Bitcoinist.svg";
import CointelegraphImg from "../assets/Cointelegraph.svg";
import YahooImg from "../assets/Yahoo.svg";
import Cur1Img from "../assets/cur-1.svg";
import Cur2Img from "../assets/cur-2.svg";
import Cur3Img from "../assets/cur-3.svg";
import Cur4Img from "../assets/cur-4.svg";
import Cur5Img from "../assets/cur-5.svg";
import Cur6Img from "../assets/cur-6.svg";

const CryptoTradingBanner = () => {
  return (
    <div className="bg-black p-6 sm:p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          {/* Left Text Content */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Buy & Sell
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-300">
              WITH CRYPTOCURRENCY:
            </h2>
            <div className="cursor-pointer flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-500 px-4 py-2 rounded-lg">
                CARS
              </span>
              <span className="text-xl sm:text-2xl md:text-3xl hover:text-amber-300 font-medium text-gray-300 px-4 py-2">
                WATCHES
              </span>
              <span className="text-xl sm:text-2xl md:text-3xl hover:text-amber-300 font-medium text-gray-300 px-4 py-2">
                PROPERTY
              </span>
            </div>

            {/* Supported Cryptocurrencies Section */}
            <div className="pt-4 border-t border-gray-700">
              <p className="text-gray-400 uppercase text-xs sm:text-sm">
                Supported
              </p>
              <p className="text-white font-medium text-sm sm:text-base">
                Cryptocurrencies
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
                <img
                  src={Cur1Img}
                  alt="Cur1"
                  className="w-12 h-12 sm:w-16 sm:h-16"
                />
                <img
                  src={Cur2Img}
                  alt="Cur2"
                  className="w-12 h-12 sm:w-16 sm:h-16"
                />
                <img
                  src={Cur3Img}
                  alt="Cur3"
                  className="w-12 h-12 sm:w-16 sm:h-16"
                />
                <img
                  src={Cur4Img}
                  alt="Cur4"
                  className="w-12 h-12 sm:w-16 sm:h-16"
                />
                <img
                  src={Cur5Img}
                  alt="Cur5"
                  className="w-12 h-12 sm:w-16 sm:h-16"
                />
                <img
                  src={Cur6Img}
                  alt="Cur6"
                  className="w-12 h-12 sm:w-16 sm:h-16"
                />
              </div>
            </div>
          </div>

          {/* Right Image with text below */}
          <div className="flex-1 flex flex-col items-center">
            <div className="relative w-full h-64 sm:h-80 md:h-96">
              <img
                src={HeroImg}
                alt="Hero Image"
                className="w-full h-full object-cover border-4 sm:border-6 md:border-8 rounded-2xl md:rounded-4xl border-black"
              />
            </div>
            <div className="flex flex-wrap justify-center md:justify-start items-center text-gray-400 mt-4 space-x-2 sm:space-x-4">
              <p className="uppercase text-xs sm:text-sm tracking-wider">
                AS SEEN ON
              </p>
              <img
                src={CointelegraphImg}
                alt="CointelegraphImg"
                className="h-4 sm:h-6"
              />
              <img src={YahooImg} alt="YahooImg" className="h-4 sm:h-6" />
              <img
                src={BitcoinistImg}
                alt="BitcoinistImg"
                className="h-4 sm:h-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoTradingBanner;
