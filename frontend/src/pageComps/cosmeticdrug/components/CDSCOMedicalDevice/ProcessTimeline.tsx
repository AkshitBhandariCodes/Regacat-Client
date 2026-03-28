import { FileSearch, FileText, Send, MessageSquare, Award } from "lucide-react";

export const ProcessTimeline = () => {
  const steps = [
    {
      icon: FileSearch,
      title: "Regulatory research and consultation",
      description: "Determine the current regulatory updates"
    },
    {
      icon: FileText,
      title: "Documentation Preparation",
      description: "Compile technical files, Dossier preparation support"
    },
    {
      icon: Send,
      title: "Application Filing with CDSCO Portal",
      description: "Submission via SUGAM Portal"
    },
    {
      icon: MessageSquare,
      title: "Query Response & Clarification",
      description: "Handle CDSCO communications and inspections"
    },
    {
      icon: Award,
      title: "Final License Issuance",
      description: "Delivery of your CDSCO Drug License"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            How We Simplify Your Licensing Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our streamlined 5-step process ensures a smooth path from application to approval
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block max-w-7xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-20" />
            
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Icon Circle */}
                  <div className="relative z-10 w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group cursor-pointer">
                    <step.icon className="w-12 h-12 text-white" />
                    
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-2">
                    <h3 className="font-bold text-card-foreground leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-16 -right-2 text-primary opacity-30">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden max-w-2xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex gap-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0">
                <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                  <step.icon className="w-8 h-8 text-white" />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
