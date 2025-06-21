import React from 'react';
import { CheckCircle, FileText, Handshake, Gem } from 'lucide-react';

const Credentials = () => {
  const credentials = [
    {
      icon: CheckCircle,
      title: "ESA-Certified Installation",
      description: "Performed by licensed electricians."
    },
    {
      icon: FileText,
      title: "Materials & Permits",
      description: "Includes breakers, cables, and ESA inspection."
    },
    {
      icon: Handshake,
      title: "Free Consultation",
      description: "Full load calculation to ensure compliance and avoid costly upgrades."
    },
    {
      icon: Gem,
      title: "Custom Solutions",
      description: "We accommodate unique setups and panel upgrades for maximum efficiency"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://static.wixstatic.com/media/nsplsh_90eefd15876f488a936b67f870dcd4d4~mv2.jpg/v1/fill/w_462,h_308,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image%20by%20Priscilla%20Du%20Preez%20%F0%9F%87%A8%F0%9F%87%A6.jpg"
              alt="Professional EV charger installation"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Install by a Licensed Electrician
            </h2>
            <div className="space-y-6">
              {credentials.map((credential, index) => {
                const IconComponent = credential.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-teal-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {credential.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {credential.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="mt-8 bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Contact Paul at Westland
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;