import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Lightbulb, TrendingUp, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

import { useState } from "react";

interface CaseStudySectionProps {
  onOpenCaseStudy: () => void;
}




const CaseStudySection = ({ onOpenCaseStudy }: CaseStudySectionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [licenseType, setLicenseType] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  



  return (
    <>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Heading */}
            <div className="text-center space-y-4 fade-in">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                How We Helped a Leading Food Startup Get Licensed
              </h2>
            </div>

            {/* Case study card */}
            <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-muted/30 border-border shadow-lg">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Challenge */}
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-destructive/10 text-destructive">
                    <Target className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Challenge</h3>
                  <p className="text-muted-foreground">
                    Client struggled with FSSAI documentation and faced multiple rejections due to incomplete paperwork.
                  </p>
                </div>

                {/* Solution */}
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent">
                    <Lightbulb className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Solution</h3>
                  <p className="text-muted-foreground">
                    Regacats handled end-to-end filing via FoSCoS portal with meticulous documentation review.
                  </p>
                </div>

                {/* Result */}
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-destructive/10 text-destructive">
                    <TrendingUp className="w-7 h-7 " />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Result</h3>
                  <p className="text-muted-foreground">
                    License approved within <strong className="text-foreground">10 working days</strong>, enabling the client to launch on schedule.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 text-center">
                <Button 
                  onClick={() => setIsOpen(true)}
                  variant="outline"
                  className="font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Read Full Case Study
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study Popup */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl md:text-3xl font-bold">
              Success Story: Fast-Track FSSAI Approval
            </DialogTitle>
            <DialogDescription className="text-base mt-4">
              How Regacats Solutions helped a Mumbai-based cloud kitchen overcome documentation challenges
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Client Background */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Client Background
              </h3>
              <p className="text-muted-foreground leading-relaxed pl-4">
                A promising cloud kitchen startup in Mumbai with plans to scale across multiple cities. They needed a Central FSSAI License to operate inter-state and had already faced two rejections due to documentation errors.
              </p>
            </div>

            {/* The Challenge */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-destructive" />
                The Challenge
              </h3>
              <ul className="space-y-2 pl-4">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-destructive mt-1">•</span>
                  <span>Incomplete Form-B submission leading to rejections</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-destructive mt-1">•</span>
                  <span>Missing water test reports and layout blueprints</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-destructive mt-1">•</span>
                  <span>Urgent timeline — product launch scheduled in 3 weeks</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-destructive mt-1">•</span>
                  <span>Lack of clarity on FoSCoS portal navigation</span>
                </li>
              </ul>
            </div>

            {/* Our Solution */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                Our Solution
              </h3>
              <ul className="space-y-2 pl-4">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-accent mt-1">✓</span>
                  <span>Conducted immediate eligibility audit and document gap analysis</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-accent mt-1">✓</span>
                  <span>Coordinated with certified labs for water test reports</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-accent mt-1">✓</span>
                  <span>Prepared accurate layout blueprints as per FSSAI standards</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-accent mt-1">✓</span>
                  <span>Filed comprehensive application through FoSCoS portal</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-accent mt-1">✓</span>
                  <span>Proactive follow-up with FSSAI officials for expedited processing</span>
                </li>
              </ul>
            </div>

            {/* The Result */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                The Result
              </h3>
              <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Processing Time:</span>
                  <span className="text-2xl font-bold text-secondary">10 Days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Approval Rate:</span>
                  <span className="text-2xl font-bold text-secondary">100%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Client Satisfaction:</span>
                  <span className="text-2xl font-bold text-secondary">⭐⭐⭐⭐⭐</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed pl-4 pt-2">
                The client successfully launched their operations on time and has since expanded to 5 cities. They continue to partner with Regacats for ongoing compliance support.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-6 border-t border-border">
              <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl p-6 text-center space-y-4">
                <h4 className="text-xl font-bold">Ready to Get Your FSSAI License?</h4>
                <p className="text-white/90">Let our experts handle your application with the same care and precision</p>
                <Button 
                  onClick={() => {
                    setIsOpen(false);
                    setShowLeadForm(true);
                  }}
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
                  Get Consulting Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      {/* Lead Form Popup */}
{/* Lead Form Popup */}
<Dialog open={showLeadForm} onOpenChange={setShowLeadForm}>
  <DialogContent className="max-w-lg">
    <DialogHeader>
      <DialogTitle className="text-2xl font-bold">Get Free Consultation</DialogTitle>
      <DialogDescription>
        Fill the form and our experts will reach out to you.
      </DialogDescription>
    </DialogHeader>

    <form
      className="space-y-4 mt-4"
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = {
          name,
          email,
          phone,
          licenseType,
          message,
        };

        try {
          const res = await fetch("/api/lead?source=sendMail", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });

          const data = await res.json();
          setLoading(false);

          if (data.success) {
            toast.success("Your request has been submitted!");

            // Reset form
            setName("");
            setEmail("");
            setPhone("");
            setLicenseType("");
            setMessage("");

            setShowLeadForm(false);
          } else {
            toast.error(data.message || "Failed to submit form");
          }
        } catch (error) {
          setLoading(false);
          toast.error("Network error! Please try again.");
        }
      }}
    >
      {/* Name */}
      <div>
        <label className="text-sm font-medium">Name</label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-md bg-background"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Phone */}
      <div>
        <label className="text-sm font-medium">Phone</label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-md bg-background"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      {/* Email */}
      <div>
        <label className="text-sm font-medium">Email</label>
        <input
          type="email"
          className="w-full px-3 py-2 border rounded-md bg-background"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* License Type */}
      <div>
        <label className="text-sm font-medium">License Type</label>
        <select
          className="w-full px-3 py-2 border rounded-md bg-background"
          value={licenseType}
          onChange={(e) => setLicenseType(e.target.value)}
        >
          <option value="">Select License Type</option>
          <option value="Basic License">Basic License</option>
          <option value="State License">State License</option>
          <option value="Central License">Central License</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="text-sm font-medium">Message</label>
        <textarea
          className="w-full px-3 py-2 border rounded-md bg-background"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <Button
        className="w-full bg-primary text-primary-foreground font-semibold"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit"}
      </Button>
    </form>
  </DialogContent>
</Dialog>

    </>
  );
};

export default CaseStudySection;
