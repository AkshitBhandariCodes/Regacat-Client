import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const CTASection = () => {
  const handleConsultation = () => {
    // Scroll to contact form
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative pt-28 pb-40 px-4 overflow-hidden bg-gradient-hero">

  {/* TOP WAVES (Animated) */}
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
    <svg
      className="relative block w-[200%] h-32 animate-wave-slow"
      viewBox="0 0 1200 120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0L50 15C100 30 200 60 300 65C400 70 500 50 600 40C700 30 800 20 900 25C1000 30 1100 60 1150 75L1200 90V0Z"
        fill="rgba(255,255,255,0.08)"
      />
    </svg>

    <svg
      className="relative block w-[200%] h-28 -mt-10 animate-wave-fast opacity-70"
      viewBox="0 0 1200 120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0L80 25C160 50 320 100 480 105C640 110 800 80 960 60C1120 40 1280 20 1360 25L1440 30V0Z"
        fill="rgba(255,255,255,0.12)"
      />
    </svg>
  </div>

  {/* BG SHIMMER */}
  <div
    className="absolute inset-0 opacity-30"
    style={{
      backgroundImage:
        "linear-gradient(90deg, transparent, rgba(255, 0, 0, 0.8), transparent)",
      backgroundSize: "200% 100%"
    }}
  />

  {/* CONTENT */}
  <div className="container mx-auto max-w-4xl relative z-10 text-center space-y-8 animate-fade-in">
    <h2 className="text-4xl md:text-5xl font-bold text-white">
      Ready to Get Started?
    </h2>
    <p className="text-xl text-white max-w-2xl mx-auto">
      Take the first step towards seamless compliance. Schedule a free consultation with our experts today.
    </p>

    <Button
      onClick={() => { window.location.href = 'tel:+919211921474' }}
      size="lg"
      className="w-full h-14 text-lg font-semibold rounded-xl 
      bg-gradient-to-r from-primary via-accent to-secondary 
      shadow-[0_0_25px_rgba(0,0,0,0.2)]
      hover:shadow-[0_0_35px_rgba(0,0,0,0.35)]
      hover:opacity-95 hover:scale-[1.03]
      transition-all duration-300"
    >
      <Calendar className="mr-3 w-6 h-6" />
      Schedule a Free Consultation
    </Button>
  </div>

  {/* BOTTOM WAVES */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
    <svg
      className="relative block w-[200%] h-32 animate-wave-slow"
      viewBox="0 0 1200 120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0L50 15C100 30 200 60 300 65C400 70 500 50 600 40C700 30 800 20 900 25C1000 30 1100 60 1150 75L1200 90V0Z"
        fill="rgba(255,255,255,0.08)"
      />
    </svg>
  </div>
</section>

  );
};

export default CTASection;
