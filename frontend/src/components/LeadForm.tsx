import { useState } from "react";
import { X, Minimize2, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

interface LeadFormProps {
  isOpen: boolean;
  onClose: () => void;
  isMinimized?: boolean;
  onMinimize?: () => void;
}

const services = [
  "Cosmetic Import License",
  "CDSCO Drug Registration",
  "Medical Device Import License",
  "FSSAI License",
  "EPR Authorization",
  "Legal Metrology",
  'Any other - FSSAI',
  'Any other - CDSCO'
];

export const LeadForm = ({ isOpen, onClose, isMinimized, onMinimize }: LeadFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
  });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   toast.success("Query submitted successfully! We'll contact you soon.");
  //   setFormData({ fullName: "", mobile: "", email: "", service: "", message: "" });
  //   onClose();
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch("/api/commonLead.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (result.success) {
        toast.success("Query submitted successfully! We'll contact you soon.");
        setFormData({ name: "", phone: "", email: "", service: "", message: "" });
        onClose();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Error sending message. Check your connection.");
    }
  };

  if (!isOpen) return null;

  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
        <Button
          onClick={onMinimize}
          size="lg"
          className="rounded-full shadow-lg h-14 w-14 p-0"
        >
          <Maximize2 className="h-5 w-5" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Form */}
      <div className="relative bg-card rounded-lg shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Get Free Consulting</h2>
          <div className="flex items-center gap-2">
            {onMinimize && (
              <Button variant="ghost" size="icon" onClick={onMinimize}>
                <Minimize2 className="h-4 w-4" />
              </Button>
            )}
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Full Name *</label>
            <Input
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Mobile Number *</label>
            <Input
              required
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91 XXXXX XXXXX"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email *</label>
            <Input
              required
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Select Service *</label>
            <Select
              required
              value={formData.service}
              onValueChange={(value) => setFormData({ ...formData, service: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Choose a service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <Textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your requirements..."
              rows={4}
            />
          </div>

          <Button type="submit" className="w-full">
            Submit Query
          </Button>
        </form>
      </div>
    </div>
  );
};
