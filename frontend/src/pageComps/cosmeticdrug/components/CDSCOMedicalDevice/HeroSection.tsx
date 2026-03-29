import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FileCheck, ArrowRight, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import cosmeticDrugVideo  from '../../../../assets/videos/cosmeticDrug.mp4'

interface HeroSectionProps {
  onOpenLeadForm: () => void;
}

export const  HeroSection = ({ onOpenLeadForm }: HeroSectionProps) => {
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
    
  //   console.log("Form submitted:", formData);
    
  //   toast.success("Thank you for your inquiry!", {
  //     description: "Our regulatory experts will contact you within 24 hours."
  //   });
    
  //   setFormData({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     company: "",
  //     deviceType: "",
  //     message: ""
  //   });
  // };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch("/api/lead?source=sendDeviceMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (result.success) {
        toast.success("Thank you for your inquiry!", {
          description: "Our regulatory experts will contact you within 24 hours.",
        });
  
        // Reset form after success
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          deviceType: "",
          message: "",
        });
      } else {
        toast.error("Failed to send message!", {
          description: result.message || "Please try again later.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Network Error", {
        description: "Unable to reach the server. Please try again later.",
      });
    }
  };
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="relative min-h-[700px] flex items-center overflow-hidden">
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
        <source src={cosmeticDrugVideo} type="video/mp4" />
        
      </video>

      {/* Fade Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-accent/95" /> */}
      {/* <div className="absolute inset-0 bg-gradient-to-tr from-background/95 via-background/90 to-primary/20" /> */}
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <FileCheck className="w-4 h-4" />
              <span className="text-sm font-medium">CDSCO Regulatory Experts</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              CDSCO Drug License
            </h1>

            <p className="text-xl text-white/90 leading-relaxed max-w-xl">
              Fast-track your drug license approval in India with complete regulatory support —
              from regulatory research to license issuance.
            </p>

            <div className="flex flex-wrap gap-4">
              {/* <Button
                size="lg"
                onClick={onOpenLeadForm}
                className="bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all group"
              >
                Get Your License
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-primary hover:bg-white hover:text-primary"
              >
                Learn More
              </Button> */}
               <Button
        onClick={onOpenLeadForm}
      className="
       bg-accent text-accent-foreground hover:bg-accent/90 shadow-elevated group
          px-12 py-8 text-xl font-semibold
  "
>
  Get Your License Now
  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-smooth" />
</Button>
            </div>

            {/* Trust indicators */}
            {/* <div className="flex flex-wrap gap-8 pt-6 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-white/80">Devices Licensed</div>
              </div>
              <div>
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm text-white/80">Compliance Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold">45 Days</div>
                <div className="text-sm text-white/80">Average Approval</div>
              </div>
            </div> */}
          </div>

          {/* Right Side - Lead Form */}
          <div className="relative animate-slide-in-right">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
              <div className="text-white mb-6">
                <h3 className="text-2xl font-bold mb-2">Get Expert Consultation</h3>
                <p className="text-white/90 text-sm">Fill out the form and our regulatory experts will contact you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white">Company Name *</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Ltd."
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deviceType" className="text-white">Device Type / Class</Label>
                  <Input
                    id="deviceType"
                    name="deviceType"
                    value={formData.deviceType}
                    onChange={handleChange}
                    placeholder="e.g., Class C Ultrasound Scanner"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Additional Information</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    rows={3}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
                  />
                </div>

                <Button type="submit" className="w-full bg-white text-primary hover:bg-white/90 shadow-lg group">
                  Submit Inquiry
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
