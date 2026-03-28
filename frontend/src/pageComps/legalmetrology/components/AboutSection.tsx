import { FileCheck, Users, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  const features = [
    {
      icon: FileCheck,
      title: "Food",
      // description: "Get your file verified and ready quickly.",
    },
    {
      icon: Users,
      title: "Cosmetic",
      // description: "Handled 200+ LM cases.",
    },
    {
      icon: Globe,
      title: "Medical Device",
      // description: "Assistance for importers, manufacturers & brands nationwide.",
    },
  ];

  return (
    <section className="py-20 bg-background" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-primary">
            What is Legal Metrology Registration?
          </h2>
          <div className="text-lg text-muted-foreground space-y-4 leading-relaxed">
            <p>
              <strong>Legal Metrology Registration</strong> is a mandatory certification governed by the Department of Consumer Affairs, 
              ensuring that all weighing and measuring instruments, packaging, and labeling comply with Indian standards.
            </p>
            <p>
              If you manufacture, import, or sell packaged commodities — you must obtain Legal Metrology registration 
              to avoid penalties and ensure smooth market operations.
            </p>
            <p className="font-semibold text-foreground">
              Regacats Solutions simplifies this process — from documentation and department coordination to approval 
              and post-registration compliance.
            </p>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
  Products Category Associated
</h2>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up bg-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="pt-8 pb-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-primary/10 rounded-2xl">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">{feature.title}</h3>
                {/* <p className="text-muted-foreground">{feature.description}</p> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
