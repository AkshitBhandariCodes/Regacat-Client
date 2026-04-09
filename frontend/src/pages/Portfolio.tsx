import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { LeadPopup } from "@/components/LeadPopup";
import { BrandsCarousel } from "@/components/BrandsCarousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEO from "@/seo/SEO";

const brandLogoModules = import.meta.glob("../assets/brandslogo/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const formatLogoName = (path: string) =>
  path
    .split("/")
    .pop()
    ?.replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim() ?? "Client";

const clientLogos = Array.from(
  new Map(
    Object.entries(brandLogoModules)
      .filter(([path]) => !path.toLowerCase().endsWith("whatsapp.png"))
      .sort((a, b) => formatLogoName(a[0]).localeCompare(formatLogoName(b[0])))
      .map(([path, image]) => {
        const name = formatLogoName(path);
        return [name.toLowerCase(), { name, image }];
      }),
  ).values(),
);

const findLogo = (...keywords: string[]) =>
  clientLogos.find(({ name }) => keywords.some((keyword) => name.toLowerCase().includes(keyword.toLowerCase())))
    ?.image ?? clientLogos[0]?.image;

const servicePages = [
  {
    title: "CDSCO Import Service",
    description: "Explore import-focused regulatory support for drugs, cosmetics, and medical devices.",
    href: "/cdsco-import-service",
  },
  {
    title: "CDSCO Cosmetic Registration",
    description: "View the dedicated service page for cosmetic registration support in India.",
    href: "/cdsco-registration-in-india",
  },
  {
    title: "Cosmetic Import License",
    description: "See the complete COS-1 and COS-2 service page for cosmetic imports into India.",
    href: "/cosmetic-import-license-india",
  },
  {
    title: "Medical Device Import License",
    description: "Review the service page for medical device classification, filing, and CDSCO support.",
    href: "/medical-device-import-license-india",
  },
  {
    title: "FSSAI Nutraceutical Import",
    description: "Open the nutraceutical import consulting page for FSSAI-focused filing support.",
    href: "/fssai-nutraceutical-import-consultant-india",
  },
  {
    title: "Indian Authorized Agent Services",
    description: "Visit the service page for local authorized-agent support across regulated categories.",
    href: "/indian-authorized-agent-services-india",
  },
];

const testimonials = [
  {
    name: "Shariyath Banu",
    role: "Founder",
    company: "Blush Beauty, Kerala",
    quote:
      "Regacats has truly been a blessing in my CDSCO licensing journey. Akshay and the team handled everything professionally and kept me supported through every stage.",
    logo: findLogo("blush"),
  },
  {
    name: "Jay Lyu",
    role: "International Law Head",
    company: "TCI Co. Ltd., Taiwan",
    quote:
      "Regacats Solutions helped us complete FSSAI compliance for nutraceutical imports from Taiwan. The process was clear, fast, and very well organized.",
    logo: findLogo("tci"),
  },
  {
    name: "Surojit",
    role: "Sales",
    company: "Agaro Lifestyle, New Delhi",
    quote:
      "The team supported our medical device import license process with clear CDSCO guidance, strong documentation support, and timely follow-up at every step.",
    logo: findLogo("agaro"),
  },
  {
    name: "Varun Verma",
    role: "Co-Founder",
    company: "BBetter, Hyderabad",
    quote:
      "Regacats Solutions guided us through nutraceutical and health supplement licensing with practical, accurate advice and smooth end-to-end coordination.",
    logo: findLogo("bbetter"),
  },
  {
    name: "Raj Mistry",
    role: "Founder",
    company: "Super Million Hairs, United Kingdom",
    quote:
      "For our cosmetic import process from the UK, Regacats handled CDSCO requirements thoroughly and delivered a smooth, transparent licensing journey.",
    logo: findLogo("super"),
  },
];

const Portfolio = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const activeTestimonial = testimonials[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Portfolio | Regacats Solutions"
        description="Explore verified client logos, service-page pathways, and moving testimonial highlights for Regacats Solutions."
        canonical="https://regacats.in/portfolio"
      />
      <TopBar />
      <Navigation onConsultClick={() => navigate("/contact")} />

      <main className="overflow-x-hidden">
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#082f49_0%,#0f766e_42%,#d6a334_100%)] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_40%)]" />
          <div className="absolute -left-16 top-12 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-amber-200/20 blur-3xl" />

          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <div className="max-w-4xl space-y-6">
              <p className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide uppercase">
                Portfolio Overview
              </p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Real client references, verified brand visibility, and direct regulatory service pathways
              </h1>
              <p className="max-w-3xl text-lg md:text-xl text-white/85 leading-8">
                Explore how Regacats Solutions supports compliance programs across CDSCO and FSSAI categories through
                active client engagements, service-linked workflows, and practical regulatory execution.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100"
                >
                  Talk to Our Experts
                </Link>
                <Link
                  to="/team"
                  className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
                >
                  Meet the Team
                </Link>
              </div>
            </div>
          </div>
        </section>

        <BrandsCarousel
          title="Our Clientele Across Regulated Categories"
          description="A live multi-row logo wall of brands we support across food, cosmetics, medical devices, nutraceuticals, and drug compliance services."
        />

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 py-4">
            <div className="max-w-3xl mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">Service Pathways</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">Explore the service pages behind each compliance requirement</h2>
              <p className="mt-4 text-slate-600 leading-7">
                Open any service page to review process scope, required documentation, and expert support for each regulatory pathway.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {servicePages.map((service) => (
                <Card key={service.title} className="border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-7">
                    <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                    <p className="mt-3 text-slate-600 leading-7">{service.description}</p>
                    <Link
                      to={service.href}
                      className="mt-6 inline-flex items-center gap-2 font-semibold text-teal-700 hover:text-teal-800"
                    >
                      Visit service page
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-950 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">Client Testimonials</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold">What clients say about working with Regacats Solutions</h2>
              <p className="mt-4 text-white/70 leading-7">
                Verified feedback from clients across CDSCO and FSSAI compliance engagements.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] items-start">
              <Card key={`${activeTestimonial.name}-${currentIndex}`} className="border-white/10 bg-white/5 shadow-none animate-fade-in">
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
                      Client Reference
                    </span>
                    <span className="text-sm text-white/50">
                      {currentIndex + 1} / {testimonials.length}
                    </span>
                  </div>

                  <div className="mt-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                    {activeTestimonial.logo && (
                      <div className="flex h-16 w-24 items-center justify-center rounded-xl bg-white px-3">
                        <img src={activeTestimonial.logo} alt={activeTestimonial.company} className="max-h-10 max-w-full object-contain" />
                      </div>
                    )}
                    <div>
                      <div className="font-semibold text-lg">{activeTestimonial.name}</div>
                      <div className="text-sm text-white/70">{activeTestimonial.role}</div>
                      <div className="text-sm text-white/60">{activeTestimonial.company}</div>
                    </div>
                  </div>
                  <p className="mt-6 text-base leading-8 text-white/85 italic">"{activeTestimonial.quote}"</p>

                  <div className="mt-8 flex items-center gap-3">
                    <Button variant="outline" size="icon" onClick={handlePrev} className="border-white/20 bg-transparent text-white hover:bg-white hover:text-slate-900">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={handleNext} className="border-white/20 bg-transparent text-white hover:bg-white hover:text-slate-900">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                    <div className="ml-2 flex gap-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => setCurrentIndex(index)}
                          className={`h-2.5 rounded-full transition-all ${
                            index === currentIndex ? "w-8 bg-amber-300" : "w-2.5 bg-white/30"
                          }`}
                          aria-label={`Show testimonial ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.name}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    className={`text-left rounded-2xl border p-5 transition ${
                      index === currentIndex
                        ? "border-amber-300 bg-white/10"
                        : "border-white/10 bg-white/5 hover:bg-white/8"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {testimonial.logo && (
                        <div className="flex h-12 w-16 items-center justify-center rounded-lg bg-white px-2">
                          <img src={testimonial.logo} alt={testimonial.company} className="max-h-8 max-w-full object-contain" />
                        </div>
                      )}
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-white/60">{testimonial.company}</div>
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-white/60">{testimonial.role}</div>
                    <div className="mt-3 text-sm leading-6 text-white/75">
                      "{testimonial.quote.length > 140 ? `${testimonial.quote.slice(0, 140)}...` : testimonial.quote}"
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[linear-gradient(135deg,#0f172a_0%,#134e4a_100%)] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-5">
              <h2 className="text-3xl md:text-4xl font-bold">Need help choosing the right compliance path?</h2>
              <p className="text-lg text-white/80 leading-8">
                Open the service page that matches your requirement, or speak with our team directly if you need help selecting the right route.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Start a Discussion
                </Link>
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      <LeadPopup />
    </div>
  );
};

export default Portfolio;
