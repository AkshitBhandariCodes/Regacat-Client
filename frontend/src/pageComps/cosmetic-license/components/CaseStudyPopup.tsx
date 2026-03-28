import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

interface CaseStudyPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConsultClick: () => void;
}

const CaseStudyPopup = ({ open, onOpenChange, onConsultClick }: CaseStudyPopupProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto bg-card">
        <DialogHeader>
          <DialogTitle className="text-2xl text-card-foreground">Premium Cosmetics Brand Launch Success</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            How Regacats Solutions Enabled a Seamless Market Entry
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 mt-4">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-card-foreground">Client Background</h3>
            <p className="text-muted-foreground">
              A European premium cosmetics brand with 40+ products wanted to enter the Indian market. 
              They had no prior experience with CDSCO regulations and were overwhelmed by the documentation requirements.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-destructive">The Challenge</h3>
            <ul className="space-y-2">
              {[
                "Complex CDSCO documentation requirements",
                "Language barriers in understanding Indian regulations",
                "Tight timeline for market launch",
                "Multiple product variants requiring separate approvals",
                "Coordination between European manufacturers and Indian distributors"
              ].map((challenge, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-destructive mt-1">•</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-secondary">Our Solution</h3>
            <ul className="space-y-2">
              {[
                "Conducted comprehensive product analysis and documentation audit",
                "Prepared all required documents in CDSCO-compliant format",
                "Established direct communication channel with CDSCO officials",
                "Coordinated between European manufacturers and Indian partners",
                "Provided real-time updates and handled all queries promptly"
              ].map((solution, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-card-foreground">Results Achieved</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-1">25</div>
                <div className="text-sm text-muted-foreground">Working Days</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-1">40+</div>
                <div className="text-sm text-muted-foreground">Products Approved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-card-foreground">Client Testimonial</h3>
            <blockquote className="border-l-4 border-secondary pl-4 italic text-muted-foreground">
              "Regacats Solutions made our India entry incredibly smooth. Their expertise in CDSCO regulations 
              and proactive communication saved us months of potential delays. We successfully launched all 
              our products on schedule and have since expanded our portfolio."
            </blockquote>
            <p className="mt-2 text-sm text-muted-foreground">— Marketing Director, Obayaty</p>
          </div>

          <div className="pt-4 border-t border-border">
            <h3 className="text-lg font-semibold mb-3 text-center text-card-foreground">
              Ready to Launch Your Brand?
            </h3>
            <Button 
              onClick={() => {
                onOpenChange(false);
                onConsultClick();
              }}
              className="w-full gradient-cta text-primary-foreground hover:opacity-90 transition-smooth"
            >
              Get Consulting for Your Brand
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudyPopup;
