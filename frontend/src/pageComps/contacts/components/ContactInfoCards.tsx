import { Mail, Phone, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "contact@regacats.in",
    link: "mailto:contact@regacats.in",
    color: "text-accent",
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: "+91 9211921474",
    link: "tel:+91 9211921474",
    color: "text-secondary",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "Gurugram, Haryana, India",
    link: "https://maps.app.goo.gl/6aidodiwb9vn8z3p6",
    color: "text-primary",
  },
];

const ContactInfoCards = () => {
  return (
    <section className="py-16 px-4 -mt-20 relative z-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.link}
                target={item.icon === MapPin ? "_blank" : undefined}
                rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                className="group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="glass-card hover:glow-effect transition-all duration-300 hover:-translate-y-2 p-8 text-center h-full animate-fade-in-up">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/10 to-secondary/10 mb-4 group-hover:scale-110 transition-transform ${item.color}`}>
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-lg group-hover:text-accent transition-colors">
                    {item.detail}
                  </p>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoCards;
