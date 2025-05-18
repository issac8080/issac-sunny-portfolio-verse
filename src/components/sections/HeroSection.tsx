
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-primary font-medium mb-2 animate-fade-in [animation-delay:200ms] opacity-0">
              Hello, I'm
            </p>
            <h1 className="heading-xl mb-4 animate-fade-in [animation-delay:400ms] opacity-0">
              Issac <span className="gradient-text">Sunny</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-6 animate-fade-in [animation-delay:600ms] opacity-0">
              Tech meets Creativity
            </p>
            <p className="text-foreground/70 max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in [animation-delay:800ms] opacity-0">
              A Computer Science Engineering student with expertise in Python, React, Node.js, and IoT development. 
              Building innovative solutions that solve real-world problems.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-fade-in [animation-delay:1000ms] opacity-0">
              <Button asChild size="lg">
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center animate-fade-in [animation-delay:1200ms] opacity-0">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 animate-float shadow-lg shadow-primary/10">
                <img
                  src="/lovable-uploads/a1aca123-c733-48b1-b5ad-c291c3759115.png"
                  alt="Issac Sunny"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-secondary p-3 rounded-lg shadow-md">
                <p className="text-sm font-semibold">
                  <span className="text-primary">4+ </span> 
                  Years Coding Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
