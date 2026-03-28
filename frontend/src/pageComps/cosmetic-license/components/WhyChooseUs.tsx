import { Puzzle, Zap, FileCheck2, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Puzzle,
      title: "End-to-End Support",
      description: "From consultation to final approval, we handle every step of the licensing process."
    },
    {
      icon: Zap,
      title: "Faster Processing",
      description: "Direct coordination with CDSCO officials ensures quicker turnaround times."
    },
    {
      icon: FileCheck2,
      title: "Error-Free Documentation",
      description: "Managed by trained regulatory professionals to ensure compliance and accuracy."
    },
    {
      icon: Globe,
      title: "Pan India Coverage",
      description: "Assistance for importers across all zones with local expertise."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-3xl font-bold text-foreground mb-4">
            Why Choose Regacats Solutions for Cosmetic Import License (Cos-2)
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              // <Card 
              //   key={index} 
              //   className="border-none shadow-card hover:shadow-glow transition-smooth hover:-translate-y-2 group cursor-pointer bg-card animate-scale-in"
              //   style={{ animationDelay: `${index * 0.1}s` }}
              // >
              //   <CardContent className="p-6 text-center">
              //     <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-smooth">
              //       <feature.icon className="h-8 w-8 text-secondary" />
              //     </div>
              //     <h3 className="text-lg font-semibold mb-2 text-card-foreground">{feature.title}</h3>
              //     <p className="text-sm text-muted-foreground">{feature.description}</p>
              //   </CardContent>
              // </Card>
              <Card 
                key={index} 
                className="border-none shadow-card hover:shadow-glow transition-smooth hover:-translate-y-2 group cursor-pointer bg-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-smooth">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-card-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
