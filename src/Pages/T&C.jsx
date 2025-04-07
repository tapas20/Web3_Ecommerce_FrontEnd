import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiCheck } from 'react-icons/fi';

const TermAndCondition = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [accepted, setAccepted] = useState(false);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const termsData = [
    {
      id: 'introduction',
      title: 'Introduction',
      content: 'These Terms and Conditions govern your use of our website and services. By accessing or using our platform, you agree to be bound by these terms.'
    },
    {
      id: 'user-obligations',
      title: 'User Obligations',
      content: 'You agree to use our services only for lawful purposes and in accordance with these Terms. You must not misuse our services by knowingly introducing viruses or other harmful material.'
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      content: 'All content included on the website, such as text, graphics, logos, and images, is our property or the property of our licensors and is protected by copyright laws.'
    },
    {
      id: 'limitation-liability',
      title: 'Limitation of Liability',
      content: 'We will not be liable for any loss or damage caused by a distributed denial-of-service attack, viruses, or other technologically harmful material that may infect your computer equipment.'
    },
    {
      id: 'privacy',
      title: 'Privacy',
      content: 'Your use of our services is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information.'
    },
    {
      id: 'changes-terms',
      title: 'Changes to Terms',
      content: 'We may revise these Terms at any time by amending this page. Please check this page regularly to take notice of any changes we made.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          {termsData.map((term) => (
            <div key={term.id} className="border-b border-gray-100 last:border-b-0">
              <button
                onClick={() => toggleSection(term.id)}
                className="w-full px-6 py-5 text-left hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
              >
                <h2 className="text-lg font-medium text-gray-900">{term.title}</h2>
                {activeSection === term.id ? (
                  <FiChevronUp className="text-gray-500 h-5 w-5" />
                ) : (
                  <FiChevronDown className="text-gray-500 h-5 w-5" />
                )}
              </button>
              <div
                className={`px-6 pb-5 pt-0 transition-all duration-300 ease-in-out overflow-hidden ${
                  activeSection === term.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600">{term.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-start">
            <button
              onClick={() => setAccepted(!accepted)}
              className={`flex-shrink-0 h-6 w-6 rounded-md border-2 flex items-center justify-center mr-3 mt-1 transition-colors duration-200 ${
                accepted ? 'bg-blue-600 border-blue-600' : 'border-gray-300'
              }`}
            >
              {accepted && <FiCheck className="text-white h-4 w-4" />}
            </button>
            <div>
              <label htmlFor="accept-terms" className="block text-gray-700 font-medium mb-2">
                I agree to the Terms and Conditions
              </label>
              <p className="text-gray-500 text-sm">
                By checking this box, you acknowledge that you have read, understood, and agree to be bound by our Terms and Conditions.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button
              disabled={!accepted}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                accepted
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              Continue
            </button>
            <button className="px-6 py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200 border border-gray-300">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermAndCondition;