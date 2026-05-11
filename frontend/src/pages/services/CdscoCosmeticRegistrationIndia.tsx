import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import cdscoCosmeticHeroImage from "@/assets/images/WhatsApp Image 2026-05-10 at 11.39.13.jpeg";
import cdscoCosmeticProcessImage from "@/assets/images/image copy.png";
import cdscoCosmeticIngredientImage from "@/assets/images/WhatsApp Image 2026-05-10 at 11.39.13 (1) copy.jpeg";

const processSteps = [
  {
    title: "Product Review",
    description: "Review the product name, category, pack size, and product details before file preparation.",
  },
  {
    title: "Documentation Preparation",
    description:
      "Prepare declarations, product information, label details, ingredient details, and supporting records.",
  },
  {
    title: "Compliance Verification",
    description:
      "Check against Cosmetics Rules, 2020 standards, ingredient requirements, and labeling provisions.",
  },
  {
    title: "Application Submission",
    description: "Submit the application with the prescribed fee and supporting documentation.",
  },
  {
    title: "Regulatory Review",
    description: "Authority reviews the application, labels, declarations, and technical details.",
  },
  {
    title: "Grant of Registration Certificate",
    description: "After evaluation, the cosmetic registration certificate may be granted by CDSCO.",
  },
];

const cosmeticCategories = [
  "Face care products other than face mask",
  "Face mask",
  "Eye contour products",
  "Lip care products",
  "Hand care products",
  "Foot care products",
  "Body care products",
  "External intimate care products",
  "Chemical exfoliation products",
  "Mechanical exfoliation products",
  "Skin lightening products",
  "Other skin care products",
  "Soap products",
  "Bath / shower products",
  "Make-up remover products",
  "External intimate hygiene products",
  "Other skin cleansing products",
  "Chemical depilatories",
  "Physical epilation products",
  "Other body hair removal products",
  "Bleach for body hair",
  "Products with antiperspirant activity",
  "Products without antiperspirant activity",
  "Shaving products",
  "Pre- / after-shaving products",
  "Other shaving and pre- / after-shaving products",
  "Foundation",
  "Concealer",
  "Other face make-up products",
  "Mascara",
  "Eye shadow",
  "Eye pencil",
  "Eye liner",
  "Other eye make-up products",
  "Lip stick",
  "Lipstick sealer",
  "Other lip make-up products",
  "Body or face paint, including \"carneval make-up\"",
  "Other make-up products",
  "Hydro alcoholic perfumes",
  "Non hydro alcoholic perfumes",
  "Before and after sun products / Sun protection products",
  "Self-tanning products",
  "Other sun and self-tanning products",
  "Other skin products",
  "Hair conditioner",
  "Scalp and hair roots care products",
  "Anti hair loss products",
  "Other hair and scalp care and cleansing products",
  "Antidandruff products",
  "Oxidative hair colour products",
  "Non-oxidative hair colour products",
  "Hair bleaching and dye remover products",
  "Other hair colouring products",
  "Products for temporary hair styling",
  "Permanent wave products",
  "Hair relaxer / straightener products",
  "Other hair styling products",
  "Hair sun protection products",
  "Other hair and scalp products",
  "Nail varnish / Nail make-up",
  "Nail varnish remover",
  "Nail varnish thinner",
  "Nail bleach",
  "Other nail varnish and remover products",
  "Nail care products",
  "Nail hardener",
  "Other nail care / nail hardener products",
  "Nail glue remover",
  "Cuticle remover / softener",
  "Nail sculpting products",
  "Other nail and cuticle products",
  "Toothpaste",
  "Tooth cleansing powder / salt",
  "Other tooth care products",
  "Mouth wash",
  "Breath spray",
  "Other mouth wash / breath spray products",
  "Tooth whiteners",
  "Other oral hygiene products",
];

const eligibilityChecklist = [
  "Have a registered company",
  "Have an account on the CDSCO SUGAM portal",
  "Product details remain consistent",
  "Labels are properly prepared",
  "Ingredient information is available",
  "Supporting records are complete",
  "Technical documents are organized",
];

const productRequirements = [
  "Product name",
  "Cosmetic category",
  "Product variants",
  "Pack size details",
  "Ingredient information",
  "Label declarations",
  "Technical records",
  "Supporting documentation",
];

const documentChecklist = [
  "Product particulars",
  "Ingredient list",
  "Label artwork or draft label",
  "Compliance declarations",
  "Technical records",
  "Supporting identity records",
  "Site-related details where applicable",
];

const labelingRequirements = [
  "Name of the cosmetic",
  "Name and address of the responsible entity",
  "Use before or expiry date",
  "Batch number",
  "Net quantity declaration",
  "Caution or warning statements where applicable",
  "Ingredient list",
];

const legalMetrologyRequirements = [
  "Net quantity",
  "Maximum retail price (MRP)",
  "Customer care details",
  "Manufacturing date",
  "Expiry date",
  "Best before date",
  "Unit sale price (USP)",
];

const ingredientCompliance = [
  "Use of permitted colours and pigments",
  "Avoidance of prohibited raw materials",
  "Compliance with heavy metal limits",
  "Restricted use of certain substances",
  "Adherence to BIS-linked standards",
  "Prohibition of animal testing for cosmetics",
  "Compliance with Ninth Schedule standards for applicable product categories",
];

const feeStructure = [
  "Fee for grant of registration certificate",
  "Fee for retention of registration certificate",
  "Additional category fee",
  "Fee for duplicate certificate where applicable",
  "INR 10,000 for each category, INR 500 for each manufacturing site",
];

const technicalRecords = [
  "Batch records",
  "Testing records",
  "Raw material records",
  "Inspection records",
  "Change-related records",
  "Updated specifications where applicable",
];

const delayReasons = [
  "Incomplete documentation",
  "Inconsistent product details",
  "Incorrect label declarations",
  "Missing ingredient information",
  "Unclear technical records",
  "Delayed clarification responses",
];

const metaKeywords = [
  "cosmetic registration in India",
  "cosmetic registration process",
  "CDSCO cosmetic registration",
  "registration of cosmetics in India",
  "cosmetic product registration in India",
  "cosmetic registration India",
  "cosmetic product registration process",
  "CDSCO registration of cosmetics",
  "CDSCO registration process of cosmetics",
  "cosmetic registration eligibility India",
  "requirements for cosmetic registration in India",
  "CDSCO cosmetic registration requirements",
  "cosmetic registration approval requirements",
  "product requirements for cosmetic registration",
  "documents for cosmetic registration in India",
  "how long does cosmetic registration take in India",
  "cosmetic registration approval India",
  "cosmetic registration timeline India",
  "cosmetic registration certificate India",
  "cosmetic registration approval process",
  "what steps are involved in cosmetic registration in India",
  "how to get cosmetic registration in India",
  "what is the process of cosmetic registration in India",
  "how to apply for cosmetic registration in India",
].join(", ");

const faqs = [
  {
    question: "What is cosmetic registration in India?",
    answer:
      "Cosmetic registration in India is the regulatory process used to evaluate cosmetic products under the Cosmetics Rules, 2020 before approval is granted.",
  },
  {
    question: "How to apply for cosmetic registration in India?",
    answer:
      "The application process generally involves preparation of product details, label information, ingredient records, supporting documents, declarations, and prescribed fee payment before submission.",
  },
  {
    question: "What documents are required for cosmetic registration in India?",
    answer:
      "The registration file generally includes product particulars, ingredient details, labels, declarations, technical records, and supporting documentation connected with the cosmetic product.",
  },
  {
    question: "How long does cosmetic registration take in India?",
    answer:
      "The Cosmetics Rules, 2020 allow up to 60-90 days for approval or rejection of the application from the date of submission.",
  },
];

const CdscoCosmeticRegistrationIndia = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const canonical = "https://regacats.in/cdsco-registration-in-india/";

  const handleGetFreeConsultation = () => {
    const availServiceButton = document.querySelector('button[aria-label="Avail Service"]') as HTMLButtonElement | null;

    if (availServiceButton) {
      availServiceButton.click();
      return;
    }

    navigate("/contact");
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Cosmetic Registration in India - CDSCO Process & Requirements Guide 2026"
        description="Learn cosmetic registration in India, CDSCO process, documents, labeling, standards, fees, and approval requirements."
        canonical={canonical}
        type="website"
        keywords={metaKeywords}
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
                  CDSCO Cosmetic Registration in India
                </h1>
                <p className="text-cyan-100 text-lg leading-relaxed">
                  Cosmetic registration in India is governed by the Cosmetics Rules, 2020 and related standards that regulate product identity, labeling, ingredients, documents, fees, timelines, and recordkeeping.
                </p>
                <p className="text-cyan-100 text-lg leading-relaxed">
                  Proper preparation of product information and supporting documents helps reduce delays during the registration process and ensures compliance with CDSCO cosmetic registration requirements.
                </p>
                <p className="text-cyan-100 text-lg leading-relaxed">
                  This guide covers the CDSCO cosmetic registration process, eligibility, product and document requirements, labeling rules, ingredient standards, fees, timelines, and approval conditions.
                </p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-3 md:p-4 backdrop-blur-sm shadow-2xl lg:ml-auto w-full max-w-2xl mt-2 md:mt-4">
                <figure>
                  <img
                    src={cdscoCosmeticHeroImage}
                    alt="Cosmetic registration in India guide showing CDSCO process, labeling requirements, compliance documents, and cosmetic products"
                    title="Cosmetic Registration in India - CDSCO Process & Requirements Guide"
                    className="w-full h-auto max-h-[460px] rounded-xl border border-white/20 object-contain bg-white/90 p-2 md:p-3"
                    loading="eager"
                  />
                  <figcaption className="mt-3 text-xs text-cyan-100/90">
                    Comprehensive guide to cosmetic registration in India covering CDSCO process, labeling rules,
                    documents, ingredient standards, and compliance requirements.
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8">
            <Card className="border-cyan-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-900">What Is Cosmetic in India</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Cosmetic means any article intended to be rubbed, poured, sprinkled or sprayed on, or introduced into,
                  or otherwise applied to, the human body or any part thereof for cleansing, beautifying, promoting
                  attractiveness, or altering the appearance. It also includes any article intended for use as a
                  component of cosmetic.
                </p>
              </CardContent>
            </Card>

            <Card className="border-cyan-100 shadow-sm bg-gradient-to-b from-cyan-50 to-white">
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-900">What Is Cosmetic Registration in India</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Cosmetic registration in India is governed by the Cosmetics Rules, 2020 and the related standards that
                  regulate product identity, labeling, ingredients, documents, fees, timelines, and recordkeeping.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Proper preparation of product details, ingredient declarations, packaging information, and compliance
                  records helps reduce delays during the registration process.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-14 bg-cyan-50/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8 space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-950">CDSCO Process of Cosmetic Registration in India</h2>
              <p className="text-slate-600">
                The CDSCO cosmetic registration process verifies whether the product meets applicable legal, technical,
                labeling, and safety requirements before approval.
              </p>
            </div>
            <div className="max-w-6xl mx-auto grid xl:grid-cols-[1.05fr_0.95fr] gap-6 items-start">
              <div className="order-2 xl:order-1 space-y-4">
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

              <div className="order-1 xl:order-2 xl:sticky xl:top-24">
                <div className="rounded-2xl border border-cyan-100 bg-white p-3 md:p-4 shadow-sm mt-1">
                  <figure>
                    <img
                      src={cdscoCosmeticProcessImage}
                      alt="Step by step cosmetic registration process in India showing product review, label verification, ingredient compliance, CDSCO review, and registration certificate"
                      title="Cosmetic Registration Process in India - Step-by-Step CDSCO Guide"
                      className="w-full h-auto rounded-xl object-contain"
                      loading="lazy"
                    />
                    <figcaption className="mt-3 text-xs text-slate-600">
                      Step-by-step overview of the cosmetic registration process in India under Cosmetics Rules, 2020.
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4">
            <Card className="border-cyan-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-900">CDSCO Cosmetic Registration: Categories of Cosmetics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The Fourth Schedule of the Cosmetics Rules, 2020 includes multiple categories of cosmetics covered under
                  the registration framework.
                </p>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {cosmeticCategories.map((item) => (
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
                <CardTitle className="text-2xl text-cyan-900">Eligibility for Cosmetic Registration in India with CDSCO</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Eligibility depends on the completeness of the product file, product identity, compliance records, and
                  supporting documentation.
                </p>
                <ul className="space-y-2">
                  {eligibilityChecklist.map((item) => (
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
                <CardTitle className="text-2xl text-cyan-900">Product Requirements for CDSCO Cosmetic Registration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The registration file should clearly identify the product and related technical information.
                </p>
                <ul className="space-y-2">
                  {productRequirements.map((item) => (
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
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-cyan-100 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-cyan-900">Documents for CDSCO Cosmetic Registration in India</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Documents should remain complete, accurate, and aligned with product details.
                  </p>
                  <ul className="space-y-2">
                    {documentChecklist.map((item) => (
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
                  <CardTitle className="text-2xl text-cyan-900">Labeling Requirements as per Cosmetics Rules, 2020</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    The cosmetic label should generally contain the following declarations:
                  </p>
                  <ul className="space-y-2">
                    {labelingRequirements.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-slate-700">
                        <CheckCircle2 className="h-5 w-5 text-cyan-700 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-700 leading-relaxed mt-4">
                    The ingredient list should be declared in descending order for ingredients above one percent
                    concentration, followed by ingredients at or below one percent concentration.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-14 bg-cyan-50/50">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8">
            <Card className="border-cyan-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-900">Legal Metrology Requirements for Cosmetic Registration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Cosmetic products should comply with Legal Metrology declaration requirements for packaged commodities.
                </p>
                <ul className="space-y-2">
                  {legalMetrologyRequirements.map((item) => (
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
                <CardTitle className="text-2xl text-cyan-900">Ingredient Compliance as per BIS Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The Cosmetics Rules, 2020 require compliance with prescribed standards and ingredient restrictions.
                </p>
                <ul className="space-y-2">
                  {ingredientCompliance.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-cyan-700 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <figure className="mt-6 rounded-xl border border-cyan-100 bg-white p-3">
                  <img
                    src={cdscoCosmeticIngredientImage}
                    alt="Cosmetic ingredient compliance requirements in India under BIS standards and Cosmetics Rules 2020"
                    title="Cosmetic Ingredient Compliance Requirements in India"
                    className="w-full h-auto rounded-lg object-contain"
                    loading="lazy"
                  />
                  <figcaption className="mt-3 text-xs text-slate-600">
                    Overview of cosmetic ingredient compliance requirements, BIS standards, restricted substances, and
                    CDSCO regulatory checks in India.
                  </figcaption>
                </figure>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8">
            <Card className="border-cyan-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-900">Cosmetic Registration Fee Structure in India</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The fee structure is prescribed under the Cosmetics Rules, 2020 schedules.
                </p>
                <ul className="space-y-2">
                  {feeStructure.map((item) => (
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
                <CardTitle className="text-2xl text-cyan-900">How Long Does Cosmetic Registration Take in India?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed">
                  The Cosmetics Rules, 2020 provide a timeline of up to 60-90 days for grant or rejection of the
                  application from the date of submission. Timelines may vary depending on completeness of documents,
                  consistency of product details, label verification, ingredient review, and response to clarification
                  requests.
                </p>
                <p className="text-slate-700 leading-relaxed mt-4">
                  The registration certificate remains valid in perpetuity subject to prescribed retention fee requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-14 bg-cyan-50/50">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8">
            <Card className="border-cyan-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-900">Cosmetic Registration Certificate India</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed">
                  The cosmetic registration certificate is the formal approval issued after successful completion of the
                  registration review process. The Cosmetics Rules, 2020 also provide conditions related to grant,
                  retention, suspension and cancellation, duplicate certificate issuance, and reporting of changes in
                  product details.
                </p>
              </CardContent>
            </Card>

            <Card className="border-cyan-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-900">Technical and Site Records</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Product records and related technical information should remain properly maintained and updated.
                </p>
                <ul className="space-y-2">
                  {technicalRecords.map((item) => (
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
            <Card className="border-cyan-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-900">Common Reasons for Delay in Cosmetic Registration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Careful preparation of the registration file helps reduce avoidable delays during the approval process.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {delayReasons.map((item) => (
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

        <section className="py-14 bg-cyan-950 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
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

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4">
            <Card className="border-cyan-100 shadow-sm max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-900">Conclusion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed">
                  Cosmetic registration in India involves compliance with the Cosmetics Rules, 2020, labeling
                  requirements, ingredient standards, technical documentation, fee requirements, and recordkeeping
                  obligations. Proper preparation of product details, labels, ingredient information, and supporting
                  records helps maintain consistency during the cosmetic registration process.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 bg-[#407dd8] text-white">
          <div className="container mx-auto px-4 text-center max-w-3xl space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Get Expert Help for Cosmetic Registration in India</h2>
            <p className="text-blue-50">Need support with CDSCO cosmetic registration documentation and compliance?</p>
            <div className="max-w-xl mx-auto text-left">
              <p className="text-blue-50 mb-2">Contact Regacats today for:</p>
              <ul className="space-y-2 text-blue-50">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-white mt-0.5 shrink-0" />
                  <span>CDSCO registration support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-white mt-0.5 shrink-0" />
                  <span>Labeling and ingredient compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-white mt-0.5 shrink-0" />
                  <span>Approval readiness and submission guidance</span>
                </li>
              </ul>
            </div>
            <Button
              onClick={handleGetFreeConsultation}
              size="lg"
              className="bg-white text-[#1f3b77] hover:bg-blue-50 font-semibold"
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