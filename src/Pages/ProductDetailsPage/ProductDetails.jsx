import React from "react";
import Faq from "../LandingPage/Faq"

const ProductDescription = () => {
  // Unsplash image URLs for demo
  const images = {
    main: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      "https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",

      "https://images.unsplash.com/photo-1547038577-da80abbc4f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    ],
    interior:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1883&q=80",
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-white">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          2020 McLaren Sabre <span className="text-red-600">8.0 V8</span>
        </h1>
        <div className="h-1 w-20 bg-red-600 mb-6"></div>
        <p className="text-lg text-gray-600 max-w-3xl">
          The ultimate expression of McLaren's track-focused engineering -
          limited to just 15 U.S. examples
        </p>
      </div>

      {/* Main Image */}
      <div className="mb-12 rounded-xl overflow-hidden shadow-xl">
        <img
          src={images.main}
          alt="2020 McLaren Sabre"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>

      {/* Description Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Exclusive Hypercar Engineering
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              The 2020 McLaren Sabre epitomizes exclusivity and exceptional
              performance, with only 15 examples ever produced specifically for
              the U.S. market by McLaren Special Operations (MSO). Powered by a
              4.0-liter twin-turbocharged V8 engine that delivers an impressive
              824 horsepower, the Sabre stands out as McLaren's most powerful
              non-hybrid road car.
            </p>

            <div className="rounded-lg overflow-hidden shadow-md my-6">
              <img
                src={images.interior}
                alt="McLaren Sabre Interior"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            <p>
              With a top speed of 218 mph, it combines breathtaking speed with
              advanced engineering. Its lightweight carbon fiber construction,
              coupled with state-of-the-art aerodynamics, ensures not only
              superior handling but also remarkable downforce, making it a
              road-legal machine designed to dominate the track.
            </p>
            <p>
              Moving inside, the Sabre boasts a meticulously crafted black
              leather interior, where premium materials seamlessly blend with
              advanced infotainment systems to deliver a luxurious yet modern
              driving experience. This attention to detail underscores McLaren's
              commitment to offering a hypercar that combines performance with
              cutting-edge technology.
            </p>
          </div>
        </div>

        {/* Specs Card */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 h-fit sticky top-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Technical Specifications
          </h3>
          <ul className="space-y-4">
            <li className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-gray-600 font-medium">Engine</span>
              <span className="text-gray-900 font-semibold">
                8.0L Twin-Turbo V8
              </span>
            </li>
            <li className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-gray-600 font-medium">Power</span>
              <span className="text-gray-900 font-semibold">824 HP</span>
            </li>
            <li className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-gray-600 font-medium">Top Speed</span>
              <span className="text-gray-900 font-semibold">218 mph</span>
            </li>
            <li className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-gray-600 font-medium">Transmission</span>
              <span className="text-gray-900 font-semibold">
                7-Speed Automatic
              </span>
            </li>
            <li className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-gray-600 font-medium">Mileage</span>
              <span className="text-gray-900 font-semibold">1,657 miles</span>
            </li>
            <li className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-gray-600 font-medium">Exterior</span>
              <span className="text-gray-900 font-semibold">Black</span>
            </li>
            <li className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-gray-600 font-medium">Interior</span>
              <span className="text-gray-900 font-semibold">Black Leather</span>
            </li>
            <li className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-gray-600 font-medium">VIN</span>
              <span className="text-gray-900 font-semibold">
                SBMBC3CA5UW000008
              </span>
            </li>
            <li className="flex justify-between pb-2">
              <span className="text-gray-600 font-medium">Condition</span>
              <span className="text-gray-900 font-semibold">
                Showroom Quality
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Collector's Section */}
      <div className="bg-gray-900 text-white p-8 md:p-12 rounded-xl mb-16">
        <h2 className="text-2xl font-bold mb-4">Investment Potential</h2>
        <p className="text-gray-300 mb-6 max-w-3xl">
          The value and desirability of the Sabre are evident in past sales,
          with some examples listed at over $4.5 million at auction. This rarity
          and exclusivity ensure the Sabre remains a once-in-a-lifetime
          opportunity for enthusiasts and collectors seeking a unique piece of
          automotive history.
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="bg-gray-800 px-4 py-3 rounded-lg">
            <p className="text-sm text-gray-400">Production Number</p>
            <p className="text-xl font-bold">1 of 15</p>
          </div>
          <div className="bg-gray-800 px-4 py-3 rounded-lg">
            <p className="text-sm text-gray-400">Auction Record</p>
            <p className="text-xl font-bold">$4.5M+</p>
          </div>
          <div className="bg-gray-800 px-4 py-3 rounded-lg">
            <p className="text-sm text-gray-400">Market Status</p>
            <p className="text-xl font-bold">Appreciating</p>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "MSO Custom Carbon Fiber Bodywork",
            "Track-Optimized Aerodynamics",
            "824HP Twin-Turbo V8 Engine",
            "7-Speed Seamless Shift Gearbox",
            "Carbon Ceramic Brakes",
            "Active Suspension System",
            "Full Black Leather Interior",
            "McLaren Track Telemetry",
            "Ultra-Lightweight Forged Wheels",
          ].map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="bg-red-100 p-2 rounded-full mr-4">
                <svg
                  className="w-5 h-5 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <p className="text-gray-800 font-medium">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.gallery.map((img, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={img}
                alt={`McLaren Sabre ${index + 1}`}
                className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 bg-gradient-to-r from-red-600 to-red-800 rounded-xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">
          Own This Automotive Masterpiece
        </h3>
        <p className="mb-6 max-w-2xl mx-auto">
          Contact us today for a private viewing and investment consultation
          regarding this ultra-rare McLaren Sabre.
        </p>
        <button className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors">
          Inquire Now
        </button>
      </div>
      <div className="mt-20">
        <Faq />
      </div>
    </div>
  );
};

export default ProductDescription;
