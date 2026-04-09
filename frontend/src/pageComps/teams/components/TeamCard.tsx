import { Linkedin, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";

interface TeamCardProps {
  name: string;
  position: string;
  image: string;
  linkedin?: string;
  email?: string;
  delay?: number;
}

const TeamCard = ({ name, position, image, linkedin, email, delay = 0 }: TeamCardProps) => {
  return (
    <Card 
      className="group relative overflow-hidden bg-card shadow-card hover:shadow-hover transition-smooth border-border/50 hover:border-primary/50 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="gradient-card absolute inset-0 opacity-0 group-hover:opacity-100 transition-smooth" />
      
      <div className="relative p-6 text-center">
        <div className="mb-4 inline-block">
          <div className="relative w-32 h-32 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-20 blur-xl transition-smooth" />
            <img
              src={image}
              alt={name}
              className="relative w-full h-full rounded-full object-cover border-4 border-border group-hover:border-primary transition-smooth"
            />
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-smooth">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">{position}</p>
        
        <div className="flex justify-center gap-3">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="p-2 rounded-full bg-muted hover:bg-primary hover:text-secondary-white transition-smooth"
            >
              <Mail className="w-4 h-4 hover:text-white" />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

export default TeamCard;
