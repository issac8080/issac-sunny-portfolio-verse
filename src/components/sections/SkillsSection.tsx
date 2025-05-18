
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

type SkillCategory = {
  name: string;
  skills: string[];
  icon: string;
};

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Java", "C", "Python", "JavaScript", "TypeScript", "SQL"],
    icon: "🔤",
  },
  {
    name: "Frontend",
    skills: ["HTML", "CSS", "React", "Tailwind", "Redux", "Next.js", "Angular"],
    icon: "🎨",
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "MySQL", "Firebase", "AWS"],
    icon: "⚙️",
  },
  {
    name: "Tools & Others",
    skills: ["Git", "VS Code", "Docker", "Arduino", "IoT", "API Integration", "CI/CD"],
    icon: "🛠️",
  },
];

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const { ref: sectionRef, inView: sectionIsVisible } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <section id="skills" className="relative py-20" ref={sectionRef}>
      <div className="container-custom relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 transform ${sectionIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="heading-lg gradient-text mb-4">Skills</h2>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            The technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.name} 
              className={`bg-background/50 backdrop-blur-sm border-muted overflow-hidden transform transition-all duration-700 ${
                sectionIsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              } ${activeCategory === category.name ? 'ring-2 ring-primary' : ''}`}
              style={{ 
                transitionDelay: `${index * 200}ms`,
                boxShadow: activeCategory === category.name ? '0 0 20px rgba(139, 92, 246, 0.5)' : 'none'
              }}
              onMouseEnter={() => setActiveCategory(category.name)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-xl">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold gradient-text">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="skill-item"
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div 
                        className={`bg-secondary/80 hover:bg-primary/20 transition-all duration-300 px-4 py-3 rounded-lg flex items-center justify-center transform ${
                          hoveredSkill === skill ? 'scale-110 -translate-y-1' : 'scale-100'
                        }`}
                        style={{
                          boxShadow: hoveredSkill === skill ? '0 10px 15px -3px rgba(139, 92, 246, 0.3)' : 'none'
                        }}
                      >
                        <span className="font-medium">{skill}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16">
          <Card 
            className={`bg-background/50 backdrop-blur-sm border-muted overflow-hidden transition-all duration-1000 transform ${
              sectionIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-8 gradient-text text-center">My Tech Journey</h3>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-primary"></div>
                
                {/* Timeline items */}
                <div className="space-y-12">
                  {[
                    { year: "2021", title: "Started B.Tech in CSE", desc: "Began formal education in Computer Science" },
                    { year: "2022", title: "First Project", desc: "Developed my first web application" },
                    { year: "2023", title: "MERN Stack Internship", desc: "Full-stack development at ICT Academy" },
                    { year: "2024", title: "AI & Web Development", desc: "Internships focusing on AI and advanced web dev" },
                    { year: "2025", title: "Graduation & Beyond", desc: "Graduating and seeking full-time opportunities" }
                  ].map((item, i) => {
                    const { ref, inView } = useInView({
                      threshold: 0.1,
                      triggerOnce: false,
                    });
                    
                    return (
                    <div 
                      key={item.year} 
                      ref={ref}
                      className={`relative flex items-center ${i % 2 === 0 ? 'flex-row md:flex-row-reverse' : 'flex-row'} transition-all duration-700 ${
                        inView ? 'opacity-100 translate-x-0' : i % 2 === 0 ? 'opacity-0 translate-x-10' : 'opacity-0 -translate-x-10'
                      }`}
                    >
                      <div className="hidden md:block w-1/2"></div>
                      
                      {/* Timeline bullet */}
                      <div 
                        className={`absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary transition-all duration-500 ${
                          inView ? 'shadow-lg shadow-primary/50 scale-100' : 'scale-0'
                        }`}
                      ></div>
                      
                      {/* Content */}
                      <div className={`pl-6 md:pl-0 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} w-full md:w-1/2`}>
                        <div 
                          className={`p-5 rounded-lg border border-secondary transition-all duration-500 hover:border-primary/50 ${
                            inView ? 'bg-secondary/30' : 'bg-secondary/10'
                          }`}
                          style={{
                            backdropFilter: 'blur(8px)'
                          }}
                        >
                          <span className="text-primary font-bold transition-colors duration-300 hover:text-accent">{item.year}</span>
                          <h4 className="font-semibold mt-1">{item.title}</h4>
                          <p className="text-sm text-foreground/70 mt-1">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  )})}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Floating particles decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 opacity-20 pointer-events-none">
        <div className="absolute w-8 h-8 rounded-full bg-primary/30 animate-float" style={{ top: '10%', right: '20%', animationDelay: '0s' }}></div>
        <div className="absolute w-4 h-4 rounded-full bg-accent/30 animate-float" style={{ top: '30%', right: '40%', animationDelay: '1s' }}></div>
        <div className="absolute w-6 h-6 rounded-full bg-primary/30 animate-float" style={{ top: '50%', right: '10%', animationDelay: '2s' }}></div>
      </div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 opacity-20 pointer-events-none">
        <div className="absolute w-8 h-8 rounded-full bg-accent/30 animate-float" style={{ bottom: '10%', left: '20%', animationDelay: '1.5s' }}></div>
        <div className="absolute w-5 h-5 rounded-full bg-primary/30 animate-float" style={{ bottom: '30%', left: '10%', animationDelay: '0.5s' }}></div>
        <div className="absolute w-4 h-4 rounded-full bg-accent/30 animate-float" style={{ bottom: '50%', left: '30%', animationDelay: '2.5s' }}></div>
      </div>
    </section>
  );
};

export default SkillsSection;
