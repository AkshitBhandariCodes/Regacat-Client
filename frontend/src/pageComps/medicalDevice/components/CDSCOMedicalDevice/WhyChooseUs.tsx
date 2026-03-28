import { Brain, Zap, Puzzle, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Brain,
      title: "Expert Regulatory Team",
      description: "Experienced professionals specialized in CDSCO filings with deep knowledge of medical device regulations"
    },
    {
      icon: Zap,
      title: "Fast Application Turnaround",
      description: "Direct coordination with CDSCO officials to expedite your application process and reduce approval time"
    },
    {
      icon: Puzzle,
      title: "Comprehensive Support",
      description: "From classification to post-license compliance, we handle every aspect of your regulatory journey"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Support for both Indian and foreign manufacturers with local authorized representative services"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Why Choose Regacats for CDSCO Medical Device Licensing?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Partner with India's leading regulatory consultancy for seamless medical device licensing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl group cursor-pointer animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 relative">
                {/* Background gradient effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative z-10 space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-card-foreground">
                    {reason.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
