import { Puzzle, Zap, FileCheck, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Puzzle,
      title: "End-to-End Support",
      description: "From consultation to final approval, we handle everything for you.",
    },
    {
      icon: Zap,
      title: "Faster Processing",
      description: "Direct coordination with CPCB officials for quicker approvals.",
    },
    {
      icon: FileCheck,
      title: "Error-Free Documentation",
      description: "Managed by trained professionals who know CPCB requirements inside out.",
    },
    {
      icon: MapPin,
      title: "Pan India Coverage",
      description: "Helping brands across all states with local expertise.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="mb-4 text-foreground">Why Businesses Choose Regacats Solutions</h2>
          <p className="text-lg text-muted-foreground">
            Join hundreds of businesses who trust us for their EPR compliance needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="group shadow-soft hover:shadow-glow transition-smooth border-border bg-card hover:scale-105 cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
