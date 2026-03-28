import { Card, CardContent } from "@/components/ui/card";
import { Thermometer, FlaskConical, Stethoscope, Heart } from "lucide-react";

export const ClassificationGrid = () => {
  const classifications = [
    {
      class: "Class A",
      risk: "Low-Risk",
      icon: Thermometer,
      examples: "Surgical dressings, thermometers, examination gloves",
      color: "bg-green-100 text-green-700 border-green-300"
    },
    {
      class: "Class B",
      risk: "Low-Moderate-Risk",
      icon: FlaskConical,
      examples: "Diagnostic kits, blood pressure monitors, syringes",
      color: "bg-blue-100 text-blue-700 border-blue-300"
    },
    {
      class: "Class C",
      risk: "Moderate-High-Risk",
      icon: Stethoscope,
      examples: "Ventilators, ultrasound scanners, surgical instruments",
      color: "bg-orange-100 text-orange-700 border-orange-300"
    },
    {
      class: "Class D",
      risk: "High-Risk",
      icon: Heart,
      examples: "Pacemakers, heart valves, implantable devices",
      color: "bg-red-100 text-red-700 border-red-300"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            CDSCO Medical Device Classification
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Medical devices are categorized into four classes based on their risk level and intended use
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {classifications.map((item, index) => (
            <Card
              key={index}
              className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className={`inline-flex px-4 py-2 rounded-full text-sm font-semibold border-2 ${item.color}`}>
                  {item.class}
                </div>
                
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">{item.risk}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.examples}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
