import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const PolicyHero = () => {
  return (
    <section className="relative overflow-hidden border-b bg-gradient-to-br from-primary/5 via-accent/10 to-transparent">
      <div className="container py-12 md:py-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
            Policy Version: v1.0
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
            Privacy Policy
          </h1>
          
          <p className="text-lg text-muted-foreground mb-2">
            Last updated: January 15, 2025
          </p>
          
          <p className="text-base text-muted-foreground mb-8 max-w-2xl">
            Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button variant="default" size="lg" className="gap-2">
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
            
            <Button variant="outline" size="lg" className="gap-2">
              <Mail className="h-4 w-4" />
              Contact DPO
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolicyHero;
