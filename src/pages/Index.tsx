
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Research from '@/components/Research';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.fade-in');
      
      scrollElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });

      // Add spotlight effect to elements in viewport
      const spotlightElements = document.querySelectorAll('.hover-scale');
      spotlightElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          element.classList.add('spotlight');
        } else {
          element.classList.remove('spotlight');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check elements on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <Hero />
      
      <div className="fade-in">
        <About />
      </div>
      
      <div className="fade-in">
        <Skills />
      </div>
      
      <div className="fade-in">
        <Research />
      </div>
      
      <div className="fade-in">
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
