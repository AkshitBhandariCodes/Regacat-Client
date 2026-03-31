import { useState } from "react";
import { HeroSection } from "@/pageComps/medicalDevice/components/CDSCOMedicalDevice/HeroSection";
import { AboutService } from "@/pageComps/medicalDevice/components/CDSCOMedicalDevice/AboutService";
import { ClassificationGrid } from "@/pageComps/medicalDevice/components/CDSCOMedicalDevice/ClassificationGrid";
import { ProcessTimeline } from "@/pageComps/medicalDevice/components/CDSCOMedicalDevice/ProcessTimeline";
import { DocumentsRequired } from "@/pageComps/medicalDevice/components/CDSCOMedicalDevice/DocumentsRequired";
import { WhyChooseUs } from "@/pageComps/medicalDevice/components/CDSCOMedicalDevice/WhyChooseUs";
import { CaseStudy } from "@/pageComps/medicalDevice/components/CDSCOMedicalDevice/CaseStudy";
import { FAQ } from "@/pageComps/medicalDevice/components/CDSCOMedicalDevice/FAQ";
import { CTABanner } from "@/pageComps/medicalDevice/components/CDSCOMedicalDevice/CTABanner";
import { LeadGenPopup } from "@/pageComps/cosmeticdrug/components/CDSCOMedicalDevice/LeadGenPopup";
import MedicalDevice from '@/pageComps/medicalDevice/components/CDSCOMedicalDevice/MedicalDevice'

const CDSCOMedicalDevice = () => {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onOpenLeadForm={() => setIsLeadFormOpen(true)} />
      <AboutService />
      <ClassificationGrid />
      <MedicalDevice/>
      <ProcessTimeline />

      <WhyChooseUs />
      <CaseStudy />
      <FAQ />
      <CTABanner onOpenLeadForm={() => setIsLeadFormOpen(true)} />
      <LeadGenPopup isOpen={isLeadFormOpen} onClose={() => setIsLeadFormOpen(false)} />
    </div>
  );
};

export default CDSCOMedicalDevice;
