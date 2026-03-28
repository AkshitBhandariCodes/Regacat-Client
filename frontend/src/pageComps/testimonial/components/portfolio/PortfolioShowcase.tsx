import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const portfolioItems = [
  {
    title: "Legal Metrology Registration for FMCG Brand",
    description: "Successfully obtained LM registration across 15 states for a leading FMCG company, enabling nationwide distribution.",
    tags: ["Legal Metrology", "FMCG", "Multi-State"],
    logo: "🏢"
  },
  {
    title: "EPR Authorization for Electronics Manufacturer",
    description: "Complete EPR compliance setup for electronic waste management, meeting all environmental regulations.",
    tags: ["EPR Authorization", "Electronics", "Environmental"],
    logo: "⚡"
  },
  {
    title: "FSSAI License for Food Startup",
    description: "Fast-tracked FSSAI registration for emerging food delivery platform, completed in 10 days.",
    tags: ["FSSAI License", "Food Tech", "Fast Track"],
    logo: "🍽️"
  },
  {
    title: "BIS Certification for Consumer Electronics",
    description: "Secured BIS certification for imported electronics, ensuring market compliance and consumer trust.",
    tags: ["BIS Certification", "Import", "Quality"],
    logo: "📱"
  },
  {
    title: "Drug License for Pharma Company",
    description: "Obtained manufacturing and wholesale drug licenses for pharmaceutical operations across India.",
    tags: ["Drug License", "Pharma", "Manufacturing"],
    logo: "💊"
  },
  {
    title: "Cosmetic Registration Package",
    description: "Complete cosmetic compliance package including BIS and import licenses for beauty brand.",
    tags: ["Cosmetics", "BIS", "Import License"],
    logo: "💄"
  },
];

const PortfolioShowcase = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Portfolio Showcase
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real projects, real results. Explore our successful compliance solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-secondary/50 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div 
                  className="absolute inset-0 animate-shimmer"
                  style={{
                    background: "var(--gradient-shine)",
                  }}
                />
              </div>
              
              <div className="relative p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{item.logo}</div>
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="bg-primary text-white hover:bg-secondary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  variant="ghost" 
                  className="w-full group/btn text-white bg-primary"
                >
                  View Case Study
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
