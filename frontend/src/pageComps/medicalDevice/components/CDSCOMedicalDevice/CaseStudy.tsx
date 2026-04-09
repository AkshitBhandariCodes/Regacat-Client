import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Award, ArrowRight, Building2, CheckCircle, Clock, Globe, Target } from "lucide-react";

const solutionItems = [
  "Complete technical file review and gap analysis",
  "Device classification verification per MDR 2017",
  "Preparation of India-specific documentation",
  "CDSCO portal registration and submission",
  "Direct liaison with CDSCO officials",
  "Real-time query resolution and clarifications",
  {
    label: "Authorized representative services in India",
    href: "https://regacats.in/indian-authorized-agent-for-medical-devices",
  },
  "Post-license compliance guidance",
];

export const CaseStudy = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Case Study: Helping a Global Medical Device Brand Enter India
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real success story of how we facilitated structured market entry for an international client.
          </p>
        </div>

        <Card className="max-w-5xl mx-auto border-2 hover:border-primary transition-all duration-300 shadow-xl animate-scale-in">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">Challenge</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A US-based medical device manufacturer needed CDSCO approval for 6 Class C diagnostic
                  devices to enter the Indian market quickly.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">Solution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Regacats handled complete technical file review, gap analysis, CDSCO portal submission,
                  and all CDSCO communications.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">Result</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All 6 licenses were granted in about 3-4 months, enabling successful product launch
                  and market entry with a controlled approval process.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <Button
                onClick={() => setIsOpen(true)}
                className="w-full md:w-auto bg-primary hover:bg-primary/90 group"
              >
                Read Full Case Study
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold">
                Global MedTech Company Successfully Enters Indian Market
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-8 mt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Globe className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold">Client Overview</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  A leading US-based manufacturer of advanced diagnostic imaging equipment with operations in
                  40+ countries sought to enter the rapidly growing Indian healthcare market.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Target className="w-6 h-6 text-red-600" />
                  <h3 className="text-2xl font-bold">The Challenge</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span>6 Class C devices requiring individual CDSCO licenses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span>Complex technical documentation in US format needing Indian compliance adaptation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span>Tight timeline due to pre-committed distribution agreements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span>No prior experience with CDSCO regulatory framework</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Building2 className="w-6 h-6 text-blue-600" />
                  <h3 className="text-2xl font-bold">Our Solution</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {solutionItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-secondary/30 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      {typeof item === "string" ? (
                        <span className="text-sm text-muted-foreground">{item}</span>
                      ) : (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-primary underline underline-offset-4"
                        >
                          {item.label}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-green-600" />
                  <h3 className="text-2xl font-bold">Remarkable Results</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl">
                    <Clock className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <div className="text-3xl font-bold text-primary mb-2">3-4 Months</div>
                    <div className="text-sm text-muted-foreground">Total approval time</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl">
                    <CheckCircle className="w-8 h-8 mx-auto mb-3 text-green-600" />
                    <div className="text-3xl font-bold text-primary mb-2">6/6</div>
                    <div className="text-sm text-muted-foreground">Licenses approved</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl">
                    <Award className="w-8 h-8 mx-auto mb-3 text-accent" />
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">First-time approval</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-accent p-8 rounded-xl text-white text-center space-y-4">
                <h3 className="text-2xl font-bold">Ready to Fast-Track Your Medical Device License?</h3>
                <p className="text-white/90 max-w-2xl mx-auto">
                  Let our expert team guide you through the CDSCO licensing process with the same structured
                  execution and regulatory discipline.
                </p>
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                  onClick={() => setIsOpen(false)}
                >
                  Talk to Our Experts
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
