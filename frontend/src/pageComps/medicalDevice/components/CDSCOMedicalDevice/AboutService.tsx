import { Shield, FileCheck, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutService = () => {
  const features = [
    {
      icon: Shield,
      title: "Classification Guidance",
      description: "Expert analysis to determine your device's risk category and regulatory pathway"
    },
    {
      icon: FileCheck,
      title: "End-to-End Application Handling",
      description: "Complete management of documentation, submission, and follow-up processes"
    },
    {
      icon: CheckCircle,
      title: "100% CDSCO Compliance Support",
      description: "Full regulatory compliance assurance with ongoing post-license support"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            What is a CDSCO Medical Device Import License?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
           The <strong>medical device import in India</strong> means importing tools, machinery, implants, reagents, software, etc., designed for medical use into the Indian market in compliance with the regulations. Everything must also abide by the Drugs & Cosmetics Act, 1940 and the <a href="https://cdsco.gov.in/opencms/opencms/system/modules/CDSCO.WEB/elements/download_file_division.jsp?num_id=OTI2Nw==" className="underline text-primary" target="_blank">Medical Devices Rules, 2017.</a> If you are a worldwide manufacturer and assigning an Indian Authorized Agent, or if you are an importer in India, <strong>Regacats Solutions</strong> obtains your CDSCO import license (Form MD-14/ MD-15) quickly and accurately.</p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            At <span className="font-semibold text-primary">Regacats Solutions</span>, we manage the entire 
            process — from classification guidance to documentation, submission, and license approval — 
            ensuring full compliance and faster results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
