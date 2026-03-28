import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO, FreshBite Foods",
    company: "🍽️",
    quote: "Regacats Solutions made our FSSAI licensing process incredibly smooth. What could have taken months was completed in just 10 days!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Compliance Head, TechElectronics",
    company: "⚡",
    quote: "Their expertise in EPR authorization saved us countless hours. Professional, knowledgeable, and incredibly efficient.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Founder, GlowBeauty",
    company: "💄",
    quote: "From BIS certification to import licenses, they handled everything. Our cosmetic brand is now fully compliant nationwide.",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    role: "Director, MediCare Pharma",
    company: "💊",
    quote: "Outstanding service for our drug license requirements. Their attention to detail and regulatory knowledge is unmatched.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-4 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-secondary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it — hear from our satisfied clients
          </p>
        </div>
        
        {/* Main featured testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-sm border-2 border-border/50 hover:border-secondary/30 transition-all duration-500 animate-fade-in">
            <div className="flex gap-1 mb-6 justify-center">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-secondary" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl text-foreground text-center mb-8 font-medium leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            
            <div className="flex items-center justify-center gap-4">
              <div className="text-4xl">{testimonials[currentIndex].company}</div>
              <div className="text-left">
                <div className="font-semibold text-foreground text-lg">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-muted-foreground">
                  {testimonials[currentIndex].role}
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Grid of all testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`p-6 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-lg animate-fade-up ${
                index === currentIndex 
                  ? 'border-2 border-secondary bg-card' 
                  : 'border border-border/50 bg-card/60 hover:border-secondary/30'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="text-3xl mb-3">{testimonial.company}</div>
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-secondary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {testimonial.quote}
              </p>
              <div className="border-t border-border/50 pt-3">
                <div className="font-semibold text-foreground text-sm">
                  {testimonial.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-secondary w-8' 
                  : 'bg-border bg-primary'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
