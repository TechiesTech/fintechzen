import React from 'react';

const HowWeWork: React.FC = () => {
  return (
    <section id="how-we-work" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-4">
            How we work ?
          </h2>
          <p className="text-gray-600 text-lg">
            This is a process, how you can get loan for your self.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-20">
          {/* Step 1: Application */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Application Illustration */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-80 h-64 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl p-8 flex items-center justify-center">
                <svg width="200" height="160" viewBox="0 0 200 160" className="drop-shadow-lg">
                  {/* Phone */}
                  <rect x="40" y="20" width="80" height="120" rx="12" fill="#1f2937" stroke="#374151" strokeWidth="2"/>
                  <rect x="45" y="30" width="70" height="100" rx="4" fill="#10b981"/>
                  
                  {/* Screen content - form lines */}
                  <rect x="50" y="40" width="40" height="3" rx="1" fill="white"/>
                  <rect x="50" y="50" width="60" height="3" rx="1" fill="white"/>
                  <rect x="50" y="60" width="35" height="3" rx="1" fill="white"/>
                  <rect x="50" y="75" width="50" height="3" rx="1" fill="white"/>
                  <rect x="50" y="85" width="45" height="3" rx="1" fill="white"/>
                  
                  {/* Submit button */}
                  <rect x="60" y="100" width="30" height="12" rx="6" fill="white"/>
                  
                  {/* Person silhouette */}
                  <g transform="translate(130, 40)">
                    <circle cx="15" cy="15" r="12" fill="#374151"/>
                    <path d="M5 40 Q5 30 15 30 Q25 30 25 40 L25 80 L5 80 Z" fill="#374151"/>
                  </g>
                  
                  {/* Decorative elements */}
                  <circle cx="20" cy="140" r="3" fill="#10b981" opacity="0.6"/>
                  <circle cx="170" cy="30" r="2" fill="#10b981" opacity="0.4"/>
                </svg>
              </div>
            </div>
            
            {/* Content */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <h3 className="text-2xl font-bold text-teal-900">Application</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                The borrower submits a loan application to the bank, either in 
                person, online, or through other channels. The application 
                includes personal and financial information, such as income, 
                employment history, credit score, and the purpose of the 
                loan.
              </p>
            </div>
          </div>

          {/* Step 2: Documentation and Verification */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16">
            {/* Documentation Illustration */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-80 h-64 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl p-8 flex items-center justify-center">
                <svg width="200" height="160" viewBox="0 0 200 160" className="drop-shadow-lg">
                  {/* Documents stack */}
                  <rect x="60" y="35" width="70" height="90" rx="4" fill="white" stroke="#e5e7eb" strokeWidth="2"/>
                  <rect x="65" y="30" width="70" height="90" rx="4" fill="white" stroke="#e5e7eb" strokeWidth="2"/>
                  <rect x="70" y="25" width="70" height="90" rx="4" fill="white" stroke="#d1d5db" strokeWidth="2"/>
                  
                  {/* Document lines */}
                  <rect x="75" y="40" width="40" height="2" rx="1" fill="#9ca3af"/>
                  <rect x="75" y="48" width="50" height="2" rx="1" fill="#9ca3af"/>
                  <rect x="75" y="56" width="35" height="2" rx="1" fill="#9ca3af"/>
                  <rect x="75" y="68" width="45" height="2" rx="1" fill="#9ca3af"/>
                  <rect x="75" y="76" width="55" height="2" rx="1" fill="#9ca3af"/>
                  <rect x="75" y="84" width="30" height="2" rx="1" fill="#9ca3af"/>
                  
                  {/* Checkmark */}
                  <circle cx="120" cy="95" r="8" fill="#10b981"/>
                  <path d="M116 95 L119 98 L124 91" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  
                  {/* Magnifying glass */}
                  <circle cx="40" cy="80" r="12" fill="none" stroke="#6b7280" strokeWidth="3"/>
                  <line x1="50" y1="90" x2="58" y2="98" stroke="#6b7280" strokeWidth="3" strokeLinecap="round"/>
                  
                  {/* Decorative elements */}
                  <circle cx="25" cy="140" r="3" fill="#10b981" opacity="0.6"/>
                  <circle cx="165" cy="25" r="2" fill="#10b981" opacity="0.4"/>
                </svg>
              </div>
            </div>
            
            {/* Content */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <h3 className="text-2xl font-bold text-teal-900">Documentation and Verification</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                The bank requests supporting documents from the borrower, 
                such as identification proof, income statements, bank 
                statements, and collateral details (if applicable). The bank 
                verifies the information provided to assess the borrower's 
                creditworthiness and eligibility for the loan.
              </p>
            </div>
          </div>

          {/* Step 3: Credit Assessment */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Credit Assessment Illustration */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-80 h-64 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl p-8 flex items-center justify-center">
                <svg width="200" height="160" viewBox="0 0 200 160" className="drop-shadow-lg">
                  {/* Credit card */}
                  <rect x="50" y="60" width="100" height="60" rx="8" fill="#1f2937"/>
                  <rect x="55" y="75" width="90" height="8" rx="2" fill="#6b7280"/>
                  <rect x="55" y="90" width="30" height="4" rx="2" fill="#9ca3af"/>
                  <rect x="55" y="98" width="40" height="4" rx="2" fill="#9ca3af"/>
                  
                  {/* Credit score gauge */}
                  <circle cx="100" cy="40" r="25" fill="none" stroke="#e5e7eb" strokeWidth="4"/>
                  <circle cx="100" cy="40" r="25" fill="none" stroke="#10b981" strokeWidth="4" 
                          strokeDasharray="110" strokeDashoffset="30" strokeLinecap="round" 
                          transform="rotate(-90 100 40)"/>
                  <text x="100" y="45" textAnchor="middle" className="text-sm font-bold" fill="#1f2937">750</text>
                  
                  {/* Calculator */}
                  <rect x="20" y="90" width="25" height="35" rx="3" fill="#374151"/>
                  <rect x="22" y="95" width="21" height="12" rx="1" fill="#10b981"/>
                  <circle cx="25" cy="112" r="1.5" fill="#9ca3af"/>
                  <circle cx="30" cy="112" r="1.5" fill="#9ca3af"/>
                  <circle cx="35" cy="112" r="1.5" fill="#9ca3af"/>
                  <circle cx="40" cy="112" r="1.5" fill="#9ca3af"/>
                  <circle cx="25" cy="118" r="1.5" fill="#9ca3af"/>
                  <circle cx="30" cy="118" r="1.5" fill="#9ca3af"/>
                  <circle cx="35" cy="118" r="1.5" fill="#9ca3af"/>
                  <circle cx="40" cy="118" r="1.5" fill="#10b981"/>
                  
                  {/* Chart bars */}
                  <rect x="160" y="100" width="8" height="20" rx="2" fill="#10b981"/>
                  <rect x="170" y="90" width="8" height="30" rx="2" fill="#10b981"/>
                  <rect x="180" y="80" width="8" height="40" rx="2" fill="#10b981"/>
                  
                  {/* Decorative elements */}
                  <circle cx="30" cy="25" r="2" fill="#10b981" opacity="0.6"/>
                  <circle cx="175" cy="35" r="3" fill="#10b981" opacity="0.4"/>
                </svg>
              </div>
            </div>
            
            {/* Content */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <h3 className="text-2xl font-bold text-teal-900">Credit Assessment</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                The bank conducts a credit assessment to evaluate the 
                borrower's creditworthiness and ability to repay the loan. This 
                process involves analyzing the borrower's credit history, 
                income stability, debt-to-income ratio, and other factors.
              </p>
            </div>
          </div>

          {/* Step 4: Loan Approval */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16">
            {/* Loan Approval Illustration */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-80 h-64 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl p-8 flex items-center justify-center">
                <svg width="200" height="160" viewBox="0 0 200 160" className="drop-shadow-lg">
                  {/* Document/Contract */}
                  <rect x="60" y="30" width="80" height="100" rx="6" fill="white" stroke="#e5e7eb" strokeWidth="2"/>
                  
                  {/* Document header */}
                  <rect x="70" y="45" width="40" height="3" rx="1" fill="#1f2937"/>
                  <rect x="70" y="52" width="60" height="2" rx="1" fill="#6b7280"/>
                  
                  {/* Document content lines */}
                  <rect x="70" y="65" width="50" height="2" rx="1" fill="#9ca3af"/>
                  <rect x="70" y="72" width="45" height="2" rx="1" fill="#9ca3af"/>
                  <rect x="70" y="79" width="55" height="2" rx="1" fill="#9ca3af"/>
                  <rect x="70" y="86" width="35" height="2" rx="1" fill="#9ca3af"/>
                  <rect x="70" y="93" width="40" height="2" rx="1" fill="#9ca3af"/>
                  
                  {/* Signature line */}
                  <line x1="70" y1="110" x2="120" y2="110" stroke="#d1d5db" strokeWidth="1"/>
                  <path d="M80 105 Q85 108 90 105 Q95 102 100 105" stroke="#1f2937" strokeWidth="2" fill="none"/>
                  
                  {/* Large approval checkmark */}
                  <circle cx="100" cy="80" r="20" fill="#10b981" opacity="0.9"/>
                  <path d="M90 80 L97 87 L110 70" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  
                  {/* Hands holding document */}
                  <ellipse cx="40" cy="100" rx="15" ry="8" fill="#fbbf24" opacity="0.8"/>
                  <ellipse cx="160" cy="100" rx="15" ry="8" fill="#fbbf24" opacity="0.8"/>
                  
                  {/* Money symbols */}
                  <circle cx="25" cy="50" r="8" fill="#10b981" opacity="0.7"/>
                  <text x="25" y="55" textAnchor="middle" className="text-xs font-bold" fill="white">$</text>
                  <circle cx="175" cy="45" r="6" fill="#10b981" opacity="0.5"/>
                  <text x="175" y="48" textAnchor="middle" className="text-xs font-bold" fill="white">$</text>
                  
                  {/* Decorative elements */}
                  <circle cx="35" cy="130" r="3" fill="#10b981" opacity="0.6"/>
                  <circle cx="170" cy="130" r="2" fill="#10b981" opacity="0.4"/>
                </svg>
              </div>
            </div>
            
            {/* Content */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <h3 className="text-2xl font-bold text-teal-900">Loan Approval</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                If the borrower meets the bank's lending criteria and passes 
                the credit assessment, the loan is approved. The bank 
                determines the loan amount, interest rate, repayment term, 
                and any associated fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;