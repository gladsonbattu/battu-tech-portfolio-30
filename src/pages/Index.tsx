
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
      // Enhanced scroll-triggered animations
      const scrollElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale');
      
      scrollElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });

      // Legacy fade-in support
      const fadeElements = document.querySelectorAll('.fade-in');
      fadeElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });

      // Enhanced spotlight effect
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

      // Parallax effect for hero section
      const heroSection = document.querySelector('#home') as HTMLElement;
      if (heroSection) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        heroSection.style.transform = `translateY(${rate}px)`;
      }

      // Rotate elements on scroll
      const rotateElements = document.querySelectorAll('.rotate-on-scroll');
      rotateElements.forEach((element) => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.1;
        (element as HTMLElement).style.transform = `rotate(${rate}deg)`;
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
      
      <div className="scroll-animate">
        <About />
      </div>
      
      <div className="scroll-animate-left">
        <Skills />
      </div>
      
      <div className="scroll-animate-right">
        <Research />
      </div>
      
      <div className="scroll-animate-scale">
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
