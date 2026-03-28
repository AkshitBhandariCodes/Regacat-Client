import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AlertCircle, CheckCircle2, TrendingUp } from "lucide-react";

interface SuccessStorySectionProps {
  onOpenLeadForm: () => void;
}

export const SuccessStorySection = ({ onOpenLeadForm }: SuccessStorySectionProps) => {
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  return (
    <>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How We Helped an Electronics Brand Get LM Registration in 20 Days
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 border-destructive/50 animate-fade-in-up">
                <CardContent className="pt-8 pb-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-destructive/10 rounded-full">
                      <AlertCircle className="h-8 w-8 text-destructive" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">Challenge</h3>
                  <p className="text-muted-foreground text-center">
                    Client faced multiple rejections for incomplete labeling data.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent/50 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <CardContent className="pt-8 pb-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-accent/10 rounded-full">
                      <TrendingUp className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">Solution</h3>
                  <p className="text-muted-foreground text-center">
                    Regacats team prepared new documentation and handled reinspection.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/50 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <CardContent className="pt-8 pb-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <CheckCircle2 className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">Result</h3>
                  <p className="text-muted-foreground text-center">
                    Registration approved in record time — brand launched nationwide.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowCaseStudy(true)}
                className="border-2 bg-white text-primary hover:bg-accent hover:text-accent-foreground hover:border-accent border-primary"
              >
                Read Full Case Study
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={showCaseStudy} onOpenChange={setShowCaseStudy}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl">Success Story: Electronics Brand</DialogTitle>
            <DialogDescription className="text-base">
              How Regacats Solutions helped overcome compliance challenges
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <h4 className="font-semibold text-lg mb-2 text-destructive">The Challenge</h4>
              <p className="text-muted-foreground">
                A leading electronics manufacturer had submitted their Legal Metrology application three times, 
                each time facing rejection due to incomplete or incorrectly formatted labeling data. They were 
                losing valuable time and market opportunities.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-2 text-accent">Our Solution</h4>
              <p className="text-muted-foreground">
                Our compliance team conducted a detailed audit of their product packaging, identified all gaps, 
                and prepared comprehensive documentation aligned with Legal Metrology standards. We coordinated 
                directly with department officials and handled the reinspection process.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-2 text-primary">The Result</h4>
              <p className="text-muted-foreground">
                Within 20 days, the registration was approved. The brand successfully launched their products 
                nationwide and avoided further regulatory delays. They continue to work with Regacats for 
                ongoing compliance support.
              </p>
            </div>
          </div>
          <div className="flex justify-center pt-4 border-t">
            <Button onClick={onOpenLeadForm} size="lg">
              Get Legal Metrology Consultation Now
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
