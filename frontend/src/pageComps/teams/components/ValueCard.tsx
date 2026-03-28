import { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  delay?: number;
}

const ValueCard = ({ icon: Icon, title, delay = 0 }: ValueCardProps) => {
  return (
    <div 
      className="flex flex-col items-center text-center p-6 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative mb-4">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse-glow" />
        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
    </div>
  );
};

export default ValueCard;
