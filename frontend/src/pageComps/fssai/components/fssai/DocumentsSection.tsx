import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const DocumentsSection = () => {
  const documentsColumn1 = [
    "Food & Beverage Manufacturers",
    "Nutraceutical & Dietary Supplement Companies",
    "Health Supplement & Functional Food Brands",
    "Importers & Exporters",
    "Global Food Companies Entering India"
  ];

  const documentsColumn2 = [
    "Startups and SMEs",
    "Multinational Corporations",
    "Brand Owners and Marketers",
    "Warehouses and Distributors",
    "E-commerce Food Businesses"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Heading */}
          <div className="text-center space-y-4 fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Industries & Businesses Served by FSSAI Consultants in India
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We support businesses at every growth stage with category-specific regulatory planning and execution.
            </p>
          </div>

          {/* Documents checklist */}
          <Card className="p-8 md:p-12 bg-card border-border shadow-lg">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {/* Column 1 */}
              <div className="space-y-4">
                {documentsColumn1.map((doc, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground leading-relaxed">{doc}</span>
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div className="space-y-4">
                {documentsColumn2.map((doc, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 fade-in"
                    style={{ animationDelay: `${(index + documentsColumn1.length) * 0.05}s` }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground leading-relaxed">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Note */}
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                <strong className="text-foreground">About FSSAI:</strong> The Food Safety and Standards Authority of India is the statutory authority under the Food Safety and Standards Act, 2006, regulating manufacturing, storage, distribution, sale, and import of food products across India.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;
