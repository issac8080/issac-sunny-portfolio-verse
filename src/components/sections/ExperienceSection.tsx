
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Briefcase, ChevronDown, Calendar, MapPin, ExternalLink, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";

type Experience = {
  id: number;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
  logo?: string;
};

const experiences: Experience[] = [
  {
    id: 1,
    company: "PKJ INTERNATIONAL LLC",
    position: "Technical Sourcing Intern",
    period: "Jan 2025 - Mar 2025",
    location: "Kinfra park, Koratty",
    description: [
      "Led technical sourcing initiatives to identify and evaluate potential technology solutions and vendors.",
      "Collaborated with cross-functional teams to determine technical requirements and specifications.",
    ],
    technologies: ["Technical Sourcing", "Vendor Evaluation", "Requirements Analysis"],
  },
  {
    id: 2,
    company: "WHITE MATRIX Software solutions",
    position: "AI Engineering Intern",
    period: "Mar 2024 - Mar 2025",
    location: "India",
    description: [
      "Applied growing expertise in artificial intelligence to solve complex problems and develop innovative solutions.",
      "Contributed to frontend development in AI projects using React, achieving reduction in load times.",
      "Created responsive, user-friendly web pages, increasing user engagement.",
    ],
    technologies: ["AI", "React", "Frontend Development", "Machine Learning"],
  },
  {
    id: 3,
    company: "ZIUKE INFOTECH",
    position: "Website Design and Development Intern",
    period: "Jul 2024 - Jan 2025",
    location: "Thrissur, Kerala, India",
    description: [
      "Developed a web application to manage and track expenses and income, improving budgeting efficiency.",
      "Enhanced data organization for users, leading to a faster data retrieval rate.",
      "Designed and implemented user interfaces for web applications focused on optimal user experience.",
    ],
    technologies: ["Express", "Pug", "MySQL", "Web Design"],
  },
  {
    id: 4,
    company: "SnagPro Inspector",
    position: "Website Designer",
    period: "Sep 2024 - Oct 2024",
    location: "Renfrewshire, Scotland, United Kingdom (Remote)",
    description: [
      "Created responsive website designs optimized for various devices and screen sizes.",
      "Implemented modern UI/UX principles to enhance user engagement and satisfaction.",
    ],
    technologies: ["Web Design", "UI/UX", "Responsive Design"],
  },
  {
    id: 5,
    company: "CodSoft",
    position: "Machine Learning Intern",
    period: "Jun 2024 - Jul 2024",
    location: "India",
    description: [
      "Applied machine learning algorithms to solve real-world problems and improve data-driven decision making.",
      "Developed and implemented machine learning models for data analysis and prediction.",
    ],
    technologies: ["Machine Learning", "Python", "Data Analysis", "AI"],
  },
  {
    id: 6,
    company: "IEEE Computer Society",
    position: "Chair",
    period: "Mar 2023 - Mar 2024",
    location: "Irinjalakuda, Kerala, India",
    description: [
      "Led a thriving community of technology enthusiasts, fostering innovation and professional growth.",
      "Organized impactful events and collaborated with industry professionals to create a supportive environment for knowledge sharing.",
      "Drove strategic direction of the organization and empowered members to excel in computer science.",
    ],
    technologies: ["Leadership", "Event Management", "Community Building", "Strategic Planning"],
  },
  {
    id: 7,
    company: "ICT Academy of Kerala",
    position: "Full Stack (MERN) Summer Intern",
    period: "May 2023 - Jun 2023",
    location: "Kerala, India",
    description: [
      "Developed full-stack applications using MongoDB, Express, React, and Node.js, enhancing application response time.",
      "Gained expertise in building dynamic web applications with the MERN stack.",
    ],
    technologies: ["MongoDB", "Express", "React", "Node.js", "Full Stack Development"],
  },
];

const ExperienceSection = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const showMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, experiences.length));
  };

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="container-custom relative z-10">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <div className="h-0.5 w-6 bg-primary"></div>
            <h2 className="text-sm font-medium uppercase tracking-wider text-primary">Career Path</h2>
            <div className="h-0.5 w-6 bg-primary"></div>
          </div>
          <h2 className="heading-lg gradient-text mb-4 flex items-center justify-center gap-2">
            <Briefcase className="h-6 w-6 text-primary" />
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary/40 via-primary to-accent/40 mx-auto mb-6 rounded-full animate-pulse-slow"></div>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            My professional journey in the tech industry, showcasing internships and leadership roles that have shaped my expertise.
          </p>
        </div>

        {/* Timeline style experience layout */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/10 via-primary/50 to-primary/10 rounded-full hidden md:block"></div>
          
          {experiences.slice(0, visibleCount).map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`mb-8 flex flex-col md:flex-row items-start relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-0 w-4 h-4 rounded-full bg-primary hidden md:block z-10">
                <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></div>
              </div>
              
              {/* Card */}
              <div className={`w-full md:w-[calc(50%-20px)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <Card 
                  className={`bg-background/50 backdrop-blur-sm border-muted card-hover relative overflow-hidden group transition-all duration-300 ${
                    expandedId === exp.id ? 'shadow-lg shadow-primary/10' : ''
                  } ${
                    index % 2 === 0 ? 'border-r-4 border-r-primary' : 'border-l-4 border-l-accent'
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{exp.position}</h3>
                        <p className="text-foreground/80">{exp.company}</p>
                      </div>
                      <Badge variant="outline" className="text-xs animate-pulse-slow">
                        {exp.period.split(' - ')[0]}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center text-sm text-foreground/60 mb-4">
                      <Calendar className="h-3.5 w-3.5 mr-1.5" />
                      <span className="mr-4">{exp.period}</span>
                      <MapPin className="h-3.5 w-3.5 mr-1.5" />
                      <span>{exp.location}</span>
                    </div>
                    
                    <div className={`transition-all duration-500 overflow-hidden ${
                      expandedId === exp.id ? 'max-h-96' : 'max-h-12'
                    }`}>
                      <ul className="list-disc list-inside space-y-2 mb-4 text-foreground/70">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className={expandedId !== exp.id && idx > 0 ? 'hidden' : ''}>
                            {item}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2 mt-3">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="tech-pill text-xs group-hover:bg-primary/10">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="mt-4 w-full flex items-center justify-center text-primary/80 hover:text-primary hover:bg-primary/5"
                      onClick={() => toggleExpand(exp.id)}
                    >
                      <span>{expandedId === exp.id ? 'Show Less' : 'Show More'}</span>
                      <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${
                        expandedId === exp.id ? 'rotate-180' : ''
                      }`} />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
        
        {visibleCount < experiences.length && (
          <div className="text-center mt-10">
            <Button 
              onClick={showMore}
              variant="outline"
              size="lg"
              className="rounded-full bg-secondary/50 hover:bg-primary/20 border-primary/30 transition-all duration-300"
            >
              <span className="mr-2">View More Experiences</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
      
      {/* Enhanced background decorative elements */}
      <div className="absolute top-40 left-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-float"></div>
    </section>
  );
};

export default ExperienceSection;
