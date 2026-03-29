import { Navigation } from "@/components/Navigation";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import FSSAILicense from "@/pageComps/fssai/pages/FSSAILicense";
import {LeadPopup} from "@/components/LeadPopup";
import ServiceInternalLinks from "@/components/ServiceInternalLinks";

const TrademarkFSSAI = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navigation onConsultClick={() => navigate("/")} />
      
      {/* <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">Trademark & FSSAI</h1>
          
          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg">
              Protect your brand with trademark registration and ensure food safety compliance 
              with FSSAI licensing services.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold text-foreground mb-4">Trademark Services</h2>
                  <ul className="space-y-3">
                    {[
                      "Trademark search & registration",
                      "Logo & brand protection",
                      "Opposition handling",
                      "Renewal services",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold text-foreground mb-4">FSSAI Services</h2>
                  <ul className="space-y-3">
                    {[
                      "Basic & State FSSAI license",
                      "Central FSSAI license",
                      "Food product approvals",
                      "Label registration",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Timeline</h3>
              <p>Trademark: 12-18 months | FSSAI: 15-30 days</p>
            </div>
            
            <Button onClick={() => navigate("/")} size="lg" className="mt-8">
              Get Free Consulting
            </Button>
          </div>
        </div>
      </main> */}
      <FSSAILicense/>
      <ServiceInternalLinks />
      
      <Footer />
      <WhatsAppButton />
      <LeadPopup/>
    </div>
  );
};

export default TrademarkFSSAI;
