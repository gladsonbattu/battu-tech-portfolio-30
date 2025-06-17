
import React from 'react';
import { Button } from '@/components/ui/button';

interface ResearchPaper {
  title: string;
  description: string;
}

const Research: React.FC = () => {
  const papers: ResearchPaper[] = [
    {
      title: "AI-Powered Financial Forensics in Automating Anomaly Detection and AML Compliance",
      description: "An exploration of how artificial intelligence is revolutionizing financial crime detection and anti-money laundering compliance processes.",
    },
    {
      title: "AI-Driven Data Analytics in Custody Services: Enhanced Reporting, Compliance, and Risk Management",
      description: "A comprehensive analysis of AI applications in custody services, focusing on improved reporting accuracy, regulatory compliance, and risk mitigation.",
    },
    {
      title: "Automated Interpretation of Financial Regulations Using NLP: A Compliance-Centric Analysis of Legal Texts and Policy Adherence Frameworks",
      description: "A detailed study on leveraging natural language processing techniques to automate the interpretation of complex financial regulations and enhance compliance frameworks.",
    },
    {
      title: "Optimized Quantum Neural Networks for Anomaly Detection in Securities Transactions",
      description: "Research exploring the application of quantum computing principles in neural network architectures for enhanced anomaly detection in financial transaction processing.",
    },
    {
      title: "An AI-Driven Analytical Framework for Settlement Optimization in Real-time Securities Services Markets",
      description: "A comprehensive framework leveraging artificial intelligence to optimize settlement processes and enhance efficiency in real-time securities trading environments.",
    },
  ];

  return (
    <section id="research" className="py-20 bg-white section-padding">
      <div className="container">
        <h2 className="section-title">Research & Publications</h2>
        
        <div className="mb-8 text-center">
          <Button asChild variant="outline" className="group">
            <a href="https://orcid.org/0009-0006-7343-5533" target="_blank" rel="noopener noreferrer">
              Research ORCID Profile
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
        
        <div className="space-y-8">
          {papers.map((paper, index) => (
            <div 
              key={index} 
              className="bg-blue-50 rounded-lg p-8 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">{paper.title}</h3>
              <p className="text-muted-foreground">{paper.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
