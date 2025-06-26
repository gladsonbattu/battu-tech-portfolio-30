import React from 'react';
import { Code, Database, Brain, Shield, Award, Star, Presentation } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "Solidity"],
      icon: Code,
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQL", "NoSQL"],
      icon: Database,
    },
    {
      title: "AI & Machine Learning",
      skills: ["TensorFlow", "Keras", "PyTorch", "NLP", "CV", "Deep Learning"],
      icon: Brain,
    },
    {
      title: "Security & Compliance",
      skills: ["AML", "KYC", "Data Security", "Risk Management", "Fraud Detection"],
      icon: Shield,
    },
  ];

  const awards = [
    {
      title: "Pinnacle Achievement Award",
      description: "Recognition for innovative contributions to AI-driven financial technology solutions",
      icon: Award,
      link: "https://www.linkedin.com/posts/battu-gowtham-22a49b238_pinnacleachievement-recognition-innovation-activity-7270836854080987136-dIHn?utm_source=share&utm_medium=member_desktop"
    },
    {
      title: "Global Recognition for AI-Driven Securities Innovation",
      description: "Global Recognition for AI-Driven Securities Innovation",
      icon: Star,
      link: "https://tampabayobserver.com/financial-technology-analyst-receives-global-recognition-for-ai-driven-securities-innovation/"
    },
    {
      title: "IEEE Member - Graduate Student Member",
      description: "Institute of Electrical and Electronics Engineers",
      icon: Award
    },
    {
      title: "IJCET Journal Peer Reviewer",
      description: "International Journal of Computer Engineering and Technology",
      icon: Award
    },
    {
      title: "Paper Presentation",
      description: "5th International Conference on Application of Artificial Intelligence held at Crown University USA",
      icon: Presentation
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white section-padding">
      <div className="container">
        <h2 className="section-title scroll-animate">Skills & Expertise</h2>
        <p className="section-description scroll-animate">
          A diverse skill set honed through academic research, professional experience, and continuous learning.
        </p>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow scroll-animate stagger-${(index % 4) + 1}`}
            >
              <category.icon className="h-6 w-6 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Awards & Recognitions */}
        <div className="mt-20">
          <h3 className="font-semibold text-2xl mb-8 scroll-animate">Awards & Recognitions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <a 
                key={index}
                href={award.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all duration-300 hover-scale cursor-pointer group scroll-animate stagger-${(index % 3) + 1}`}
              >
                <award.icon className="h-5 w-5 text-primary mb-4 group-hover:text-secondary transition-colors" />
                <h4 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                  {award.title}
                </h4>
                <p className="text-muted-foreground">
                  {award.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
