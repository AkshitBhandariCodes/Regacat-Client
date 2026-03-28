import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const DocumentsSection = () => {
  const documents = [
    "Company PAN & CIN",
    "GST Certificate",
    "Authorized Signatory ID Proof",
    "Product & Packaging Details",
    "EPR / Recycling Plan",
    "Agreement with Recycler / PRO",
    "Brand Registration Certificate",
    "Manufacturing / Import Proof",
    "Declaration Letter (CPCB format)",
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="mb-4 text-foreground">Documents Required for EPR Authorization</h2>
          <p className="text-lg text-muted-foreground">
            We'll guide you through gathering and organizing all necessary documentation
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-medium border-border bg-card">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {documents.map((doc, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-smooth animate-slide-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-foreground font-medium">{doc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-primary/5 border-l-4 border-primary rounded">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Note:</strong> Our team will help you prepare all documents 
                in the correct CPCB format and ensure error-free submission.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
