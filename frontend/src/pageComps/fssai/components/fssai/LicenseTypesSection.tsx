import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Store, Building } from "lucide-react";

const LicenseTypesSection = () => {
  const licenses = [
    {
      icon: Store,
      title: "Basic Registration",
      subtitle: "For small businesses",
      turnover: "Turnover below ₹12 lakhs",
      color: "bg-secondary/10 text-secondary",
      badge: "Most Common"
    },
    {
      icon: Building2,
      title: "State License",
      subtitle: "For medium enterprises",
      turnover: "Turnover between ₹12 lakhs and ₹20 crores",
      color: "bg-primary/10 text-primary",
      badge: "Recommended"
    },
    {
      icon: Building,
      title: "Central License",
      subtitle: "For large-scale or importers",
      turnover: "Turnover above ₹20 crores or inter-state operations",
      color: "bg-accent/10 text-accent",
      badge: "Enterprise"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Heading */}
          <div className="text-center space-y-4 fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Types of FSSAI Licenses We Assist With
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the right license category based on your business turnover and operations
            </p>
          </div>

          {/* License cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {licenses.map((license, index) => {
              const Icon = license.icon;
              return (
                // <Card 
                //   key={index}
                //   className="relative p-8 space-y-6 hover-lift bg-card border-border shadow-sm hover:shadow-lg transition-all overflow-hidden"
                //   style={{ animationDelay: `${index * 0.15}s` }}
                // >
                //   {/* Badge */}
                //   {license.badge && (
                //     <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                //       {license.badge}
                //     </Badge>
                //   )}

                //   {/* Icon */}
                //   <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${license.color}`}>
                //     <Icon className="w-10 h-10" />
                //   </div>

                //   {/* Content */}
                //   <div className="space-y-2">
                //     <h3 className="text-2xl font-bold text-foreground">
                //       {license.title}
                //     </h3>
                //     <p className="text-sm font-medium text-muted-foreground">
                //       {license.subtitle}
                //     </p>
                //   </div>

                //   {/* Turnover info */}
                //   <div className="pt-4 border-t border-border">
                //     <p className="text-sm font-semibold text-primary">
                //       {license.turnover}
                //     </p>
                //   </div>
                // </Card>
                <Card 
                key={index}
                className="relative p-8 space-y-6 hover-lift bg-card border-border shadow-sm hover:shadow-lg transition-all overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Badge */}
                {license.badge && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    {license.badge}
                  </Badge>
                )}

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary text-white`}>
                  <Icon className="w-10 h-10" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">
                    {license.title}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground">
                    {license.subtitle}
                  </p>
                </div>

                {/* Turnover info */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-primary">
                    {license.turnover}
                  </p>
                </div>
              </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LicenseTypesSection;
