import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CosmeticVideo from "../../../assets/videos/cosmeticVideo.mp4";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

interface HeroSectionProps {
  onCTAClick: () => void;
}

const HeroSection = ({ onCTAClick }: HeroSectionProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // VALIDATION
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.service ||
      !formData.message
    ) {
      toast({
        title: "Error",
        description: "Please fill all required fields.",
        variant: "destructive",
      });
      return;
    }

    try {
      // const response = await fetch("http://localhost/api/lead?source=sendMail", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // });
      const response = await fetch("/api/lead?source=sendMail", {
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

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Success",
          description: "Your form has been submitted!",
        });

        // RESET
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast({
        title: "Server Error",
        description: "Could not submit form. Try again!",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="relative gradient-hero text-primary-foreground py-20 md:py-32 overflow-hidden">

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
        style={{ filter: "brightness(0.7)" }}
      >
        <source src={CosmeticVideo} type="video/mp4" />
      </video>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-start gap-10">

          {/* LEFT SIDE - 70% */}
          <div className="w-full md:w-[70%] animate-fade-in text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              CDSCO Cosmetic Import License (Cos-1, Cos-2) Consultant in India
            </h1>

            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-3xl leading-relaxed">
              Get expert assistance for CDSCO Cosmetic Import License (Cos-1 & Cos-2) in India.
              We help with documentation, SUGAM portal filing, and full compliance for cosmetic imports.
            </p>

            <Button
        onClick={onCTAClick}
      className="
       bg-accent text-accent-foreground hover:bg-accent/90 shadow-elevated group
          px-12 py-8 text-xl font-semibold
  "
>
  Get Your License Now
  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-smooth" />
</Button>

          </div>

          {/* RIGHT SIDE - 30% QUERY FORM */}
          <div className="w-full md:w-[40%] bg-white/20 backdrop-blur-xl p-8 rounded-2xl shadow-elevated min-h-[520px] flex flex-col justify-start">
            <h3 className="text-2xl font-semibold mb-6 text-center">Get a Free Consultation</h3>

            <form onSubmit={handleSubmit} className="space-y-5 flex-1 flex flex-col">
              
              <Input
                placeholder="Your Name"
                className="bg-white/70 h-12"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <Input
                placeholder="Email Address"
                type="email"
                className="bg-white/70 h-12"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <Input
                placeholder="Phone Number"
                type="tel"
                className="bg-white/70 h-12"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />

              {/* SERVICE SELECT */}
              <Select
                onValueChange={(value) =>
                  setFormData({ ...formData, service: value })
                }
              >
                <SelectTrigger className="bg-white/70 h-12">
                  <SelectValue placeholder="Select Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cos1">Cosmetic Import License (Cos-1)</SelectItem>
                  <SelectItem value="cos2">Cosmetic Registration (Cos-2)</SelectItem>
                  <SelectItem value="sugam">SUGAM Portal Filing</SelectItem>
                  <SelectItem value="reg">Regulatory Compliance Support</SelectItem>
                  <SelectItem value="iaa">Indian Authorized Agent Services</SelectItem>
                  <SelectItem value="full">End-to-End Import Support</SelectItem>
                </SelectContent>
              </Select>

              <Textarea
                placeholder="Your Message"
                className="bg-white/70 min-h-[120px]"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />

              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 mt-auto"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
