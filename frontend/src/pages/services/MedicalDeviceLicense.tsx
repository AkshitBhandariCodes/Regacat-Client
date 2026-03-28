import { Navigation } from "@/components/Navigation";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CDSCOMedicalDevice from "@/pageComps/medicalDevice/pages/CDSCOMedicalDevice";
import {LeadPopup}  from "@/components/LeadPopup";

const MedicalDeviceLicense = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navigation onConsultClick={() => navigate("/")} />
      
      {/* <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">Medical Device License</h1>
          
          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg">
              Comprehensive licensing support for medical devices across all classifications 
              (Class A, B, C, D) as per Indian Medical Device Rules.
            </p>
            
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold text-foreground mb-4">What We Offer</h2>
                <ul className="space-y-3">
                  {[
                    "Device classification guidance",
                    "Manufacturing license",
                    "Import license for medical devices",
                    "Quality management system setup",
                    "Risk management documentation",
                    "Post-market surveillance support"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Timeline</h3>
              <p>Typical processing time: 45-75 days</p>
            </div>
            
            <Button onClick={() => navigate("/")} size="lg" className="mt-8">
              Get Free Consulting
            </Button>
          </div>
        </div>
      </main> */}
      <CDSCOMedicalDevice/>

      
      <Footer />
      <WhatsAppButton />
      <LeadPopup/>
    </div>
  );
};

export default MedicalDeviceLicense;
