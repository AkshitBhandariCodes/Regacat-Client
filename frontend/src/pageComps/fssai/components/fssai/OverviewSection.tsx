import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FileCheck, Users, MapPin } from "lucide-react";

const OverviewSection = () => {
  const features = [
    {
      icon: FileCheck,
      title: "1. FSSAI License",
      description: "Complete support for Central License, State License, and FSSAI Registration including category assessment, documentation, filing, and authority coordination.",
      href: "/fssai-certification/"
    },
    {
      icon: Users,
      title: "2. Nutraceutical Consultant",
      description: "Regulatory strategy, formulation review, licensing, claim support, and compliance planning for nutraceutical and dietary supplement products.",
      href: "/fssai-consultant-nutraceutical-supplement-india"
    },
    {
      icon: MapPin,
      title: "3. Non-Specified Food/Ingredient Approval",
      description: "End-to-end scientific and technical dossier support for non-specified or novel foods under NSF regulations.",
      href: "/non-specified-food-ingredient-approval-india"
    },
    {
      icon: MapPin,
      title: "4. Import Assistance",
      description: "FSSAI import compliance for food and nutraceutical consignments including documentation, sampling, testing, and port coordination.",
      href: "/fssai-import-assistance-services-india"

    },
    {
      icon: MapPin,
      title: "5. Product Health Claim Approval",
      description: "Claim permissibility review, scientific substantiation, dossier preparation, and representation for health and nutrition claim approvals.",
      href: "/fssai-health-claim-approval-services-india"
    },
    {
      icon: MapPin,
      title: "6. FSSAI Authorized Agent (India)",
      description: "Indian Authorized Agent support for foreign manufacturers with regulatory representation, submissions, and post-approval compliance.",
      href: "/indian-authorized-agent-for-fssai-products-india"
    },
    {
      icon: MapPin,
      title: "7. Foreign Food Facility Registration",
      description: "Support for Foreign Food Manufacturing Facility Registration (FFMFR/ReFOM) for overseas units exporting to India.",
      href: "/foreign-food-manufacturing-facility-registration-in-india"
    },
    {
      icon: MapPin,
      title: "8. Vegan Approval",
      description: "Ingredient and process verification, application support, and compliance guidance for vegan claim and logo usage.",
      href: "/vegan-endorsement-india"
    },
    {
      icon: MapPin,
      title: "9. Nutraceutical Import Consultant",
      description: "Dedicated support for ingredient validation, label adaptation, NSF pathway, and end-to-end nutraceutical import clearance.",
      href: "/fssai-nutraceutical-import-consultant-india"
    },
    {
      icon: Users,
      title: "10. Product Formulation & Label (Artwork) Review",
      description: "Technical review of ingredient composition, additives, nutrient limits, claims, declarations, and artwork under applicable FSSAI regulations.",
      href: undefined
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Heading */}
          <div className="text-center space-y-4 fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Our FSSAI Regulatory & Compliance Services
            </h2>
          </div>

          {/* Main content */}
          <div className="space-y-6 fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto text-center">
              Regacats Solutions provides comprehensive FSSAI regulatory services for food, nutraceutical, and dietary supplement businesses across India and global markets.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto text-center">
              We support manufacturers, importers, exporters, brand owners, and international companies with licensing, approvals, formulation compliance, import pathway planning, and post-market execution.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto text-center">
              Our regulatory approach combines technical expertise, practical execution, and regulator-aligned submissions to reduce delays and compliance risk.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-6 pt-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center space-y-4 hover-lift bg-card border-border shadow-sm hover:shadow-md transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                  {feature.href && (
                    <Link
                      to={feature.href}
                      className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                      View Service
                    </Link>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
