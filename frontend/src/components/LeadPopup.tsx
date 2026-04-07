import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const SERVICES = [
  "Cosmetic Import License",
  "CDSCO Drug Registration",
  "Medical Device Import License",
  "FSSAI License",
  "Indian Authorized Agent Services",
  "EPR Authorization",
  "Legal Metrology",
  "Any other FSSAI",
  "Any other CDSO"
];

declare global {
  interface Window {
    isLandingLeadOpen?: boolean;
  }
}


export const LeadPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled30, setHasScrolled30] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Check if scrolled 30% or more
  const isScrolled30Percent = () => {
    const scrollPercent =
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    return scrollPercent >= 30;
  };

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (isScrolled30Percent() && !hasScrolled30) {
        setHasScrolled30(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled30]);

  // Main popup trigger logic
// Main popup trigger logic
useEffect(() => {
  if (!hasScrolled30) return;

  const timer = setTimeout(() => {
    const closedAt = localStorage.getItem("regacats_popup_closed_at");
    const submittedAt = localStorage.getItem("regacats_popup_submitted_at");
    const now = Date.now();

    // Check submitted cooldown (3 minutes)
    if (submittedAt && now - parseInt(submittedAt) < 180000) {
      return;
    }

    // Check closed cooldown (30 seconds) AND still scrolled 30%+
    if (closedAt) {
      const timeSinceClosed = now - parseInt(closedAt);
      if (timeSinceClosed < 30000) {
        return;
      }
      if (!isScrolled30Percent()) {
        return;
      }
    }

    // ❗ NEW FIX — Wait 300ms to let landing popup set its state
    setTimeout(() => {
      if (window.isLandingLeadOpen) return;
      setIsOpen(true);
    }, 300);

  }, 30000);

  return () => clearTimeout(timer);
}, [hasScrolled30]);


  // Periodic check for re-opening after close
  useEffect(() => {
    if (isOpen) return;

    const intervalCheck = setInterval(() => {
      const closedAt = localStorage.getItem("regacats_popup_closed_at");
      const submittedAt = localStorage.getItem("regacats_popup_submitted_at");
      const now = Date.now();

      // Don't reopen if landing popup is open
      if (window.isLandingLeadOpen) return;



      // Don't reopen within submit cooldown
      if (submittedAt && now - parseInt(submittedAt) < 180000) {
        return;
      }

      // Reopen logic after close cooldown
      if (closedAt) {
        const timeSinceClosed = now - parseInt(closedAt);
        if (timeSinceClosed >= 30000 && isScrolled30Percent() && hasScrolled30) {
          setIsOpen(true);
        }
      }
    }, 5000); // Check every 5 seconds

    return () => clearInterval(intervalCheck);
  }, [isOpen, hasScrolled30]);

  // ESC key handler
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  // Focus first input when popup opens
  useEffect(() => {
    if (isOpen && !isSuccess && firstInputRef.current) {
      setTimeout(() => {
        firstInputRef.current?.focus();
      }, 300);
    }
  }, [isOpen, isSuccess]);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("regacats_popup_closed_at", Date.now().toString());
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/lead?source=commonLead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        localStorage.setItem("regacats_popup_submitted_at", Date.now().toString());
        setIsSuccess(true);
        
        toast({
          title: "Success!",
          description: "We'll get back to you soon.",
        });

        setTimeout(() => {
          setIsOpen(false);
          setIsSuccess(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",
          });
        }, 2000);
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[120] bg-black/80 animate-fade-in p-3 sm:p-4 md:p-6"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
    >
      <div className="absolute bottom-3 left-3 right-3 w-auto max-h-[calc(100dvh-24px)] bg-white backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl overflow-hidden animate-slide-in-bottom-right md:bottom-6 md:left-auto md:right-6 md:w-[300px] md:max-h-[calc(100dvh-64px)]">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors z-10"
          aria-label="Close popup"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(100dvh-120px)] md:max-h-[calc(100dvh-150px)] p-5">
          {isSuccess ? (
            <div className="text-center py-6 animate-fade-in">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-accent/10 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-1">
                Thank You!
              </h3>
              <p className="text-xs text-muted-foreground">
                We'll respond shortly.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-4">
                <h2
                  id="popup-title"
                  className="text-lg font-bold text-foreground mb-1"
                >
                  Let's Talk
                </h2>
                <p className="text-xs text-muted-foreground">
                  Share your project details
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Name */}
                <div>
                  <Input
                    ref={firstInputRef}
                    type="text"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className={`text-xs h-8 ${errors.name ? "border-destructive" : ""}`}
                  />
                  {errors.name && (
                    <p className="text-[10px] text-destructive mt-0.5">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="text-xs h-8"
                  />
                </div>

                {/* Phone */}
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="text-xs h-8"
                  />
                </div>

                {/* Service */}
                <div>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => handleInputChange("service", value)}
                  >
                    <SelectTrigger className={`text-xs h-8 ${errors.service ? "border-destructive" : ""}`}>
                      <SelectValue placeholder="Select Service *" />
                    </SelectTrigger>
                    <SelectContent className="z-[60]">
                      {SERVICES.map((service) => (
                        <SelectItem key={service} value={service} className="text-xs">
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.service && (
                    <p className="text-[10px] text-destructive mt-0.5">{errors.service}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <Textarea
                    placeholder="Project details..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="text-xs resize-none h-16"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-8 text-xs bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground font-medium transition-all duration-300"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-1.5">
                      <svg
                        className="animate-spin h-3 w-3"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </Button>

                <p className="text-[10px] text-center text-muted-foreground leading-tight">
                  Your data is secure with us
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};


