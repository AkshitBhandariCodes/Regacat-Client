import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CtaBannerProps {
  onCtaClick: () => void;
}

export const CtaBanner = ({ onCtaClick }: CtaBannerProps) => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated gradient background with wave effect */}
      <div className="absolute inset-0 gradient-hero animate-gradient -z-10" />
      <div className="absolute inset-0 animate-wave opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path 
            fill="rgba(255,255,255,0.1)" 
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
          <h2 className="mb-6 leading-tight">
            Ready to Get Your EPR Authorization?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-white/90">
            Simplify compliance and get CPCB approval fast with Regacats Solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={onCtaClick}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-large hover:shadow-glow font-semibold text-lg px-12 py-6 h-auto group"
            >
              Talk to Our Experts
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="flex items-center gap-2 text-white/90">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-white/20 border-2 border-white" />
                <div className="w-8 h-8 rounded-full bg-white/20 border-2 border-white" />
                <div className="w-8 h-8 rounded-full bg-white/20 border-2 border-white" />
              </div>
              <span className="text-sm">500+ businesses trust us</span>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <p className="text-3xl font-bold mb-1">30+</p>
              <p className="text-sm text-white/80">Days Avg. Approval</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-1">98%</p>
              <p className="text-sm text-white/80">Success Rate</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-1">500+</p>
              <p className="text-sm text-white/80">Clients Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
