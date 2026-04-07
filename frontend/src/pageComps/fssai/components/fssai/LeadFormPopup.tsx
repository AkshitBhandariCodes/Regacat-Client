import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

interface LeadFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadFormPopup = ({ isOpen, onClose }: LeadFormPopupProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    licenseType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/lead?source=sendFssaiMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "✅ Thank you for your interest!",
          description:
            "Our FSSAI licensing expert will contact you within 24 hours.",
        });

        // reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          licenseType: "",
          message: "",
        });

        onClose();
      } else {
        toast({
          title: "❌ Failed to send message",
          description: result.message || "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "⚠️ Network error",
        description: "Could not connect to the server.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Get Expert FSSAI Assistance
          </DialogTitle>
          <DialogDescription>
            Fill in your details and our licensing experts will reach out to you
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              required
            />
          </div>

          {/* License Type */}
          <div className="space-y-2">
            <Label htmlFor="licenseType">License Type Required</Label>
            <Select
              value={formData.licenseType}
              onValueChange={(value) => handleChange("licenseType", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select license type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="basic">
                  Basic Registration (Below ₹12L)
                </SelectItem>
                <SelectItem value="state">
                  State License (₹12L - ₹20Cr)
                </SelectItem>
                <SelectItem value="central">
                  Central License (Above ₹20Cr)
                </SelectItem>
                <SelectItem value="iaa-services">
                  Indian Authorized Agent Services
                </SelectItem>
                <SelectItem value="any-other-fssai">Any other FSSAI</SelectItem>
                <SelectItem value="any-other-cdsco">Any other CDSCO</SelectItem>
                <SelectItem value="not-sure">
                  Not Sure / Need Consultation
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Additional Details (Optional)</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your food business..."
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              rows={3}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 font-semibold py-6"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Request"}
            {!isSubmitting && <Send className="ml-2 w-4 h-4" />}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting, you agree to our Terms of Service and Privacy Policy.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadFormPopup;
