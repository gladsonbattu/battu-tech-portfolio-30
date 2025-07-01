
import React from 'react';
import { Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white section-padding">
      <div className="container">
        <h2 className="section-title scroll-animate">Get in Touch</h2>
        
        <div className="max-w-md mx-auto">
          <div className="scroll-animate stagger-1">
            <h3 className="text-xl font-semibold mb-4 text-center">Contact Information</h3>
            <p className="text-muted-foreground mb-6 text-center">
              Feel free to reach out with questions, opportunities, or just to connect.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 scroll-animate stagger-2 justify-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary pulse-glow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <a href="mailto:geolgladson@gmail.com" className="text-foreground hover:text-primary">
                  geolgladson@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-3 scroll-animate stagger-3 justify-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary pulse-glow">
                  <Linkedin size={18} />
                </div>
                <a href="https://www.linkedin.com/in/geolgladsonbattu/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
