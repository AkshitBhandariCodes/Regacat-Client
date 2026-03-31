import { Check } from "lucide-react";

export const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Consultation & Eligibility Check",
      description: "We assess your business category and requirements.",
    },
    {
      number: "2",
      title: "Document Preparation",
      description: "We organize all documents as per CPCB format.",
    },
    {
      number: "3",
      title: "Application Filing with CPCB",
      description: "Our experts manage the submission and follow-up.",
    },
    {
      number: "4",
      title: "Query Handling & Clarification",
      description: "We respond quickly to CPCB queries for faster approval.",
    },
    {
      number: "5",
      title: "Approval & Certificate Delivery",
      description: "Receive your official EPR certificate with compliance guidance.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="mb-4 text-foreground">Step-by-Step Process for EPR Authorization</h2>
          <p className="text-lg text-muted-foreground">
            Our streamlined 5-step process ensures smooth and fast EPR approval
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary" 
                 style={{ top: "3rem" }} />

            <div className="grid md:grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="relative animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Step number circle */}
                  <div className="relative z-10 mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full gradient-card flex items-center justify-center shadow-medium">
                      <span className="text-3xl font-bold text-white">{step.number}</span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-28 h-28 rounded-full bg-accent/20 animate-pulse" />
                    </div>
                  </div>

                  {/* Step content */}
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>

                  {/* Checkmark indicator */}
                  <div className="mt-4 flex justify-center">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-secondary" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
