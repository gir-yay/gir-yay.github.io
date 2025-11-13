import connectImage from "@/assets/connect-illustration.png";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Twitter, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Connect = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
  };

  const socialLinks = [
    { icon: <Mail className="w-5 h-5" />, label: "Email", href: "mailto:ghizlane.ra100@gmail.com", color: "primary" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "https://www.linkedin.com/in/ghizlane-rahmouni", color: "primary" },
    { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "https://github.com/gir-yay", color: "secondary" },
    { icon: <Phone className="w-5 h-5" />, label: "+212 691511083",  color: "secondary" },
  ];

  return (
    <section id="connect" className="bg-gradient-soft py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Let's <span className="gradient-text">Connect!</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat about cloud tech? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in order-2 lg:order-1">
            <img 
              src={connectImage} 
              alt="Let's Connect"
              className="rounded-3xl shadow-soft w-full"
            />
            
            <div className="mt-8 space-y-4">
              <h3 className="text-2xl font-bold font-poppins mb-6">Find me on:</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href}
                    className="group"
                  >
                    <Card className={`p-4 hover:shadow-soft transition-all duration-300 border-2 hover:border-${link.color}`}>
                      <div className="flex items-center gap-3">
                        <div className={`bg-${link.color}/10 text-${link.color} p-2 rounded-lg group-hover:scale-110 transition-transform`}>
                          {link.icon}
                        </div>
                        <span className="font-semibold">{link.label}</span>
                      </div>
                    </Card>
                  </a>
                ))}
              </div>
            </div>




            
          </div>


            <div className="mt-16 text-center animate-fade-in">
          <div className="inline-block bg-card border-2 rounded-2xl px-8 py-6 shadow-card">
            <p className="text-lg text-muted-foreground mb-2">
              📍 Currently based in <span className="font-semibold text-foreground">Morocco</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Open to remote opportunities worldwide
            </p>
          </div>
        </div>
{/*
          <Card className="p-8 border-2 animate-fade-in order-1 lg:order-2">
            <h3 className="text-2xl font-bold font-poppins mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Your Name
                </label>
                <Input 
                  id="name"
                  placeholder="Jane Doe" 
                  required
                  className="border-2"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address
                </label>
                <Input 
                  id="email"
                  type="email" 
                  placeholder="jane@example.com" 
                  required
                  className="border-2"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <Textarea 
                  id="message"
                  placeholder="Tell me about your project or just say hi!" 
                  rows={5}
                  required
                  className="border-2 resize-none"
                />
              </div>
              <Button 
                type="submit"
                size="lg" 
                className="w-full bg-gradient-primary text-white hover:opacity-90 transition-opacity shadow-soft"
              >
                Send Message
              </Button>
            </form>
          </Card> */}
        </div>

      </div>
    </section>
  );
};

export default Connect;
