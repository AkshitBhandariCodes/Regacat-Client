import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const DocumentChecklist = () => {
  const documents = [
    "Covering Letter",
    "COS 2 (Application for Import License)",
    "Power of Attorney",
    "Free Sale Certificate (FSC)",
    "Product Composition",
    "Labels / Artwork",
    "Manufacturing License Copy",
    "Importer's IEC & GST",
    "Part 1"
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Documents Required for CDSCO Cosmetic Import License
            </h2>
          </div>

          <Card className="shadow-elevated border-none bg-card">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {documents.map((doc, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-smooth animate-slide-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-card-foreground font-medium">{doc}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DocumentChecklist;
