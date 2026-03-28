import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-8">
        <h1 className="text-5xl font-bold text-foreground">Welcome to Regacats Solutions</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          India's trusted partner for licensing and regulatory consultancy
        </p>
        <Link to="/about">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90">
            Learn More About Us
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
