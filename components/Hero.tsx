"use client";

import { useState, useEffect } from 'react';

interface Slogan {
  title: string;
  subtitle: string;
  highlight: string;
  icon: string;
}

export default function Hero() {
  const [currentSlogan, setCurrentSlogan] = useState<number>(0);
  const [loanAmount, setLoanAmount] = useState<number>(500000);

  const slogans: Slogan[] = [
    { 
      title: "Dreams Don't Wait", 
      subtitle: "Why Should You?",
      highlight: "Instant Approval in 2 Minutes",
      icon: "⚡"
    },
    { 
      title: "Your Financial Freedom", 
      subtitle: "Starts Here",
      highlight: "Up to ₹25 Lakhs at 10.99%*",
      icon: "🚀"
    },
    { 
      title: "No Queue, No Wait", 
      subtitle: "Just Quick Cash",
      highlight: "100% Digital Process",
      icon: "📱"
    },
    { 
      title: "Trusted by 2 Lakh+", 
      subtitle: "Happy Customers",
      highlight: "Zero Hidden Charges",
      icon: "💰"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [slogans.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const formatIndianCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleLoanAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoanAmount(Number(e.target.value));
  };

  const handleSloganClick = (index: number) => {
    setCurrentSlogan(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden ">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-60">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      <section className="relative z-10 max-w-full mx-auto px-6 pt-40 pl-18 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            
            {/* Rotating Slogans */}
            <div className="h-64 flex items-center">
              <div className="w-full text-center lg:text-left">
                <div className="text-6xl mb-6 animate-bounce">
                  {slogans[currentSlogan].icon}
                </div>
                <h1 className="text-4xl lg:text-5xl font-black leading-tight mb-4">
                  <span className="block text-gray-800">{slogans[currentSlogan].title}</span>
                  <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {slogans[currentSlogan].subtitle}
                  </span>
                </h1>
                <p className="text-xl text-blue-600 font-bold">
                  {slogans[currentSlogan].highlight}
                </p>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center lg:justify-start space-x-2">
              {slogans.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSloganClick(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentSlogan 
                      ? 'bg-blue-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400 w-3'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Key Benefits - Clean Grid */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">2 Min Approval</h3>
                <p className="text-gray-600 text-sm">Instant AI Decision</p>
              </div>

              <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">Best Rates</h3>
                <p className="text-gray-600 text-sm">From 10.99% p.a.*</p>
              </div>

              <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">Zero Fees</h3>
                <p className="text-gray-600 text-sm">No Hidden Charges</p>
              </div>
            </div>

            {/* Loan Calculator - Simplified */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Loan Calculator</h3>
                <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {formatIndianCurrency(loanAmount)}
                </div>
              </div>
              
              <input
                type="range"
                min="50000"
                max="2500000"
                step="50000"
                value={loanAmount}
                onChange={handleLoanAmountChange}
                className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer mb-4 
                         [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 
                         [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-blue-600 [&::-webkit-slider-thumb]:to-indigo-600 
                         [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer 
                         [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-blue-500/40
                         [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:bg-gradient-to-r 
                         [&::-moz-range-thumb]:from-blue-600 [&::-moz-range-thumb]:to-indigo-600 [&::-moz-range-thumb]:rounded-full 
                         [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:shadow-lg"
                style={{
                  background: `linear-gradient(to right, #2563eb 0%, #3730a3 ${((loanAmount - 50000) / (2500000 - 50000)) * 100}%, #e5e7eb ${((loanAmount - 50000) / (2500000 - 50000)) * 100}%, #e5e7eb 100%)`
                }}
              />
              
              <div className="flex justify-between text-sm text-gray-500 mb-6">
                <span>₹50K</span>
                <span>₹25L</span>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-sm text-gray-600 mb-1">Monthly EMI</div>
                  <div className="text-2xl font-bold text-blue-600">
                    {formatIndianCurrency(Math.round(loanAmount * 0.024))}
                  </div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-sm text-gray-600 mb-1">Processing Fee</div>
                  <div className="text-2xl font-bold text-green-600">FREE</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Clean Layout */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="flex-1 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xl rounded-2xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
              >
                Apply Now - Get Instant Approval
              </button>
              
              <button className="flex-1 px-8 py-4 bg-white text-gray-700 font-bold text-xl rounded-2xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                Check Eligibility
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex justify-center lg:justify-start items-center space-x-8 pt-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No CIBIL Impact</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Bank Level Security</span>
              </div>
            </div>
          </div>

          {/* Right Visual - Improved Mobile Design with Better Alignment */}
          <div className="flex justify-start lg:justify-center -mt-100 -ml-30 lg:mt-0 mb-40 lg:ml-0">
            <div className="relative">
              {/* Enhanced Phone Mockup */}
              <div className="w-80 h-[600px] bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-[50px] p-1 shadow-2xl">
                <div className="w-full h-full bg-black rounded-[45px] p-3">
                  <div className="w-full h-full bg-white rounded-[35px] overflow-hidden relative">
                    
                    {/* Status Bar */}
                    <div className="bg-gray-900 h-12 flex items-center justify-between px-6 text-white text-sm font-medium">
                      <div className="flex items-center space-x-1">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                      </div>
                      <span className="font-semibold">9:41</span>
                      <div className="flex items-center space-x-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.414 5 5 0 017.072 0 1 1 0 01-1.415 1.414zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                        <div className="w-6 h-3 border border-white rounded-sm relative">
                          <div className="w-4 h-2 bg-green-400 rounded-sm absolute top-0.5 left-0.5"></div>
                        </div>
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="text-white text-2xl font-bold leading-tight">QuickLoan</h3>
                          <p className="text-blue-100 text-sm mt-1">Get Instant Personal Loans</p>
                        </div>
                        <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 space-y-4 bg-gray-50 flex-1">
                      {/* Loan Status Card */}
                      <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-lg font-bold text-gray-800">Loan Status</span>
                          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">APPROVED</span>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600 text-sm">Amount Approved</span>
                            <span className="font-bold text-xl text-green-600">₹5,00,000</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600 text-sm">Interest Rate</span>
                            <span className="font-semibold text-gray-800">11.5% p.a.</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600 text-sm">Monthly EMI</span>
                            <span className="font-semibold text-gray-800">₹12,059</span>
                          </div>
                        </div>

                        <div className="mt-4">
                          <div className="flex justify-between items-center text-sm mb-2">
                            <span className="text-gray-600">Approval Progress</span>
                            <span className="font-semibold text-green-600">100%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full w-full"></div>
                          </div>
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                          <div className="w-10 h-10 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div className="text-xs font-semibold text-gray-700">EMI Calculator</div>
                        </div>
                        <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                          <div className="w-10 h-10 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                          </div>
                          <div className="text-xs font-semibold text-gray-700">Documents</div>
                        </div>
                      </div>

                      {/* Apply Button */}
                      <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-base rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                        Apply for New Loan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}