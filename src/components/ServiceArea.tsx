import React from 'react';
import { MapPin } from 'lucide-react';

const ServiceArea = () => {
  const neighborhoods = [
    "Downtown", "Kensington", "Hillhurst", "Mission", "Inglewood", "Kingsmere",
    "Brentwood", "Tuscany", "Evanston", "Sage Hill", "Cranston", "Auburn Bay"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <MapPin className="w-8 h-8 text-teal-500 mr-3" />
              <h2 className="text-3xl sm:text-2xl font-bold text-gray-900">
                If you're in Calgary, we're ready to serve you.
              </h2>
            </div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              From the city center to suburban neighborhoods, we make home charging accessible and hassle-free.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {neighborhoods.map((neighborhood, index) => (
                <div key={index} className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 text-center">
                  <span className="text-sm font-medium text-gray-700">{neighborhood}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-800 to-teal-500 rounded-2xl p-8 text-white shadow-2xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Calgary Service Area</h3>
                <div className="w-full h-64 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-lime-400" />
                    <p className="text-lg font-medium">Calgary & Surrounding Areas</p>
                    <p className="text-sm opacity-90">Professional EV installation services</p>
                  </div>
                </div>
                <button className="bg-lime-400 hover:bg-lime-500 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  Check Service Availability
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;