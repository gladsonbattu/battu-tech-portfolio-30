
import React from 'react';
import { Button } from '@/components/ui/button';

interface ResearchPaper {
  title: string;
  description: string;
}

interface Award {
  title: string;
  organization: string;
}

const Research: React.FC = () => {
  const papers: ResearchPaper[] = [
    {
      title: "Money Laundering Prediction Model using Multivariate Time Series Forecasting using dynamic graph neural ODEs",
      description: "A novel approach combining multivariate time series forecasting with dynamic graph neural ordinary differential equations to predict and detect money laundering patterns in financial transactions.",
    },
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
    {
      title: "Integrating Cash Equity Trading with Pre-Trade Financing: A Unified Framework for Cost Optimization and T+0 Atomic Settlement",
      description: "A novel framework that integrates cash equity trading mechanisms with pre-trade financing solutions to achieve cost optimization and enable T+0 atomic settlement processes.",
    },
    {
      title: "SAFRA-NLP: Sentiment-Aware Fraud Detection in Capital Markets Using Deep NLP on Financial News and Investor Communications",
      description: "An advanced natural language processing approach that combines sentiment analysis with fraud detection techniques to identify suspicious activities in capital markets through analysis of financial news and investor communications.",
    },
    {
      title: "Enhancing Suspicious Activity reporting with Generative AI: Accuracy, Efficiency and Compliance",
      description: "A comprehensive study on leveraging generative artificial intelligence to improve suspicious activity reporting processes, focusing on enhanced accuracy, operational efficiency, and regulatory compliance in financial institutions.",
    },
    {
      title: "Responsible AI in Financial Services: Balancing Innovation, Regulation and Financial Inclusion in U.S.",
      description: "An in-depth analysis of implementing responsible AI practices in financial services, examining the delicate balance between technological innovation, regulatory compliance, and promoting financial inclusion across diverse populations in the United States.",
    },
  ];

  const recommendations = [
    { title: "Enhance SAR with AI", author: "Vikas Konanki, SVP, Citigroup" },
    { title: "AI-Powered AML Compliance", author: "Sarath Pula, VP, Citigroup" },
    { title: "Regulatory Reporting-AUC-SEC 10K", author: "Vijay Nakka, VP, Citigroup" },
    { title: "Money Laundering Prediction Model", author: "Pramod Kotla, VP, Citigroup" },
    { title: "Settlement Optimization", author: "Wayman Trent, VP, Citigroup" },
    { title: "Legacy System Modernization", author: "Brian Bender, SVP, Citigroup" }
  ];

  return (
    <section id="research" className="py-20 bg-white section-padding">
      <div className="container">
        <h2 className="section-title scroll-animate">Research Publications</h2>
        
        <div className="mb-8 text-center scroll-animate">
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
              className={`bg-blue-50 rounded-lg p-8 hover:shadow-md transition-shadow scroll-animate stagger-${(index % 6) + 1}`}
            >
              <h3 className="text-xl font-semibold mb-3">{paper.title}</h3>
              <p className="text-muted-foreground">{paper.description}</p>
            </div>
          ))}
        </div>

        {/* Recommendations Section */}
        <div className="mt-20">
          <h3 className="font-semibold text-2xl mb-8 scroll-animate">Recommendations</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map((recommendation, index) => (
              <div 
                key={index}
                className={`bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all duration-300 hover-scale cursor-pointer group scroll-animate stagger-${(index % 3) + 1}`}
              >
                <h4 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                  {recommendation.title}
                </h4>
                <p className="text-muted-foreground">
                  — {recommendation.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
