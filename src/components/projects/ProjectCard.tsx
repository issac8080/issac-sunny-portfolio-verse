
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code, Star, Trophy, Bookmark } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { Project } from "./projectData";

interface ProjectCardProps {
  project: Project;
  index: number;
  isActive: boolean;
  onHover: (id: number | null) => void;
}

const getProjectIcon = (category: string) => {
  switch (category?.toLowerCase()) {
    case "ai":
    case "machine learning":
      return <Code className="text-blue-400" />;
    case "web":
    case "website":
      return <ExternalLink className="text-green-400" />;
    case "mobile":
      return <Star className="text-yellow-400" />;
    case "iot":
      return <Trophy className="text-purple-400" />;
    default:
      return <Bookmark className="text-primary" />;
  }
};

const ProjectCard = ({ project, index, isActive, onHover }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    delay: 100 * (index % 3), // Stagger the animations by row
  });
  
  const category = project.tech[0] || "";
  
  return (
    <div 
      ref={ref} 
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
    >
      <div 
        className="relative group h-full perspective-1000"
        onMouseEnter={() => {
          onHover(project.id);
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          onHover(null);
          setIsHovered(false);
        }}
      >
        <div className={`absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 opacity-60 group-hover:opacity-100 blur transition-all duration-500 ${isHovered ? 'animate-glow' : ''}`}></div>
        <Card 
          className="project-card relative h-full bg-background/70 backdrop-blur-sm border-muted overflow-hidden group-hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/20"
        >
          <div className="absolute top-4 right-4 z-20">
            <div className="bg-background/80 backdrop-blur-sm p-1.5 rounded-full border border-white/10">
              {getProjectIcon(category)}
            </div>
          </div>
          
          <div className="relative">
            <div
              className="h-48 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
              style={{ 
                backgroundImage: `url(${project.image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-70"></div>
          </div>
          
          <div className="p-6 pt-5">
            <h3 className="text-lg font-bold mb-2 gradient-text line-clamp-1">{project.title}</h3>
            <p className="text-foreground/70 text-sm mb-4 line-clamp-3">{project.description}</p>
            
            <div className="space-y-4">
              <div className="flex flex-wrap gap-1.5 mb-4 max-h-16 overflow-hidden">
                {project.tech.map((tech) => (
                  <span 
                    key={tech} 
                    className="tech-pill text-xs px-2 py-0.5 bg-secondary/50 hover:bg-primary/30 transition-all duration-300"
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
                    size="sm"
                    className="rounded-full hover:bg-primary/20 transition-all duration-300"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1.5 h-3.5 w-3.5" /> Code
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button 
                    asChild 
                    variant="outline"
                    size="sm" 
                    className="rounded-full hover:bg-accent/20 transition-all duration-300"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1.5 h-3.5 w-3.5" /> Live Demo
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
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300 shadow-lg"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent/20 transition-all duration-300 shadow-lg"
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
    </div>
  );
};

export default ProjectCard;
