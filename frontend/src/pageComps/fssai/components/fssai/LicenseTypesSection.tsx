import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Store, Building } from "lucide-react";

const LicenseTypesSection = () => {
  const licenses = [
    {
      icon: Store,
      title: "Regulatory Expertise",
      subtitle: "Strong understanding of FSSAI framework",
      turnover: "Acts, regulations, advisories, and notifications",
      color: "bg-secondary/10 text-secondary",
      badge: "Core Strength"
    },
    {
      icon: Building2,
      title: "Practical Compliance Strategy",
      subtitle: "Business-model aligned implementation",
      turnover: "Accurate documentation, submissions, and follow-up",
      color: "bg-primary/10 text-primary",
      badge: "Execution"
    },
    {
      icon: Building,
      title: "India + Global Alignment",
      subtitle: "Support for domestic and international businesses",
      turnover: "Market-entry pathways with long-term readiness",
      color: "bg-accent/10 text-accent",
      badge: "Global"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Heading */}
          <div className="text-center space-y-4 fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Why Choose Regacats Solutions as FSSAI Consultants in India
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              8+ years of focused experience in food, nutraceutical, and dietary supplement regulatory compliance.
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
