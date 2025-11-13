import skillsImage from "@/assets/skills-illustration.png";
import { Card } from "@/components/ui/card";
import { Cloud, Container, Code, Database, Shield, Cpu } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Platforms",
      skills: ["AWS", "Azure", "Google Cloud", "DigitalOcean"],
      color: "primary",
    },
    {
      icon: <Container className="w-6 h-6" />,
      title: "Containerization",
      skills: ["Docker", "Kubernetes", "Openshift"],
      color: "secondary",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "IaC & Automation",
      skills: ["Terraform", "Ansible"],
      color: "accent",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "CI/CD & Tools",
      skills: ["Jenkins", "GitHub Actions"],
      color: "primary",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Monitoring & Security",
      skills: ["Prometheus", "Grafana", "ELK Stack"],
      color: "secondary",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Programming",
      skills: ["Python", "Go", "Bash"],
      color: "accent",
    },
  ];

  return (
    <section id="skills" className="bg-background py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I worked with.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative animate-fade-in order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 animate-float"></div>
            <img 
              src={skillsImage} 
              alt="Technical Skills"
              className="relative rounded-3xl shadow-soft w-full"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4 order-1 lg:order-2">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className={`p-6 hover:shadow-soft transition-all duration-300 border-2 animate-fade-in hover:scale-105`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`bg-${category.color}/10 text-${category.color} p-3 rounded-lg w-fit mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold font-poppins mb-3">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-sm text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gradient-accent rounded-3xl p-8 md:p-12 text-center animate-fade-in">
          <h3 className="text-3xl font-bold font-poppins mb-4 text-white">
            Certifications & Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold">
              AWS Cloud Quest: Cloud Practitioner
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold">
              Oracle Cloud Infrastructure 2025 Certified Foundations Associate
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold">
              Oracle Cloud Infrastructure 2025 Certified Multicloud Architect Professional
            </div>
          </div>
          <p className="text-white/90 max-w-2xl mx-auto">
            View more certifications on my <a href="https://www.credly.com/users/rahmouni-ghizlane" target="_blank" className="underline font-semibold">Credly</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
