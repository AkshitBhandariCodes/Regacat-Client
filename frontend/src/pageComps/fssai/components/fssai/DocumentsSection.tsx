import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const DocumentsSection = () => {
  const documentsColumn1 = [
    "Form-B duly completed and signed",
    "Photo ID of proprietor/director",
    "Proof of business premises (Rent Agreement / NOC)",
    "List of food products",
    "Blueprint/layout of premises"
  ];

  const documentsColumn2 = [
    "List of equipment/machinery",
    "Water test report",
    "Partnership Deed / Incorporation Certificate",
    "Import Export Code (for importers)",
    "NOC from Municipality/Panchayat"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Heading */}
          <div className="text-center space-y-4 fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Documents Required for FSSAI License Registration
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We'll help you prepare all necessary documentation for a smooth application process
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
                <strong className="text-foreground">Note:</strong> Document requirements may vary based on license type and business category. Our experts will provide a personalized checklist.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;
