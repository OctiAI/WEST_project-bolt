import React from 'react';
import { Calendar, Wrench, Zap } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: "1️⃣",
      icon: Calendar,
      title: "Book Your Consultation",
      description: "Quick 15-minute call to assess your needs and provide instant pricing"
    },
    {
      number: "2️⃣", 
      icon: Wrench,
      title: "Prepare Your Charger",
      description: "We handle permits, inspections, and all electrical preparations"
    },
    {
      number: "3️⃣",
      icon: Zap,
      title: "Installation Day",
      description: "Professional installation completed in 2-4 hours, tested and ready to use"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            We Handle Everything For You
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-10 h-10 text-teal-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button className="bg-lime-400 hover:bg-lime-500 text-gray-900 px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
             onClick={() => {
    const el = document.getElementById('hero-pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // fallback: update URL hash
      window.location.hash = 'hero-pricing';
    }
  }}
            >
            Book My Consultation
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Your EV charging setup is just a click away.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;