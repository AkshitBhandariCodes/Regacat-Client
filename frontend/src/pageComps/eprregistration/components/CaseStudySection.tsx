import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Trophy, Target, CheckCircle2, TrendingUp } from "lucide-react";

interface CaseStudySectionProps {
  onCtaClick: () => void;
}

export const CaseStudySection = ({ onCtaClick }: CaseStudySectionProps) => {
  const [showFullStory, setShowFullStory] = useState(false);

  return (
    <>
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
              <Trophy className="w-5 h-5" />
              <span className="font-semibold">Success Story</span>
            </div>
            <h2 className="mb-4 text-foreground">
              How We Helped a Leading FMCG Brand Get EPR Authorized
            </h2>
          </div>

          <Card className="max-w-5xl mx-auto shadow-large border-border bg-card">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center animate-slide-up">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-destructive/10 flex items-center justify-center">
                    <Target className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Challenge</h3>
                  <p className="text-sm text-muted-foreground">
                    Client faced multiple CPCB rejections due to document errors and formatting issues.
                  </p>
                </div>

                <div className="text-center animate-slide-up" style={{ animationDelay: "0.1s" }}>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Solution</h3>
                  <p className="text-sm text-muted-foreground">
                    Regacats handled documentation, PRO coordination, and direct CPCB communication.
                  </p>
                </div>

                <div className="text-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Result</h3>
                  <p className="text-sm text-muted-foreground">
                    Approval received within 30 working days and products launched successfully.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex justify-center gap-4">
                <Button 
                  variant="outline"
                  onClick={() => setShowFullStory(true)}
                >
                  Read Full Case Study
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Dialog open={showFullStory} onOpenChange={setShowFullStory}>
        <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto bg-background">
          <DialogHeader>
            <DialogTitle className="text-2xl">Complete Success Story</DialogTitle>
            <DialogDescription>Leading FMCG Brand EPR Authorization Journey</DialogDescription>
          </DialogHeader>

          <div className="space-y-6 mt-4">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Background</h3>
              <p className="text-muted-foreground">
                A leading FMCG brand with multiple product lines was struggling to obtain EPR Authorization 
                despite repeated attempts. They had faced 3 rejections from CPCB over a 6-month period due to 
                incomplete documentation and format errors.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">The Challenge</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Multiple CPCB rejections causing product launch delays</li>
                <li>Incorrect packaging data submission format</li>
                <li>Missing PRO agreements and recycling plan details</li>
                <li>Unclear authorization letter formats</li>
                <li>Lost revenue opportunities due to compliance delays</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Our Solution</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Complete audit of existing documents and identification of gaps</li>
                <li>Restructured all documentation as per latest CPCB guidelines</li>
                <li>Coordinated with certified PROs for waste collection agreements</li>
                <li>Created comprehensive recycling and waste management plans</li>
                <li>Direct liaison with CPCB officials for query resolution</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Results Achieved</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-secondary/10 rounded-lg">
                  <p className="text-3xl font-bold text-secondary">30</p>
                  <p className="text-sm text-muted-foreground">Days to Approval</p>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg">
                  <p className="text-3xl font-bold text-primary">100%</p>
                  <p className="text-sm text-muted-foreground">First-time Success</p>
                </div>
                <div className="p-4 bg-accent/10 rounded-lg">
                  <p className="text-3xl font-bold text-accent">15+</p>
                  <p className="text-sm text-muted-foreground">Product Lines Covered</p>
                </div>
                <div className="p-4 bg-secondary/10 rounded-lg">
                  <p className="text-3xl font-bold text-secondary">₹50L+</p>
                  <p className="text-sm text-muted-foreground">Saved in Delays</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm italic text-muted-foreground mb-4">
                "Regacats Solutions transformed our compliance nightmare into a smooth process. 
                Their expertise and direct CPCB coordination saved us months of delays."
              </p>
              <p className="text-sm font-semibold text-foreground">
                - Compliance Head, Leading FMCG Brand
              </p>
            </div>

            <Button 
              onClick={onCtaClick}
              variant="cta"
              size="lg"
              className="w-full"
            >
              Get EPR Consulting for Your Brand
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
