import React from 'react';
import { Facebook, MessageCircle, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Hard<span className="text-green-400">Cash</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Our mission is to empower individuals and businesses by providing them with the 
                financial resources they need to achieve their goals.
              </p>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">OUR SERVICES</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Personal Loan
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Business loan
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Education loan
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Auto loan
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">CONTACT US</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-green-400 flex-shrink-0" />
                <span className="text-gray-300">+91 9515658156</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-green-400 flex-shrink-0" />
                <span className="text-gray-300">contact@thehardcash.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-green-400 flex-shrink-0 mt-1" />
                <div className="text-gray-300">
                  <div>ASR Building</div>
                  <div>Punjagutta</div>
                  <div>Hyderabad, TS - 500082</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;