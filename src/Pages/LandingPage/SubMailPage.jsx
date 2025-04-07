import React, { useState } from "react";
import {
  FaTwitter,
  FaTelegramPlane,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa";

const SubscribePage = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Subscribed with:", email);
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-800 flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 shadow-xl">
        {/* Decorative elements */}
        <div className="relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-amber-500 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>

          {/* Main content */}
          <div className="relative z-10 p-8 sm:p-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-cyan-300">
              SIGN UP FOR UPDATES
            </h1>

            <p className="text-gray-300 text-center mb-8 max-w-md mx-auto">
              For early access and to be kept updated on all developments with
              Crypto Emporium, sign up to our mailing list below.
            </p>

            {subscribed ? (
              <div className="bg-green-900/30 border border-green-700 rounded-lg p-4 text-center text-green-300 mb-8">
                Thank you for subscribing! You'll be the first to know about our
                updates.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mb-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-grow px-5 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-gray-400 outline-none transition-all"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-amber-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-cyan-500/20 whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            )}

            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-4">
                Get social
              </h3>
              <p className="text-gray-300 mb-6 max-w-md mx-auto">
                Join us in the group and be the first to know all promotions and
                others!
              </p>

              <div className="flex justify-center gap-4">
                {[
                  { name: "Twitter", icon: <FaTwitter /> },
                  { name: "Telegram", icon: <FaTelegramPlane /> },
                  { name: "Discord", icon: <FaDiscord /> },
                  { name: "Instagram", icon: <FaInstagram /> },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="w-12 h-12 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-full transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <span className="text-white text-xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribePage;
