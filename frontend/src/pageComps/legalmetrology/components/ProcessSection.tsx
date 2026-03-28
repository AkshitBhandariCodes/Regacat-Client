import { ClipboardCheck, FileText, Send, Search, Award } from "lucide-react";

export const ProcessSection = () => {
  const steps = [
    {
      icon: ClipboardCheck,
      number: "01",
      title: "Consultation & Requirement Analysis",
      description: "We identify your applicable category and compliance needs.",
    },
    {
      icon: FileText,
      number: "02",
      title: "Document Preparation & Review",
      description: "We draft and verify documents per LM Department format.",
    },
    {
      icon: Send,
      number: "03",
      title: "Application Filing with Department",
      description: "Our experts file the application and follow up regularly.",
    },
    {
      icon: Search,
      number: "04",
      title: "Inspection & Query Resolution",
      description: "We coordinate with officials and address clarifications promptly.",
    },
    {
      icon: Award,
      number: "05",
      title: "Certificate Issuance & Post-Support",
      description: "Receive your registration certificate and compliance roadmap.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30" id="process">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How We Help You Get Legal Metrology Registration
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
        <div className="relative h-40">
  {/* Timeline line */}
  <div className="hidden lg:block absolute top-12 left-0 right-0 
  -translate-y-1/2 h-1 bg-gradient-to-r from-primary via-accent to-secondary" />

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
    {steps.map((step, index) => (
      <div
        key={index}
        className="flex flex-col items-center animate-fade-in-up"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="relative mb-6">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
            <step.icon className="h-10 w-10 text-primary-foreground" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-bold">
            {step.number}
          </div>
        </div>
        <h3 className="text-lg font-bold text-center mb-3 text-foreground px-2">
          {step.title}
        </h3>
        <p className="text-sm text-muted-foreground text-center px-2">
          {step.description}
        </p>
      </div>
    ))}
  </div>

          </div>
        </div>
      </div>
    </section>
  );
};
