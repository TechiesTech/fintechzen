"use client";

import { ShieldCheck, Users, Zap } from "lucide-react";

export default function TopInfoBar() {
  return (
    <div className="fixed top-[86px] w-full z-50 bg-blue-900 text-white text-sm font-medium shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Desktop Layout */}
        <div className="hidden sm:flex items-center justify-between py-2">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-blue-300" />
            <span>No CIBIL Impact on Eligibility Check</span>
          </div>
          <div className="h-4 w-px bg-white/30"></div>
          <div className="flex items-center gap-2">
            <Zap size={16} className="text-blue-300" />
            <span>Instant Approval — Disbursal in Minutes</span>
          </div>
          <div className="h-4 w-px bg-white/30"></div>
          <div className="flex items-center gap-2">
            <Users size={16} className="text-blue-300" />
            <span>2 Lakh+ Satisfied Customers</span>
          </div>
        </div>

        {/* Mobile Marquee */}
        <div className="sm:hidden overflow-hidden py-2">
          <div className="animate-marquee whitespace-nowrap">
            <span className="flex items-center gap-1 inline-block mr-8">
              <ShieldCheck size={14} className="text-blue-300" /> No CIBIL Impact
            </span>
            <span className="flex items-center gap-1 inline-block mr-8">
              <Zap size={14} className="text-blue-300" /> Instant Approval
            </span>
            <span className="flex items-center gap-1 inline-block mr-8">
              <Users size={14} className="text-blue-300" /> 2L+ Customers
            </span>
          </div>
        </div>
      </div>

      {/* Marquee Animation */}
      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          min-width: 100%;
          animation: marquee 12s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}
