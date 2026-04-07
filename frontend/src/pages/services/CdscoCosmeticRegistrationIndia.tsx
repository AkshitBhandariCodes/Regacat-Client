import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TopBar } from "@/components/TopBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { LeadPopup } from "@/components/LeadPopup";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import SEO from "@/seo/SEO";
import ServiceInternalLinks from "@/components/ServiceInternalLinks";

const serviceHighlights = [
  "End-to-end cosmetic product registration",
  "Support for CDSCO registration for cosmetics",
  "Guidance for importers under cosmetic import registration India",
  "Regulatory consultation for new product launches",
  "Compliance support for global cosmetic brands entering India",
];

const processSteps = [
  {
    title: "Step 1: Product Classification",
    description: "We assess whether your product qualifies as a cosmetic under Indian regulations.",
  },
  {
    title: "Step 2: Regulatory Strategy",
    description:
      "We define the correct pathway for cosmetic registration India, based on import or manufacturing.",
  },
  {
    title: "Step 3: Documentation Preparation",
    description:
      "We prepare all required documents including product details, manufacturer information, and compliance declarations.",
  },
  {
    title: "Step 4: Application Filing",
    description: "We support submission through CDSCO systems for cosmetic product registration.",
  },
  {
    title: "Step 5: Query Handling",
    description: "We manage queries and coordinate with authorities for faster approval.",
  },
];

const regulatorySupport = [
  "Regulatory roadmap for CDSCO registration for cosmetic",
  "Dossier preparation and document verification",
  "Submission handling and tracking",
  "Response management for CDSCO queries",
  "Coordination with stakeholders and authorities",
];

const labelChecklist = [
  "Product name and description",
  "Manufacturer and importer details",
  "Country of origin (for imports)",
  "Batch number and expiry details",
  "Ingredient declaration",
  "Mandatory warnings and declarations",
];

const ingredientSupport = [
  "Ingredient review and compliance check",
  "Screening against restricted substances",
  "Guidance on formulation adjustments",
  "Testing support (heavy metals, microbiological, etc.)",
  "Coordination with certified laboratories",
];

const requiredDocuments = [
  "Manufacturer authorization / Power of Attorney",
  "Product details and variants",
  "Ingredient list",
  "Label artwork",
  "Free Sale Certificate (for imports)",
  "Product specifications",
  "Test reports and compliance documents",
];

const whyRegacats = [
  "Expert CDSCO cosmetic registration consultant team",
  "End-to-end compliance support",
  "Faster approval through proper documentation",
  "Experience with global and domestic cosmetic brands",
  "Strong understanding of Indian regulatory framework",
];

const faqs = [
  {
    question: "What is CDSCO registration for cosmetic?",
    answer:
      "CDSCO registration is required for importing cosmetic products into India. It ensures that the product meets safety and regulatory standards.",
  },
  {
    question: "Who needs cosmetic registration in India?",
    answer:
      "Importers and manufacturers must comply with regulations. Imported cosmetics require CDSCO approval before entering the market.",
  },
  {
    question: "What is cosmetic product registration?",
    answer:
      "It is the process of obtaining approval for cosmetic products to be marketed legally in India.",
  },
  {
    question: "What is cosmetic import registration India?",
    answer:
      "It refers to the CDSCO approval process required for importing cosmetics into India.",
  },
  {
    question: "How long does cosmetic registration take?",
    answer: "Timelines depend on documentation quality and regulatory queries.",
  },
  {
    question: "Why hire a cosmetic registration consultant?",
    answer:
      "A professional cosmetic registration consultant India helps reduce delays, ensures compliance, and improves approval success rate.",
  },
];

const CdscoCosmeticRegistrationIndia = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const siteUrl = "https://regacats.in";
  const canonical = `${siteUrl}${location.pathname}`;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="CDSCO Cosmetic Registration Consultant India - For License"
        description="CDSCO cosmetic registration consultant in India for manufacturers and importers. Get expert support for cosmetic registration, labeling, compliance, and approval."
        canonical={canonical}
        type="website"
      />
      <TopBar />
      <Navigation onConsultClick={() => navigate("/")} />

      <main className="overflow-x-clip">
        <section className="relative overflow-hidden bg-gradient-to-br from-cyan-950 via-cyan-900 to-blue-700 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.24),transparent_46%)]" />
          <div className="container mx-auto px-4 py-14 md:py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <p className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase">
                  Cosmetic Registration Consultant India
                </p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  CDSCO Cosmetic Registration Consultant India - Cosmetic License & Compliance Support
                </h1>
                <p className="text-cyan-100 text-lg leading-relaxed">
                  If you are planning to launch, import, or manufacture cosmetic products in India, complying with CDSCO regulations is essential. At Regacats, we are a leading <strong>cosmetic registration consultant India</strong> with complete <strong>cosmetic registration service</strong> support for manufacturers, importers, and brand owners.
                </p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-2 backdrop-blur-sm shadow-2xl lg:ml-auto w-full max-w-2xl">
                <div className="w-full h-[240px] sm:h-[320px] md:h-[380px] rounded-xl border border-white/20 bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-950 flex items-center justify-center p-6 text-center">
                  <div>
                    <p className="text-base md:text-lg font-semibold">Cosmetic Compliance Visual</p>
                    <p className="text-sm md:text-base mt-2">Replace this panel with your generated service image.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8">
            <Card className="border-cyan-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-900">Cosmetic Product Registration Consultant Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed mb-4">
                  As an experienced <strong>cosmetic product registration consultant</strong>, we help businesses navigate complex regulatory pathways in India.
                </p>
                <ul className="space-y-2">
                  {serviceHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-cyan-700 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-cyan-100 shadow-sm bg-gradient-to-b from-cyan-50 to-white">
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-900">Regulatory Strategy & Submission Handling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed mb-4">
                  A strong regulatory strategy is key to successful <strong>cosmetic registration service</strong> and smoother approvals.
                </p>
                <ul className="space-y-2">
                  {regulatorySupport.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-cyan-700 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-14 bg-cyan-50/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8 space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-950">CDSCO Cosmetic Registration Consultant - Our Approach</h2>
              <p className="text-slate-600">A structured and compliance-focused process to reduce delays and improve approval outcomes.</p>
            </div>
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4">
              {processSteps.map((step, index) => (
                <Card key={step.title} className="border-cyan-100 shadow-sm h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-900 text-white text-sm font-bold shrink-0">
                        {index + 1}
                      </span>
                      <div className="space-y-1.5">
                        <h3 className="text-lg font-semibold text-cyan-900">{step.title}</h3>
                        <p className="text-slate-700">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8">
            <Card className="border-cyan-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-900">Labelling Compliance for Cosmetics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Labelling is one of the most critical compliance requirements in <strong>cosmetic registration India</strong>. Our <strong>cosmetic compliance consultant India</strong> team ensures labels meet all CDSCO norms.
                </p>
                <ul className="space-y-2">
                  {labelChecklist.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-cyan-700 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-cyan-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-900">Ingredient Compliance & Testing Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed mb-4">
                  As a reliable <strong>cosmetic license consultant India</strong>, we ensure your product meets safety and quality standards before submission.
                </p>
                <ul className="space-y-2">
                  {ingredientSupport.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-cyan-700 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-14 bg-cyan-50/50">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8">
            <Card className="border-cyan-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-900">Documents Required for Cosmetic Registration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {requiredDocuments.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-cyan-700 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-cyan-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-900">Why Choose Regacats as Your Cosmetic Registration Consultant</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {whyRegacats.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-cyan-700 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4">
            <Card className="border-cyan-100 shadow-sm max-w-5xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-900">CDSCO Registration vs Cosmetic Import License (Important)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  This page focuses on <strong>cosmetic registration consultant</strong> services and compliance strategy. For import-specific licensing (COS-1 / COS-2 process), visit our detailed page on{" "}
                  <Link to="/cosmetic-import-license-india" className="font-semibold text-cyan-800 hover:text-cyan-700 underline underline-offset-2">
                    Cosmetic Import License India
                  </Link>
                  .
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-cyan-700 mt-0.5 shrink-0" />
                    <span>Better clarity for users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-cyan-700 mt-0.5 shrink-0" />
                    <span>No keyword cannibalization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-cyan-700 mt-0.5 shrink-0" />
                    <span>Stronger SEO performance for both pages</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-14 bg-cyan-950 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold">FAQs - Cosmetic Registration India</h2>
            </div>
            <div className="max-w-4xl mx-auto grid gap-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div key={faq.question} className="rounded-lg border border-white/20 bg-white/10 px-5 py-4">
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between gap-4 text-left font-semibold"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      {isOpen ? <ChevronUp className="h-5 w-5 shrink-0" /> : <ChevronDown className="h-5 w-5 shrink-0" />}
                    </button>
                    {isOpen && <p className="mt-3 text-cyan-100">{faq.answer}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-cyan-950 text-white">
          <div className="container mx-auto px-4 text-center max-w-3xl space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Get Expert Help for Cosmetic Registration in India</h2>
            <p className="text-cyan-100">
              Looking for a reliable cosmetic product registration consultant? Contact Regacats today for CDSCO registration support, label and ingredient compliance, and fast-track approval guidance.
            </p>
            <Button
              onClick={() => navigate("/contact")}
              size="lg"
              className="bg-white text-cyan-900 hover:bg-cyan-100 font-semibold"
            >
              Get Free Consultation
            </Button>
          </div>
        </section>
      </main>

      <ServiceInternalLinks />
      <Footer />
      <WhatsAppButton />
      <LeadPopup />
    </div>
  );
};

export default CdscoCosmeticRegistrationIndia;