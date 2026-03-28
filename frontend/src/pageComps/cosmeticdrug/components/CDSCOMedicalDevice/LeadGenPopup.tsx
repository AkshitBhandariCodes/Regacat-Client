import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Send } from "lucide-react";

interface LeadGenPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadGenPopup = ({ isOpen, onClose }: LeadGenPopupProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    deviceType: "",
    message: ""
  });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

    
  //   // Simulate form submission
  //   console.log("Form submitted:", formData);
    
  //   toast.success("Thank you for your inquiry!", {
  //     description: "Our regulatory experts will contact you within 24 hours."
  //   });
    
  //   // Reset form and close
  //   setFormData({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     company: "",
  //     deviceType: "",
  //     message: ""
  //   });
  //   onClose();
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      // Send form data to PHP backend
      const response = await fetch("https://regacats.in/api/sendDeviceMail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const text = await response.text();
      console.log("Raw backend response:", text);
  
      let result;
      try {
        result = JSON.parse(text);
      } catch {
        toast.error("Invalid response from server. Check PHP output.");
        return;
      }
  
      if (result.success) {
        toast.success("Thank you for your inquiry!", {
          description: "Our regulatory experts will contact you within 24 hours.",
        });
  
        // Reset form and close popup
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          deviceType: "",
          message: "",
        });
        onClose();
      } else {
        toast.error(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error("Failed to connect to the server. Please check your connection.");
    }
  };
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Get Expert CDSCO Licensing Consultation</DialogTitle>
          <DialogDescription>
            Fill out the form below and our regulatory experts will reach out to discuss your medical device licensing needs.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@company.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company Name *</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company Ltd."
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="deviceType">Medical Device Type / Class</Label>
            <Input
              id="deviceType"
              name="deviceType"
              value={formData.deviceType}
              onChange={handleChange}
              placeholder="e.g., Class C Ultrasound Scanner"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Information</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your licensing requirements, timeline, or any specific questions..."
              rows={4}
            />
          </div>

          <div className="flex gap-4 pt-4">
            <Button type="submit" className="flex-1 group">
              Submit Inquiry
              <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            By submitting this form, you agree to our privacy policy and consent to be contacted by Regacats Solutions.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};
