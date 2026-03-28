import { ClipboardCheck, FileCheck, Send, MessageSquare, Award } from "lucide-react";

const ProcessTimeline = () => {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Registration of Importer on SUGAM Portal",
      description: "Hassle-free cosmetic import registration on SUGAM platform"
    },
    {
      icon: FileCheck,
      title: "Document compilation for application filing",
      description: "Drafting and review of COS-1 applications."
    },
    {
      icon: Send,
      title: "Upload essential documents online",
      description: "Upload essential cosmetic license documents via Sugam portal."
    },
    {
      icon: MessageSquare,
      title: "Pay government fee and upload challan",
      description: "Upload challans for product, site and variant fees via Sugam portal"
    },
    {
      icon: Award,
      title: "Generate COS-1 and upload signed Form COS-1",
      description: "Draft, sign, and upload Form COS-1 for approval"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Step-by-Step process to register cosmetics on sugam portal in India (Cos-1, Cos-2)
            </h2>
          </div>

          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden md:block">
              <div className="absolute top-24 left-0 right-0 h-0.5 bg-border"></div>
              <div className="grid grid-cols-5 gap-4">
                {steps.map((step, index) => (
                  <div 
                    key={index} 
                    className="relative animate-slide-up"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full gradient-cta flex items-center justify-center mb-4 shadow-glow relative z-10">
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="bg-card p-4 rounded-lg shadow-card border border-border min-h-[140px] flex flex-col">
                        <h3 className="font-semibold mb-2 text-sm text-card-foreground">{step.title}</h3>
                        <p className="text-xs text-muted-foreground flex-1">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden space-y-6">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full gradient-cta flex items-center justify-center shadow-glow">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 bg-card p-4 rounded-lg shadow-card border border-border">
                    <h3 className="font-semibold mb-2 text-card-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
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

export default ProcessTimeline;
