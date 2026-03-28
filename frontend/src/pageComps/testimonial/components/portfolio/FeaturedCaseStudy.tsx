import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Clock, Target } from "lucide-react";

const FeaturedCaseStudy = () => {
  const metrics = [
    { icon: TrendingUp, value: "500+", label: "Registrations Completed", color: "text-primary" },
    { icon: Clock, value: "15 Days", label: "Average Turnaround", color: "text-accent" },
    { icon: Target, value: "100%", label: "Success Rate", color: "text-primary" },
  ];

  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Featured Case Study
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            How we helped XYZ Corp achieve nationwide LM registration
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image/Visual side */}
          <div className="relative group">
            <Card className="overflow-hidden border-2 border-border/50 hover:border-secondary/50 transition-all duration-300 bg-gradient-to-br from-card to-muted/30">
              <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/10 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎯</div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">XYZ Corporation</h3>
                  <p className="text-muted-foreground">National FMCG Leader</p>
                </div>
              </div>
            </Card>
            
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-primary text-white px-6 py-3 rounded-full font-semibold shadow-lg animate-pulse-glow">
              Success Story
            </div>
          </div>
          
          {/* Content side */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold mb-4">
              Legal Metrology Registration
            </div>
            
            <h3 className="text-3xl font-heading font-bold text-foreground">
              Nationwide Compliance in Record Time
            </h3>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              XYZ Corporation needed urgent Legal Metrology registration across 15 states to launch their new product line. 
              Our expert team navigated complex regulatory requirements and secured all necessary approvals in just 15 days, 
              enabling their on-time nationwide launch.
            </p>
            
            <div className="space-y-4 py-4">
              <h4 className="font-semibold text-foreground text-lg">The Challenge</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Multi-state compliance requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Tight launch timeline</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Complex documentation across jurisdictions</span>
                </li>
              </ul>
            </div>
            
            <Button 
              className="bg-primary text-white font-semibold group"
              size="lg"
            >
              Read Full Case Study
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        
        {/* Metrics Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
          {metrics.map((metric, index) => (
            <Card 
              key={index}
              className="p-6 text-center bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <metric.icon className={`w-10 h-10 ${metric.color} mx-auto mb-4`} />
              <div className="text-3xl font-bold text-foreground mb-2">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;
