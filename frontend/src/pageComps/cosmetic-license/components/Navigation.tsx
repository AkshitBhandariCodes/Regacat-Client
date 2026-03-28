import { Button } from "@/components/ui/button";

interface NavigationProps {
  onCTAClick: () => void;
}

const Navigation = ({ onCTAClick }: NavigationProps) => {
  return (
    <nav className="bg-card shadow-card sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-primary">Regacats Solutions</span>
          </div>
          
          <Button 
            onClick={onCTAClick}
            size="sm"
            className="gradient-cta text-primary-foreground hover:opacity-90 transition-smooth"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
