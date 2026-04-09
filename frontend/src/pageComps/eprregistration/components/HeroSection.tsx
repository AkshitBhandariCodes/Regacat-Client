import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import EPRregistrationVideo from "../../../assets/videos/plasticrecycle.mp4";

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  const handleCheckEligibility = () => {
    const processSection = document.getElementById("epr-process");
    if (processSection) {
      processSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-[88vh] md:min-h-[92vh] flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        crossOrigin="anonymous"
        poster="/placeholder.svg"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.7)" }}
      >
        <source src={EPRregistrationVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center text-white animate-fade-in">
          <p className="text-base md:text-lg font-semibold text-white/95 mb-4">
            EPR Authorization | Regacats Solutions
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            EPR Authorization Certificate From CPCB in India
          </h1>
          <p className="mt-6 text-lg md:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Complete EPR compliance services including registration, documentation, CPCB filing, PRO
            coordination, and annual return support.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm md:text-base">
            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/25">
              <CheckCircle2 className="w-5 h-5 text-blue-300" />
              <span>Fast Processing</span>
            </div>
            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/25">
              <CheckCircle2 className="w-5 h-5 text-blue-300" />
              <span>Expert Support</span>
            </div>
            <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/25">
              <CheckCircle2 className="w-5 h-5 text-blue-300" />
              <span>PAN India Service</span>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={onCtaClick}
              size="lg"
              className="bg-white text-blue-600 hover:bg-white/90 shadow-large font-semibold text-lg px-10 py-4 h-auto rounded-xl group"
            >
              Talk to Our Experts
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              type="button"
              size="lg"
              variant="outline"
              onClick={handleCheckEligibility}
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-slate-900 font-semibold text-lg px-10 py-4 h-auto rounded-xl"
            >
              Check Eligibility
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-8 text-white/90 font-semibold">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-300" />
              <span>200+ Successful Registrations</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-300" />
              <span>15-Day Average Processing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-300" />
              <span>100% Documentation Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
