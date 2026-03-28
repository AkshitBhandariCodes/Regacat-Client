import { useState } from "react";
import { HeroSection } from "@/pageComps/cosmeticdrug/components/CDSCOMedicalDevice/HeroSection";
import { AboutService } from "@/pageComps/cosmeticdrug/components/CDSCOMedicalDevice/AboutService";
import { ClassificationGrid } from "@/pageComps/cosmeticdrug/components/CDSCOMedicalDevice/ClassificationGrid";
import { ProcessTimeline } from "@/pageComps/cosmeticdrug/components/CDSCOMedicalDevice/ProcessTimeline";
import { DocumentsRequired } from "@/pageComps/cosmeticdrug/components/CDSCOMedicalDevice/DocumentsRequired";
import { WhyChooseUs } from "@/pageComps/cosmeticdrug/components/CDSCOMedicalDevice/WhyChooseUs";
import { CaseStudy } from "@/pageComps/cosmeticdrug/components/CDSCOMedicalDevice/CaseStudy";
import { FAQ } from "@/pageComps/cosmeticdrug/components/CDSCOMedicalDevice/FAQ";
import { CTABanner } from "@/pageComps/cosmeticdrug/components/CDSCOMedicalDevice/CTABanner";
import { LeadGenPopup } from "@/pageComps/cosmeticdrug/components/CDSCOMedicalDevice/LeadGenPopup";

const CDSCODrug = () => {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onOpenLeadForm={() => setIsLeadFormOpen(true)} />
      <AboutService />
      {/* <ClassificationGrid /> */}
      <ProcessTimeline />
      <DocumentsRequired />
      <WhyChooseUs />
      <CaseStudy />
      <FAQ />
      <CTABanner onOpenLeadForm={() => setIsLeadFormOpen(true)} />
      <LeadGenPopup isOpen={isLeadFormOpen} onClose={() => setIsLeadFormOpen(false)} />
    </div>
  );
};

export default CDSCODrug;
