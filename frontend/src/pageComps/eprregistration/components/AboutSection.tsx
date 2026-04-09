import { FileText, Globe, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  const features = [
    {
      icon: FileText,
      title: "Fast Documentation Support",
      description: "Expert help with all required documents and CPCB-aligned formats.",
    },
    {
      icon: Users,
      title: "Dedicated EPR Experts",
      description: "Experienced professionals managing your compliance workflow.",
    },
    {
      icon: Globe,
      title: "Pan India Assistance",
      description: "Support for businesses operating across all Indian states.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="mb-6 text-foreground font-semibold">What Are EPR Rules in India?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Extended Producer Responsibility (EPR) rules in India assign post-consumer waste accountability to
            Producers, Importers, and Brand Owners (PIBOs). These rules help improve collection, recycling, and
            environmentally responsible disposal of plastic and other regulated waste streams.
          </p>
          <h3 className="mt-8 mb-4 text-foreground font-semibold">What Is Extended Producer Responsibility (EPR)?</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            EPR is a regulatory framework that extends producer responsibility beyond sale to end-of-life waste
            management. Businesses are expected to plan recovery channels, partner with authorized recyclers or PROs,
            and maintain compliance records as per CPCB requirements.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            <strong className="text-foreground">Regacats Solutions</strong> simplifies the entire process from
            documentation and CPCB coordination to post-approval compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="shadow-soft hover:shadow-medium transition-smooth border-border bg-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
