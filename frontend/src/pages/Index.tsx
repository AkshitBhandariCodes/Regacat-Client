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
import  {LeadPopup}  from "@/components/LeadPopup";

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isFormMinimized, setIsFormMinimized] = useState(false);
  const [hasClosedOnce, setHasClosedOnce] = useState(false);

  // Auto-open form on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFormOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Reopen form after 10 seconds if closed
  useEffect(() => {
    if (hasClosedOnce && !isFormOpen) {
      const timer = setTimeout(() => {
        setIsFormOpen(true);
        setIsFormMinimized(true);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [hasClosedOnce, isFormOpen]);

  const handleFormClose = () => {
    setIsFormOpen(false);
    setIsFormMinimized(false);
    setHasClosedOnce(true);
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
      <LeadPopup/>
    </div>
  );
};

export default Index;
