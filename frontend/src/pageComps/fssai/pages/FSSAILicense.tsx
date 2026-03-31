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
        "name": "Who requires FSSAI regulatory and compliance services in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Any business involved in manufacturing, importing, exporting, marketing, or selling food, nutraceuticals, or dietary supplements in India must comply with FSSAI regulations and may require professional consulting support."
        }
      },
      {
        "@type": "Question",
        "name": "What services do FSSAI consultants in India provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FSSAI consultants support licensing and registration, formulation and label compliance, non-specified food approvals, import assistance, health claim approvals, authorized agent services, and post-market compliance."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "FSSAI Regulatory and Compliance Consulting",
    "provider": {
      "@type": "Organization",
      "name": "Regacats Solutions"
    },
    "areaServed": "IN",
    "description": "Comprehensive FSSAI regulatory services for food, nutraceutical, and dietary supplement businesses including licensing, approvals, import compliance, and product-level review."
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
