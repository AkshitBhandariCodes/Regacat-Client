import { useState } from "react";
import { HeroSection } from "@/pageComps/legalmetrology/components/HeroSection";
import { AboutSection } from "@/pageComps/legalmetrology/components/AboutSection";
import { ProcessSection } from "@/pageComps/legalmetrology/components/ProcessSection";
import { DocumentsSection } from "@/pageComps/legalmetrology/components/DocumentsSection";
import { WhyChooseSection } from "@/pageComps/legalmetrology/components/WhyChooseSection";
import { SuccessStorySection } from "@/pageComps/legalmetrology/components/SuccessStorySection";
import { FAQSection } from "@/pageComps/legalmetrology/components/FAQSection";
import { CTASection } from "@/pageComps/legalmetrology/components/CTASection";
import { FloatingContactButton } from "@/pageComps/legalmetrology/components/FloatingContactButton";
import { LeadFormDialog } from "@/pageComps/eprregistration/components/LeadFormDialog";
import LegalMetrologyCards from "@/pageComps/legalmetrocards/src/pages/LegalMetrologyCards";

const LegalMetrology = () => {
  const [leadFormOpen, setLeadFormOpen] = useState(false);

  const scrollToProcess = () => {
    const processSection = document.getElementById("process");
    processSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection 
        onOpenLeadForm={() => setLeadFormOpen(true)} 
        onCheckEligibility={scrollToProcess}
      />
      <AboutSection />
      <LegalMetrologyCards/>
      <ProcessSection />
      <DocumentsSection />
      <WhyChooseSection />
      <SuccessStorySection onOpenLeadForm={() => setLeadFormOpen(true)} />
      <FAQSection />
      <CTASection onOpenLeadForm={() => setLeadFormOpen(true)} />
      <FloatingContactButton onClick={() => setLeadFormOpen(true)} />
      <LeadFormDialog open={leadFormOpen} onOpenChange={setLeadFormOpen} />
    </div>
  );
};

export default LegalMetrology;
