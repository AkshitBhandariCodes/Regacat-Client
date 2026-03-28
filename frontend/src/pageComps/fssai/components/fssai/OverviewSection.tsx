import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FileCheck, Users, MapPin } from "lucide-react";

const OverviewSection = () => {
  const features = [
    {
      icon: FileCheck,
      title: "1.⁠ ⁠FSSAI License",
      description: "New license, renewal & modification support Annual return filing & six-monthly lab report upload Fast, end-to-end assistance for all food businesses",
      href: "/fssai-license-registration-services-india"
    },
    {
      icon: Users,
      title: "2.⁠ ⁠Product Compliance (Formulation & Artwork",
      description: "Ingredient & formulation review as per FSSAI norms Artwork & labeling compliance check Ensure product approval before market launch",
      href: "/fssai-consultant-nutraceutical-supplement-india"
    },
    {
      icon: MapPin,
      title: "3. Non-Specified Food/Ingredient Approval",
      description: "Dossier preparation for novel foods/ingredients Scientific data submission & FSSAI coordination Hassle-free approval process",
      href: "/non-specified-food-ingredient-approval-india"
    },
    {
      icon: MapPin,
      title: "4.⁠ ⁠Import Assistance",
      description: "FSSAI clearance for imported food consignments Documentation & inspection support Smooth coordination with port authorities",
      href: "/fssai-import-assistance-services-india"

    },
    {
      icon: MapPin,
      title: "5.⁠ ⁠Product Health Claim Approval",
      description: "Scientific substantiation & dossier preparation Filing & liaison with FSSAI for claim approval Ensure compliant marketing communication",
      href: "/fssai-health-claim-approval-services-india"
    },
    {
      icon: MapPin,
      title: "6.⁠ ⁠FSSAI Authorized Agent (India)",
      description: "Official FSSAI liaison for foreign food brands Manage submissions, renewals & compliance Trusted representation in India",
      href: "/indian-authorized-agent-for-fssai-products-india"
    },
    {
      icon: MapPin,
      title: "7.⁠ ⁠Foreign Food Facility Registration",
      description: "Registration of overseas food plants with FSSAI Complete documentation & application support Seamless approval coordination",
      href: "/foreign-food-manufacturing-facility-registration-in-india"
    },
    {
      icon: MapPin,
      title: "8.⁠ ⁠Vegan Approval",
      description: "FSSAI vegan certification support Ingredient & process compliance review Guidance for logo usage & labeling",
      href: "/vegan-endorsement-india"
    },
    {
      icon: MapPin,
      title: "9. Nutraceutical Import Consultant",
      description: "Dedicated support for ingredient validation, label adaptation, NSF pathway and end-to-end port clearance for nutraceutical imports",
      href: "/fssai-nutraceutical-import-consultant-india"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Heading */}
          <div className="text-center space-y-4 fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              What is an FSSAI License?
            </h2>
          </div>

          {/* Main content */}
          <div className="space-y-6 fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto text-center">
              The <strong className="text-foreground">Food Safety and Standards Authority of India (FSSAI)</strong> ensures that all food businesses operate in compliance with safety and hygiene standards.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto text-center">
              Any manufacturer, trader, or importer of food products must obtain an FSSAI License or Registration before selling or distributing food in India.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto text-center">
              <strong className="text-primary">Regacats Solutions</strong> simplifies the entire process — handling documentation, application filing, and communication with authorities — so you can focus on growing your business.
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
                  {"href" in feature && (
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
