import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { TopBar } from "@/components/TopBar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { LeadPopup } from "@/components/LeadPopup";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";

const relatedServices = [
  {
    title: "Indian Authorized Agent for Medical Devices",
    description: "Regulatory representation, classification guidance, licensing support, and post-market compliance for foreign medical device manufacturers.",
    href: "/indian-authorized-agent-for-medical-devices",
  },
  {
    title: "Indian Authorized Agent for Cosmetics",
    description: "Local accountable representation for cosmetic registrations, import compliance, CDSCO communication, and post-approval obligations.",
    href: "/indian-authorized-agent-for-cosmetics-in-india",
  },
  {
    title: "Indian Authorized Agent for FSSAI Products",
    description: "FSSAI-facing authorized representation for imported food, supplements, and nutraceutical products with ongoing compliance support.",
    href: "/indian-authorized-agent-for-fssai-products",
  },
  {
    title: "Indian Authorized Agent for Drugs",
    description: "Drug regulatory representation covering registration pathways, import licensing, pharmacovigilance, and authority responses.",
    href: "/indian-authorized-agent-for-drugs",
  },
];

const whoRequires = [
  "Overseas food and beverage manufacturers",
  "Foreign dietary supplement and nutraceutical companies",
  "International cosmetics manufacturers",
  "Global medical device manufacturers",
  "Foreign pharmaceutical and drug manufacturers",
];

const keyResponsibilities = [
  "Acting as the official regulatory representative in India",
  "Submitting registrations, licenses, and approvals",
  "Coordinating import-related regulatory requirements",
  "Responding to authority queries and inspections",
  "Managing post-market surveillance and compliance",
  "Maintaining regulatory documentation and records",
];

const structuredApproach = [
  "Regulatory assessment and category mapping",
  "Formal appointment as Indian Authorized Agent",
  "Submission of registrations and approvals",
  "Continuous authority coordination",
  "Post-market compliance and reporting",
];

const faqs = [
  {
    question: "Is an Indian Authorized Agent mandatory for foreign manufacturers entering India?",
    answer:
      "Yes. For most regulated categories, Indian authorities require a locally established accountable representative for regulatory communication and compliance continuity.",
  },
  {
    question: "Can one Indian Authorized Agent support multiple categories?",
    answer:
      "Yes, provided the agent has appropriate capability and compliant processes for each category such as drugs, devices, cosmetics, and FSSAI products.",
  },
  {
    question: "Is Indian Authorized Agent the same as importer of record?",
    answer:
      "No. Both roles are different. The authorized agent manages regulatory accountability, while importer of record handles commercial and customs responsibilities.",
  },
  {
    question: "Can a foreign manufacturer change its Indian Authorized Agent later?",
    answer:
      "Yes. Changes are possible through prescribed procedures and compliant documentation updates.",
  },
  {
    question: "Does agent appointment replace product licensing and registration?",
    answer:
      "No. Agent appointment and product licenses/registrations are separate obligations that work together.",
  },
];

const IndianAuthorizedAgentServicesIndiaMain = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Indian Authorized Agent Services",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Missing fields",
        description: "Please fill all required fields.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch("https://regacats.in/api/sendDeviceMail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!result.success) {
        throw new Error(result.message || "Failed to submit");
      }

      toast({
        title: "Request submitted",
        description: "Our compliance team will contact you shortly.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "Indian Authorized Agent Services",
        message: "",
      });
    } catch {
      toast({
        title: "Submission failed",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navigation onConsultClick={() => navigate("/")} />

      <main className="overflow-x-clip">
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-sky-700 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.24),transparent_46%)]" />
          <div className="container mx-auto px-4 py-14 md:py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <p className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase">
                  Indian Authorized Agent Services
                </p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">Indian Authorized Agent Services in India</h1>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Full-scale regulatory representation for foreign manufacturers entering India across medical devices, cosmetics, FSSAI products, and drugs.
                </p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-2 backdrop-blur-sm shadow-2xl lg:ml-auto w-full max-w-2xl">
                <img
                  src="https://blogs.regacats.in/wp-content/uploads/2026/01/indian-authorized-agent-services-india-regacats-1024x683.webp"
                  alt="Indian Authorized Agent Services in India"
                  className="w-full h-[240px] sm:h-[320px] md:h-[380px] object-cover rounded-xl"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950">Regulatory Representation for Foreign Manufacturers</h2>
              <p className="text-slate-700 text-lg leading-relaxed">
                Indian regulations require local accountability. An Indian Authorized Agent acts as your official point of contact for authority communication, submissions, inspections, and post-market compliance management.
              </p>
              <p className="text-slate-600 leading-relaxed">
                India is one of the fastest-growing regulated markets for food, nutraceuticals, cosmetics, medical devices, and pharmaceuticals. With over 10+ years of focused regulatory support experience, Regacats helps global manufacturers enter India with structure, clarity, and controlled compliance risk.
              </p>
            </div>
          </div>
        </section>

        <section className="py-14 bg-blue-50/40">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8">
            <Card className="border-blue-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">What Is an Indian Authorized Agent (IAA)?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-slate-700">
                <p>
                  An Indian Authorized Agent is a legally appointed local representative for foreign manufacturers who need to interact with Indian authorities.
                </p>
                <p>
                  The IAA serves as the accountable interface for submissions, regulatory communication, notices, inspections, and post-market obligations.
                </p>
                <p>
                  This ensures regulatory continuity in India even when the manufacturer is headquartered outside India.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Why It Is Mandatory for Exporting to India</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "India follows a local accountability model for regulated products",
                    "Authorities such as FSSAI and CDSCO require compliant local representation",
                    "Helps ensure timely responses during application review and inspections",
                    "Supports enforcement of Indian legal and compliance obligations",
                    "Without valid IAA, brands may face rejection, delays, or restricted market access",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-blue-700 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 space-y-8">
            <div className="max-w-4xl mx-auto text-center space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950">Who Requires Indian Authorized Agent Services?</h2>
              <p className="text-slate-600">IAA requirement applies even if your products are already approved in the US, EU, UK, South Korea, Australia, or other markets.</p>
            </div>

            <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {whoRequires.map((item) => (
                <div key={item} className="rounded-xl border border-blue-100 bg-blue-50/50 px-4 py-3 text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-blue-50/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8 space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950">Product Categories Covered</h2>
              <p className="text-slate-600">Each category follows a different regulatory framework, so category-specific strategy is essential.</p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
              {[
                {
                  title: "Food, Supplements & Nutraceuticals",
                  desc: "Representation before FSSAI for licensing, approvals, import compliance, and post-market obligations.",
                },
                {
                  title: "Cosmetics",
                  desc: "Cosmetic registration, label compliance, import permissions, and authority coordination under CDSCO framework.",
                },
                {
                  title: "Medical Devices",
                  desc: "Device registration, submission management, vigilance support, and compliance under Indian device rules.",
                },
                {
                  title: "Drugs & Pharmaceuticals",
                  desc: "Drug registrations, import license support, regulatory communications, and ongoing compliance oversight.",
                },
              ].map((cat) => (
                <Card key={cat.title} className="border-blue-100 shadow-sm h-full">
                  <CardContent className="pt-6 space-y-2">
                    <h3 className="text-lg font-semibold text-blue-900">{cat.title}</h3>
                    <p className="text-sm text-slate-600">{cat.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-blue-50/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8 space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950">Category-Specific Service Pages</h2>
              <p className="text-slate-600">Choose a category to view full details, process steps, required documents, and FAQs.</p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
              {relatedServices.map((service) => (
                <Card key={service.title} className="border-blue-100 shadow-sm hover:shadow-md transition-shadow h-full">
                  <CardContent className="pt-6 space-y-3 flex flex-col h-full">
                    <h3 className="text-lg font-semibold text-blue-900">{service.title}</h3>
                    <p className="text-sm text-slate-600 flex-1">{service.description}</p>
                    <Link
                      to={service.href}
                      className="inline-flex items-center justify-center rounded-md bg-blue-900 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800 transition-colors"
                    >
                      View Service
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8">
            <Card className="border-blue-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Key Responsibilities of Indian Authorized Agent</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {keyResponsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-blue-700 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Why Brands Choose Regacats</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Dedicated regulatory execution across multiple product categories",
                    "Single accountable interface with Indian authorities",
                    "Compliance-first documentation and response quality",
                    "Structured lifecycle support from entry to post-market",
                    "Risk reduction for delays, deficiencies, and non-compliance",
                    "Practical coordination between global teams and India operations",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-blue-700 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8">
            <Card className="border-blue-100 shadow-sm bg-blue-50/40">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Indian Authorized Agent</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Handles regulatory and compliance representation",
                    "Interfaces directly with Indian authorities",
                    "Manages approvals and post-market obligations",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-blue-700 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100 shadow-sm bg-blue-50/40">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Importer of Record</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Handles customs clearance and logistics",
                    "Manages commercial import transactions",
                    "May coexist with IAA but serves a different purpose",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-blue-700 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-14 bg-blue-50/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8 space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950">Our Structured Approach</h2>
              <p className="text-slate-600">A predictable execution model that keeps your India entry on schedule and compliant.</p>
            </div>
            <div className="max-w-4xl mx-auto grid gap-3">
              {structuredApproach.map((step, index) => (
                <div key={step} className="rounded-lg border border-blue-100 bg-white px-5 py-4 flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-900 text-white text-sm font-bold shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-blue-950 text-white">
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
                    {isOpen && <p className="mt-3 text-blue-100">{faq.answer}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-950 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-10 space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold">Get Expert Indian Authorized Agent Support</h2>
              <p className="text-blue-100">
                Share your category and product details to receive a structured compliance roadmap for India.
              </p>
            </div>

            <Card className="max-w-3xl mx-auto border-white/20 bg-white text-slate-900">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Full name *"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email address *"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Phone number *"
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    required
                  />
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, service: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Indian Authorized Agent Services">Indian Authorized Agent Services</SelectItem>
                      <SelectItem value="Indian Authorized Agent - Medical Devices">Indian Authorized Agent - Medical Devices</SelectItem>
                      <SelectItem value="Indian Authorized Agent - Cosmetics">Indian Authorized Agent - Cosmetics</SelectItem>
                      <SelectItem value="Indian Authorized Agent - FSSAI Products">Indian Authorized Agent - FSSAI Products</SelectItem>
                      <SelectItem value="Indian Authorized Agent - Drugs">Indian Authorized Agent - Drugs</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="md:col-span-2">
                    <Textarea
                      placeholder="Share your product details and requirement *"
                      value={formData.message}
                      onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                      rows={5}
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Get Consultation"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      <LeadPopup />
    </div>
  );
};

export default IndianAuthorizedAgentServicesIndiaMain;
