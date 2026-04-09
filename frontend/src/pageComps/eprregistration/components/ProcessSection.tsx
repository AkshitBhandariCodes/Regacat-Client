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
    <section id="epr-process" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="mb-4 text-foreground">Step-by-Step Process for EPR Authorization</h2>
          <p className="text-lg text-muted-foreground">
            Our streamlined 5-step process ensures smooth and fast EPR approval
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div
              className="hidden md:block absolute left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-500 to-blue-200"
              style={{ top: "2rem" }}
            />

            <div className="grid md:grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative animate-slide-up text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative z-10 mb-6">
                    <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 ring-8 ring-blue-100 flex items-center justify-center shadow-medium">
                      <span className="text-xl font-bold text-white">{step.number}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>

                  <div className="mt-4 flex justify-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <Check className="w-5 h-5 text-blue-600" />
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
