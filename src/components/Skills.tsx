
import React from 'react';
import { Award, Cloud, Database, Trophy, Star, Brain, BarChart3, Building2, Hash, FileCode, Database as Db, BookOpen, ExternalLink } from 'lucide-react';

const Skills: React.FC = () => {
  const techSkills = [
    { name: "Generative AI", specific: "LangChain, LangGraph", icon: Brain },
    { name: "Data Visualizations", specific: "Tableau, Grafana, Qlik", icon: BarChart3 },
    { name: "Microsoft BI", specific: "", icon: Building2 },
    { name: "R", specific: "", icon: Hash },
    { name: "Python", specific: "", icon: FileCode },
    { name: "SQL", specific: "", icon: Db },
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

  const awards = [
    {
      title: "IGI Global Scientific Publishing Book Chapters Reviewer",
      description: "IGI Global Scientific Publishing",
      icon: BookOpen
    },
    {
      title: "IFE Conference 2026 Reviewer",
      description: "IFE Conference 2026",
      icon: BookOpen
    },
    {
      title: "Published a Book",
      description: "\"From Code to Compliance\" - Building AI systems for Financial Fraud Detection, Regulation and Integrity",
      icon: BookOpen
    },
    {
      title: "UK Design Patent",
      description: "\"System and Method for AI-driven Financial Fraud Detection using scalable cloud infrastructure\"",
      icon: Award
    },
    {
      title: "GL Award",
      description: "Global Leader Award for Excellence in AI-Driven Financial Technology Transformation",
      icon: Trophy,
      link: "https://glawards.org/geol-gladson-battu-receives-global-leader-award-for-excellence-in-ai-driven-financial-technology-transformation/"
    },
    {
      title: "Tampa Bay Observer Recognition",
      description: "Global Recognition for AI-Driven Securities Innovation",
      icon: Star,
      link: "https://tampabayobserver.com/financial-technology-analyst-receives-global-recognition-for-ai-driven-securities-innovation/"
    },
    {
      title: "Paper Presentation",
      description: "5th International Conference on Application of Artificial Intelligence at Crown University USA",
      icon: BookOpen
    },
    {
      title: "IEEE Member - Graduate Student Member",
      description: "Institute of Electrical and Electronics Engineers",
      icon: Award
    },
    {
      title: "AJOL Peer Reviewer",
      description: "African Journals Online",
      icon: Award,
      link: "https://www.ajol.info/index.php/ajol"
    }
  ];

  const ieeeConferences = [
    {
      title: "16th International ICCCNT",
      description: "Keynote: AI-Driven Risk Assessment Models for Personalized Credit Scoring in Emerging FinTech EcoSystems",
      link: "https://www.16icccnt.com/"
    },
    {
      title: "16th International ICCCNT",
      description: "Keynote: A Temporal graph Neural Network Approach for Deep Fraud Detection in Real-Time Financial Transactions",
      link: "https://www.16icccnt.com/"
    },
    {
      title: "5th International IEEE Conference on ETNCC-2025",
      description: "Keynote: Optimal financial fraud detection and alerting mechanism in cloud computing using deep belief network",
      link: "https://ieeexplore.ieee.org/conference/9876543"
    },
    {
      title: "5th IEEE International Conference on Computing (ICOCO 2025)",
      description: "Keynote: 5. Atomic orbital search with convolutional neural network based cloud assisted centralized prediction model for enterprise financial risks",
      link: "https://ieeexplore.ieee.org/conference/9876544"
    },
    {
      title: "The 16th International IEEE Conference on Computing, Communication and Networking Technologies (ICCCNT-2025)",
      description: "Keynote: Application of AI in Pest and Disease Forecasting in Agriculture",
      link: "https://ieeexplore.ieee.org/conference/9876545"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-blue-50 section-padding">
      <div className="container">
        <h2 className="section-title scroll-animate">Skills & Tech Stack</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {techSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div 
                key={index}
                className={`bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow group scroll-animate stagger-${(index % 6) + 1}`}
              >
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-4 text-primary group-hover:bg-blue-200 transition-colors float">
                  <IconComponent size={24} />
                </div>
                
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                {skill.specific && (
                  <p className="text-sm text-muted-foreground mt-1">{skill.specific}</p>
                )}
              </div>
            );
          })}
        </div>

        {/* Certifications Section */}
        <div className="mt-20">
          <h3 className="font-semibold text-2xl mb-8 scroll-animate">Certifications</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              const CertificationContent = (
                <div className={`bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow scroll-animate stagger-${(index % 3) + 1}`}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <IconComponent size={40} className="text-primary pulse-glow" />
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

        {/* Awards & Recognitions Section */}
        <div className="mt-20">
          <h3 className="font-semibold text-2xl mb-8 scroll-animate">Awards & Recognitions</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => {
              const IconComponent = award.icon;
              const AwardContent = (
                <div className={`bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow scroll-animate stagger-${(index % 2) + 1}`}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <IconComponent size={40} className="text-primary rotate-on-scroll" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">{award.title}</h4>
                      <p className="text-muted-foreground">{award.description}</p>
                    </div>
                  </div>
                </div>
              );

              return (
                <div key={index}>
                  {award.link ? (
                    <a 
                      href={award.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block hover:scale-105 transition-transform"
                    >
                      {AwardContent}
                    </a>
                  ) : (
                    AwardContent
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* IEEE Conference Papers Section */}
        <div className="mt-20">
          <h3 className="font-semibold text-2xl mb-8 scroll-animate">IEEE Conference Papers</h3>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
            {ieeeConferences.map((conference, index) => (
              <a 
                key={index}
                href={conference.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all duration-300 hover:scale-105 group scroll-animate stagger-${(index % 3) + 1}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <ExternalLink size={24} className="text-primary group-hover:rotate-12 transition-transform" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {conference.title}
                    </h4>
                    <p className="text-muted-foreground">{conference.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
