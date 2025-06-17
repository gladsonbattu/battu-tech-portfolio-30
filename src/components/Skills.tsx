
import React from 'react';
import { Award, Cloud, Database } from 'lucide-react';

const Skills: React.FC = () => {
  const techSkills = [
    { name: "Generative AI", specific: "LangChain, LangGraph" },
    { name: "MCP", specific: "" },
    { name: "Vector DBs", specific: "" },
    { name: "R", specific: "" },
    { name: "Python", specific: "" },
    { name: "SQL", specific: "" },
  ];

  const certifications = [
    {
      title: "Microsoft Certified: Azure AI Engineer Associate",
      issuer: "Microsoft",
      issued: "Jun 2025",
      expires: "Jun 2026",
      credentialId: "E0103A5CB0039F43",
      icon: Award,
      link: "https://learn.microsoft.com/api/credentials/share/en-us/GeolGladsonBattu-7607/E0103A5CB0039F43?sharingId=233752A1C6C6FC5B"
    },
    {
      title: "AWS Certified AI Practitioner",
      issuer: "Amazon",
      issued: "May 2025",
      expires: "May 2028",
      credentialId: "AWS0518024",
      icon: Cloud,
      link: "https://www.credly.com/badges/63e42850-ea67-46a6-9066-9524050409fd"
    },
    {
      title: "Microsoft Certified: Azure AI Fundamentals",
      issuer: "Microsoft",
      issued: "May 2025",
      expires: null,
      credentialId: "CD72BD59DEFBF6C9",
      icon: Award,
      link: "https://learn.microsoft.com/api/credentials/share/en-us/GeolGladsonBattu-7607/CD72BD59DEFBF6C9?sharingId=233752A1C6C6FC5B"
    },
    {
      title: "Microsoft Certified SQL 2012 Querying Professional",
      issuer: "Microsoft",
      issued: "Mar 2015",
      expires: null,
      credentialId: "11761176",
      icon: Award
    },
    {
      title: "Oracle Certified Professional, Java SE 6 Programmer",
      issuer: "Oracle",
      issued: "Aug 2013",
      expires: null,
      credentialId: "OC129117G",
      icon: Database
    }
  ];

  return (
    <section id="skills" className="py-20 bg-blue-50 section-padding">
      <div className="container">
        <h2 className="section-title">Skills & Tech Stack</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {techSkills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow group"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-4 text-primary group-hover:bg-blue-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              
              <h3 className="font-semibold text-lg">{skill.name}</h3>
              {skill.specific && (
                <p className="text-sm text-muted-foreground mt-1">{skill.specific}</p>
              )}
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-20">
          <h3 className="font-semibold text-2xl mb-8">Certifications</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              const CertificationContent = (
                <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <IconComponent size={40} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">{cert.title}</h4>
                      <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>Issued {cert.issued}{cert.expires && ` • Expires ${cert.expires}`}</p>
                        <p>Credential ID: {cert.credentialId}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );

              return (
                <div key={index}>
                  {cert.link ? (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block hover:scale-105 transition-transform"
                    >
                      {CertificationContent}
                    </a>
                  ) : (
                    CertificationContent
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="font-semibold text-xl mb-6">Areas of Expertise</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex flex-col">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Financial Systems</span>
                  <span>95%</span>
                </div>
                <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">AI Implementation</span>
                  <span>90%</span>
                </div>
                <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Data Engineering</span>
                  <span>85%</span>
                </div>
                <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex flex-col">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Team Leadership</span>
                  <span>90%</span>
                </div>
                <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Strategic Planning</span>
                  <span>95%</span>
                </div>
                <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Risk Management</span>
                  <span>85%</span>
                </div>
                <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
