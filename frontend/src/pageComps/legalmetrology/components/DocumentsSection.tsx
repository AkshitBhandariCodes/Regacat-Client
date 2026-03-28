import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const DocumentsSection = () => {
  const documents = [
    "Company PAN & CIN",
    "GST Certificate",
    "Authorized Signatory ID Proof",
    "Manufacturing / Importer License",
    "Product Packaging Details",
    "Model Approval Certificate (if applicable)",
    "Proof of Premises (Lease / Ownership)",
    "Authorization Letter",
    "Declaration as per Legal Metrology Act",
  ];

  const column1 = documents.slice(0, 5);
  const column2 = documents.slice(5);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Documents Required for Legal Metrology Registration
          </h2>
        </div>

        <Card className="max-w-4xl mx-auto border-2 shadow-lg animate-fade-in-up">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Required Documentation Checklist</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {column1.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{doc}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {column2.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
