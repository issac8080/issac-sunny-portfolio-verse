
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";

type Experience = {
  id: number;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
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
  return (
    <section id="experience" className="relative bg-secondary/30 py-20">
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="heading-lg gradient-text mb-4">Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            My professional journey in the tech industry, showcasing internships and leadership roles I've taken on.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={exp.id}
              className={`bg-background/50 backdrop-blur-sm border-muted card-hover relative overflow-hidden ${
                index % 2 === 0 ? 'border-l-4 border-l-primary' : 'border-r-4 border-r-accent'
              }`}
            >
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-1">
                    <p className="text-primary font-semibold">{exp.period}</p>
                    <p className="text-sm text-foreground/70">{exp.location}</p>
                    
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <Badge variant="outline" className="mt-2 cursor-pointer">
                          Details
                        </Badge>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="space-y-2">
                          <p className="text-sm font-medium">Role highlights:</p>
                          <ul className="text-xs list-disc pl-4 space-y-1">
                            {exp.description.map((desc, i) => (
                              <li key={i}>{desc}</li>
                            ))}
                          </ul>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                  
                  <div className="lg:col-span-3">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                      <p className="text-foreground/80 mb-4 md:mb-0">{exp.company}</p>
                    </div>
                    
                    <ul className="list-disc list-inside space-y-2 mb-4 text-foreground/70">
                      {exp.description.slice(0, 1).map((item, idx) => (
                        <li key={idx} className="line-clamp-2">{item}</li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-40 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-accent/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ExperienceSection;
