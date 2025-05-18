
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Github, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="relative bg-secondary/30">
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="heading-lg gradient-text mb-4">About Me</h2>
          <div className="flex flex-col items-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Issac Sunny</h3>
            <p className="text-foreground/80 text-sm max-w-2xl">
              Software Developer | Passionate About Cloud-Native Solutions, AI, and Full-Stack Development | Final Year CSE Student
            </p>
            <p className="text-primary/90 text-sm mt-2">Thrissur, Kerala, India</p>
            
            <div className="flex gap-4 mt-4">
              <Button variant="outline" size="sm" className="rounded-full" asChild>
                <a href="https://github.com/issac8080" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
              <Button variant="outline" size="sm" className="rounded-full" asChild>
                <a href="https://www.linkedin.com/in/issac-sunny/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="sm" className="rounded-full" asChild>
                <a href="#projects">
                  <FileText className="mr-2 h-4 w-4" /> Portfolio
                </a>
              </Button>
            </div>
          </div>
          
          <p className="text-foreground/70 max-w-3xl mx-auto">
            As a student at Christ College of Engineering, I am navigating the intricacies of computer science while
            interning at WhiteMatrix, where I apply my growing expertise in artificial intelligence. My education, 
            fortified by practical experiences at CodSoft and ZIUKE INFOTECH, hones my skills in project management 
            and programming languages like C and Python.
          </p>
          
          <p className="text-foreground/70 max-w-3xl mx-auto mt-4">
            Our team's focus on innovative solutions and efficiency is at the heart of my internships, where I've 
            contributed to various projects, including website design and machine learning applications. With a 
            strong command of English, Malayalam, and Hindi, I collaborate effectively with diverse teams to explore 
            and implement cutting-edge technologies.
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
                <h3 className="text-xl font-bold mb-4 gradient-text">Publications & Articles</h3>
                <div className="space-y-4">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <div className="p-4 bg-secondary/50 rounded-lg cursor-pointer hover:bg-secondary/70 transition-all">
                        <h4 className="font-medium text-primary">BEHAVIORAL INSIDER THREAT DETECTION</h4>
                        <p className="text-xs text-foreground/70 mt-1">
                          International Research Journal Of Modernization in Engineering Technology and Science
                        </p>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 p-4">
                      <p className="text-sm">
                        A hybrid deep learning model to detect insider threats in cybersecurity by analyzing user behavior and system logs.
                        Uses LSTMs, Transformers, and Autoencoders with Explainable AI (SHAP).
                      </p>
                    </HoverCardContent>
                  </HoverCard>
                  
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <div className="p-4 bg-secondary/50 rounded-lg cursor-pointer hover:bg-secondary/70 transition-all">
                        <h4 className="font-medium text-primary">AI-Driven Insider Threat Detection</h4>
                        <p className="text-xs text-foreground/70 mt-1">
                          Multi-Modal Deep Learning Approach, Feb 2025
                        </p>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 p-4">
                      <p className="text-sm">
                        This work presents a real-time insider threat detection system combining Long Short-Term Memory (LSTM) with advanced deep learning techniques.
                      </p>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-background/50 backdrop-blur-sm border-muted card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 gradient-text">Leadership & Activities</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-primary mr-2"></div>
                    <div>
                      <p className="text-sm font-medium">Chair, IEEE Computer Society</p>
                      <p className="text-xs text-foreground/70">Mar 2023 - Mar 2024</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-primary mr-2"></div>
                    <div>
                      <p className="text-sm font-medium">Campus Ambassador, Internshala</p>
                      <p className="text-xs text-foreground/70">May 2023 - Jun 2023</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-primary mr-2"></div>
                    <div>
                      <p className="text-sm font-medium">Program Coordinator, IEEE</p>
                      <p className="text-xs text-foreground/70">Nov 2022</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-primary mr-2"></div>
                    <div>
                      <p className="text-sm font-medium">Social Services, Music, Guitar, Karate</p>
                      <p className="text-xs text-foreground/70">Extra-curricular activities</p>
                    </div>
                  </div>
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
                    <p className="text-xs text-foreground/70 mt-1">Native or bilingual proficiency</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Malayalam</p>
                    <div className="h-2 bg-secondary rounded-full">
                      <div className="h-full bg-primary rounded-full w-[100%]"></div>
                    </div>
                    <p className="text-xs text-foreground/70 mt-1">Native or bilingual proficiency</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Hindi</p>
                    <div className="h-2 bg-secondary rounded-full">
                      <div className="h-full bg-primary rounded-full w-[60%]"></div>
                    </div>
                    <p className="text-xs text-foreground/70 mt-1">Professional working proficiency</p>
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
