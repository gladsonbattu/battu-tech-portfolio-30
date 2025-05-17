
import React from 'react';
import { Button } from '@/components/ui/button';

interface ResearchPaper {
  title: string;
  description: string;
  link: string;
}

const Research: React.FC = () => {
  const papers: ResearchPaper[] = [
    {
      title: "AI-Powered Financial Forensics in Automating Anomaly Detection and AML Compliance",
      description: "An exploration of how artificial intelligence is revolutionizing financial crime detection and anti-money laundering compliance processes.",
      link: "#",
    },
    {
      title: "AI-Driven Data Analytics in Custody Services: Enhanced Reporting, Compliance, and Risk Management",
      description: "A comprehensive analysis of AI applications in custody services, focusing on improved reporting accuracy, regulatory compliance, and risk mitigation.",
      link: "#",
    },
  ];

  return (
    <section id="research" className="py-20 bg-white section-padding">
      <div className="container">
        <h2 className="section-title">Research & Publications</h2>
        
        <div className="space-y-8">
          {papers.map((paper, index) => (
            <div 
              key={index} 
              className="bg-blue-50 rounded-lg p-8 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">{paper.title}</h3>
              <p className="text-muted-foreground mb-6">{paper.description}</p>
              <Button asChild variant="outline" className="group">
                <a href={paper.link}>
                  View Paper
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
