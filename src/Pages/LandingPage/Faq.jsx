import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Crypto Emporium, and how does it work?",
      answer: "Crypto Emporium is a luxury marketplace where you can buy and sell high-end products using cryptocurrencies like Bitcoin, Ethereum, and more. From luxury watches and vehicles to real estate, Crypto Emporium acts as an intermediary concierge service, allowing you to buy premium goods with digital assets, offering a seamless, secure and private shopping experience."
    },
    {
      question: "What payment methods does Crypto Emporium accept?",
      answer: "We accept various cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), Solana (SOL), USDT, USDC, DAI, and Dogecoin (DOGE). All transactions are processed securely through our blockchain payment system."
    },
    {
      question: "Is shopping on Crypto Emporium safe and secure?",
      answer: "Absolutely. We employ industry-leading security measures including end-to-end encryption, multi-signature wallets, and smart contract escrow services to ensure all transactions are secure. Your privacy and security are our top priorities."
    },
    {
      question: "Does Crypto Emporium offer international shipping?",
      answer: "Yes, we offer worldwide shipping for most products. Shipping options and costs vary depending on the item and destination. Some large items like real estate obviously require local handling."
    },
    {
      question: "How can I track my order on Crypto Emporium?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can monitor your shipment directly through our platform or the carrier's website."
    },
    {
      question: "Can I sell my products on Crypto Emporium?",
      answer: "Yes! We welcome luxury sellers. Simply create a seller account, submit your items for verification, and once approved, your listings will appear in our marketplace. We handle the payment processing and escrow services."
    },
    {
      question: "Does Crypto Emporium offer refunds or returns?",
      answer: "We offer returns on most items within 14 days of delivery, provided they are in original condition. Certain items like customized products or digital goods may be exempt. All refunds are processed in the original cryptocurrency used for purchase."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-b bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-cyan-300">
          FAQ
        </h1>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden transition-all duration-300 ${activeIndex === index ? 'bg-gray-800' : 'bg-gray-800/70 hover:bg-gray-800'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <h3 className={`text-lg font-medium ${activeIndex === index ? 'text-orange-300' : 'text-white'}`}>
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${activeIndex === index ? 'text-orange-300 rotate-180' : 'text-gray-400'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`px-6 pb-6 pt-0 transition-all duration-300 ${activeIndex === index ? 'block' : 'hidden'}`}
              >
                <p className="text-gray-300">{faq.answer}</p>
              </div>
              
              {index < faqs.length - 1 && (
                <div className={`h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent ${activeIndex === index ? 'opacity-100' : 'opacity-30'}`}></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-amber-500 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:opacity-90">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;