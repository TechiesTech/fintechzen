"use client";

import Image from "next/image";
import heroImage from "../public/hero-image.png"; // Replace with your actual image

export default function Hero() {
  // Scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16 gap-10">
      {/* Left Content */}
      
<div className="flex-1 max-w-xl animate-slideInLeft">
        <h1 className="text-4xl md:text-5xl mt-16  font-bold text-teal-900 leading-tight drop-shadow-sm">
          Quick and Easy <br />
          Loans for Your <br />
          Financial Needs.
        </h1> 
        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
          Our loan services offer a hassle-free and streamlined borrowing experience,
          providing you with the funds you need in a timely manner to meet your financial
          requirements.
        </p>

        {/* Updated Button with scroll functionality */}
         <button
          onClick={() => scrollToSection("contact")}
          className="mt-8 px-6 py-3 rounded-full text-white font-medium
            bg-gradient-to-r from-teal-600 to-emerald-600
            hover:from-teal-500 hover:to-emerald-500 
            transform hover:scale-105 hover:shadow-xl transition-all duration-500 ease-out
            relative overflow-hidden group"
        >
          <span className="relative z-10">Get started</span>
          <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300 -z-10 scale-110"></div>
        </button>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-full h-auto max-w-lg">
          <svg width="500" height="400" viewBox="0 0 500 400" className="w-full h-auto">
            {/* Background circle */}
            <circle cx="250" cy="200" r="180" fill="#e6fffa" opacity="0.7" />

            {/* Bank building */}
            <g transform="translate(150, 80)">
              <rect x="0" y="80" width="200" height="120" fill="#1f2937" />
              <rect x="10" y="90" width="180" height="100" fill="#374151" />
              <rect x="20" y="60" width="15" height="140" fill="#d1d5db" />
              <rect x="45" y="60" width="15" height="140" fill="#d1d5db" />
              <rect x="140" y="60" width="15" height="140" fill="#d1d5db" />
              <rect x="165" y="60" width="15" height="140" fill="#d1d5db" />
              <polygon points="0,80 100,40 200,80" fill="#10b981" />
              <rect x="70" y="50" width="60" height="20" fill="#10b981" />
              <text x="100" y="63" textAnchor="middle" className="text-xs font-bold" fill="white">
                BANK
              </text>
              <rect x="80" y="140" width="40" height="60" fill="#1f2937" />
              <rect x="85" y="145" width="30" height="50" fill="#4b5563" />
              <rect x="30" y="110" width="20" height="15" fill="#10b981" opacity="0.8" />
              <rect x="30" y="135" width="20" height="15" fill="#10b981" opacity="0.8" />
              <rect x="150" y="110" width="20" height="15" fill="#10b981" opacity="0.8" />
              <rect x="150" y="135" width="20" height="15" fill="#10b981" opacity="0.8" />
            </g>

            {/* Person 1 - Standing with briefcase */}
            <g transform="translate(80, 220)">
              <circle cx="15" cy="15" r="12" fill="#fbbf24" />
              <rect x="5" y="25" width="20" height="35" rx="10" fill="#3b82f6" />
              <rect x="-5" y="30" width="10" height="20" rx="5" fill="#fbbf24" />
              <rect x="20" y="30" width="10" height="20" rx="5" fill="#fbbf24" />
              <rect x="8" y="58" width="8" height="25" rx="4" fill="#1f2937" />
              <rect x="19" y="58" width="8" height="25" rx="4" fill="#1f2937" />
              <rect x="32" y="40" width="15" height="10" rx="2" fill="#6b7280" />
            </g>

            {/* Person 2 - Walking towards bank */}
            <g transform="translate(380, 230)">
              <circle cx="15" cy="15" r="12" fill="#fbbf24" />
              <rect x="5" y="25" width="20" height="35" rx="10" fill="#ef4444" />
              <rect x="-5" y="30" width="10" height="20" rx="5" fill="#fbbf24" />
              <rect x="20" y="30" width="10" height="20" rx="5" fill="#fbbf24" />
              <rect x="8" y="58" width="8" height="25" rx="4" fill="#1f2937" />
              <rect x="19" y="58" width="8" height="25" rx="4" fill="#1f2937" />
            </g>

            {/* Money/Dollar symbols floating */}
            <g opacity="0.8">
              <circle cx="100" cy="100" r="12" fill="#10b981" />
              <text x="100" y="107" textAnchor="middle" className="text-sm font-bold" fill="white">
                $
              </text>
              <circle cx="400" cy="120" r="10" fill="#10b981" />
              <text x="400" y="126" textAnchor="middle" className="text-xs font-bold" fill="white">
                $
              </text>
              <circle cx="70" cy="160" r="8" fill="#10b981" />
              <text x="70" y="165" textAnchor="middle" className="text-xs font-bold" fill="white">
                $
              </text>
              <circle cx="420" cy="180" r="10" fill="#10b981" />
              <text x="420" y="186" textAnchor="middle" className="text-xs font-bold" fill="white">
                $
              </text>
            </g>

            {/* Car with dollar sign */}
            <g transform="translate(40, 320)">
              <rect x="0" y="10" width="60" height="20" rx="5" fill="#10b981" />
              <rect x="10" y="0" width="40" height="15" rx="3" fill="#0d9488" />
              <circle cx="12" cy="32" r="6" fill="#1f2937" />
              <circle cx="48" cy="32" r="6" fill="#1f2937" />
              <circle cx="30" cy="15" r="8" fill="#fbbf24" />
              <text x="30" y="20" textAnchor="middle" className="text-xs font-bold" fill="white">
                $
              </text>
            </g>

            {/* House with dollar sign */}
            <g transform="translate(400, 300)">
              <rect x="0" y="20" width="40" height="30" fill="#6b7280" />
              <polygon points="0,20 20,5 40,20" fill="#ef4444" />
              <rect x="15" y="35" width="10" height="15" fill="#1f2937" />
              <circle cx="20" cy="10" r="6" fill="#10b981" />
              <text x="20" y="14" textAnchor="middle" className="text-xs font-bold" fill="white">
                $
              </text>
            </g>

            {/* Approval checkmarks */}
            <g>
              <circle cx="120" cy="300" r="12" fill="#10b981" />
              <path d="M114 300 L118 304 L126 294" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
              <circle cx="380" cy="300" r="10" fill="#10b981" />
              <path d="M375 300 L378 303 L385 295" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
            </g>

            {/* Decorative elements */}
            <circle cx="50" cy="80" r="3" fill="#14b8a6" opacity="0.6" />
            <circle cx="450" cy="90" r="4" fill="#14b8a6" opacity="0.4" />
            <circle cx="30" cy="250" r="2" fill="#14b8a6" opacity="0.5" />
            <circle cx="470" cy="260" r="3" fill="#14b8a6" opacity="0.3" />

            {/* Speed lines */}
            <g opacity="0.3">
              <line x1="180" y1="50" x2="200" y2="45" stroke="#10b981" strokeWidth="2" />
              <line x1="180" y1="60" x2="205" y2="55" stroke="#10b981" strokeWidth="2" />
              <line x1="180" y1="70" x2="195" y2="65" stroke="#10b981" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
