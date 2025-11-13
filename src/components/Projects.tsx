import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Built a simple Autoscaler for a self-managed K8s Cluster on DigitalOcean",
      description: "Built a Python-based autoscaler that runs as a Kubernetes controller to manage DigitalOcean droplets. It automatically adds new droplets when pods are pending and removes idle ones to optimise resource usage. The autoscaler provisions preconfigured droplets from snapshots to quickly handle changing workloads in the cluster.",
      tech: ["Python", "DigitalOcean", "Kubernetes"],
      impact: "Automated Scaling",
      repo: "https://github.com/gir-yay/mini-do-autoscaler",
    },
    {
      title: "Developed a FastAPI Odoo Instance Manager",
      description: "Developed an API that allows users to request Odoo instances. The instances runs on a self-managed Kubernetes cluster.",
      tech: ["FastAPI", "Kubertnetes", "PostgreSQL"],
      impact: "90% faster deployments",
      repo: "https://github.com/gir-yay/fastapi_odoo_instance_provisionning_k8s",
    },
    /*{
      title: "Monitoring & Observability",
      description: "Implemented comprehensive monitoring solution with custom dashboards, alerting, and automated incident response.",
      tech: ["Prometheus", "Grafana", "ELK Stack", "PagerDuty"],
      impact: "50% reduction in MTTR",
    },*/
    /*{
      title: "Infrastructure as Code",
      description: "Converted legacy manual configurations to IaC, enabling version control and reproducible infrastructure provisioning.",
      tech: ["Terraform", "Ansible", "Python", "Git"],
      impact: "100% infrastructure automation",
    },*/
  ];

  return (
    <section id="projects" className="bg-gradient-soft py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
             <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Creating value...
          </p>
        </div>
        {/*
        <div className="mb-16 animate-fade-in">
          <img 
            src={projectsImage} 
            alt="Projects Overview"
            className="rounded-3xl shadow-soft w-full max-w-4xl mx-auto"
          />
        </div>  */}


        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-soft transition-all duration-300 border-2 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold font-poppins mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-semibold text-secondary mb-3">
                  📊 {project.impact}
                </p>
                <div className="flex gap-3">
                  
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github className="w-4 h-4" />
                    <a
                    href={project.repo}
                    target="_blank"
                    
                  > Code</a>
                  </Button>
                 {/* <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button> */}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
