import { Card } from "@/components/ui/card";
import { ShoppingBag, Pill, Zap, Sparkles, Rocket, Package } from "lucide-react";

const industries = [
  {
    icon: ShoppingBag,
    name: "FMCG",
    description: "Consumer goods compliance and licensing solutions",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Pill,
    name: "Pharma",
    description: "Pharmaceutical regulatory compliance",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: Zap,
    name: "Electronics",
    description: "Electronic goods certification and compliance",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: Sparkles,
    name: "Cosmetics",
    description: "Beauty and personal care licensing",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    icon: Rocket,
    name: "Startups",
    description: "Fast-track compliance for new ventures",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Package,
    name: "Manufacturing",
    description: "Industrial licensing and certifications",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
];

const IndustriesServed = () => {
  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--secondary)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by businesses across diverse sectors
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="group p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-secondary/30 bg-card cursor-pointer animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${industry.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <industry.icon className={`w-8 h-8 ${industry.color}`} />
              </div>
              
              <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {industry.name}
              </h3>
              
              <p className="text-xs text-muted-foreground leading-relaxed">
                {industry.description}
              </p>
            </Card>
          ))}
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 items-center opacity-60">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">ISO Certified</div>
            <div className="text-sm text-primary">Quality Assured</div>
          </div>
          <div className="w-px h-12 bg-border hidden md:block" />
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">Govt Approved</div>
            <div className="text-sm text-primary">Partner Status</div>
          </div>
          <div className="w-px h-12 bg-border hidden md:block" />
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">5+ Years</div>
            <div className="text-sm text-primary">Industry Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
