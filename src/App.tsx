import React from 'react';
import Hero from './components/Hero';
import ValueProp from './components/ValueProp';
import WhyChooseUs from './components/WhyChooseUs';
import Credentials from './components/Credentials';
import Reviews from './components/Reviews';
import Process from './components/Process';
import ServiceArea from './components/ServiceArea';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ValueProp />
      <WhyChooseUs />
      <Credentials />
      <Reviews />
      <Process />
      <ServiceArea />
      <Footer />
    </div>
  );
}

export default App;