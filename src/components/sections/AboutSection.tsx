
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { motion } from "framer-motion";
import { Github, Linkedin, FileText, User, BookOpen, Award, GraduationCap, Languages, BookOpen as Publications, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="about" className="relative bg-secondary/30 py-24 overflow-hidden">
      <div className="container-custom relative z-10">
        <div 
          ref={ref}
          className={`text-center mb-12 transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <div className="h-0.5 w-6 bg-primary"></div>
            <h2 className="text-sm font-medium uppercase tracking-wider text-primary">Discover</h2>
            <div className="h-0.5 w-6 bg-primary"></div>
          </div>
          <h2 className="heading-lg gradient-text mb-4 flex items-center justify-center gap-2">
            <User className="h-6 w-6 text-primary" />
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary/40 via-primary to-accent/40 mx-auto mb-6 rounded-full animate-pulse-slow"></div>
        </div>
        
        <div className="flex flex-col items-center mb-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg shadow-primary/10 mb-5">
              <img
                src="/lovable-uploads/a1aca123-c733-48b1-b5ad-c291c3759115.png"
                alt="Issac Sunny"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-primary p-2 rounded-full shadow-md">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
          </motion.div>

          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold mb-1"
          >
            Issac Sunny
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-foreground/70 text-sm max-w-lg text-center mb-4"
          >
            Software Developer | Passionate About Cloud-Native Solutions, AI, and Full-Stack Development | Final Year CSE Student
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-primary/90 text-sm flex items-center gap-1 mb-4"
          >
            <span>Thrissur, Kerala, India</span>
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-3 mb-6"
          >
            <Button variant="outline" size="sm" className="rounded-full hover:bg-primary/10 hover:text-primary transition-all" asChild>
              <a href="https://github.com/issac8080" target="_blank" rel="noopener noreferrer">
                <Github className="mr-1.5 h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button variant="outline" size="sm" className="rounded-full hover:bg-primary/10 hover:text-primary transition-all" asChild>
              <a href="https://www.linkedin.com/in/issac-sunny/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-1.5 h-4 w-4" /> LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="sm" className="rounded-full hover:bg-primary/10 hover:text-primary transition-all" asChild>
              <a href="#projects">
                <FileText className="mr-1.5 h-4 w-4" /> Portfolio
              </a>
            </Button>
          </motion.div>
        </div>

        <Tabs 
          defaultValue="profile" 
          value={activeTab}
          onValueChange={setActiveTab}
          className="mx-auto max-w-4xl"
        >
          <TabsList className="grid grid-cols-5 mb-8 mx-auto w-full max-w-md bg-background/40 backdrop-blur-sm">
            <TabsTrigger value="profile" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              <User className="h-4 w-4 mr-1 md:mr-2" />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>
            <TabsTrigger value="education" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              <GraduationCap className="h-4 w-4 mr-1 md:mr-2" />
              <span className="hidden sm:inline">Education</span>
            </TabsTrigger>
            <TabsTrigger value="publications" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              <Publications className="h-4 w-4 mr-1 md:mr-2" />
              <span className="hidden sm:inline">Publications</span>
            </TabsTrigger>
            <TabsTrigger value="leadership" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              <Award className="h-4 w-4 mr-1 md:mr-2" />
              <span className="hidden sm:inline">Leadership</span>
            </TabsTrigger>
            <TabsTrigger value="languages" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              <Languages className="h-4 w-4 mr-1 md:mr-2" />
              <span className="hidden sm:inline">Languages</span>
            </TabsTrigger>
          </TabsList>
          
          <div className="bg-background/30 backdrop-blur-sm border border-white/10 rounded-lg p-6">
            <TabsContent value="profile" className="mt-0">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                <motion.h3 
                  variants={fadeInVariants}
                  custom={0}
                  className="text-xl font-bold mb-4 text-primary"
                >
                  Professional Profile
                </motion.h3>
                
                <motion.p 
                  variants={fadeInVariants}
                  custom={1}
                  className="text-foreground/80 mb-4"
                >
                  As a student at Christ College of Engineering, I am navigating the intricacies of computer science while
                  interning at WhiteMatrix, where I apply my growing expertise in artificial intelligence. My education, 
                  fortified by practical experiences at CodSoft and ZIUKE INFOTECH, hones my skills in project management 
                  and programming languages like C and Python.
                </motion.p>
                
                <motion.p 
                  variants={fadeInVariants}
                  custom={2}
                  className="text-foreground/80 mb-6"
                >
                  Our team's focus on innovative solutions and efficiency is at the heart of my internships, where I've 
                  contributed to various projects, including website design and machine learning applications. With a 
                  strong command of English, Malayalam, and Hindi, I collaborate effectively with diverse teams to explore 
                  and implement cutting-edge technologies.
                </motion.p>
                
                <motion.div 
                  variants={fadeInVariants}
                  custom={3}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div className="flex items-center p-3 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors">
                    <div className="mr-3 p-2 bg-primary/10 rounded-md">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Professional Experience</h4>
                      <p className="text-sm text-foreground/70">7+ internships & roles</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors">
                    <div className="mr-3 p-2 bg-primary/10 rounded-md">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Academic Background</h4>
                      <p className="text-sm text-foreground/70">Computer Science & Engineering</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="education" className="mt-0">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                <motion.h3 
                  variants={fadeInVariants}
                  custom={0}
                  className="text-xl font-bold mb-4 text-primary"
                >
                  Education & Background
                </motion.h3>
                
                <div className="space-y-6">
                  <motion.div 
                    variants={fadeInVariants}
                    custom={1}
                    className="relative pl-6 border-l-2 border-primary/30 py-2"
                  >
                    <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-primary"></div>
                    <h4 className="text-lg font-semibold">B.Tech in Computer Science & Engineering</h4>
                    <p className="text-foreground/70">Christ College of Engineering, Irinjalakuda</p>
                    <p className="text-sm flex items-center gap-2 mt-1">
                      <span className="px-2 py-1 rounded text-xs bg-primary/20 text-primary">2021-2025</span>
                      <span className="text-primary">CGPA: 8.2/10</span>
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    variants={fadeInVariants}
                    custom={2}
                    className="relative pl-6 border-l-2 border-primary/30 py-2"
                  >
                    <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-primary"></div>
                    <h4 className="text-lg font-semibold">12th CISCE Board (Biology with Mathematics)</h4>
                    <p className="text-foreground/70">Christ Vidyanikethan School, Irinjalakuda</p>
                    <p className="text-sm flex items-center gap-2 mt-1">
                      <span className="px-2 py-1 rounded text-xs bg-primary/20 text-primary">2019-2021</span>
                      <span className="text-primary">Score: 94%</span>
                    </p>
                  </motion.div>
                </div>
                
                <motion.div 
                  variants={fadeInVariants}
                  custom={3}
                  className="mt-6 p-4 bg-secondary/40 rounded-lg"
                >
                  <p className="text-foreground/80 italic">
                    "I'm a final year Computer Science student passionate about creating practical tech solutions.
                    During my academic journey, I've developed a strong foundation in various programming languages
                    and technologies, while constantly seeking opportunities to apply my knowledge in real-world scenarios."
                  </p>
                </motion.div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="publications" className="mt-0">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                <motion.h3 
                  variants={fadeInVariants}
                  custom={0}
                  className="text-xl font-bold mb-4 text-primary"
                >
                  Publications & Articles
                </motion.h3>
                
                <div className="space-y-4">
                  <motion.div 
                    variants={fadeInVariants}
                    custom={1}
                    className="group"
                  >
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <div className="p-4 bg-secondary/50 rounded-lg cursor-pointer hover:bg-secondary/70 transition-all group-hover:translate-x-1">
                          <h4 className="font-medium text-primary group-hover:text-primary/80">BEHAVIORAL INSIDER THREAT DETECTION</h4>
                          <p className="text-xs text-foreground/70 mt-1">
                            International Research Journal Of Modernization in Engineering Technology and Science
                          </p>
                          <div className="flex items-center mt-2">
                            <Badge className="bg-primary/20 text-primary text-xs hover:bg-primary/30">
                              Cybersecurity
                            </Badge>
                            <span className="ml-auto text-xs text-foreground/50">March 2025</span>
                          </div>
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80 p-4 backdrop-blur-md bg-background/80 border border-primary/20">
                        <div className="flex justify-between items-start">
                          <div className="space-y-1">
                            <h4 className="text-sm font-semibold">Hybrid Deep Learning Model</h4>
                            <p className="text-xs text-foreground/70">With Delvs Davis & Aleena Soby</p>
                          </div>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm">
                            A hybrid deep learning model to detect insider threats in cybersecurity by analyzing user behavior and system logs.
                            Uses LSTMs, Transformers, and Autoencoders with Explainable AI (SHAP).
                          </p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </motion.div>
                  
                  <motion.div 
                    variants={fadeInVariants}
                    custom={2}
                    className="group"
                  >
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <div className="p-4 bg-secondary/50 rounded-lg cursor-pointer hover:bg-secondary/70 transition-all group-hover:translate-x-1">
                          <h4 className="font-medium text-primary group-hover:text-primary/80">AI-Driven Insider Threat Detection</h4>
                          <p className="text-xs text-foreground/70 mt-1">
                            Multi-Modal Deep Learning Approach
                          </p>
                          <div className="flex items-center mt-2">
                            <Badge className="bg-primary/20 text-primary text-xs hover:bg-primary/30">
                              Machine Learning
                            </Badge>
                            <span className="ml-auto text-xs text-foreground/50">February 2025</span>
                          </div>
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80 p-4 backdrop-blur-md bg-background/80 border border-primary/20">
                        <p className="text-sm">
                          This work presents a real-time insider threat detection system combining Long Short-Term Memory (LSTM) with advanced deep learning techniques.
                        </p>
                        <div className="mt-2 pt-2 border-t border-primary/10">
                          <a href="#" className="text-xs text-primary flex items-center hover:underline">
                            View publication <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="leadership" className="mt-0">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                <motion.h3 
                  variants={fadeInVariants}
                  custom={0}
                  className="text-xl font-bold mb-4 text-primary"
                >
                  Leadership & Activities
                </motion.h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div 
                    variants={fadeInVariants}
                    custom={1}
                    className="p-4 bg-secondary/30 rounded-lg hover:bg-secondary/40 transition-all"
                  >
                    <div className="flex items-center mb-2">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Award className="h-4 w-4 text-primary" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium">Chair, IEEE Computer Society</h4>
                        <p className="text-xs text-foreground/70">Mar 2023 - Mar 2024</p>
                      </div>
                    </div>
                    <p className="text-sm text-foreground/80">
                      Led a thriving community of technology enthusiasts, fostering innovation and professional growth.
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    variants={fadeInVariants}
                    custom={2}
                    className="p-4 bg-secondary/30 rounded-lg hover:bg-secondary/40 transition-all"
                  >
                    <div className="flex items-center mb-2">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Briefcase className="h-4 w-4 text-primary" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium">Campus Ambassador, Internshala</h4>
                        <p className="text-xs text-foreground/70">May 2023 - Jun 2023</p>
                      </div>
                    </div>
                    <p className="text-sm text-foreground/80">
                      Represented Internshala on campus and fostered a culture of academic excellence.
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    variants={fadeInVariants}
                    custom={3}
                    className="p-4 bg-secondary/30 rounded-lg hover:bg-secondary/40 transition-all"
                  >
                    <div className="flex items-center mb-2">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium">Program Coordinator, IEEE</h4>
                        <p className="text-xs text-foreground/70">Nov 2022</p>
                      </div>
                    </div>
                    <p className="text-sm text-foreground/80">
                      Organized IEEE Spectrum Talk events, bringing together tech enthusiasts and industry experts.
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    variants={fadeInVariants}
                    custom={4}
                    className="p-4 bg-secondary/30 rounded-lg hover:bg-secondary/40 transition-all"
                  >
                    <div className="flex items-center mb-2">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Music className="h-4 w-4 text-primary" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium">Extra-curricular Activities</h4>
                      </div>
                    </div>
                    <p className="text-sm text-foreground/80">
                      Social Services, Music, Guitar, Karate
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="languages" className="mt-0">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                <motion.h3 
                  variants={fadeInVariants}
                  custom={0}
                  className="text-xl font-bold mb-4 text-primary"
                >
                  Languages
                </motion.h3>
                
                <div className="space-y-6">
                  <motion.div 
                    variants={fadeInVariants}
                    custom={1}
                    className="space-y-2"
                  >
                    <div className="flex justify-between">
                      <h4 className="font-medium">English</h4>
                      <span className="text-foreground/70 text-sm">Native or bilingual proficiency</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "95%" }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="h-full bg-gradient-to-r from-primary/60 to-primary rounded-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    variants={fadeInVariants}
                    custom={2}
                    className="space-y-2"
                  >
                    <div className="flex justify-between">
                      <h4 className="font-medium">Malayalam</h4>
                      <span className="text-foreground/70 text-sm">Native or bilingual proficiency</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 0.7, duration: 1 }}
                        className="h-full bg-gradient-to-r from-primary/60 to-primary rounded-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    variants={fadeInVariants}
                    custom={3}
                    className="space-y-2"
                  >
                    <div className="flex justify-between">
                      <h4 className="font-medium">Hindi</h4>
                      <span className="text-foreground/70 text-sm">Professional working proficiency</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "60%" }}
                        transition={{ delay: 0.9, duration: 1 }}
                        className="h-full bg-gradient-to-r from-primary/60 to-primary rounded-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-40 left-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-float"></div>
    </section>
  );
};

export default AboutSection;
