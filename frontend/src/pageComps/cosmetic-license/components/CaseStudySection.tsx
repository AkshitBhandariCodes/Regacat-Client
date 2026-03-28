import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, TrendingUp } from "lucide-react";

interface CaseStudySectionProps {
  onReadMore: () => void;
}

const CaseStudySection = ({ onReadMore }: CaseStudySectionProps) => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Client Success Story
            </h2>
            <p className="text-lg text-muted-foreground">
              How We Helped an International Brand Launch in India
            </p>
          </div>

          <Card className="shadow-elevated border-none bg-card overflow-hidden animate-slide-up">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                    <span className="text-2xl">⚠️</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-card-foreground">Challenge</h3>
                  <p className="text-sm text-muted-foreground">
                    International premium cosmetics brand struggling with complex CDSCO requirements and documentation standards.
                  </p>
                </div>

                <div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-card-foreground">Solution</h3>
                  <p className="text-sm text-muted-foreground">
                    Regacats handled all documentation, CDSCO communication, and query resolution with dedicated expert support.
                  </p>
                </div>

                <div>
                  <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-card-foreground">Result</h3>
                  <p className="text-sm text-muted-foreground">
                    License approved within 25 working days; products successfully launched across India.
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button 
                  onClick={onReadMore}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  Read Full Case Study
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
