import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

interface CTABannerProps {
  onCTAClick: () => void;
}

const CTABanner = ({ onCTAClick }: CTABannerProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 fade-in">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
            <Shield className="w-10 h-10" />
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Ready to Launch Your Food Business Legally?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Let Regacats Solutions handle your FSSAI registration — fast, simple, and 100% compliant.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button 
              size="lg"
              onClick={onCTAClick}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-10 py-7 text-lg rounded-xl shadow-2xl hover:shadow-accent/50 transition-all hover:scale-105"
            >
              Talk to Our Experts
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 pt-6 text-sm text-white/80">
            <div>✓ Free Consultation</div>
            <div>✓ 500+ Successful Applications</div>
            <div>✓ Expert Guidance</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
