
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { Project } from "./projectData";

interface ProjectCardProps {
  project: Project;
  index: number;
  isActive: boolean;
  onHover: (id: number | null) => void;
}

const ProjectCard = ({ project, index, isActive, onHover }: ProjectCardProps) => {
  const isEven = index % 2 === 0;
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    delay: 100 * index,
  });
  
  return (
    <div 
      ref={ref} 
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
    >
      <div 
        className={`relative group h-full ${isEven ? "lg:ml-8" : "lg:mr-8"}`}
        onMouseEnter={() => onHover(project.id)}
        onMouseLeave={() => onHover(null)}
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
            {isActive && (
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
};

export default ProjectCard;
