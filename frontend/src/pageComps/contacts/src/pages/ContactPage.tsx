import HeroSection from "@/regacatscontact/components/HeroSection";
import ContactInfoCards from "@/regacats/components/ContactInfoCards";
import ContactForm from "@/components/ContactForm";
import MapSection from "@/components/MapSection";
import CTASection from "@/components/CTASection";
import FloatingContactIcons from "@/components/FloatingContactIcons";

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
