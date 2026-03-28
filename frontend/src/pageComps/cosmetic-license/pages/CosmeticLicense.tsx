import { useState } from "react";
import { Helmet } from "react-helmet";
import Navigation from "@/pageComps/cosmetic-license/components/Navigation";
import HeroSection from "@/pageComps/cosmetic-license/components/HeroSection";
import InfoCards from "@/pageComps/cosmetic-license/components/InfoCards";
import ProcessTimeline from "@/pageComps/cosmetic-license/components/ProcessTimeline";
import DocumentChecklist from "@/pageComps/cosmetic-license/components/DocumentChecklist";
import WhyChooseUs from "@/pageComps/cosmetic-license/components/WhyChooseUs";
import CaseStudySection from "@/pageComps/cosmetic-license/components/CaseStudySection";
import FAQSection from "@/pageComps/cosmetic-license/components/FAQSection";
import CTABanner from "@/pageComps/cosmetic-license/components/CTABanner";
import LeadFormPopup from "@/pageComps/cosmetic-license/components/LeadFormPopup";
import CaseStudyPopup from "@/pageComps/cosmetic-license/components/CaseStudyPopup";
import CosmeticImport from "@/components/CosmeticImport";
import SEO from '../../../seo/SEO';
const CosmeticLicense = () => {
  const [leadFormOpen, setLeadFormOpen] = useState(false);
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);

  const handleCTAClick = () => {
    setLeadFormOpen(true);
  };

  const handleCaseStudyClick = () => {
    setCaseStudyOpen(true);
  };

  const handleCaseStudyConsultClick = () => {
    setCaseStudyOpen(false);
    setLeadFormOpen(true);
  };

  return (
    <>
 <SEO 
    title="CDSCO Cosmetic Import License (Cos-2) Consultant in India"
    description="Helping global cosmetic brands obtain CDSCO Cosmetic Import License (Cos-2) in India. Expert guidance for registration, labeling & regulatory compliance"
    
 />

      <div className="min-h-screen bg-background">
        {/* <Navigation onCTAClick={handleCTAClick} /> */}
        <main>
          <HeroSection onCTAClick={handleCTAClick} />
          <InfoCards />
          <ProcessTimeline />
          {/* <DocumentChecklist /> */}
          <CosmeticImport/>
          <WhyChooseUs />
          <CaseStudySection onReadMore={handleCaseStudyClick} />
          <FAQSection />
          <CTABanner onCTAClick={handleCTAClick} />
        </main>
        
        {/* <footer className="bg-card border-t border-border py-8">
          <div className="container mx-auto px-4 text-center text-muted-foreground">
            <p>&copy; 2025 Regacats Solutions. All rights reserved.</p>
          </div>
        </footer> */}

        <LeadFormPopup open={leadFormOpen} onOpenChange={setLeadFormOpen} />
        <CaseStudyPopup 
          open={caseStudyOpen} 
          onOpenChange={setCaseStudyOpen}
          onConsultClick={handleCaseStudyConsultClick}
        />
      </div>
    </>
  );
};

export default CosmeticLicense;
