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
import { useState } from "react";
import { toast } from "sonner";
import consultancyVideo from "../assets/videos/consultancy.mp4";

interface HeroSectionProps {
  onConsultClick: () => void;
}

const services = [
  "Cosmetic Import License",
  "CDSCO Drug Registration",
  "Medical Device Import License",
  "FSSAI License",
  "Indian Authorized Agent Services",
  "EPR Authorization",
  "Legal Metrology",
  "Any other -  FSSAI",
  "Any other - CDSCO"
];

export const HeroSection = ({ onConsultClick }: HeroSectionProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Form data to be sent to PHP backend
    const formPayload = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      service: formData.service,
      message: formData.message,
    };

    try {
      // const response = await fetch('/api/sendMail.php', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formPayload),
      // });
      const response = await fetch("/api/commonLead.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          message: formData.message,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send form data');
      }

      // Success response
      toast.success("Query submitted successfully! We'll contact you soon.");
      setFormData({ name: "", phone: "", email: "", service: "", message: "" });
    } catch (error) {
      console.error("Error sending form data", error);
      toast.error("There was an error submitting your query. Please try again.");
    }
  };

  return (
    <section
      id="home"
      className="relative py-20 overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        crossOrigin="anonymous"
        poster="/placeholder.svg"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'brightness(0.7)' }}
        onLoadedData={() => console.log("Hero video loaded")}
        onError={(e) => console.error("Hero video error", e)}
      >
        <source src={consultancyVideo} type="video/mp4" />
      </video>
      
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-tr from-background/95 via-background/90 to-primary/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center justify-around">
          {/* Left Side - Content */}
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              CDSCO & FSSAI Consultant in India for Cosmetic, Medical Device & Nutraceutical Import
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Navigate complex regulatory requirements with confidence. From CDSCO cosmetic import registration, medical device import registration to
              FSSAI registrations, we've got you covered.
            </p>
            <Button onClick={onConsultClick} size="lg" className="text-lg px-8">
              Get Free Consulting
            </Button>
          </div>

          {/* Right Side - Form */}
          <div className="animate-fade-up">
            <div className="bg-card rounded-lg shadow-xl p-8 border border-border ">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Start Your Licensing Journey
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full Name *"
                  />
                </div>

                <div>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Mobile Number *"
                  />
                </div>

                <div>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email *"
                  />
                </div>

                <div>
                  <Select
                    required
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Service *" />
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
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message..."
                    rows={3}
                  />
                </div>

                <Button type="submit" className="w-full">
                  Submit Query
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
