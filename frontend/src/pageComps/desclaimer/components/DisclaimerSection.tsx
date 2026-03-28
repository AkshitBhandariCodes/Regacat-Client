import { useState } from "react";
import { ChevronDown, Link as LinkIcon, LucideIcon } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface DisclaimerSectionProps {
  id: string;
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const DisclaimerSection = ({ id, title, icon: Icon, children, defaultOpen = true }: DisclaimerSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const copyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
  };

  return (
    <div id={id} className="scroll-mt-20">
      <div className="bg-card rounded-lg border shadow-sm p-6 sm:p-8 transition-shadow hover:shadow-md">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3 flex-1">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={copyLink}
              className="h-8 w-8 hidden sm:flex"
              aria-label="Copy link to section"
            >
              <LinkIcon className="h-4 w-4" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="h-8 w-8 md:hidden"
              aria-label={isOpen ? "Collapse section" : "Expand section"}
            >
              <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
            </Button>
          </div>
        </div>

        <div className={cn("space-y-4", !isOpen && "hidden md:block")}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DisclaimerSection;
