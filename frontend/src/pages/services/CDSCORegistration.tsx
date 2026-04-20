import { Navigation } from "@/components/Navigation";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CDSCODrug from "@/pageComps/cosmeticdrug/pages/CDSCODrug";
import {LeadPopup}  from "@/components/LeadPopup";
import ServiceInternalLinks from "@/components/ServiceInternalLinks";
import SEO from "@/seo/SEO";


const CDSCODrugRegistration = () => {
  const navigate = useNavigate();

  return (
   <div>
    <SEO title="CDSCO drug import Services in india" />
    <TopBar/>
    <Navigation onConsultClick={() => navigate("/")}/>
    <CDSCODrug/>
    <ServiceInternalLinks />
      
      <Footer />
      <WhatsAppButton />
      <LeadPopup/>
    </div>
  );
};

export default CDSCODrugRegistration;
