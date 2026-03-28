import { useState } from "react";
import { Button } from "@/pageComps/NewAbout/components/ui/button";
// import { LeadForm } from "@/pageComps/NewAbout/components/LeadForm";
import { LeadForm } from "../../../components/LeadForm";
import { FeatureCard } from "@/pageComps/NewAbout/components/FeatureCard";
import { Timeline } from "@/pageComps/NewAbout/components/Timeline";
import { Shield, Target, Award, Users, Clock, FileCheck, TrendingUp } from "lucide-react";
import companyOverview from "@/pageComps/NewAbout/assets/company-overview.jpg";
// import heroBg from "@/pageComps/NewAbout/assets/hero-bg.jpg";

const NewAbout = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(https://cdn.prod.website-files.com/6768f29a6d5da42209173f20/6768f29b6d5da42209178842_Smurf%20Village.svg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              About Regacats Solutions
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4">
              India's trusted partner for licensing and regulatory consultancy.
            </p>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Empowering businesses with expert guidance to navigate complex licensing landscapes with confidence and ease.
            </p>
            <Button 
              size="lg"
              onClick={() => setIsFormOpen(true)}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 h-auto shadow-strong"
            >
              Get Consulting
            </Button>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img 
                src={companyOverview} 
                alt="Regacats Solutions Team" 
                className="rounded-2xl shadow-strong w-full h-auto"
              />
            </div>
            <div className="animate-slide-in-right space-y-6">
              <h2 className="text-4xl font-bold text-foreground">Who We Are</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Regacats Solutions is India's premier licensing and regulatory consultancy firm, dedicated to simplifying complex compliance processes for businesses across diverse industries. With years of expertise and a deep understanding of Indian regulatory frameworks, we help companies obtain the licenses and certifications they need to operate successfully.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From startups to established enterprises, we serve clients in manufacturing, healthcare, food & beverage, education, and more. Our mission is to remove regulatory barriers and enable businesses to focus on growth while we handle the compliance complexities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Foundation</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built on principles of integrity, expertise, and client success
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up">
            <div className="bg-card p-8 rounded-2xl shadow-soft border border-border/50 hover:shadow-medium transition-shadow duration-300">
              <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses by providing expert licensing consultancy that ensures 100% compliance, saves time, and enables hassle-free operations across India.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-soft border border-border/50 hover:shadow-medium transition-shadow duration-300">
              <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become India's most trusted and comprehensive regulatory consultancy partner, recognized for excellence, innovation, and unwavering commitment to client success.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-soft border border-border/50 hover:shadow-medium transition-shadow duration-300">
              <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Integrity in every interaction, expertise driven by continuous learning, and a relentless focus on delivering exceptional value and outcomes for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Regacats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Regacats</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your success is our priority. Here's what sets us apart.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-fade-in-up">
            <FeatureCard
              icon={Users}
              title="Expert Licensing Consultants"
              description="Seasoned professionals with deep knowledge of Indian regulatory frameworks across all industries."
            />
            <FeatureCard
              icon={TrendingUp}
              title="End-to-End Guidance"
              description="Complete support from documentation to final license approval, ensuring a smooth journey."
            />
            <FeatureCard
              icon={FileCheck}
              title="100% Compliance Assurance"
              description="We guarantee full regulatory compliance with all statutory requirements and legal standards."
            />
            <FeatureCard
              icon={Clock}
              title="Fast Turnaround Time"
              description="Efficient processes and strong relationships ensure quick license approvals without delays."
            />
          </div>
          
          <div className="text-center animate-scale-in">
            <Button 
              size="lg"
              onClick={() => setIsFormOpen(true)}
              className="bg-secondary hover:bg-primary bg-primary/80 text-secondary-foreground text-lg text-white px-8 py-6 h-auto shadow-medium"
            >
              Get Free Consulting
            </Button>
          </div>
        </div>
      </section>

      {/* Our Journey / Timeline Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A track record of growth, excellence, and client success
            </p>
          </div>
          
          <div className="animate-fade-in-up">
            <Timeline />
          </div>
        </div>
      </section> */}

      {/* Client Trust Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Trusted By Leading Brands</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of businesses that trust Regacats Solutions for their licensing needs
            </p>
          </div>
          
          <div className="bg-card p-12 rounded-2xl shadow-soft border border-border/50 animate-fade-in-up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
              <div className="text-6xl font-bold text-primary">100+</div>
              <div className="text-6xl font-bold text-primary">500+</div>
              <div className="text-6xl font-bold text-primary">1000+</div>
              <div className="text-6xl font-bold text-primary">10+</div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-4 text-center">
              <div className="text-sm text-muted-foreground font-semibold">Happy Clients</div>
              <div className="text-sm text-muted-foreground font-semibold">Licenses Processed</div>
              <div className="text-sm text-muted-foreground font-semibold">Successful Cases</div>
              <div className="text-sm text-muted-foreground font-semibold">Industry Sectors</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-background " style={{
          backgroundImage: `url('https://cdn.prod.website-files.com/6768f29a6d5da42209173f20/6768f29b6d5da42209178842_Smurf%20Village.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="absolute inset-0  opacity-95" />
        
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in-up ">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Let's Simplify Your Licensing Process
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get expert guidance from our licensing consultants. Schedule a free consultation today.
          </p>
          <Button 
            size="lg"
            onClick={() => setIsFormOpen(true)}
            className="bg-secondary hover:bg-white hover:text-primary text-secondary-foreground text-lg px-10 py-6 h-auto shadow-strong"
          >
            Talk to Our Experts
          </Button>
        </div>
      </section>

      {/* Lead Form Modal */}
      {/* <LeadForm isOpen={isFormOpen} onClose={setIsFormOpen} /> */}

      <LeadForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      </div>
  );
};

export default NewAbout;
