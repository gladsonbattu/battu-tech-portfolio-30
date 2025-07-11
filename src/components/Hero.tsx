
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white section-padding pt-24">
      <div className={`container max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <div className="flex justify-center mb-8">
          <Avatar className="h-72 w-72 border-4 border-primary/20 shadow-lg">
            <AvatarImage src="/lovable-uploads/e75141c9-3c32-4461-b581-ced5f7f3a442.png" alt="Geol Gladson Battu" />
            <AvatarFallback className="text-2xl">GB</AvatarFallback>
          </Avatar>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Geol Gladson Battu
        </h1>
        
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
          Assistant Vice President
        </h2>
        
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-primary">Leading Fintech Transformation through AI, ML, and Data Innovation.</p>
        
        <div className="flex gap-4 justify-center">
          <Button asChild className="rounded-full px-8 py-6">
            <a href="#contact">Get in Touch</a>
          </Button>
          
          <Button asChild variant="outline" className="rounded-full px-8 py-6">
            <a href="#about">Learn More</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
