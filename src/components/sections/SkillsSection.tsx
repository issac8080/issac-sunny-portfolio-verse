
import { Card, CardContent } from "@/components/ui/card";

type SkillCategory = {
  name: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Java", "C", "Python", "JavaScript", "SQL"],
  },
  {
    name: "Frontend",
    skills: ["HTML", "CSS", "React", "Tailwind", "Redux"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "MySQL"],
  },
  {
    name: "Tools & Others",
    skills: ["Git", "VS Code", "Arduino", "IoT", "API Integration"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative">
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="heading-lg gradient-text mb-4">Skills</h2>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            The technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.name} className="bg-background/50 backdrop-blur-sm border-muted card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 gradient-text">{category.name}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div key={skill} className="skill-item">
                      <div className="bg-secondary/80 hover:bg-primary/20 transition-colors px-4 py-3 rounded-lg flex items-center justify-center">
                        <span className="font-medium">{skill}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12">
          <Card className="bg-background/50 backdrop-blur-sm border-muted card-hover">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6 gradient-text text-center">My Tech Journey</h3>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-accent"></div>
                
                {/* Timeline items */}
                <div className="space-y-12">
                  {[
                    { year: "2021", title: "Started B.Tech in CSE", desc: "Began formal education in Computer Science" },
                    { year: "2022", title: "First Project", desc: "Developed my first web application" },
                    { year: "2023", title: "MERN Stack Internship", desc: "Full-stack development at ICT Academy" },
                    { year: "2024", title: "AI & Web Development", desc: "Internships focusing on AI and advanced web dev" },
                    { year: "2025", title: "Graduation & Beyond", desc: "Graduating and seeking full-time opportunities" }
                  ].map((item, i) => (
                    <div key={item.year} className={`relative flex items-center ${i % 2 === 0 ? 'flex-row md:flex-row-reverse' : 'flex-row'}`}>
                      <div className="hidden md:block w-1/2"></div>
                      
                      {/* Timeline bullet */}
                      <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50"></div>
                      
                      {/* Content */}
                      <div className={`pl-6 md:pl-0 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} w-full md:w-1/2`}>
                        <div className="p-4 rounded-lg bg-secondary/30 border border-secondary">
                          <span className="text-primary font-bold">{item.year}</span>
                          <h4 className="font-semibold mt-1">{item.title}</h4>
                          <p className="text-sm text-foreground/70 mt-1">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
