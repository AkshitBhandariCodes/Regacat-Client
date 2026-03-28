import { FileText, Users, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const InfoCards = () => {
  const cards = [
    {
      icon: FileText,
      title: "Fast Documentation Support",
      description: "Expert assistance in preparing all required CDSCO documents with precision and speed."
    },
    {
      icon: Users,
      title: "Dedicated CDSCO Experts",
      description: "Work with seasoned regulatory professionals who know the system inside out."
    },
    {
      icon: MapPin,
      title: "PAN India Assistance",
      description: "Comprehensive support for importers across all zones in India."
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What is CDSCO Cosmetic Import License (Cos-2) in India?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The CDSCO Cosmetic Import License (Form COS-2) is a mandatory approval issued by the Central Drugs Standard Control Organization (CDSCO) that allows companies to legally import and sell cosmetic products in India. As per the Cosmetics Rules, 2020, every foreign manufacturer or authorized Indian agent must obtain a COS-2 license by applying through the CDSCO SUGAM online portal using Form COS-1. <br /><br />
This license ensures that imported cosmetics meet India’s safety, labeling, and quality regulations, helping brands comply with the Drugs and Cosmetics Act, 1940. Whether you are a global beauty brand or an Indian distributor, securing a CDSCO Cosmetic Import License (COS-2) is essential to launch and market cosmetic products legally in the Indian market.

            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              // <Card 
              //   key={index} 
              //   className="border-none shadow-card hover:shadow-elevated transition-smooth hover:-translate-y-1 animate-slide-up bg-card"
              //   style={{ animationDelay: `${index * 0.1}s` }}
              // >
              //   <CardContent className="p-6 text-center">
              //     <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              //       <card.icon className="h-8 w-8 text-primary" />
              //     </div>
              //     <h3 className="text-xl font-semibold mb-2 text-card-foreground">{card.title}</h3>
              //     <p className="text-muted-foreground">{card.description}</p>
              //   </CardContent>
              // </Card>
              <Card 
                key={index} 
                className="border-none shadow-card hover:shadow-elevated transition-smooth hover:-translate-y-1 animate-slide-up bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <card.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">{card.title}</h3>
                  <p className="text-muted-foreground">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
