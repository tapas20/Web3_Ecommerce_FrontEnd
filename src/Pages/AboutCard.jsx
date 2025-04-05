import React from "react";

const AboutCard = () => {
  return (
    <div className="py-16 bg-black">
      <div className="relative max-w-5xl mx-auto overflow-hidden rounded-2xl bg-gradient-to-br from-amber-900 to-gray-800 p-8 shadow-2xl ring-1 ring-gray-700/50 backdrop-blur-sm">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 h-32 w-32 rounded-full bg-blue-500 mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-pink-500 mix-blend-overlay filter blur-3xl"></div>
        </div>

        {/* Crypto pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            ></div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10">
          <header className="mb-6">
            <h1 className="text-4xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-cyan-300">
              ABOUT CRYPTO
              <br />
              EMPORIUM
            </h1>
            <p className="mt-2 text-lg font-medium text-amber-100">
              Buy With Bitcoin, Ethereum, Solana & Other Cryptocurrency
            </p>
          </header>

          <div className="space-y-4 text-gray-300">
            <p>
              Crypto Emporium is a cryptocurrency-only luxury brokerage service
              that allows clients to buy and sell high-end goods and physical
              assets using Bitcoin, Ethereum, Solana, USDT, USDC, DAI, and
              Dogecoin. With a global network spanning over 50 countries, we
              connect clients to exclusive listings across categories including
              luxury cars, motorcycles, watches, properties, land, collectibles,
              and more.
            </p>

            <p>
              Operating since 2017, our mission is to provide a premium, bespoke
              experience for clients looking to transact using cryptocurrency.
              Our platform offers secure, seamless, and efficient transactions
              via QR code payments, direct wallet transfers, and Web3 wallet
              connectivity.
            </p>

            <p>
              Now under renewed ownership, Crypto Emporium is dedicated to
              providing a tailored, sophisticated, and high-end client
              experience. Clients can securely sell their high-value assets and
              items directly to us, with remote authentication and fast payouts
              available in any of our accepted cryptocurrencies.
            </p>

            <p className="italic text-lg font-medium text-purple-300 mt-6 border-l-4 border-cyan-400 pl-4 py-1">
              Join us in redefining cryptocurrency commerce and user experience,
              and use Bitcoin as currency, as was originally intended.
            </p>
          </div>

          {/* Crypto logos */}
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Bitcoin",
              "Ethereum",
              "Solana",
              "USDT",
              "USDC",
              "DAI",
              "Dogecoin",
            ].map((coin) => (
              <span
                key={coin}
                className="px-3 py-1 text-xs font-medium rounded-full bg-gray-800/50 text-cyan-200 ring-1 ring-gray-700"
              >
                {coin}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
