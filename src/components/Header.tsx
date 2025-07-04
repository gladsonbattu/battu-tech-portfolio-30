
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-foreground">
          My Portfolio
        </a>

        <nav className="hidden md:block">
          <ul className="flex gap-8">
            <li><a href="#home" className="text-foreground hover:text-primary font-medium transition-colors">Home</a></li>
            <li><a href="#about" className="text-foreground hover:text-primary font-medium transition-colors">About</a></li>
            <li><a href="#skills" className="text-foreground hover:text-primary font-medium transition-colors">Skills</a></li>
            <li><a href="#research" className="text-foreground hover:text-primary font-medium transition-colors">Research</a></li>
            <li><a href="#contact" className="text-foreground hover:text-primary font-medium transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
