import { Navigation } from "@/components/Navigation";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import TeamPage from "@/pageComps/teams/pages/TeamPage";
import {LeadPopup} from '@/components/LeadPopup';
import SEO from "@/seo/SEO";

const Team = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Our team" />
      <TopBar />
      <Navigation onConsultClick={() => navigate("/")} />
      
      {/* <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">Meet Our Team</h1>
          <p className="text-muted-foreground mb-12">
            Expert professionals dedicated to your regulatory success
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main> */}
      <TeamPage/>
      
      <Footer />
      <WhatsAppButton />
      <LeadPopup/>
    </div>
  );
};

export default Team;
