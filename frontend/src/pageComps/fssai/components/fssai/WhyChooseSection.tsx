import { Card } from "@/components/ui/card";
import { Zap, FileCheck, Brain, Globe } from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Zap,
      title: "Fast Turnaround Time",
      description: "End-to-end processing without delays",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: FileCheck,
      title: "Accurate Documentation",
      description: "No risk of rejection due to paperwork errors",
      color: "bg-secondary/10 text-secondary"
    },
    {
      icon: Brain,
      title: "Experienced Team",
      description: "Handled 500+ FSSAI applications successfully",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Globe,
      title: "Nationwide Service",
      description: "Serving businesses across all states",
      color: "bg-secondary/10 text-secondary"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Heading */}
          <div className="text-center space-y-4 fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Why Choose Regacats for FSSAI Licensing?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner for food business compliance
            </p>
          </div>

          {/* Reasons grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 space-y-4 text-center hover-lift bg-card border-border shadow-sm hover:shadow-md transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-white`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {reason.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
