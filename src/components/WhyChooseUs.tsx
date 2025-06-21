import React from 'react';

const WhyChooseUs = () => {
  const benefits = [
    "🧰 Expert Installation: Our licensed electricians ensure a safe, compliant setup.",
    "🪪 Transparent Pricing: Starting at $999, no hidden fees, no surprises.",
    "🧮 Free Load Calculations: Canadian Electrical Code-compliant analysis included at no cost.",
    "🤝 Flexibility: Supply your own charger or let us help you choose the best one.",
    "🎖️ ESA-approved installations for guaranteed safety and reliability."
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Why 100+ Calgary Owners Chose Us
            </h2>
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-2xl">{benefit.split(' ')[0]}</span>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    {benefit.split(' ').slice(1).join(' ')}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img 
              src="https://static.wixstatic.com/media/nsplsh_62bd09b9b1614108a68e6c003caf06dd~mv2.jpg/v1/fill/w_462,h_308,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image%20by%20Zaptec.jpg"
              alt="Happy Calgary EV owner with their charger"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-lime-400 text-gray-900 p-4 rounded-lg shadow-lg">
              <p className="font-bold text-lg">Serving Calgary</p>
              <p className="text-sm"> and surrounding areas!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;