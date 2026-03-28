import { Puzzle, Zap, FileCheck, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Puzzle,
      title: "End-to-End Support",
      description: "From consultation to certification.",
    },
    {
      icon: Zap,
      title: "Faster Processing",
      description: "Quick coordination with Legal Metrology officials.",
    },
    {
      icon: FileCheck,
      title: "Error-Free Documentation",
      description: "All forms verified by compliance experts.",
    },
    {
      icon: Globe,
      title: "Pan India Coverage",
      description: "Helping clients across all states & UTs.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Leading Brands Trust Regacats Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="border-2 hover:border-accent hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group animate-fade-in-up bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8 pb-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-accent/10 rounded-2xl group-hover:bg-accent/20 transition-colors">
                    <reason.icon className="h-10 w-10 text-accent" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-card-foreground">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
