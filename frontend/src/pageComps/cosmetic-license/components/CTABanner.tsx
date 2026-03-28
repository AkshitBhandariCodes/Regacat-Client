import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  onCTAClick: () => void;
}

const CTABanner = ({ onCTAClick }: CTABannerProps) => {




  return (
    // <section className="relative py-20 gradient-cta text-primary-foreground overflow-hidden">
    //   <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#38BDF8] opacity-10"></div>
      
    //   <div className="container mx-auto px-4 relative z-10">
    //     <div className="max-w-3xl mx-auto text-center animate-fade-in">
    //       <h2 className="text-3xl md:text-4xl font-bold mb-4">
    //         Ready to Import Your Cosmetics into India?
    //       </h2>
    //       <p className="text-lg mb-8 text-primary-foreground/90">
    //         Get your CDSCO license approved with our hassle-free regulatory services.
    //       </p>
    //       <Button 
    //         onClick={onCTAClick}
    //         size="lg"
    //         className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-elevated group transition-smooth"
    //       >
    //         Talk to Our Experts
    //         <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
    //       </Button>
    //     </div>
    //   </div>
    // </section>
    <section className="relative overflow-hidden py-24">
  {/* Gradient Background */}
  <div className="absolute inset-0">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#20478A" />
          <stop offset="100%" stopColor="#46A6C6" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-gradient)" />
    </svg>
  </div>

  {/* Optional: Subtle white wave for texture */}
  <div className="absolute bottom-0 left-0 right-0">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className="w-full h-32 opacity-20"
      preserveAspectRatio="none"
    >
      <path
        fill="white"
        fillOpacity="1"
        d="M0,192L60,197.3C120,203,240,213,360,202.7C480,192,600,160,720,170.7C840,181,960,235,1080,245.3C1200,256,1320,224,1380,208L1440,192V320H0Z"
      ></path>
    </svg>
  </div>

  {/* Content */}
  <div className="relative z-10 container mx-auto px-4 text-center text-white">
    <div className="max-w-3xl mx-auto animate-fade-in">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        Ready to Import Your Cosmetics into India?
      </h2>
      <p className="text-lg md:text-xl mb-8 text-white/90">
        Get your CDSCO license approved with our hassle-free regulatory services.
      </p>
      <Button
        onClick={onCTAClick}
        size="lg"
        className="bg-[#F9B233] text-[#1F2937] hover:bg-[#f7a918] font-medium px-6 py-3 rounded-xl shadow-lg transition-all duration-300 flex items-center mx-auto"
      >
        Talk to Our Experts
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
      </Button>
    </div>
  </div>
</section>

  );
};

export default CTABanner;
