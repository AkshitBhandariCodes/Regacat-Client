import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import EPRregistrationVideo from '../../../assets/videos/plasticrecycle.mp4'

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      {/* <div className="absolute inset-0 gradient-hero animate-gradient -z-10" /> */}
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
        <source src={EPRregistrationVideo} type="video/mp4" />
        
      </video>
      
      {/* Floating decoration circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
          <h1 className="mb-6 leading-tight">
            EPR Authorization | Regacats Solutions
          </h1>
          <h1 className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            EPR Authorization Certificate From CPCB in India
          </h1>
          
          {/* Key benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm md:text-base">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <CheckCircle2 className="w-5 h-5" />
              <span>Fast Processing</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <CheckCircle2 className="w-5 h-5" />
              <span>Expert Support</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <CheckCircle2 className="w-5 h-5" />
              <span>PAN India Service</span>
            </div>
          </div>
          
          <Button 
            onClick={onCtaClick}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 shadow-large hover:shadow-glow font-semibold text-lg px-12 py-6 h-auto"
          >
            Talk to Our Experts
          </Button>
        </div>
      </div>
    </section>
  );
};
