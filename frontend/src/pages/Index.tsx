import { useState } from "react";
import { TopBar } from "@/components/TopBar";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { LeadForm } from "@/components/LeadForm";
import { ServicesSection } from "@/components/ServicesSection";
import { BrandsCarousel } from "@/components/BrandsCarousel";
import { ReviewsSection } from "@/components/ReviewsSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isFormMinimized, setIsFormMinimized] = useState(false);

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
    </div>
  );
};

export default Index;
