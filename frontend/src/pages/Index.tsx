import { useState, useEffect } from "react";
import { TopBar } from "@/components/TopBar";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { LeadForm } from "@/components/LeadForm";
import { ServicesSection } from "@/components/ServicesSection";
import { BrandsCarousel } from "@/components/BrandsCarousel";
import { ReviewsSection } from "@/components/ReviewsSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ClipboardCheck } from "lucide-react";

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isFormMinimized, setIsFormMinimized] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  // Show a gentle prompt every 40 seconds instead of intrusive auto-popups.
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isFormOpen) {
        setShowPrompt(true);
      }
    }, 40000);

    return () => clearInterval(interval);
  }, [isFormOpen]);

  const handleFormClose = () => {
    setIsFormOpen(false);
    setIsFormMinimized(false);
  };

  const handleFormMinimize = () => {
    if (isFormMinimized) {
      setIsFormMinimized(false);
    } else {
      setIsFormMinimized(true);
    }
  };

  const handleConsultClick = () => {
    setIsFormOpen(true);
    setIsFormMinimized(false);
    setShowPrompt(false);
  };

  const handleDismissPrompt = () => {
    setShowPrompt(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navigation onConsultClick={handleConsultClick} />
      <HeroSection onConsultClick={handleConsultClick} />
      <ServicesSection onConsultClick={handleConsultClick} />
      <BrandsCarousel />
      <ReviewsSection />
      <Footer />
      <WhatsAppButton />
      <LeadForm
        isOpen={isFormOpen}
        onClose={handleFormClose}
        isMinimized={isFormMinimized}
        onMinimize={handleFormMinimize}
      />

      <button
        type="button"
        onClick={handleConsultClick}
        aria-label="Avail Service"
        className="fixed right-4 bottom-6 z-40 group"
      >
        <div className="rounded-2xl border border-primary/20 bg-card/95 backdrop-blur px-3 py-3 shadow-xl transition-all group-hover:shadow-2xl group-hover:-translate-y-0.5">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <ClipboardCheck className="h-5 w-5" />
            </span>
            <span className="text-xs font-semibold tracking-wide text-foreground">Avail Service</span>
          </div>
        </div>
      </button>

      {showPrompt && (
        <div className="fixed right-4 bottom-28 z-40 w-72 rounded-xl border border-border bg-card p-4 shadow-xl animate-fade-in">
          <p className="text-sm font-semibold text-foreground">Need help with compliance?</p>
          <p className="text-xs text-muted-foreground mt-1">Would you like to avail our service now?</p>
          <div className="mt-3 flex items-center gap-2">
            <Button type="button" size="sm" onClick={handleConsultClick}>
              Avail Service
            </Button>
            <Button type="button" size="sm" variant="outline" onClick={handleDismissPrompt}>
              Later
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
