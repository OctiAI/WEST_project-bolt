import React from 'react';
import { Battery } from 'lucide-react';

const ValueProp = () => {
  return (
    <section className="py-20 bg-white mt-20 sm:mb-40 sm:mt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <Battery className="w-16 h-16 text-teal-500" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-12
">
          Wake up to a <span className="underline">full battery</span> every morning!
        </h2>
      
        <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          Our <span className="underline">ESA-certified</span> pros install your charger fast, safely, and hassle-free—so you <span className="underline">never stress</span> about <span className="underline">range</span> again.
        </p>
        <button className="bg-lime-400 hover:bg-lime-500 text-gray-900 px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
          Get an Instant Quote
        </button>
      </div>
    </section>
  );
};

export default ValueProp;