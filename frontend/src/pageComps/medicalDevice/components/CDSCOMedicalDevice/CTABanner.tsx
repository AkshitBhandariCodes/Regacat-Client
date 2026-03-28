import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

interface CTABannerProps {
  onOpenLeadForm: () => void;
}

export const CTABanner = ({ onOpenLeadForm }: CTABannerProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-accent to-primary relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" 
             style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <Shield className="w-5 h-5 text-white" />
            {/* <span className="text-white font-medium">Trusted by 500+ Medical Device Companies</span> */}
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Get Your Medical Device Licensed with Confidence
          </h2>

          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Let Regacats Solutions handle your CDSCO Medical Device application from start to finish — 
            accurate, efficient, and compliant.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button
              size="lg"
              onClick={onOpenLeadForm}
              className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all group px-8"
            >
              Talk to Our Experts
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            {/* <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-primary hover:bg-white hover:text-primary"
            >
              Download Checklist
            </Button> */}
          </div>

          {/* Trust indicators */}
          {/* <div className="flex flex-wrap justify-center gap-12 pt-12 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">45 Days</div>
              <div className="text-sm text-white/80">Average Approval Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-white/80">Devices Licensed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">100%</div>
              <div className="text-sm text-white/80">Success Rate</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
