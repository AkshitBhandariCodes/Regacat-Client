import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="text-center space-y-8 px-4">
        <h1 className="text-4xl md:text-6xl font-bold gradient-text">
          Regacats Solutions
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Your trusted partner for regulatory compliance and licensing
        </p>
        <Button 
          size="lg"
          onClick={() => navigate("/fssai-license")}
          className="bg-primary hover:bg-primary/90 font-semibold px-8 py-6 text-lg"
        >
          Explore FSSAI License Services
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
