import universityImage from "@/assets/pic1.png";
import clubsImage from "@/assets/pic2.png";
import hackathonImage from "@/assets/pic4.png";
import mentorshipImage from "@/assets/pic3.png";
import graduationImage from "@/assets/pic5.png";
import { GraduationCap, Users, Award, Code, Heart } from "lucide-react";

const Education = () => {
  const timeline = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Starting the Journey",
      description: "Began my Computer Science degree in The National School of Applied Sciences in Tétouan (ENSATé). First day jitters, new friendships, and countless sleepless nights.",
      image: universityImage,
      color: "primary",
      rotation: "rotate-3",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Clubs & Activities",
      description: "Joined the Cultural Exchange ENSATé Club, met a lot of people and participated to public speaking events.",
      image: clubsImage,
      color: "secondary",
      rotation: "-rotate-2",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Event Organization ",
      description: "helped organize the first edition of the Regional Culture and Knowledge Competition. joined the Quiz team and contributed to creating engaging quizzes for participants. The event was a success and continued with more editions afterward",
      image: hackathonImage,
      color: "primary",
      rotation: "-rotate-3",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Chess Player",
      description: "Started playing chess for fun, and enjoyed the strategic depth of the game.",
      image: mentorshipImage,
      color: "accent",
      rotation: "-rotate-2",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Graduation Day",
      description: " After five years of hard work and dedication, I graduated in 2025. I said goodbye to my school, carrying with me a wealth of memories and knowledge.It was an adventure I will always cherish that marked the beginning of a journey that will continue to unfold.",
      image: graduationImage,
      color: "secondary",
      rotation: "rotate-3",
    },
  ];

  return (
    <section id="education" className="bg-gradient-soft py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            My <span className="gradient-text">Education Story</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From first day nerves to graduation celebrations - here's how university shaped me
          </p>
        </div>

        <div className="space-y-24">
          {timeline.map((item, index) => (
            <div 
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div 
                className={`space-y-6 ${index % 2 === 1 ? "md:order-2" : ""} animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`inline-flex items-center gap-3 px-4 py-2 bg-${item.color}/10 rounded-full`}>
                  <div className={`bg-${item.color} text-${item.color}-foreground p-2 rounded-full`}>
                    {item.icon}
                  </div>
                  <span className={`text-${item.color} font-semibold`}>{item.title}</span>
                </div>
                <h3 className="text-3xl font-bold font-poppins">{item.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div 
                className={`${index % 2 === 1 ? "md:order-1" : ""} animate-slide-in-right`}
                style={{ animationDelay: `${index * 0.2 + 0.1}s` }}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className={`rounded-2xl shadow-card w-[60%] hover:scale-105 transition-transform duration-300 ${item.rotation}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
