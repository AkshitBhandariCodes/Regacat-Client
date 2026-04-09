import { Card } from "../components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  details: string[];
  delay?: number;
}
 export const StepCard = ({ stepNumber, title, description, details, delay = 0 }: StepCardProps) => {
  return (
    <AccordionItem 
      value={`step-${stepNumber}`}
      className="relative animate-fade-in  border-none"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute left-[15px] top-[48px] bottom-0 w-[2px] bg-gradient-to-b from-primary to-secondary" />
      
      <Card className="relative ml-12 overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-card)] border-border/50 bg-gradient-to-br from-card to-card/95">
        <div className="absolute -left-[48px] top-6 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold shadow-[var(--shadow-soft)] z-10">
          {stepNumber}
        </div>
        
        <AccordionTrigger className="px-6 pt-6 pb-4 hover:no-underline w-full">
          <div className="text-left flex-1">
            <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>
        </AccordionTrigger>
        
        <AccordionContent className="px-6 pb-6">
          <ul className="space-y-2 pt-2">
            {details.map((detail, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-foreground/90">
                <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </Card>
    </AccordionItem>
  );
};

