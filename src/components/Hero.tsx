import { Button } from "@/components/ui/button";
import heroImage from "@/assets/me.png";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById("education")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-soft pt-16">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold">Lifelong learner</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-poppins">
              Hi, I'm <span className="gradient-text">Ghizlane RAHMOUNI</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A T-shaped in Computer Science and a Cloud & DevOps Enthusiast.
             Welcome to my journey from curious student to a real engineer.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary text-white hover:opacity-90 transition-opacity shadow-soft"
                onClick={() => document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" })}
              >
                Let's Connect
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Projects
              </Button>
            </div>
          </div>
          <div className="relative animate-slide-in-right m-24">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 animate-float"></div>
            <img 
              src={heroImage} 
              alt="Cloud & DevOps Engineer Illustration" 
              className="relative rounded-3xl shadow-soft"
            />
          </div>
        </div>
      </div>
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        aria-label="Scroll to education section"
      >
        <ArrowDown className="w-8 h-8 text-primary" />
      </button>
    </section>
  );
};

export default Hero;
