// import { Button } from "@/components/ui/button";
// import { ArrowRight, Shield, CheckCircle2 } from "lucide-react";
// import fssaifoodvideo from '../../../../assets/videos/fssaivideo.mp4'
// import SEO from '../../../../seo/SEO'

// interface HeroSectionProps {
//   onCTAClick: () => void;
// }

// const HeroSection = ({ onCTAClick }: HeroSectionProps) => {
//   return (
//     <>
//     <SEO
//     title="Leading FSSAI Consultants in India | Global Food Compliance"
//     description="Best FSSAI consultants in India for food, dietary supplement & nutraceutical import, manufacturing & export licensing. Expert compliance support."
//     />
    
//     <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 md:py-32">
//            <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         preload="auto"
//         crossOrigin="anonymous"
//         poster="/placeholder.svg"
//         className="absolute inset-0 w-full h-full object-cover"
//         style={{ filter: 'brightness(0.7)' }}
//         onLoadedData={() => console.log("Hero video loaded")}
//         onError={(e) => console.error("Hero video error", e)}
//       >
//         <source src={fssaifoodvideo} type="video/mp4" />
        
//       </video>
//       {/* Decorative background elements */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-20 right-10 w-72 h-72 bg-white rounded-full blur-3xl" />
//         <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="max-w-4xl mx-auto text-center space-y-8 fade-in">
//           {/* Badge */}
//           <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
//             <Shield className="w-4 h-4" />
//             <span className="text-sm font-medium">FSSAI License Experts</span>
//           </div>

//           {/* Main heading */}
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
//           FSSAI Regulatory Services in India for Food, Dietary Supplement & Nutraceuticals
      
//           </h1>

//           {/* Subheading */}
//           <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
//             End-to-end food licensing assistance for businesses across India. We handle everything from documentation to final approval.
//           </p>

//           {/* Trust indicators */}
//           <div className="flex flex-wrap justify-center gap-6 md:gap-8 pt-4">
//             <div className="flex items-center gap-2">
//               <CheckCircle2 className="w-5 h-5 text-secondary" />
//               <span className="text-sm font-medium">500+ Licenses Issued</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <CheckCircle2 className="w-5 h-5 text-secondary" />
//               <span className="text-sm font-medium">100% Compliance</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <CheckCircle2 className="w-5 h-5 text-secondary" />
//               <span className="text-sm font-medium">PAN India Service</span>
//             </div>
//           </div>

//           {/* CTA buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
//             <Button 
//               size="lg"
//               onClick={onCTAClick}
//               className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
//             >
//               Get Started Now
//               <ArrowRight className="ml-2 w-5 h-5" />
//             </Button>
//             <Button 
//               size="lg"
//               variant="outline"
//               onClick={onCTAClick}
//               className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-semibold px-8 py-6 text-lg rounded-xl"
//             >
//               Talk to Expert
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//     </>
//   );
// };

// export default HeroSection;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CheckCircle2 } from "lucide-react";
import fssaifoodvideo from "../../../../assets/videos/fssaivideo.mp4";
import SEO from "../../../../seo/SEO";
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

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.service ||
      !formData.message
    ) {
      toast({
        title: "Missing Fields",
        description: "Please fill all required fields.",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch("/api/lead?source=sendFssaiMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Success",
          description: "Your form has been submitted!",
        });

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
    } catch {
      toast({
        title: "Server Error",
        description: "Could not submit form.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <SEO
        title="FSSAI Consultants in India | Regulatory Services"
        description="Comprehensive FSSAI regulatory and compliance services for food, nutraceutical, and dietary supplement businesses across India and global markets."
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 md:py-32">

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
          <source src={fssaifoodvideo} type="video/mp4" />
        </video>

        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-start gap-12">

            {/* LEFT 70% */}
            <div className="w-full md:w-[70%] text-center md:text-left space-y-8">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">FSSAI Regulatory Consultants</span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                FSSAI Consultants for Food, Nutraceutical & Dietary Supplement
              </h1>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
                Regacats Solutions provides end-to-end FSSAI regulatory and compliance services including product formulation review, licensing, approvals, import support, labeling compliance, and post-market guidance.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 md:gap-8 pt-4 justify-center md:justify-start">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-medium">8+ Years Regulatory Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-medium">PAN India & International Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-medium">Food | Nutraceutical | Dietary Supplements</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-6">
                <Button
                  size="lg"
                  onClick={onCTAClick}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg rounded-xl shadow-lg hover:scale-105 transition-all"
                >
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  onClick={onCTAClick}
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg rounded-xl"
                >
                  Talk to Expert
                </Button>
              </div>
            </div>

            {/* RIGHT SIDE FORM - 30% */}
            <div className="w-full md:w-[40%] bg-white/20 backdrop-blur-xl p-8 rounded-2xl shadow-xl min-h-[520px]">

              <h3 className="text-2xl font-semibold mb-6 text-center">Get a Free Consultation</h3>

              <form onSubmit={handleSubmit} className="space-y-5">

                <Input
                  placeholder="Your Name"
                  className="bg-white/70 h-12"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />

                <Input
                  placeholder="Email Address"
                  type="email"
                  className="bg-white/70 h-12"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />

                <Input
                  placeholder="Phone Number"
                  type="tel"
                  className="bg-white/70 h-12"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />

                {/* Service Select */}
                <Select
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger className="bg-white/70 h-12">
                    <SelectValue placeholder="Select Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">FSSAI Basic License</SelectItem>
                    <SelectItem value="state">FSSAI State License</SelectItem>
                    <SelectItem value="central">FSSAI Central License</SelectItem>
                    <SelectItem value="import">FSSAI Import License</SelectItem>
                    <SelectItem value="iaa">Indian Authorized Agent Services</SelectItem>
                    <SelectItem value="renewal">FSSAI License Renewal</SelectItem>
                    <SelectItem value="labelling">Food Labelling Compliance</SelectItem>
                  </SelectContent>
                </Select>

                <Textarea
                  placeholder="Your Message"
                  className="bg-white/70 min-h-[120px]"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />

                <Button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12"
                >
                  Submit
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
