import { useNavigate } from "react-router-dom";
import { TopBar } from "@/components/TopBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import SEO from "@/seo/SEO";

const CdscoRegistrationGuide = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="CDSCO Registration Guide in India | Regacats Solutions"
        description="Step-by-step CDSCO registration guide for Indian and imported products with key documentation and compliance checkpoints."
        canonical="https://regacat-client.vercel.app/blog/cdsco-registration-guide"
      />
      <TopBar />
      <Navigation onConsultClick={() => navigate("/")} />

      <main className="container mx-auto px-4 py-16">
        <article className="max-w-4xl mx-auto space-y-6 text-foreground">
          <h1 className="text-3xl md:text-4xl font-bold">CDSCO Registration Guide for India</h1>
          <p className="text-muted-foreground leading-8">
            CDSCO registration is a mandatory pathway for regulated products entering the Indian healthcare market,
            including pharmaceuticals, cosmetics, and medical devices. The regulator focuses on patient safety,
            product quality, and legal accountability. Businesses often face delays because of incorrect product
            categorization, incomplete documentation, and submission gaps in portal records. A clear strategy from
            day one can significantly improve approval speed and reduce rework.
          </p>
          <h2 className="text-2xl font-semibold">Who Needs CDSCO Registration</h2>
          <p className="text-muted-foreground leading-8">
            Importers, foreign manufacturers, Indian manufacturers, and authorized agents may all require specific
            approvals based on the product class and intended use. Medical devices are classified by risk category,
            and each class has a different evidence depth. Cosmetic imports require dedicated compliance records and
            accurate labels aligned with Indian requirements. Drug-related submissions involve separate forms and
            manufacturing-related records depending on supply chain structure.
          </p>
          <h2 className="text-2xl font-semibold">Key Documentation</h2>
          <p className="text-muted-foreground leading-8">
            Typical documentation includes product details, technical specifications, manufacturing evidence,
            certificates from country of origin, quality declarations, labeling proofs, and authorized agent documents.
            The right file structure is as important as the document itself. If naming conventions and annexure mapping
            are inconsistent, authorities can raise avoidable clarifications. Teams should maintain a master checklist
            with version control so every submitted file can be traced and updated quickly when needed.
          </p>
          <h2 className="text-2xl font-semibold">Practical Filing Approach</h2>
          <p className="text-muted-foreground leading-8">
            Start by confirming classification and route, then build a complete documentation map before portal upload.
            Validate all forms internally, align label language, and pre-check signatures, stamps, and dates.
            Businesses should track response timelines and maintain a query log to handle authority observations
            efficiently. This structured method increases consistency and helps organizations avoid costly launch
            delays in regulated categories.
          </p>
        </article>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CdscoRegistrationGuide;
