import React from "react";

const PopularLinks = () => {
  const linkCategories = [
    {
      title: "Cities",
      links: [
        "Private areas",
        "Private island for sale",
        "Costa del Sol houses for sale",
        "French home for sale",
      ],
    },
    {
      title: "Countries",
      links: [
        "Homes for sale in Australia",
        "Homes for sale in Canada",
        "Homes for sale in Germany",
        "Homes for sale in France",
      ],
    },
    {
      title: "Cars",
      links: [
        "Ferrari for sale",
        "Aston Martin for sale",
        "Lamborghini for sale",
        "Mercedes-Benz for sale",
      ],
    },
    {
      title: "Watches",
      links: ["Rolex", "Cartier", "Patek Philippe", "Richard Mille"],
    },
    {
      title: "Motorcycles",
      links: ["Triumph", "Harley-Davidson", "Ducati", "BMW"],
    },
    {
      title: "Blog Posts",
      links: [
        "The History of the Bitcoin Logo",
        "The Ultimate Guide to the Best Luxury Watch Brands",
        "What is Doge V4?",
        "When Will Bitcoin Crash?",
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-b bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
          POPULAR LINKS
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {linkCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800 transition-all duration-300 border border-gray-700 hover:border-cyan-400/30"
            >
              <h2 className="text-xl font-bold mb-4 text-white">
                {category.title}
              </h2>
              <ul className="space-y-3">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-cyan-300 transition-colors duration-200 flex items-center"
                    >
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              <button className="mt-4 text-sm font-medium text-cyan-300 hover:text-cyan-200 transition-colors duration-200 flex items-center">
                Show all →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularLinks;
