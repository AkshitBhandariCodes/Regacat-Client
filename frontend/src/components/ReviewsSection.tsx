import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    name: "shariyath banu - Founder",
    company: "Blush Beauty, Kerala",
    review: "Regacts has truly been a blessing in my CDSCO licensing journey. I was stuck in a difficult situation and almost fell into a costly scam, but Akshay, the founder of Regacts, stepped in at the right time and literally saved me from a major loss. He handled everything with complete professionalism, stayed connected with me throughout the entire process, and made sure I felt supported and reassured at every step.",
    rating: 5,
  },
  {
    name: "Jay Lyu - International Law Head",
    company: "TCI Co. Ltd., Taiwan",
    review: "Regacats Solutions helped me get my FSSAI license and complete the compliance needed for importing nutraceutical products from Taiwan. Anuj guided me clearly through the requirements, and the approval came through in about 13 days, which was faster than I expected. The whole process was smooth and well-organized. I’m very satisfied with their support and would happily recommend them for nutraceutical import approvals.",
    rating: 5,
  },
  {
    name: "Surojit - Sales",
    company: "Agaro Lifestyle , New Delhi",
    review: "Regacats Solutions helped us obtain our medical device import license for products sourced from China. Akshay guided us through the CDSCO requirements with clear communication and thorough documentation support. The entire process was handled professionally and efficiently. We’re very satisfied with their service and highly recommend them for medical device regulatory approvals.",
    rating: 5,
  },
  {
    name: "Varun Verma - Co-Founder",
    company: "BBetter, Hyderabad",
    review: "Regacats Solutions supported us with our Health Supplement and Nutraceutical FSSAI License, along with complete compliance for formulation and labeling. Anuj guided us with clear explanations and ensured all documentation was accurate and compliant with FSSAI standards. The process was smooth, professional, and very well coordinated. We truly appreciate their expertise and highly recommend their services for nutraceutical regulatory requirements",
    rating: 5,
  },
  {
    name: "Raj Mistry - Founder",
    company: "Super Million Hairs, United Kingdom",
    review: "Regacats Solutions helped us with our cosmetic import process from the UK, and the experience was excellent. Akshay guided us through all CDSCO requirements, ensured our documents were in perfect order, and the approval was completed in just 28 days. The entire process was smooth, transparent, and professionally handled. We highly recommend Regacats Solutions for reliable cosmetic import compliance and licensing support",
    rating: 5,
  },
];

export const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < itemsPerView; i++) {
      visible.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getVisibleReviews().map((review, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 shadow-lg animate-fade-in"
              >
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{review.review}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.company}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={prevSlide}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextSlide}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
