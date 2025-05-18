
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/components/projects/projectData";
import { ChevronDown, Sparkles } from "lucide-react";

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const showMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 4, projects.length));
  };

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      <div className="container-custom relative z-10">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="heading-lg gradient-text mb-4 flex items-center justify-center gap-2">
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
            Projects
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary/40 via-primary to-accent/40 mx-auto mb-6 rounded-full animate-pulse-slow"></div>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            A showcase of my technical projects, demonstrating my skills in various technologies and problem-solving approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              isActive={project.id === activeProject}
              onHover={setActiveProject}
            />
          ))}
        </div>

        {visibleProjects < projects.length && (
          <div className="mt-16 text-center">
            <Button 
              onClick={showMoreProjects} 
              variant="outline" 
              size="lg"
              className="rounded-full bg-secondary/50 hover:bg-primary/30 border-primary/30 transition-all duration-300 group"
            >
              <span className="mr-2">Load More Projects</span> 
              <ChevronDown className="h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
            </Button>
          </div>
        )}
      </div>
      
      {/* Enhanced background decorative elements */}
      <div className="absolute top-40 left-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-accent/5 rounded-full blur-2xl animate-float"></div>
    </section>
  );
};

export default ProjectsSection;
