import React from "react";
import Cur1Img from "../../assets/cur-1.svg";
import TrendingImg1 from "../../assets/img1.png";
import TrendingImg2 from "../../assets/img2.png";
import TrendingImg3 from "../../assets/img3.jpg";
import TrendingImg4 from "../../assets/img4.jpg";
import { Link } from "react-router-dom";

const RecentlyAdded = () => {
  const trendingItems = [
    {
      id: 1,
      title: "2020 MOLAREN SABRE BOVB",
      price: "33.0778 BTC",
      image: TrendingImg1,
      note: "",
    },
    {
      id: 2,
      title: "2 BEDROOM APARTMENT IN BARCELONA, CATALONIA, SPAIN",
      price: "9.3091 BTC",
      image: TrendingImg2,
      note: "",
    },
    {
      id: 3,
      title: "RICHARD MILLE EXTRA FLAT RM67-01",
      price: "From 3.0482 BTC",
      image: TrendingImg3,
      note: "",
    },
    {
      id: 4,
      title: "ROLEX BATCHRI. GMT-MASTER II-JUBILEE BAND",
      price: "0.22628 BTC",
      image: TrendingImg4,
      note: "",
    },
  ];

  return (
    <div className="p-20 bg-black">
      <h1 className="text-3xl text-blue-50 font-bold mb-12">RECENTLY ADDED</h1>

      <div className="cursor-pointer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {trendingItems.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg overflow-hidden shadow-md hover:shadow-amber-200 transition-shadow flex flex-col h-full"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-80 object-cover"
            />
            <div className="p-4 bg-yellow-800 flex flex-col flex-grow">
              <h3 className="font-semibold text-amber-50 text-lg mb-2">
                {item.title}
              </h3>
              {item.note && (
                <p className="text-gray-500 text-sm mb-2">{item.note}</p>
              )}
              <div className="flex justify-between items-center mt-auto">
                <span className="font-bold flex items-center text-amber-200">
                  <img className="mr-2" src={Cur1Img} alt="Cur1Img" />
                  {item.price}
                </span>
                <Link
                  to={"/productdetails"}
                  className="cursor-pointer bg-amber-600 text-white px-4 py-1 rounded hover:bg-amber-500 transition-colors"
                >
                  Buy
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyAdded;
