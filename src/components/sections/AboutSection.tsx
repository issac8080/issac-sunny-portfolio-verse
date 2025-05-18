
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="relative bg-secondary/30">
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="heading-lg gradient-text mb-4">About Me</h2>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            Get to know more about my background, interests, and what drives me in the world of technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Card className="bg-background/50 backdrop-blur-sm border-muted card-hover">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 gradient-text">Education & Background</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-3 h-3 mt-1.5 rounded-full bg-primary shrink-0"></div>
                  <div className="ml-4">
                    <p className="font-semibold">B.Tech in Computer Science & Engineering</p>
                    <p className="text-sm text-foreground/70">Christ College of Engineering, Irinjalakuda (2021-2025)</p>
                    <p className="text-sm text-primary">CGPA: 8.2/10</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-3 h-3 mt-1.5 rounded-full bg-primary shrink-0"></div>
                  <div className="ml-4">
                    <p className="font-semibold">12th CISCE Board (Biology with Mathematics)</p>
                    <p className="text-sm text-foreground/70">Christ Vidyanikethan School, Irinjalakuda (2019-2021)</p>
                    <p className="text-sm text-primary">Score: 94%</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-6">
                <p className="text-foreground/80">
                  I'm a final year Computer Science student passionate about creating practical tech solutions.
                  During my academic journey, I've developed a strong foundation in various programming languages
                  and technologies, while constantly seeking opportunities to apply my knowledge in real-world scenarios.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card className="bg-background/50 backdrop-blur-sm border-muted card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 gradient-text">Interests & Hobbies</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center p-4 bg-secondary/50 rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                      <span className="text-2xl">🎭</span>
                    </div>
                    <p className="font-medium text-center">Mime</p>
                    <p className="text-xs text-foreground/70 text-center">2nd prize at college level</p>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-secondary/50 rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                      <span className="text-2xl">🎨</span>
                    </div>
                    <p className="font-medium text-center">Drawing</p>
                    <p className="text-xs text-foreground/70 text-center">1st place at inter-school level</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-background/50 backdrop-blur-sm border-muted card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 gradient-text">Soft Skills</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Communication",
                    "Problem-solving",
                    "Team Collaboration",
                    "Adaptability",
                    "Time Management",
                    "Critical Thinking"
                  ].map((skill) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                      <p className="text-sm">{skill}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-background/50 backdrop-blur-sm border-muted card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 gradient-text">Languages</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium mb-1">English</p>
                    <div className="h-2 bg-secondary rounded-full">
                      <div className="h-full bg-primary rounded-full w-[95%]"></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Malayalam</p>
                    <div className="h-2 bg-secondary rounded-full">
                      <div className="h-full bg-primary rounded-full w-[100%]"></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Hindi</p>
                    <div className="h-2 bg-secondary rounded-full">
                      <div className="h-full bg-primary rounded-full w-[60%]"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
