import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import LegalMetrologyVideo from '../../../assets/videos/legalmetrology.mp4'

interface HeroSectionProps {
  onOpenLeadForm: () => void;
  onCheckEligibility: () => void;
}

export const HeroSection = ({ onOpenLeadForm, onCheckEligibility }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-hero animate-gradient-flow bg-[length:200%_200%]">
      {/* Animated glow lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      </div>
       <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        crossOrigin="anonymous"
        poster="/placeholder.svg"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'brightness(0.7)' }}
        onLoadedData={() => console.log("Hero video loaded")}
        onError={(e) => console.error("Hero video error", e)}
      >
        <source src={LegalMetrologyVideo} type="video/mp4" />
        
      </video>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Legal Metrology Registration for importers and manufacturers
          </h1>
          
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Comprehensive Legal Metrology Compliance Services: Registration, Licensing, Product Model Approval, Stamping, Verification, and Labeling in accordance with the Legal Metrology Act 2009 and the Legal Metrology Rules, 2011 including all Amendments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={onOpenLeadForm}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Talk to Our Experts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={onCheckEligibility}
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300"
            >
              Check Eligibility
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              "200+ Successful Registrations",
              "15-Day Average Processing",
              "100% Documentation Support"
            ].map((stat, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2 text-primary-foreground/90 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">{stat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 52.5C480 45 600 60 720 67.5C840 75 960 75 1080 60C1200 45 1320 15 1380 0L1440 0V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};
