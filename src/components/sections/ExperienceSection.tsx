
import { Card, CardContent } from "@/components/ui/card";

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
    company: "Zuike Infotech",
    position: "Website Design and Development Intern",
    period: "July 2024 - Nov 2024",
    location: "Thrissur",
    description: [
      "Developed a web application to manage and track expenses and income, improving budgeting efficiency.",
      "Enhanced data organization for users, leading to a faster data retrieval rate.",
    ],
    technologies: ["Express", "Pug", "MySQL"],
  },
  {
    id: 2,
    company: "White Matrix Solutions",
    position: "AI Engineering Intern",
    period: "Mar 2024 - Jan 2025",
    location: "Thrissur",
    description: [
      "Contributed to frontend development in an AI project using React, achieving reduction in load times.",
      "Created responsive, user-friendly web pages, increasing user engagement.",
    ],
    technologies: ["React", "AI", "Frontend Development"],
  },
  {
    id: 3,
    company: "ICT Academy of Kerala",
    position: "Full Stack (MERN) Summer Intern",
    period: "May 2023 - Jun 2023",
    location: "Kochi",
    description: [
      "Developed full-stack applications with MongoDB, Express, React, and Node.js, enhancing application response time.",
    ],
    technologies: ["MongoDB", "Express", "React", "Node.js"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative bg-secondary/30">
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="heading-lg gradient-text mb-4">Experience</h2>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            My professional journey in the tech industry, showcasing internships and projects I've worked on.
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
                  </div>
                  
                  <div className="lg:col-span-3">
                    <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                    <p className="text-foreground/80 mb-4">{exp.company}</p>
                    
                    <ul className="list-disc list-inside space-y-2 mb-4 text-foreground/70">
                      {exp.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
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
    </section>
  );
};

export default ExperienceSection;
