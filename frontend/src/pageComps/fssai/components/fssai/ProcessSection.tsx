import { Card } from "@/components/ui/card";
import { ClipboardCheck, FileText, Send, MessageSquare, Award } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Regulatory Mapping",
      description: "We assess product composition, intended use, claims, and business model to define the correct regulatory pathway."
    },
    {
      icon: FileText,
      title: "Technical Compliance Review",
      description: "Our team reviews formulation, additives, labels, declarations, and claim language against current FSSAI requirements."
    },
    {
      icon: Send,
      title: "Submission Strategy",
      description: "Applications, dossiers, and approvals are filed with regulator-aligned documentation and submission accuracy."
    },
    {
      icon: MessageSquare,
      title: "Authority Coordination",
      description: "We handle regulatory communication, clarifications, and deficiency responses to keep approvals on track."
    },
    {
      icon: Award,
      title: "Post-Approval Continuity",
      description: "We support ongoing compliance, renewals, modifications, and market expansion planning after approval."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Heading */}
          <div className="text-center space-y-4 fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              How Regacats Supports Food and Nutraceutical Businesses
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our role extends beyond filing by reducing misclassification, misbranding, and regulatory objections through proactive planning.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" 
                 style={{ top: '4rem', zIndex: 0 }} 
            />

            {/* Steps */}
            <div className="grid md:grid-cols-5 gap-8 relative z-10">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div 
                    key={index}
                    className="flex flex-col items-center text-center space-y-4 fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Step number and icon */}
                    <div className="relative">
                      <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                        <Icon className="w-12 h-12 text-primary-foreground" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold shadow-md">
                        {index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-foreground leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
