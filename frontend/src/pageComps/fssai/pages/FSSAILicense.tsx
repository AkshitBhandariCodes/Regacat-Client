import { useState } from "react";
import { Helmet } from "react-helmet";
import HeroSection from "@/pageComps/fssai/components/fssai/HeroSection";
import OverviewSection from "@/pageComps/fssai/components/fssai/OverviewSection";
import LicenseTypesSection from "@/pageComps/fssai/components/fssai/LicenseTypesSection";
import ProcessSection from "@/pageComps/fssai/components/fssai/ProcessSection";
import DocumentsSection from "@/pageComps/fssai/components/fssai/DocumentsSection";
import WhyChooseSection from "@/pageComps/fssai/components/fssai/WhyChooseSection";
import CaseStudySection from "@/pageComps/fssai/components/fssai/CaseStudySection";
import FAQSection from "@/pageComps/fssai/components/fssai/FAQSection";
import CTABanner from "@/pageComps/fssai/components/fssai/CTABanner";
import LeadFormPopup from "@/pageComps/fssai/components/fssai/LeadFormPopup";

const FSSAILicense = () => {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who needs an FSSAI License?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Any business involved in food manufacturing, processing, packaging, storage, distribution, or sale must obtain an FSSAI license. This includes restaurants, cafes, cloud kitchens, food manufacturers, importers, and retailers."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to get FSSAI approval?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Basic FSSAI Registration typically takes 7-10 working days. State License takes 30-60 days, while Central License may take 60-90 days depending on documentation completeness and authority workload."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "FSSAI License Registration",
    "provider": {
      "@type": "Organization",
      "name": "Regacats Solutions"
    },
    "areaServed": "IN",
    "description": "Complete FSSAI license registration assistance including documentation, application filing, and compliance support."
  };

  return (
    <>
     

      <main className="min-h-screen bg-background">
        <HeroSection onCTAClick={() => setIsLeadFormOpen(true)} />
        <OverviewSection />
        <LicenseTypesSection />
        <ProcessSection />
        <DocumentsSection />
        <WhyChooseSection />
        <CaseStudySection onOpenCaseStudy={() => setIsCaseStudyOpen(true)} />
        <FAQSection />
        <CTABanner onCTAClick={() => setIsLeadFormOpen(true)} />
        
        <LeadFormPopup 
          isOpen={isLeadFormOpen} 
          onClose={() => setIsLeadFormOpen(false)} 
        />
      </main>
    </>
  );
};

export default FSSAILicense;
