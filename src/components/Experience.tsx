import professionalImage from "@/assets/professional-work.jpg";
import { Briefcase, TrendingUp, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      role: "Graduation Project - Hybrid Cloud",
      company: "Paperless",
      period: "February 2025 - May 2025",
      description: "Designed and implemented a hybrid cloud solution integrating on-premises infrastructure with DigitalOcean and Kubernetes to host Odoo SaaS platform.",
      highlights: ["vSpher", "Proxmox", "TrueNAS", "Wireguard/Tailscale" , "DigitalOcean" ,"Kubernetes", "CI/CD", "Docker", "FastAPI" ],
    },
    {
      role: "Part-time Odoo Developer",
      company: "Paperless",
      period: "October 2024 - May 2025",
      description: "Devoloped and customized Odoo modules and worked closely with clients. Updated and migrated modules from Odoo 15 to Odoo 18.",
      highlights: ["Odoo 17", "Odoo 18", "Odoo SaaS" , "Python"],
    },
    {
      role: "Odoo developer Intern",
      company: "Paperless",
      period: "July 2024 - August 2024",
      description: "Started my professional journey with customizing Odoo modules for small businesses. Used GitHub Actions to automate the creation and deployment of customized Odoo images. ",
      highlights: ["Odoo", "Python", "Docker", "Github Actions"],
    },
  ];

  return (
    <section id="experience" className="bg-background py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Guess what? I am open to new opportunities! Let's connect and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-soft transition-all duration-300 border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-primary p-3 rounded-lg text-white flex-shrink-0">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold font-poppins mb-1">{exp.role}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-3">
                      <span className="font-semibold text-foreground">{exp.company}</span>
                      <span>•</span>
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="relative animate-slide-in-right">
            <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-3xl opacity-20"></div>
            <img 
              src={professionalImage} 
              alt="Professional Experience"
              className="relative rounded-3xl shadow-soft w-full"
            />
            <div className="absolute top-4 right-4 bg-white dark:bg-card p-4 rounded-2xl shadow-card">
              <div className="flex items-center gap-2 text-secondary">
                <TrendingUp className="w-5 h-5" />
                <span className="font-bold">Junior</span>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 bg-white dark:bg-card p-4 rounded-2xl shadow-card">
              <div className="flex items-center gap-2 text-primary">
                <Zap className="w-5 h-5" />
                <span className="font-bold">Quick learner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
