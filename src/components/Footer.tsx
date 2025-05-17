
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">G</span>eol
              <span className="text-primary">.</span>
            </h3>
            <p className="text-white/70">
              Leading fintech transformation through AI, ML, and data innovation.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/70 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About</a></li>
              <li><a href="#skills" className="text-white/70 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#research" className="text-white/70 hover:text-white transition-colors">Research</a></li>
              <li><a href="#blog" className="text-white/70 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect</h4>
            <p className="text-white/70 mb-2">geolgladson@gmail.com</p>
            
            <div className="flex gap-4 mt-4">
              <a 
                href="mailto:geolgladson@gmail.com" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6">
          <p className="text-white/70 text-center">
            &copy; {currentYear} Geol Gladson Battu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
