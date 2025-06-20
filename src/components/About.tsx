
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
              As a senior technology analyst at Citigroup for the past seven years, Mr. Battu has led 
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
                <span>7+ years at Citigroup</span>
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

        {/* Experience & Projects Section */}
        <div className="mt-20">
          <h3 className="font-semibold text-2xl mb-8">Experience & Projects</h3>
          
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-xl mb-3">Senior Technology Analyst - Citigroup</h4>
              <p className="text-muted-foreground mb-4">March 2017 - Present</p>
              <p className="text-lg leading-relaxed">
                Leading transformative AI and ML initiatives across securities services, focusing on 
                modernizing legacy systems and implementing cutting-edge data platforms to enhance 
                operational efficiency and regulatory compliance.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-xl mb-3">BI Engineer - Infosys</h4>
              <p className="text-muted-foreground mb-4">September 2013 - July 2015</p>
              <p className="text-lg leading-relaxed">
                Developed and maintained business intelligence solutions, creating data warehouses and 
                analytical reporting systems that supported strategic decision-making processes across 
                multiple client organizations in the financial services sector.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-xl mb-3">BI Intern - Zwitch Payments</h4>
              <p className="text-muted-foreground mb-4">July 2012 - July 2013</p>
              <p className="text-lg leading-relaxed">
                Contributed to the development of business intelligence infrastructure for payment 
                processing systems, gaining foundational experience in data analytics and financial 
                technology solutions within the fintech startup environment.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-xl mb-3">Enterprise Data Platform Modernization</h4>
              <p className="text-muted-foreground mb-4">Key Project</p>
              <p className="text-lg leading-relaxed">
                Spearheaded the development of next-generation data platforms integrating AI/ML 
                capabilities for predictive analytics, risk assessment, and automated decision-making 
                processes across custody and asset servicing operations.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-xl mb-3">Financial Technology Innovation</h4>
              <p className="text-muted-foreground mb-4">Ongoing Initiative</p>
              <p className="text-lg leading-relaxed">
                Driving innovation in financial services through the implementation of advanced 
                analytics, machine learning algorithms, and AI-powered solutions that have 
                significantly improved client experiences and operational outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
