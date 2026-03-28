import { FileText, Shield, Award, TestTube, Package, Globe, CheckCircle, FileCheck } from "lucide-react";

export const DocumentsRequired = () => {
  const documents = [
    { icon: FileText, text: "Covering Letter" },
    { icon: FileCheck, text: "Power of Attorney / Authorization Letter" },
    { icon: Globe, text: "Free Sale Certificate (FSC)" },
    { icon: Award, text: "ISO 13485 Certificate" },
    { icon: FileText, text: "Device Master File (DMF)" },
    { icon: FileText, text: "Plant Master File (PMF)" },
    { icon: Package, text: "Product Labels / Packaging Artwork" },
    { icon: Shield, text: "CE / USFDA / Other Regulatory Approvals" },
    { icon: TestTube, text: "Test Reports and Safety Certificates" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Documents Required for CDSCO Medical Device License
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Complete documentation package needed for successful license application
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl border-2 border-border hover:border-primary bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <doc.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 pt-1">
                <p className="font-semibold text-card-foreground leading-tight">{doc.text}</p>
              </div>
              <CheckCircle className="w-5 h-5 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            <strong>Note:</strong> Additional documents may be required based on device classification 
            and specific regulatory requirements. Our team will guide you through the complete checklist.
          </p>
        </div>
      </div>
    </section>
  );
};
