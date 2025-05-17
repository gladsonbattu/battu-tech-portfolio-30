
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white section-padding">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-[2fr_1fr] gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              With over a decade of experience in financial technology innovation, Geol Gladson Battu 
              stands at the forefront of integrating artificial intelligence (AI), machine learning (ML), 
              and predictive analytics into the financial services sector. His expertise in building 
              enterprise-scale data platforms has revolutionized how securities services operate—enhancing 
              operational efficiency, boosting regulatory compliance, and elevating client experiences.
            </p>
            
            <p className="text-lg leading-relaxed">
              As a senior technology leader at Citigroup for the past eight years, Mr. Battu has led 
              transformative projects aimed at modernizing legacy infrastructures. His strategic leadership 
              has optimized custody services, asset servicing, settlement processes, and risk operations, 
              mitigating systemic risks and driving next-generation efficiencies.
            </p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-xl mb-4">Professional Summary</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>10+ years in financial technology</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>8 years at Citigroup</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Enterprise-scale data platforms</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>AI/ML implementation specialist</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Fintech transformation leader</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
