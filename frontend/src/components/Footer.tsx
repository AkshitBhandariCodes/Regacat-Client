import { useState } from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const Footer = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 🧠 Basic validation
    if (!formData.email || !formData.message) {
      toast.error("Please fill in both fields before submitting.");
      return;
    }

    try {
      console.log("Footer: sending payload:", {
        name: "Quick Contact",
        mobile: "N/A",
        email: formData.email,
        service: "Quick Contact Form",
        message: formData.message,
      });

      const response = await fetch("https://regacats.in/api/footerContact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Quick Contact", // ✅ matches PHP
          mobile: "N/A",             // ✅ matches PHP
          email: formData.email,
          service: "Quick Contact Form",
          message: formData.message,
        }),
      });

      const result = await response.json();
      console.log("Footer: raw backend response:", result);

      if (result.success) {
        toast.success("Message sent successfully! We'll contact you soon.");
        setFormData({ email: "", message: "" });
      } else {
        toast.error(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Footer: network error:", error);
      toast.error("Error sending message. Please check your connection.");
    }
  };

  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Regacats Solutions</h3>
            <p className="text-background/80 mb-4">
              India's trusted partner for licensing and regulatory consultancy services.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <span className="text-sm text-background/80">
                  4th Floor Plot no. 8&9, MM Towers Phase IV, Udyog Vihar, Gurugram 122015
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span className="text-sm text-background/80">+91 9211921474 / +91 9711467307</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span className="text-sm text-background/80">contact@regacats.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["home", "about", "services", "portfolio", "team", "blog"].map((id) => (
                <li key={id}>
                  <a
                    href={`/${id}`}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {[
                "Cosmetic Import License",
                "CDSCO Drug Registration",
                "Medical Device Import License",
                "FSSAI License",
                "EPR Authorization",
                "Legal Metrology",
                "Privacy Policy",
                "Disclaimer"
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}
          {/* Services */}
<div>
  <h4 className="text-lg font-semibold mb-4">Our Services</h4>
  <ul className="space-y-2">
    <li>
      <Link to="/cosmetic-import-license-india" className="text-background/80 hover:text-background transition-colors">
        Cosmetic Import License
      </Link>
    </li>

    <li>
      <Link to="/cdsco-registration" className="text-background/80 hover:text-background transition-colors">
        CDSCO Drug Registration
      </Link>
    </li>

    <li>
      <Link to="/medical-device-import-license-india" className="text-background/80 hover:text-background transition-colors">
        Medical Device Import License
      </Link>
    </li>

    <li>
      <Link to="/fssai-consultants-india" className="text-background/80 hover:text-background transition-colors">
        FSSAI License
      </Link>
    </li>

    <li>
      <Link to="/fssai-nutraceutical-import-consultant-india" className="text-background/80 hover:text-background transition-colors">
        FSSAI Nutraceutical Import Consultant
      </Link>
    </li>

    <li>
      <Link to="/epr-registration" className="text-background/80 hover:text-background transition-colors">
        EPR Authorization
      </Link>
    </li>

    <li>
      <Link to="/legal-metrology" className="text-background/80 hover:text-background transition-colors">
        Legal Metrology
      </Link>
    </li>
    <li>
      <Link to="/terms-and-conditions" className="text-background/80 hover:text-background transition-colors">
        Terms & Conditions
      </Link>
    </li>

    <li>
      <Link to="/privacy-policy" className="text-background/80 hover:text-background transition-colors">
        Privacy Policy
      </Link>
    </li>

    <li>
      <Link to="/disclaimer" className="text-background/80 hover:text-background transition-colors">
        Disclaimer
      </Link>
    </li>
  </ul>
</div>


          {/* Contact Form */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Contact</h4>
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Your message"
                rows={3}
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button
                type="submit"
                className="w-full bg-background text-foreground hover:bg-background/90"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/80">
              © 2025 Regacats Solutions. All rights reserved.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
