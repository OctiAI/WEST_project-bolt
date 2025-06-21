import React from 'react';
import { Phone } from 'lucide-react';

const Hero = () => {
  return (
 <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 bg-black text-white">
      
      {/* Background Imaged */}

   {/* Call Button - Mobile Only */}
        <div className="block lg:hidden absolute top-4 left-0 w-full flex justify-center z-20 px-8 lg:opacity-0">
            <button className="flex justify-center lg:justify-start bg-lime-400 hover:bg-lime-500 text-gray-900 px-6 py-3 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2 sm:gap-3">
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
              <img src="https://westland-electrics.com/WL_logo.png"
          alt="Westland" className="pt-4 w-36 sm:w-48 h-auto opacity-90"              />
            </div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Main Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mt-10 sm:mt-0 leading-tight">
              EV Charger Installation in Calgary. From <span className="text-lime-400">$998</span>.
            </h1>
              <p className="text-base sm:text-lg md:text-xl mb-0 lg:mb-10 font-medium text-gray-200 leading-relaxed">    
                Professional Install by a Licensed Electrician. Instant Pricing, Book in {' '}
                <span className="underline">24 Seconds.</span>
              </p>

            <button className="hidden lg:flex justify-start bg-lime-400 hover:bg-lime-500 text-gray-900 px-6 py-3 rounded-lg font-semibold text-base lg:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg items-center gap-2 lg:gap-3">
              <Phone className="w-5 h-5" />
              (888) 433-8156 (7am-5pm Weekdays Only)
            </button>
          </div>

          {/* Right Side - Quote Form */}
          <div className="bg-gray-50 bg-opacity-85 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-2xl mb-8 ">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Get a Free Quote</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                  placeholder="(403) 555-0123"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-800 hover:bg-blue-900 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get Instant Quote
              </button>
            </form>
            
            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-gray-200">
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