'use client';

import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Add your form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form after submission
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-teal-800 mb-4">Contact Us</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get in touch with us for personalized loan solutions. Our team is here to help you achieve your financial goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content - Contact Information */}
          <div className="space-y-8">
            {/* Contact Illustration */}
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="relative w-80 h-64 bg-gradient-to-br from-teal-50 to-teal-100 rounded-3xl p-6 flex items-center justify-center">
                <svg width="280" height="200" viewBox="0 0 280 200" className="drop-shadow-lg">
                  {/* Building/Office */}
                  <rect x="40" y="60" width="80" height="100" rx="8" fill="#e6fffa" stroke="#14b8a6" strokeWidth="2"/>
                  <rect x="50" y="80" width="15" height="15" rx="2" fill="#14b8a6" opacity="0.6"/>
                  <rect x="70" y="80" width="15" height="15" rx="2" fill="#14b8a6" opacity="0.6"/>
                  <rect x="90" y="80" width="15" height="15" rx="2" fill="#14b8a6" opacity="0.6"/>
                  <rect x="50" y="100" width="15" height="15" rx="2" fill="#14b8a6" opacity="0.6"/>
                  <rect x="70" y="100" width="15" height="15" rx="2" fill="#14b8a6" opacity="0.6"/>
                  <rect x="90" y="100" width="15" height="15" rx="2" fill="#14b8a6" opacity="0.6"/>
                  <rect x="65" y="135" width="20" height="25" rx="3" fill="#1f2937"/>
                  
                  {/* Person with laptop */}
                  <g transform="translate(160, 80)">
                    {/* Head */}
                    <circle cx="0" cy="0" r="18" fill="#fbbf24"/>
                    {/* Hair */}
                    <path d="M-16 -6 Q-18 -22 0 -18 Q18 -22 16 -6" fill="#1f2937"/>
                    {/* Body */}
                    <rect x="-12" y="16" width="24" height="35" rx="12" fill="#3b82f6"/>
                    {/* Arms */}
                    <rect x="-20" y="22" width="10" height="20" rx="5" fill="#fbbf24"/>
                    <rect x="10" y="22" width="10" height="20" rx="5" fill="#fbbf24"/>
                    {/* Laptop */}
                    <rect x="-25" y="45" width="50" height="30" rx="4" fill="#374151"/>
                    <rect x="-23" y="47" width="46" height="20" rx="2" fill="#10b981"/>
                    <rect x="-20" y="50" width="8" height="3" rx="1" fill="white" opacity="0.8"/>
                    <rect x="-20" y="55" width="12" height="3" rx="1" fill="white" opacity="0.8"/>
                    <rect x="-20" y="60" width="6" height="3" rx="1" fill="white" opacity="0.8"/>
                  </g>
                  
                  {/* Communication elements */}
                  {/* Phone */}
                  <g transform="translate(200, 40)">
                    <rect x="0" y="0" width="20" height="35" rx="8" fill="#1f2937"/>
                    <rect x="2" y="3" width="16" height="24" rx="4" fill="#10b981"/>
                    <circle cx="10" cy="30" r="3" fill="#6b7280"/>
                    {/* Signal waves */}
                    <path d="M25 10 Q30 10 30 15 Q30 20 25 20" stroke="#14b8a6" strokeWidth="2" fill="none"/>
                    <path d="M32 8 Q38 8 38 15 Q38 22 32 22" stroke="#14b8a6" strokeWidth="2" fill="none"/>
                  </g>
                  
                  {/* Email envelope */}
                  <g transform="translate(50, 30)">
                    <rect x="0" y="0" width="40" height="25" rx="4" fill="#10b981"/>
                    <path d="M2 2 L20 15 L38 2" stroke="white" strokeWidth="2" fill="none"/>
                    <circle cx="45" cy="12" r="8" fill="#ef4444"/>
                    <circle cx="45" cy="12" r="4" fill="white"/>
                  </g>
                  
                  {/* Location pin */}
                  <g transform="translate(220, 120)">
                    <path d="M0 0 Q-8 -8 0 -20 Q8 -8 0 0" fill="#ef4444"/>
                    <circle cx="0" cy="-12" r="5" fill="white"/>
                    <circle cx="0" cy="-12" r="2" fill="#ef4444"/>
                  </g>
                  
                  {/* Chat bubble */}
                  <g transform="translate(140, 40)">
                    <rect x="0" y="0" width="35" height="20" rx="8" fill="#3b82f6"/>
                    <path d="M8 20 L12 25 L16 20" fill="#3b82f6"/>
                    <circle cx="8" cy="10" r="2" fill="white"/>
                    <circle cx="15" cy="10" r="2" fill="white"/>
                    <circle cx="22" cy="10" r="2" fill="white"/>
                  </g>
                  
                  {/* Decorative elements */}
                  <circle cx="30" cy="180" r="3" fill="#14b8a6" opacity="0.6"/>
                  <circle cx="250" cy="180" r="4" fill="#14b8a6" opacity="0.4"/>
                  <circle cx="260" cy="30" r="2" fill="#14b8a6" opacity="0.5"/>
                  <circle cx="20" cy="40" r="3" fill="#14b8a6" opacity="0.3"/>
                </svg>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 p-3 rounded-full">
                  <svg className="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Our Address</h3>
                  <p className="text-gray-600 mt-1">ASR Building<br />Punjagutta<br />Hyderabad, TS - 500082</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 p-3 rounded-full">
                  <svg className="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Phone Number</h3>
                  <p className="text-gray-600 mt-1">+91 9515658156</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 p-3 rounded-full">
                  <svg className="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email Address</h3>
                  <p className="text-gray-600 mt-1">contact@thehardcash.com<br />support@thehardcash  .com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 p-3 rounded-full">
                  <svg className="h-6 w-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Business Hours</h3>
                  <p className="text-gray-600 mt-1">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 9:00 AM - 2:00 PM<br />Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    pattern="[0-9]{10}"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="block w-full px-3 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="loan-inquiry">Loan Inquiry</option>
                  <option value="application-status">Application Status</option>
                  <option value="customer-support">Customer Support</option>
                  <option value="business-partnership">Business Partnership</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us how we can help you..."
                  className="block w-full px-3 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-vertical"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
  type="submit"
  className="w-full bg-teal-800 text-white font-semibold py-3 px-6 rounded-lg hover:bg-teal-900 transition-colors duration-200 flex items-center justify-center space-x-2"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8l7.89 2.63a2 2 0 011.17 1.17L15 20l6-18-18 6z"
    />
  </svg>
  <span>SEND MESSAGE</span>
</button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}