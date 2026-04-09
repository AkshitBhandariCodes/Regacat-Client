import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import TeamCard from "@/pageComps/teams/components/TeamCard";
import ValueCard from "@/pageComps/teams/components/ValueCard";
import FloatingParticles from "@/pageComps/teams/components/FloatingParticles";
import {LeadFormDialog} from "@/pageComps/eprregistration/components/LeadFormDialog";
import { Shield, Lightbulb, Users, ArrowRight } from "lucide-react";
import akshay from '@/assets/teams/akshay.jpg'
import anuj from '@/assets/teams/WhatsApp Image 2026-04-09 at 16.09.24.jpeg'
import akash from '@/assets/teams/Akash sharma.jpeg'


const TeamPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const teamMembers = [
    {
      name: "Akshay Kumar",
      position: "CDSCO Regulatory Consultant -  Medical Devices & Cosmetics",
      image: `${akshay}`,
      linkedin: "https://www.linkedin.com/in/akshay-rajput-95767720a/",
      email: "contact@regacats.in",

    },
    {
      name: "Anuj Kumar",
      position: "FSSAI Regulatory Consultant - Food, Dietary Supplement, Nutraceutical ",
      image: `${anuj}`,
      linkedin: "https://www.linkedin.com/in/anujkumar1709/",
      email: "anuj@regacats.in",
    },
    {
      name: "Akash Sharma",
      position: "Regulatory Consultant - Legal Metrology & EPR" ,
      image: `${akash}`,
      linkedin: "https://www.linkedin.com/in/aakash-sharma-72478a2aa/",
      email: "contact@regacats.in",
    },

  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <FloatingParticles />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Meet the Experts Behind
            <br />
            <span className="text-accent">Regacats Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            A team of professionals simplifying business compliance across India
          </p>
          <p className="mt-4 text-base md:text-lg text-white/80 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            Regacats Solutions has a team of over 15+ experts with deep experience across Food, Cosmetics,
            Medical Device, Dietary Supplement, Nutraceuticals, and Drugs.
          </p>
        </div>
        
        {/* Geometric Background Elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Team Grid Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Our Talented Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Meet the specialists who guide regulatory projects with hands-on expertise, faster documentation,
            and practical support for every filing stage.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={member.name}
              {...member}
              delay={index * 100}
            />
          ))}
        </div>
      </section>

      {/* Leadership Section */}
      {/* <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden shadow-card border-border/50">
              <div className="gradient-card absolute inset-0 opacity-50" />
              <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div className="flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Visionary Leadership
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mb-6" />
                  <p className="text-lg text-muted-foreground mb-6">
                    Our founders bring decades of combined experience in compliance, legal services, and technology innovation.
                  </p>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-foreground">
                    "We build trust through compliance excellence."
                  </blockquote>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-2xl opacity-30 animate-pulse-glow" />
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop"
                      alt="Leadership"
                      className="relative rounded-2xl w-full max-w-md object-cover shadow-hover"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section> */}
      <section className="py-20 bg-muted/30">
  <div className="container mx-auto px-4">
    <div className="max-w-5xl mx-auto">
      
      <Card className="overflow-hidden shadow-card border-border/50">
        <div className="gradient-card absolute inset-0 opacity-50" />

        <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12">
          
          {/* ---- LEFT TEXT SECTION ---- */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Visionary Leadership
            </h2>

            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mb-6" />

            <p className="text-lg text-muted-foreground mb-6">
              Regacats Solutions team brings decades of combined experience in the CDSCO & FSSAI
              regulatory services for Food, Cosmetics, Medical Device, Dietary Supplement,
              Nutraceuticals & Drugs.
            </p>

            <blockquote className="border-l-4 border-primary pl-4 italic text-foreground">
              "We build trust through compliance excellence."
            </blockquote>
          </div>

          {/* ---- RIGHT: IMAGE CAROUSEL ---- */}
          <div className="flex items-center justify-center">

          </div>

        </div>
      </Card>
    </div>
  </div>
</section>


      {/* Values Section */}
      <section className="py-20 relative overflow-hidden">
        <FloatingParticles />
        
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              At Regacats, our strength lies in collaboration, expertise, and precision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <ValueCard icon={Shield} title="Integrity" delay={0} />
            <ValueCard icon={Lightbulb} title="Innovation" delay={100} />
            <ValueCard icon={Users} title="Transparency" delay={200} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <FloatingParticles />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Partner with India's Most Trusted
            <br />
            Compliance Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Let us handle your compliance needs while you focus on growing your business
          </p>
          <Button
            size="lg"
            onClick={() => setIsDialogOpen(true)}
            className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg shadow-hover transition-smooth animate-fade-in-up group"
            style={{ animationDelay: '200ms' }}
          >
            Get in Touch
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
          </Button>
        </div>
      </section>

      {/* Lead Form Dialog */}
      <LeadFormDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />

      {/* Floating Social Media */}
      {/* <FloatingSocialMedia /> */}
    </div>
  );
};

export default TeamPage;
