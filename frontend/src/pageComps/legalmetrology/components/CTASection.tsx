import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, FileCheck, CheckSquare } from "lucide-react";

interface CTASectionProps {
  onOpenLeadForm: () => void;
}

export const CTASection = ({ onOpenLeadForm }: CTASectionProps) => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-accent to-secondary relative overflow-hidden">

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-foreground/10 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Floating icons */}
      <div className="absolute top-20 left-20 opacity-10 animate-fade-in">
        <Scale className="h-16 w-16 text-primary-foreground" />
      </div>
      <div className="absolute bottom-20 right-20 opacity-10 animate-fade-in" style={{ animationDelay: "0.5s" }}>
        <FileCheck className="h-16 w-16 text-primary-foreground" />
      </div>
      <div className="absolute top-40 right-40 opacity-10 animate-fade-in" style={{ animationDelay: "1s" }}>
        <CheckSquare className="h-16 w-16 text-primary-foreground" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Get Your Legal Metrology Registration?
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Stay compliant and expand your business without legal hurdles.
          </p>
          <Button
            size="lg"
            onClick={onOpenLeadForm}
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold px-10 py-7 text-lg rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
          >
            Talk to Our Experts
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};
