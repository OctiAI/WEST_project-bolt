import React from 'react';
import { Phone } from 'lucide-react';

const Hero = () => {
  return (
 <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 bg-black text-white">
      
      {/* Background Imaged */}

   {/* Call Button - Mobile Only */}
        <div className="block lg:hidden absolute top-4 left-0 w-full flex justify-center z-20 px-8 lg:opacity-0">
            <button className="flex justify-centSer lg:justify-start bg-lime-400 hover:bg-lime-500 text-gray-900 px-6 py-3 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2 sm:gap-3" onClick={() => window.location.href = 'tel:+18884338156'}>
              <Phone className="w-5 h-5" />
              (888) 433-8156 (7am-5pm Weekdays Only)
            </button>
        </div>

   
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url('https://static.wixstatic.com/media/nsplsh_2b6ed58658e64a2ba8bc1dd6953b67d1~mv2.jpg/v1/fill/w_1322,h_673,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/nsplsh_2b6ed58658e64a2ba8bc1dd6953b67d1~mv2.jpg')`
        }}
      />

           


      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 sm:mb-80">
         <div className="mb-0 sm:mb-28 flex justify-center">
              <img src="https://images.renovationfind.com/images/4/0/98/6844/westland-electric_logo_1621549730229.png"
          alt="Westland" className="pt-4 w-36 sm:w-48 h-auto opacity-90"              />
            </div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Main Content */}
          <div className="text-center lg:text-left">
            <h1 id="hero-pricing" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mt-10 sm:mt-0 leading-tight">
              EV Charger Installation in Calgary. From <span className="text-lime-400">$998</span>.
            </h1>
              <p id="hero-booking" className="text-base sm:text-lg md:text-xl mb-0 lg:mb-10 font-medium text-gray-200 leading-relaxed">    
                Professional Install by a Licensed Electrician. Instant Pricing, Book in {' '}
                <span className="underline">24 Seconds.</span>
              </p>

            <button className="hidden lg:flex justify-start bg-lime-400 hover:bg-lime-500 text-gray-900 px-6 py-3 rounded-lg font-semibold text-base lg:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg items-center gap-2 lg:gap-3">
              <Phone className="w-5 h-5" />
              (888) 433-8156 (7am-5pm Weekdays Only)
            </button>
          </div>

          {/* Right Side - Quote Form */}
          <div id="hero-quote" className="bg-gray-50 bg-opacity-85 backdrop-blur-sm pt-6 sm:pt-8 rounded-2xl shadow-2xl mb-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center">Get a Free Quote</h2>
            <div style={{ width: '100%', height: '352px' }}>
              <iframe
                src="https://link.greatlakesmarketingandsoftwaresolutions.com/widget/form/kD2OmZH9OUzy6bR8FV0P"
                style={{ width: '100%', height: '100%', border: 'none', borderRadius: 3 }}
                id="inline-kD2OmZH9OUzy6bR8FV0P"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Westland - Form"
                data-height="352"
                data-layout-iframe-id="inline-kD2OmZH9OUzy6bR8FV0P"
                data-form-id="kD2OmZH9OUzy6bR8FV0P"
                title="Westland - Form"
              />
            </div>
            
            {/* Trust Indicators */}
            <div id="hero-trust" className="mb-8 border-t border-gray-200">
              <p className="text-center text-sm text-gray-600 mb-4">
                Trusted by Hundreds of Calgary EV Owners
              </p>
            <div className="flex justify-center items-center space-x-5 sm:space-x-6 opacity-70 flex-wrap">
              <img
                src="https://upload.wikimedia.org/wikipedia/fr/thumb/a/a4/Google-My-Business_logo.svg/330px-Google-My-Business_logo.svg.png"
                alt="GMB"
                className="w-6 h-6 rounded"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/4494/4494710.png"
                alt="Houzz"
                className="w-6 h-6 rounded"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Better_Business_Bureau.svg/1197px-Better_Business_Bureau.svg.png"
                alt="BBB"
                className="w-6 h-6 rounded bg-white p-0.5"
              />
              <img
                src="https://images.seeklogo.com/logo-png/51/1/bbc-news-logo-png_seeklogo-519158.png"
                alt="BBC"
                className="w-6 h-6 rounded bg-white p-0.5"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
                className="w-6 h-6 rounded"
              />
            </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;