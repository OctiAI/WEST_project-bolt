import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-lime-400">Westland Electric</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Calgary's trusted EV charger installation specialists. Licensed, insured, and committed to excellence.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>ESA Certified</span>
              <span>•</span>
              <span>Licensed Electricians</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-teal-400" />
                <span className="text-gray-300">(888) 433-8156</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-teal-400" />
                <span className="text-gray-300">office@westland-electric.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-teal-400" />
                <span className="text-gray-300">Calgary, Alberta</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-teal-400" />
                <span className="text-gray-300">7am-5pm Weekdays</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• EV Charger Installation</li>
              <li>• Electrical Panel Upgrades</li>
              <li>• Permit & Inspection Handling</li>
              <li>• Warranty & Maintenance</li>
              <li>• Emergency Electrical Services</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-lime-400 transition-colors">Get Quote</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Book Consultation</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Customer Reviews</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Service Areas</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Westland Electric. All rights reserved. Licensed electrical contractor serving Calgary and surrounding areas.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;