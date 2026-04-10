import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

export const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeTestimonial = testimonials[currentIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
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
  );
};
