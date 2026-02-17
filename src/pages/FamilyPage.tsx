import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Services from '../components/sections/Services';
import About from '../components/sections/About';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

const FamilyPage: React.FC = () => {
  const handleBackClick = () => {
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="min-h-screen">
      <Header
        showBackButton
        onBackClick={handleBackClick}
        backLabel="Volver a opciones"
      />
      <main>
        <Hero />
        <Features />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default FamilyPage;