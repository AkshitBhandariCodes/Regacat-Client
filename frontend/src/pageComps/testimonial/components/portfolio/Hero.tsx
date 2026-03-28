import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 opacity-90 animate-gradient-flow"
        style={{
          background: "var(--gradient-hero)",
          backgroundSize: "200% 200%",
        }}
      />
      
      {/* Geometric pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-secondary" />
          <span className="text-sm font-medium text-white">Trusted by 500+ Businesses</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 animate-fade-up">
          Our Success Stories
          <br />
          <span className="text-secondary">Speak for Themselves</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Discover how Regacats Solutions has helped businesses across India 
          achieve fast, compliant growth.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <Button 
            size="lg" 
            className="bg-primary  text-white font-semibold px-8 py-6 text-lg group"
          >
            View Our Work
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-white text-primary hover:bg-white hover:text-primary font-semibold px-8 py-6 text-lg backdrop-blur-sm"
          >
            Schedule Consultation
          </Button>
        </div>
        
        {/* Metrics */}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-20 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          {[
            { number: "500+", label: "Registrations" },
            { number: "100%", label: "Compliance Success" },
            { number: "15+", label: "Industry Segments" },
          ].map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{metric.number}</div>
              <div className="text-sm md:text-base text-white/80">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
