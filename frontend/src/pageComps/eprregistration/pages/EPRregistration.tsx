import { useState } from "react";
import { HeroSection } from "@/pageComps/eprregistration/components/HeroSection";
import { AboutSection } from "@/pageComps/eprregistration/components/AboutSection";
import { ProcessSection } from "@/pageComps/eprregistration/components/ProcessSection";
import { DocumentsSection } from "@/pageComps/eprregistration/components/DocumentsSection";
import { WhyChooseSection } from "@/pageComps/eprregistration/components/WhyChooseSection";
import { CaseStudySection } from "@/pageComps/eprregistration/components/CaseStudySection";
import { FaqSection } from "@/pageComps/eprregistration/components/FaqSection";
import { CtaBanner } from "@/pageComps/eprregistration/components/CtaBanner";
import { LeadFormDialog } from "@/pageComps/eprregistration/components/LeadFormDialog";
import EprRegistration from "@/pageComps/epr-registration/pages/eprregistration";


const EPRregistration = () => {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  const handleCtaClick = () => {
    setIsLeadFormOpen(true);
  };

  return (
    <main className="min-h-screen">
      <HeroSection onCtaClick={handleCtaClick} />
      <AboutSection />
      <EprRegistration/>
     
      <ProcessSection />
      <DocumentsSection />
      <WhyChooseSection />
      <CaseStudySection onCtaClick={handleCtaClick} />
      <FaqSection />
      <CtaBanner onCtaClick={handleCtaClick} />
      
      <LeadFormDialog 
        open={isLeadFormOpen}
        onOpenChange={setIsLeadFormOpen}
      />

      {/* Footer */}
      {/* <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Regacats Solutions. All rights reserved.
          </p>
          <p className="text-xs mt-2 text-white/70">
            Your trusted partner for EPR Authorization and compliance solutions across India
          </p>
        </div>
      </footer> */}
    </main>
  );
};

export default EPRregistration;
