import React from "react";
import FeaturedImg1 from "../../assets/FeaturedImg1.png";
import FeaturedImg2 from "../../assets/FeaturedImg2.png";
import FeaturedImg3 from "../../assets/FeaturedImg3.png";
import FeaturedImg4 from "../../assets/FeaturedImg4.png";

const FeaturedPage = () => {
  const featuredCategories = [
    {
      id: 1,
      title: "AUTOMOTIVE",
      image: FeaturedImg1,
    },
    {
      id: 2,
      title: "WATCHES",
      image: FeaturedImg2,
    },
    {
      id: 3,
      title: "PROPERTY",
      image: FeaturedImg3,
    },
    {
      id: 4,
      title: "COMING SOON",
      image: FeaturedImg4,
    },
  ];

  return (
    <div className="p-20 bg-black">
      <h2 className="text-2xl text-amber-50 font-bold mb-12">FEATURED CATEGORIES</h2>

      <div className="cursor-pointer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {featuredCategories.map((category) => (
          <div
            key={category.id}
            className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-opacity-30 flex items-center justify-center">
              <h3 className="mt-70 text-white text-xl font-bold uppercase tracking-wider">
                {category.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPage;
