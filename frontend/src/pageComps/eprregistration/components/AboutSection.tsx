import { FileText, Users, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  const features = [
    {
      icon: FileText,
      title: "Fast Documentation Support",
      description: "Expert help with all required documents and CPCB formats",
    },
    {
      icon: Users,
      title: "Dedicated EPR Experts",
      description: "Experienced professionals managing your compliance journey",
    },
    {
      icon: Globe,
      title: "PAN India Assistance",
      description: "Supporting businesses across all states in India",
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="mb-6 text-foreground"><strong>What is EPR Rules in India?</strong></h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
          Welcome to our comprehensive guide on Extended Producer Responsibility (EPR) rules in India. As environmental concerns become increasingly urgent, India's regulatory framework for waste management, particularly for plastic and electronic waste, has evolved to hold producers accountable for the lifecycle of their products. Here, we explore the key aspects of EPR rules and their impact on sustainable waste management in India.

          </p><br />
          <h2 className="mb-6 text-foreground"><strong>What is Extended Producer Responsibility (EPR)?
          </strong></h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
          Extended Producer Responsibility (EPR) is an environmental policy approach that holds producers accountable for the entire lifecycle of their products, including post-consumer waste. Under EPR rules, producers, importers, and brand owners (PIBOs) are required to manage the collection, recycling, and disposal of their products once they are discarded by consumers. This policy aims to reduce waste, encourage recycling, and promote environmentally sustainable practices.

          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            <strong className="text-foreground">Regacats Solutions</strong> simplifies the entire process — from 
            documentation and CPCB coordination to post-approval compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
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
