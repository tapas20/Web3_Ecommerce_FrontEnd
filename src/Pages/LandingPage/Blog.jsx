import React from "react";
import BlogImg1 from "../../assets/Car.png";
import BlogImg2 from "../../assets/Property.png";
import BlogImg3 from "../../assets/Watch.png";
import BlogImg4 from "../../assets/cur-1.svg";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      date: "31 / 01 / 2025",
      title: "When Will Bitcoin Crash? A Cycle of Panic and Prosperity",
      author: "By CELADAMIN",
      excerpt:
        "Bitcoin investors have been asking the same question for over a decade: 'When will Bitcoin crash?' The answer, if history tells us anything, is probably soon—and then it'll recover, hit new highs, and make everyone who panicked look silly...",
      image: BlogImg1,
    },
    {
      id: 2,
      date: "30 / 01 / 2025",
      title: "The Bitcoin Logo – History of Satoshi Nakamoto's Original Logo",
      author: "By CELADAMIN",
      excerpt:
        "Bitcoin, the world's first decentralized cryptocurrency, has not only revolutionized the financial world but also created a strong identity through its iconic logo...",
      image: BlogImg2,
    },
    {
      id: 3,
      date: "27 / 01 / 2025",
      title: "Elon Musk, XRP, and the Future of Digital Finance: A Deep Dive",
      author: "By CELADAMIN",
      excerpt:
        "Elon Musk, the Tesla, Twitter and SpaceX magnate, is no stranger to the cryptocurrency world. From his playful tweets about Dogecoin to Tesla's Bitcoin Investments...",
      image: BlogImg3,
    },
    {
      id: 4,
      date: "22 / 01 / 2025",
      title:
        "What is Doge V4? Exploring the Latest Evolution in the Dogecoin Ecosystem",
      author: "By CELADAMIN",
      excerpt:
        "Dogecoin continues to evolve, and the launch of Doge V4 marks a pivotal moment in its journey. As one of the most popular cryptocurrencies...",
      image: BlogImg4,
    },
  ];

  return (
    <div className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-cyan-300">
          BLOG
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="group relative overflow-hidden rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80 z-10"></div>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="relative z-20 p-6">
                <span className="text-sm font-medium text-amber-300">
                  {post.date}
                </span>
                <h3 className="mt-2 text-xl font-bold text-white">
                  {post.title}
                </h3>
                <p className="mt-3 text-gray-300 text-sm line-clamp-2">
                  {post.excerpt}
                </p>
                <p className="mt-4 text-xs font-medium text-pink-400">
                  {post.author}
                </p>

                <div className="mt-6">
                  <button className="text-sm font-medium text-white bg-gradient-to-r from-amber-500 to-cyan-400 px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
                    Read More
                  </button>
                </div>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400 rounded-xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-amber-500 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300">
            View All Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
