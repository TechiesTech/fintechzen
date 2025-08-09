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
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100; // adjust based on navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const navLinks: NavLink[] = [
    { name: "Home", href: "/", isScroll: false },
    { name: "Services", href: "#services", isScroll: true, sectionId: "services" },
    { name: "How we work", href: "#how-we-work", isScroll: true, sectionId: "how-we-work" },
    { name: "About Us", href: "#about", isScroll: true, sectionId: "about" },
  ];

  const handleNavClick = (link: NavLink) => {
    if (link.isScroll && link.sectionId) {
      scrollToSection(link.sectionId);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-full mx-auto flex items-center justify-between py-4 px-12 backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl bg-gradient-to-r from-white/20 via-white/10 to-white/20 hover:shadow-3xl transition-all duration-500 ease-out">
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 via-emerald-400/20 to-cyan-400/20 rounded-2xl blur-xl opacity-60"></div>
        
        {/* Logo */}
        <Link href="/" className="relative z-10 text-2xl font-bold ml-12 group cursor-pointer">
          <span className="text-teal-900 transition-all duration-300 group-hover:text-teal-700 drop-shadow-sm group-hover:drop-shadow-lg transform group-hover:scale-105">
            Hard
          </span>
          <span className="text-emerald-600 transition-all duration-300 group-hover:text-emerald-500 drop-shadow-sm group-hover:drop-shadow-lg transform group-hover:scale-105 inline-block">
            Cash
          </span>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 group-hover:w-full transition-all duration-500 ease-out"></div>
        </Link>

        {/* Links */}
        <div className="relative z-10 flex items-center gap-12">
          {navLinks.map((link) => (
            link.isScroll ? (
              <button
                key={link.href}
                onClick={() => handleNavClick(link)}
                className="relative font-medium transition-all duration-300 cursor-pointer group text-slate-700 hover:text-teal-800 transform hover:scale-105 hover:drop-shadow-lg"
              >
                <span className="relative z-10">{link.name}</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 group-hover:w-full transition-all duration-500 ease-out"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-emerald-400/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </button>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="relative font-medium transition-all duration-300 cursor-pointer group text-slate-700 hover:text-teal-800 transform hover:scale-105 hover:drop-shadow-lg"
              >
                <span className="relative z-10">{link.name}</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 group-hover:w-full transition-all duration-500 ease-out"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-emerald-400/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </Link>
            )
          ))}
        </div>

        {/* Contact button */}
        <button
          onClick={() => scrollToSection("contact")}
          className="relative z-10 px-6 py-3 rounded-full transition-all duration-300 mr-14 group bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-medium hover:from-teal-500 hover:to-emerald-500 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-teal-500/25"
        >
          <span className="relative z-10 flex items-center gap-2">
            Contact us
            <div className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300"></div>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300 -z-10 scale-110"></div>
        </button>
      </nav>
    </div>
  );
}