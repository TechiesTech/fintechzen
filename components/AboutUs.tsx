'use client';

import { useState } from 'react';

export default function AboutUs() {
  return (
    <section id="about" className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side - Content */}
        <div className="space-y-6">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Why Choose <span className='text-gray-700'>Hard <span className="text-teal-600">Cash?</span></span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            At <strong className="text-teal-700">HardCash</strong>, we are committed to simplifying your financial journey.
            Whether you&apos;re a salaried professional or a growing business, our flexible loan services are tailored to meet your needs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div>
              <h4 className="text-xl font-semibold text-teal-700 mb-1">✅ Quick Approvals</h4>
              <p className="text-gray-600">Loan approvals in as little as 24 hours.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-teal-700 mb-1">📄 Paperless Process</h4>
              <p className="text-gray-600">100% digital application and verification.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-teal-700 mb-1">💡 Flexible Repayment</h4>
              <p className="text-gray-600">Choose a plan that fits your goals and income.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-teal-700 mb-1">🤝 Expert Support</h4>
              <p className="text-gray-600">Talk to real humans—always ready to guide you.</p>
            </div>
          </div>
        </div>

        {/* Right Side - SVG Illustration */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md h-auto bg-gradient-to-br from-teal-50 to-teal-100 rounded-3xl p-6 shadow-xl flex items-center justify-center">
            {/* --- Paste your SVG below this line --- */}
            <svg width="280" height="200" viewBox="0 0 280 200" className="drop-shadow-lg">
              {/* Place your SVG elements inside this block */}
              {/* ... your original SVG content ... */}
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
