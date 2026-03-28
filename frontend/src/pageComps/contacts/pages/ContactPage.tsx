import HeroSection from "@/pageComps/contacts/components/HeroSection";
import ContactInfoCards from "@/pageComps/contacts/components/ContactInfoCards";
import ContactForm from "@/pageComps/contacts/components/ContactForm";
import MapSection from "@/pageComps/contacts/components/MapSection";
import CTASection from "@/pageComps/contacts/components/CTASection";
import FloatingContactIcons from "@/pageComps/contacts/components/FloatingContactIcons";

const ContactPage = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ContactInfoCards />
      <ContactForm />
      <MapSection />
      <CTASection />
      <FloatingContactIcons />
    </main>
  );
};

export default ContactPage;
