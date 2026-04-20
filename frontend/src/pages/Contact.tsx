import { Navigation } from "@/components/Navigation";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LeadForm } from "@/components/LeadForm";
import { useState } from "react";
import ContactPage from "@/pageComps/contacts/pages/ContactPage";
import  {LeadPopup}  from "@/components/LeadPopup";
import SEO from "@/seo/SEO";


const Contact = () => {
  const navigate = useNavigate();
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Contact us" />
      <TopBar />
      <Navigation onConsultClick={() => setIsFormOpen(true)} />
      
      {/* <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-muted-foreground mb-12">
            Get in touch with our team for expert regulatory consulting
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary">
                  +91 98765 43210
                </a>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a href="mailto:info@regacats.com" className="text-muted-foreground hover:text-primary">
                  info@regacats.com
                </a>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-muted-foreground">
                  Mumbai, Maharashtra, India
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main> */}
      <ContactPage/>
      
      <Footer />
      <WhatsAppButton />
      <LeadForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        isMinimized={false}
        onMinimize={() => {}}
      />
      <LeadPopup/>
    </div>
  );
};

export default Contact;
