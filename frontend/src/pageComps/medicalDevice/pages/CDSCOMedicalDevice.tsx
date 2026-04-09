import { useState } from "react";
import { HeroSection } from "@/pageComps/medicalDevice/components/CDSCOMedicalDevice/HeroSection";
import { AboutService } from "@/pageComps/medicalDevice/components/CDSCOMedicalDevice/AboutService";
import { ClassificationGrid } from "@/pageComps/medicalDevice/components/CDSCOMedicalDevice/ClassificationGrid";
import { ProcessTimeline } from "@/pageComps/medicalDevice/components/CDSCOMedicalDevice/ProcessTimeline";
import { WhyChooseUs } from "@/pageComps/medicalDevice/components/CDSCOMedicalDevice/WhyChooseUs";
import { CaseStudy } from "@/pageComps/medicalDevice/components/CDSCOMedicalDevice/CaseStudy";
import { FAQ } from "@/pageComps/medicalDevice/components/CDSCOMedicalDevice/FAQ";
import { CTABanner } from "@/pageComps/medicalDevice/components/CDSCOMedicalDevice/CTABanner";
import { LeadForm } from "@/components/LeadForm";
import MedicalDevice from "@/pageComps/medicalDevice/components/CDSCOMedicalDevice/MedicalDevice";

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
      <LeadForm
        isOpen={isLeadFormOpen}
        onClose={() => setIsLeadFormOpen(false)}
        defaultService="Medical Device Import License"
      />
    </div>
  );
};

export default CDSCOMedicalDevice;
