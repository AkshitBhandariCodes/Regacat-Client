import { useState } from "react";
import { TopBar } from "@/components/TopBar";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { LeadForm } from "@/components/LeadForm";
import { ServicesSection } from "@/components/ServicesSection";
import { BrandsCarousel } from "@/components/BrandsCarousel";
import { ReviewsSection } from "@/components/ReviewsSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import SEO from "@/seo/SEO";
import { Link } from "react-router-dom";

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isFormMinimized, setIsFormMinimized] = useState(false);

  const handleFormClose = () => {
    setIsFormOpen(false);
    setIsFormMinimized(false);
  };

  const handleFormMinimize = () => {
    if (isFormMinimized) {
      setIsFormMinimized(false);
    } else {
      setIsFormMinimized(true);
    }
  };

  const handleConsultClick = () => {
    setIsFormOpen(true);
    setIsFormMinimized(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Regacats Solutions | CDSCO & FSSAI Consultant in India"
        description="Expert CDSCO & FSSAI consultant in India for cosmetic, medical device, food & nutraceutical import. Fast, compliant approvals with end-to-end support."
        canonical="https://regacat-client.vercel.app/"
        keywords="CDSCO registration, FSSAI license, medical device registration, cosmetic import license India"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Regacats Solutions",
          url: "https://regacat-client.vercel.app/",
          description: "Licensing and regulatory consultancy in India",
          sameAs: [
            "https://www.linkedin.com/company/regacats-solutions",
            "https://www.facebook.com/profile.php?id=61588567147618",
            "https://www.instagram.com/regacatsonline/",
            "https://x.com/regacats",
          ],
        }}
      />
      <TopBar />
      <Navigation onConsultClick={handleConsultClick} />
      <HeroSection onConsultClick={handleConsultClick} />
      <ServicesSection onConsultClick={handleConsultClick} />

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8 text-foreground">
            <p className="text-base md:text-lg leading-8 text-muted-foreground">
              Regacats Solutions is a dedicated licensing consultancy India partner for businesses that need reliable approvals,
              registrations, and regulatory support across central and state authorities. Our team works with startups, importers,
              manufacturers, and global brands to simplify compliance and reduce approval timelines. Whether you are launching a new
              food brand, entering the pharmaceutical market, scaling a medical device portfolio, or applying for product certifications,
              we provide structured guidance from document planning to final submission. Our process is designed to reduce filing errors,
              improve acceptance rates, and keep every milestone transparent for your team.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold">Services We Offer</h2>
            <p className="leading-8 text-muted-foreground">
              We provide complete support for <strong>CDSCO registration</strong>, <strong>FSSAI license</strong>,
              <strong> BIS certification</strong>, <strong>medical device registration</strong>, and
              <strong> cosmetic import license India</strong> workflows. If your business needs import approvals,
              Indian Authorized Agent documentation, or claim-specific compliance reviews, we help you prepare end-to-end files,
              supporting declarations, and submission-ready drafts. Explore our
              {" "}<Link to="/cdsco-registration" className="text-primary underline underline-offset-4">CDSCO services</Link>,
              {" "}<Link to="/fssai-consultants-india" className="text-primary underline underline-offset-4">FSSAI consultancy</Link>,
              {" "}<Link to="/medical-device-import-license-india" className="text-primary underline underline-offset-4">medical device registration assistance</Link>,
              {" "}<Link to="/cosmetic-import-license-india" className="text-primary underline underline-offset-4">cosmetic import licensing</Link>,
              and {" "}<Link to="/indian-authorized-agent-services-india" className="text-primary underline underline-offset-4">Indian Authorized Agent services</Link>.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold">Why Choose Regacats Solutions</h2>
            <p className="leading-8 text-muted-foreground">
              Companies choose Regacats because we combine technical regulation knowledge with practical execution support.
              Our consultants help you map eligibility, validate product category, arrange required evidence, and complete filing
              checklists with accuracy. We keep communication consistent, flag compliance gaps early, and align your documentation
              with authority expectations. You can review our company profile on
              {" "}<a href="https://www.linkedin.com/company/regacats-solutions" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">LinkedIn</a>
              {" "}and use authority references for current regulations from
              {" "}<a href="https://cdsco.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">CDSCO Guidelines</a>,
              {" "}<a href="https://www.fssai.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">FSSAI Portal</a>,
              and {" "}<a href="https://www.bis.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">BIS Standards</a>.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold">Our Expertise</h2>
            <p className="leading-8 text-muted-foreground">
              Our experts support domestic and international clients in complex product categories including nutraceuticals,
              functional foods, medical devices, pharmaceuticals, and cosmetics. We also publish practical guidance to help
              teams understand timelines, documents, and approval logic before they file. Read our latest guides:
              {" "}<Link to="/blog/cdsco-registration-guide" className="text-primary underline underline-offset-4">CDSCO Registration Guide</Link>,
              {" "}<Link to="/blog/fssai-license-process" className="text-primary underline underline-offset-4">FSSAI License Process</Link>,
              and {" "}<Link to="/blog/bis-certification-india" className="text-primary underline underline-offset-4">BIS Certification in India</Link>.
              You can also visit the {" "}<Link to="/about" className="text-primary underline underline-offset-4">About page</Link>
              to learn how our compliance methodology reduces delays for first-time and repeat applicants.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold">Contact Us</h2>
            <p className="leading-8 text-muted-foreground">
              Ready to start? Discuss your application scope with our team and receive a clear action plan for your target license.
              You can {" "}<Link to="/contact" className="text-primary underline underline-offset-4">contact us directly</Link>,
              request a callback from the floating form, or explore your required pathway through our
              {" "}<Link to="/portfolio" className="text-primary underline underline-offset-4">client portfolio</Link> and
              {" "}<Link to="/team" className="text-primary underline underline-offset-4">expert team</Link> pages.
            </p>
          </div>
        </div>
      </section>

      <BrandsCarousel />
      <ReviewsSection />
      <Footer />
      <WhatsAppButton />
      <LeadForm
        isOpen={isFormOpen}
        onClose={handleFormClose}
        isMinimized={isFormMinimized}
        onMinimize={handleFormMinimize}
      />
    </div>
  );
};

export default Index;
