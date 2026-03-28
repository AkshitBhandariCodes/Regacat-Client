import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
import SEO from "@/seo/SEO";
import WebsiteSchema from "@/seo/schema/WebsiteSchema";
import FAQSchema from "@/seo/schema/FAQSchema";

export interface FssaiFaq {
  question: string;
  answer: string;
}

export interface FssaiDetailSection {
  title: string;
  description: string;
  points?: string[];
}

export interface FssaiServiceData {
  heroBadge: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  processImage?: string;
  secondaryImage?: string;
  highlights: string[];
  detailedSteps: FssaiDetailSection[];
  timeline: { label: string; value: string }[];
  documents: string[];
  challenges: string[];
  faqs: FssaiFaq[];
  formServiceOptions: string[];
}

interface FssaiServiceTemplateProps {
  data: FssaiServiceData;
}

const FssaiServiceTemplate = ({ data }: FssaiServiceTemplateProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  const heroBadge = data?.heroBadge ?? "FSSAI Service";
  const heroTitle = data?.heroTitle ?? "FSSAI Regulatory Service";
  const heroDescription = data?.heroDescription ?? "Complete FSSAI regulatory support for your business.";
  const heroImage = data?.heroImage ?? "";
  const highlights = data?.highlights ?? [];
  const timeline = data?.timeline ?? [];
  const detailedSteps = data?.detailedSteps ?? [];
  const documents = data?.documents ?? [];
  const challenges = data?.challenges ?? [];
  const faqs = data?.faqs ?? [];
  const formServiceOptions = data?.formServiceOptions ?? ["FSSAI Service"];
  const processImage = data?.processImage;
  const secondaryImage = data?.secondaryImage;
  const siteUrl = "https://regacats.in";
  const canonical = `${siteUrl}${location.pathname}`;
  const schema = [
    WebsiteSchema(),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: heroTitle,
      description: heroDescription,
      provider: {
        "@type": "Organization",
        name: "Regacats Solutions",
        url: siteUrl,
      },
      areaServed: "India",
      serviceType: heroBadge,
      url: canonical,
      image: heroImage || undefined,
    },
    FAQSchema(faqs),
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: formServiceOptions[0] ?? "FSSAI Service",
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
      const response = await fetch("https://regacats.in/api/sendFssaiMail.php", {
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
        description: "Our FSSAI team will contact you shortly.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: formServiceOptions[0] ?? "FSSAI Service",
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
      <SEO
        title={`${heroTitle} | Regacats Solutions`}
        description={heroDescription}
        canonical={canonical}
        type="website"
        image={heroImage}
        jsonLd={schema}
      />
      <TopBar />
      <Navigation onConsultClick={() => navigate("/")} />

      <main className="overflow-x-clip">
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_45%)]" />
          <div className="container mx-auto px-4 py-14 md:py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <p className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase">
                  {heroBadge}
                </p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">{heroTitle}</h1>
                <p className="text-blue-100 text-lg leading-relaxed">{heroDescription}</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-2 backdrop-blur-sm shadow-2xl lg:ml-auto w-full max-w-2xl">
                {heroImage ? (
                  <img
                    src={heroImage}
                    alt={heroTitle}
                    className="w-full h-[220px] sm:h-[300px] md:h-[360px] object-contain bg-white p-2 rounded-xl"
                    loading="eager"
                  />
                ) : (
                  <div className="w-full h-[220px] sm:h-[300px] md:h-[360px] rounded-xl bg-white/10" />
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-6">
            <Card className="border-blue-100 shadow-sm lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Key highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-blue-700 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100 shadow-sm bg-gradient-to-b from-blue-50 to-white">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Timelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {timeline.map((item) => (
                  <div key={item.label} className="rounded-lg border border-blue-100 bg-white px-4 py-3">
                    <p className="text-sm text-slate-600">{item.label}</p>
                    <p className="text-blue-900 font-semibold">{item.value}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-14 bg-blue-50/50">
          <div className="container mx-auto px-4 space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950">Step-by-step process</h2>
            </div>

            <div className="grid xl:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
              <div className="space-y-4">
                {detailedSteps.map((step, index) => (
                  <Card key={step.title} className="border-blue-100 shadow-sm">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-900 text-white text-sm font-bold shrink-0">
                          {index + 1}
                        </span>
                        <div className="space-y-2">
                          <h3 className="text-lg md:text-xl font-semibold text-blue-900">{step.title}</h3>
                          <p className="text-slate-700 leading-relaxed">{step.description}</p>
                          {step.points && step.points.length > 0 && (
                            <ul className="space-y-1.5">
                              {step.points.map((point) => (
                                <li key={point} className="flex items-start gap-2 text-slate-600">
                                  <CheckCircle2 className="h-4 w-4 text-blue-700 mt-0.5 shrink-0" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="space-y-6 xl:sticky xl:top-24">
                {processImage && (
                  <img
                    src={processImage}
                    alt="FSSAI process visual"
                    className="w-full max-h-[360px] rounded-2xl border border-blue-100 shadow-sm object-contain bg-white p-2"
                    loading="lazy"
                  />
                )}
                {secondaryImage && (
                  <img
                    src={secondaryImage}
                    alt="FSSAI compliance visual"
                    className="w-full max-h-[360px] rounded-2xl border border-blue-100 shadow-sm object-contain bg-white p-2"
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8">
            <Card className="border-blue-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Documents checklist</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {documents.map((item) => (
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
                <CardTitle className="text-2xl text-blue-900">Common challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {challenges.map((item) => (
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
              <h2 className="text-3xl md:text-4xl font-bold">Get expert FSSAI support</h2>
              <p className="text-blue-100">
                Share your requirement and our team will suggest the right regulatory path.
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
                      {formServiceOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
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

export default FssaiServiceTemplate;