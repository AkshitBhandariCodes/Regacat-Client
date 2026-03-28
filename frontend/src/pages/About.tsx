import { Navigation } from "@/components/Navigation";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import NewAbout from "@/pageComps/NewAbout/pages/NewAbout";
import {LeadPopup} from "@/components/LeadPopup";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navigation onConsultClick={() => navigate("/")} />
      
      {/* <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">About Regacats Solutions</h1>
          
          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg">
              Regacats Solutions is India's trusted licensing and regulatory consultancy partner, 
              specializing in helping businesses navigate complex regulatory requirements with ease.
            </p>
            
            <h2 className="text-2xl font-semibold text-foreground mt-8">Our Mission</h2>
            <p>
              We aim to simplify the licensing process for businesses across India, ensuring 
              compliance while saving time and resources. Our expert team brings years of 
              experience in regulatory affairs.
            </p>
            
            <h2 className="text-2xl font-semibold text-foreground mt-8">Why Choose Us?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Expert guidance on all licensing requirements</li>
              <li>Fast and reliable service delivery</li>
              <li>End-to-end support throughout the process</li>
              <li>Transparent pricing with no hidden costs</li>
              <li>Dedicated account managers for each client</li>
            </ul>
            
            <div className="mt-8">
              <Button onClick={() => navigate("/")} size="lg">
                Get Free Consulting
              </Button>
            </div>
          </div>
        </div>
      </main> */}
      <NewAbout/>
      
      <Footer />
      <WhatsAppButton />
      <LeadPopup/>
    </div>
  );
};

export default About;
