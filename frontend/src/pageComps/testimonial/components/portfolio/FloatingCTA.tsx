import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed right-6 bottom-6 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <Button
        size="lg"
        className="bg-primary hover:bg-primary text-white font-semibold shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-full px-6 py-6 animate-pulse-glow group"
      >
        <MessageCircle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
        Talk to an Expert
      </Button>
    </div>
  );
};

export default FloatingCTA;
