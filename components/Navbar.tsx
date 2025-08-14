"use client";

import { useState } from "react";
import Link from "next/link";

interface NavLink {
  name: string;
  href: string;
  isScroll: boolean;
  sectionId?: string;
}

export default function Navbar() {
  const [currentPath, setCurrentPath] = useState<string>("");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const navLinks: NavLink[] = [
    { name: "Our Services", href: "#services", isScroll: true, sectionId: "services" },
    { name: "How It Works", href: "#how-we-work", isScroll: true, sectionId: "how-we-work" },
    { name: "About Us", href: "#about", isScroll: true, sectionId: "about" },
  ];

  const handleNavClick = (link: NavLink) => {
    if (link.isScroll && link.sectionId) {
      scrollToSection(link.sectionId);
    } else {
      setCurrentPath(link.href);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav className="fixed top-0 left-0 w-full z-50 max-w-full mx-auto flex items-center justify-between py-5 px-6 lg:px-12 
        backdrop-blur-2xl bg-white/5 border-b border-white/20 
        shadow-lg shadow-blue-500/10">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-cyan-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/40 transition-all duration-300 group-hover:scale-105">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-cyan-500 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-cyan-600 transition-all duration-300">
              CredVerse
            </span>
            <span className="text-xs font-medium text-slate-300 -mt-1">Financial Solutions</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) =>
            link.isScroll ? (
              <button
                key={link.href}
                onClick={() => handleNavClick(link)}
                className="relative font-semibold text-blue-700 hover:text-cyan-300 transition-all duration-300 cursor-pointer group py-2"
              >
                <span className="relative">{link.name}</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-500 ease-out rounded-full"></div>
              </button>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="relative font-semibold text-blue-700 hover:text-cyan-300 transition-all duration-300 group py-2"
              >
                <span className="relative">{link.name}</span>
                <div
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 ease-out rounded-full ${
                    currentPath === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></div>
              </Link>
            )
          )}
        </div>

        {/* CTA Button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => scrollToSection("contact")}
            className="px-4 py-3 bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 text-white font-semibold rounded-xl hover:from-blue-400 hover:via-cyan-400 hover:to-indigo-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/40 group"
          >
            <span className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.5 4.5a1 1 0 01-.217 1.03l-2.2 2.2a16.06 16.06 0 006.292 6.292l2.2-2.2a1 1 0 011.03-.217l4.5 1.5a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z" />
              </svg>
              <span>Call Now</span>
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
}
