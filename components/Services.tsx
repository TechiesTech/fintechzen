// components/Services.tsx
import React from 'react';

const Services = () => {
  return (
    <section id="services" className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-teal-900">
            Our Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Personal Loan */}
          <div className="bg-white p-8 text-center shadow-sm  border border-transparent rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105">
            {/* Personal Loan Icon - Person with dollar sign */}
            <div className="flex justify-center mb-6">
              <svg className="w-16 h-16 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {/* Person body **/}
                <circle cx="9" cy="7" r="4" strokeWidth="1.5"/>
                <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" strokeWidth="1.5"/>
                {/* Dollar sign circle */}
                <circle cx="18" cy="9" r="3" strokeWidth="1.5"/>
                <path d="M17 8h2M17 10h2M18 7v1M18 10v1" strokeWidth="1.5"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Personal loan</h3>
            <p className="text-gray-500 text-medium leading-relaxed mb-12 px-2">
              Personal loans provide borrowers with flexibility in how they use the funds.
            </p>
            <a 
              href="/apply/personal-loan"
              className="inline-block mb-4 border-2 border-teal-900 text-teal-900 font-medium px-6 py-2 rounded-full hover:bg-teal-900 hover:text-white transition-colors duration-200 text-sm"

            >
              Apply now
            </a>
          </div>

          {/* Business Loan */}
          <div className="bg-white p-8 text-center shadow-sm  border border-transparent rounded-xl transition-all duration-300 hover:shadow-lg  hover:scale-105">
            {/* Business Loan Icon - Hand with money bag */}
            <div className="flex justify-center mb-6">
              <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {/* Hand */}
                <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" strokeWidth="1.5"/>
                <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v6" strokeWidth="1.5"/>
                <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" strokeWidth="1.5"/>
                <path d="M18 8a2 2 0 1 1 4 0v6a10 10 0 0 1-10 10H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2" strokeWidth="1.5"/>
                {/* Money bag */}
                <circle cx="15" cy="6" r="2.5" strokeWidth="1.5"/>
                <path d="M14 5h2M15 4v1M15 7v1" strokeWidth="1.5"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Business loan</h3>
            <p className="text-gray-500 text-medium leading-relaxed mb-12 px-2">
              Business Loan Services provide financial assistance to businesses for various purposes.
            </p>
            <a 
              href="/apply/business-loan"
              className="inline-block border-2 border-teal-900 text-teal-900 font-medium px-6 py-2 rounded-full hover:bg-teal-900 hover:text-white transition-colors duration-200 text-sm"

            >
              Apply now
            </a>
          </div>

          {/* Education Loan */}
<div className="bg-white  p-8 text-center shadow-sm  border border-transparent rounded-xl transition-all duration-300 hover:shadow-lg  hover:scale-105">
  {/* Education Loan Icon - Graduation cap with dollar sign */}
  <div className="flex justify-center mb-6">
    <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {/* Graduation Cap */}
      <path d="M12 14L3 9l9-5 9 5-9 5z" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 14v7" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" strokeWidth="1.5" />
      {/* Dollar sign circle */}
      <circle cx="18" cy="8" r="3" strokeWidth="1.5" />
      <path d="M17 7h2M17 9h2M18 6v1M18 9v1" strokeWidth="1.5" />
    </svg>
  </div>

  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Education loan</h3>
  <p className="text-gray-500 text-medium leading-relaxed mb-12 px-2">
    Education loans help students cover tuition, living costs, and other academic expenses.
  </p>
  <a 
    href="/apply/education-loan"
    className="inline-block mb-4 border-2 border-teal-900 text-teal-900 font-medium px-6 py-2 rounded-full hover:bg-teal-900 hover:text-white transition-colors duration-200 text-sm"
  >
    Apply now
  </a>
</div>


          {/* Auto Loan */}
          <div className="bg-white p-8 text-center shadow-sm border border-transparent rounded-xl transition-all duration-300 hover:shadow-lg  hover:scale-105">
            {/* Auto Loan Icon - Car with dollar sign */}
            <div className="flex justify-center mb-6">
              <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {/* Car body */}
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10c-.1-.1-.4-.6-.7-.6h-5.7c-.3 0-.6.5-.7.6L8.4 11.1C7.7 11.3 7 12.1 7 13v3c0 .6.4 1 1 1h2" strokeWidth="1.5"/>
                {/* Wheels */}
                <circle cx="7" cy="17" r="2" strokeWidth="1.5"/>
                <circle cx="17" cy="17" r="2" strokeWidth="1.5"/>
                {/* Dollar sign on car */}
                <circle cx="14" cy="8" r="2" strokeWidth="1.5"/>
                <path d="M13 7h2M13 9h2M14 6v1M14 9v1" strokeWidth="1.5"/>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Auto loan</h3>
            <p className="text-gray-500 text-medium leading-relaxed mb-6 px-2">
              Auto Loan Services provide financing options for individuals and businesses to purchase a vehicle.
            </p>
            <a 
              href="/apply/auto-loan"
              className="inline-block border-2 border-teal-900 text-teal-900 font-medium px-6 py-2 rounded-full hover:bg-teal-900 hover:text-white transition-colors duration-200 text-sm"

            >
              Apply now
            </a>
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a 
            href="/services"
            className="inline-block bg-teal-700 hover:bg-teal-800 text-white font-medium px-8 py-3 rounded-full transition-colors duration-200"
          >
            View more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;