
import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { useInView } from "react-intersection-observer";

type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Behavioral-Based Insider Threat Detection System",
    description: "A system to monitor user activity and detect anomalies indicating potential insider threats using behavior profiling and pattern deviation analysis.",
    tech: ["Python", "Machine Learning", "Behavior Analytics", "Security"],
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop",
    githubUrl: "https://github.com/issac8080",
  },
  {
    id: 2,
    title: "Account Income and Expense Tracker",
    description: "A financial management app with features for tracking income, categorizing expenses, and generating reports to improve budgeting efficiency.",
    tech: ["Express.js", "Pug", "MySQL", "Financial APIs"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop",
    githubUrl: "https://github.com/issac8080",
  },
  {
    id: 3,
    title: "Resume Builder using JSON",
    description: "A resume builder that accepts JSON data to dynamically generate a PDF resume with customizable templates and styling options.",
    tech: ["React", "Node.js", "PDF Generation", "JSON"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop",
    githubUrl: "https://github.com/issac8080",
  },
  {
    id: 4,
    title: "Lumos - Professional Networking App",
    description: "A networking app for students using Flutter for the front-end and blockchain technology for issuing certificates as NFTs.",
    tech: ["Flutter", "Blockchain", "NFTs", "Smart Contracts"],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop",
    githubUrl: "https://github.com/issac8080",
  },
  {
    id: 5,
    title: "IoT Automatic Headlight Dimmer",
    description: "An automotive solution using Arduino and LDR sensor for automatic headlight dimming to improve road safety and driver comfort.",
    tech: ["Arduino", "IoT", "Sensors", "Embedded Systems"],
    image: "https://images.unsplash.com/photo-1601277160615-bb8b95fc0aae?q=80&w=1932&auto=format&fit=crop",
    githubUrl: "https://github.com/issac8080",
  },
];

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const showMoreProjects = () => {
    setVisibleProjects(Math.min(visibleProjects + 3, projects.length));
  };

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      <div className="container-custom relative z-10">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="heading-lg gradient-text mb-4">Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            A showcase of my technical projects, demonstrating my skills in various technologies and problem-solving approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.slice(0, visibleProjects).map((project, index) => {
            const isEven = index % 2 === 0;
            const { ref, inView } = useInView({
              threshold: 0.1,
              triggerOnce: true,
              delay: 100 * index,
            });
            
            return (
              <div 
                key={project.id}
                ref={ref} 
                className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
              >
                <div 
                  className={`relative group h-full ${isEven ? "lg:ml-8" : "lg:mr-8"}`}
                  onMouseEnter={() => setActiveProject(project.id)}
                  onMouseLeave={() => setActiveProject(null)}
                >
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 opacity-60 group-hover:opacity-100 blur transition-all duration-500"></div>
                  <Card 
                    className="project-card relative h-full bg-background/70 backdrop-blur-sm border-muted overflow-hidden group-hover:border-primary/50 transition-all duration-500"
                  >
                    <div className="relative">
                      <div
                        className="h-64 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url(${project.image})` }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-70"></div>
                    </div>
                    
                    <div className="p-8 pt-6">
                      <h3 className="text-xl font-bold mb-3 gradient-text">{project.title}</h3>
                      <p className="text-foreground/70 text-sm mb-6 line-clamp-3">{project.description}</p>
                      
                      <div className="space-y-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech) => (
                            <span 
                              key={tech} 
                              className="tech-pill bg-secondary/50 hover:bg-primary/30 transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex justify-between items-center">
                          {project.githubUrl && (
                            <Button 
                              asChild 
                              variant="outline" 
                              className="rounded-full hover:bg-primary/20 transition-all duration-300"
                            >
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" /> Code
                              </a>
                            </Button>
                          )}
                          {project.liveUrl && (
                            <Button 
                              asChild 
                              variant="outline" 
                              className="rounded-full hover:bg-accent/20 transition-all duration-300"
                            >
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute top-6 right-6 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 transform group-hover:translate-y-0 -translate-y-2">
                      {project.id === activeProject && (
                        <div className="flex space-x-2">
                          {project.githubUrl && (
                            <a 
                              href={project.githubUrl}
                              className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300"
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              <Github className="h-5 w-5" />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a 
                              href={project.liveUrl}
                              className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent/20 transition-all duration-300"
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </Card>
                </div>
                
                {/* Decorative elements */}
                <div className={`hidden lg:block absolute ${isEven ? "-left-2" : "-right-2"} top-1/2 w-4 h-4 bg-primary/30 rounded-full blur-sm animate-pulse-slow`}></div>
                <div className={`hidden lg:block absolute ${isEven ? "-left-6" : "-right-6"} top-1/4 w-2 h-2 bg-accent/50 rounded-full blur-sm animate-float`}></div>
              </div>
            );
          })}
        </div>

        {visibleProjects < projects.length && (
          <div className="mt-16 text-center">
            <Button 
              onClick={showMoreProjects} 
              variant="outline" 
              size="lg"
              className="rounded-full bg-secondary/50 hover:bg-primary/30 transition-all duration-300 animate-pulse-slow"
            >
              Load More Projects
            </Button>
          </div>
        )}
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-40 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-accent/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ProjectsSection;
