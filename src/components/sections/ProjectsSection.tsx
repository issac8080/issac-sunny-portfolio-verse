
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

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
    githubUrl: "https://github.com/issacsunny",
  },
  {
    id: 2,
    title: "Account Income and Expense Tracker",
    description: "A financial management app with features for tracking income, categorizing expenses, and generating reports to improve budgeting efficiency.",
    tech: ["Express.js", "Pug", "MySQL", "Financial APIs"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop",
    githubUrl: "https://github.com/issacsunny",
  },
  {
    id: 3,
    title: "Resume Builder using JSON",
    description: "A resume builder that accepts JSON data to dynamically generate a PDF resume with customizable templates and styling options.",
    tech: ["React", "Node.js", "PDF Generation", "JSON"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop",
    githubUrl: "https://github.com/issacsunny",
  },
  {
    id: 4,
    title: "Lumos - Professional Networking App",
    description: "A networking app for students using Flutter for the front-end and blockchain technology for issuing certificates as NFTs.",
    tech: ["Flutter", "Blockchain", "NFTs", "Smart Contracts"],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop",
    githubUrl: "https://github.com/issacsunny",
  },
  {
    id: 5,
    title: "IoT Automatic Headlight Dimmer",
    description: "An automotive solution using Arduino and LDR sensor for automatic headlight dimming to improve road safety and driver comfort.",
    tech: ["Arduino", "IoT", "Sensors", "Embedded Systems"],
    image: "https://images.unsplash.com/photo-1601277160615-bb8b95fc0aae?q=80&w=1932&auto=format&fit=crop",
    githubUrl: "https://github.com/issacsunny",
  },
];

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const showMoreProjects = () => {
    setVisibleProjects(Math.min(visibleProjects + 3, projects.length));
  };

  return (
    <section id="projects" className="relative">
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="heading-lg gradient-text mb-4">Projects</h2>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            A showcase of my technical projects, demonstrating my skills in various technologies and problem-solving approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <Card 
              key={project.id} 
              className="bg-background/50 backdrop-blur-sm border-muted card-hover overflow-hidden"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <CardHeader className="p-6 pb-2">
                <h3 className="text-lg font-semibold">{project.title}</h3>
              </CardHeader>
              <CardContent className="p-6 pt-2">
                <p className="text-foreground/70 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-between">
                {project.githubUrl && (
                  <Button asChild variant="outline" size="sm" className="rounded-full">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button asChild variant="outline" size="sm" className="rounded-full">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {visibleProjects < projects.length && (
          <div className="mt-10 text-center">
            <Button onClick={showMoreProjects} variant="outline" size="lg">
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
