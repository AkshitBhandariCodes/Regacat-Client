import { useState } from "react";
import { FileCheck, Pill, Stethoscope, Award, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

interface Service {
  title: string;
  tagline: string;
  summary: string;
  details: string;
  icon: any;
  href: string;
}

const services: Service[] = [
  {
    title: "Cosmetic Import License COS 2",
    tagline: "A Cosmetic Import License allows international beauty brands to enter the Indian market legally, ensuring every product meets safety and quality norms.",
    summary: "Get expert assistance in obtaining cosmetic import licenses for your beauty and personal care products.",
    details: "Our comprehensive cosmetic import license service includes consultation on regulatory requirements, documentation preparation, liaison with regulatory authorities, and complete support until license approval. We handle all aspects of CDSCO cosmetic registration and ensure compliance with Indian regulations.",
    icon: Pill,
    href: "/cosmetic-import-license-india",
  },
  {
    title: "CDSCO Drug Registration",
    tagline: "CDSCO Drug Registration authorizes pharmaceutical products for legal sale in India, ensuring compliance with national drug safety standards.",
    summary: "Navigate CDSCO regulations efficiently with our expert guidance and documentation support.",
    details: "We provide end-to-end CDSCO registration services including Form 10 & 10A, manufacturing license, import license, and product registration. Our team ensures accurate documentation, faster processing, and complete compliance with Central Drugs Standard Control Organization requirements.",
    icon: FileCheck,
    href: "/cdsco-registration",
  },
  {
    title: "Medical Device Import License MD14",
    tagline: "Medical Device License ensures products meet safety, quality, and regulatory standards before sale or distribution in India.",
    summary: "Secure medical device licenses quickly with our specialized regulatory expertise.",
    details: "Our medical device licensing services cover Class A, B, C, and D devices. We assist with product classification, technical documentation, manufacturing license, import registration, and ongoing compliance. Our experts ensure your devices meet all Indian regulatory standards.",
    icon: Stethoscope,
    href: "/medical-device-import-license-india",
  },
  {
    title: "FSSAI Services",
    tagline: "FSSAI license ensures food businesses maintain safety, hygiene, and quality standards as per Indian regulations.",
    summary: "Complete trademark registration and FSSAI licensing for food businesses.",
    details: "We offer comprehensive services for trademark registration, brand protection, and FSSAI licensing. From state to central FSSAI licenses, we handle documentation, filing, and follow-ups. Protect your brand identity while ensuring food safety compliance.",
    icon: Award,
    href: "/fssai-consultants-india",
  },
  {
    title: "EPR Authorization",
    tagline: "EPR authorization ensures producers manage, collect, and recycle waste from their products responsibly.",
    summary: "Obtain BIS certification for your products with our streamlined process.",
    details: "Get BIS (Bureau of Indian Standards) certification for electronics, appliances, and other products. We provide complete support including product testing coordination, documentation, application filing, factory inspection preparation, and certificate maintenance.",
    icon: ShieldCheck,
    href: "/epr-registration",
  },
  {
    title: "Legal Metrology",
    tagline: "A Legal Metrology License ensures that all packaged goods follow accurate weight, measurement, and labeling standards, protecting both consumers and businesses.",
    summary: "Obtain BIS certification for your products with our streamlined process.",
    details: "Get BIS (Bureau of Indian Standards) certification for electronics, appliances, and other products. We provide complete support including product testing coordination, documentation, application filing, factory inspection preparation, and certificate maintenance.",
    icon: ShieldCheck,
    href: "/legal-metrology",
  },
];

interface ServicesSectionProps {
  onConsultClick: () => void;
}

export const ServicesSection = ({ onConsultClick }: ServicesSectionProps) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <>
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive regulatory solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative h-64 cursor-pointer group perspective-1000"
                onMouseEnter={() => setFlipped(index)}
                onMouseLeave={() => setFlipped(null)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
                    flipped === index ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Front of card */}
                  <div className="absolute w-full h-full backface-hidden bg-card border border-border rounded-lg p-6 shadow-lg flex flex-col items-center justify-center text-center">
                    <service.icon className="h-16 w-16 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.tagline}</p>
                  </div>

                  {/* Back of card */}
                  <div className="absolute w-full h-full backface-hidden bg-primary text-primary-foreground rounded-lg p-6 shadow-lg rotate-y-180 flex flex-col justify-between">
                    <p className="text-sm mb-4">{service.summary}</p>
                    <Button
                      variant="secondary"
                      onClick={() => setSelectedService(service)}
                      className="w-full bg-white text-primary hover:bg-white/90"
                    >
                      Read More
                    </Button>
                    <Link to={service.href} className="block">
                      <Button
                        variant="outline"
                        className="w-full mt-2 border-white bg-transparent text-white hover:bg-white hover:text-primary"
                      >
                        Visit Service Page
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Sheet */}
      <Sheet open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <SheetContent className="w-full sm:max-w-2xl overflow-y-auto">
          {selectedService && (
            <>
              <SheetHeader>
                <SheetTitle className="text-2xl flex items-center gap-3">
                  <selectedService.icon className="h-8 w-8 text-primary" />
                  {selectedService.title}
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-4">
                <p className="text-muted-foreground italic">{selectedService.tagline}</p>
                <p className="text-foreground leading-relaxed">{selectedService.details}</p>
                <div className="pt-6">
                  <Button onClick={onConsultClick} className="w-full" size="lg">
                    Get Free Consulting
                  </Button>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </>
  );
};
