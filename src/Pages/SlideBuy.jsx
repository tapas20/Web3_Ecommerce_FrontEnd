import React, { useState, useEffect } from "react";
import CarImg from "../assets/Car.png";
import PropertyImg from "../assets/Property.png";
import WatchImg from "../assets/Watch.png";

const slides = [CarImg, PropertyImg, WatchImg];

const SlideBuy = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col bg-black items-center justify-center py-10">
      <div className="w-full max-w-[700px] mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`slide-${index}`}
              className="w-full flex-shrink-0"
            />
          ))}
        </div>

        <div className="flex justify-center mt-4 space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === current ? "bg-white" : "bg-black"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideBuy;
