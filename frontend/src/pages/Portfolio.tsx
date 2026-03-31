import { Navigation } from "@/components/Navigation";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import PortfolioPage from "@/pageComps/testimonial/pages/Portfoliopage";
import  {LeadPopup}  from "@/components/LeadPopup";
// import NewPortfolio from "@/testimonial/pages/NewPortfolio";

const Portfolio = () => {
  const navigate = useNavigate();

  // const projects = [
  //   {
  //     title: "Cosmetic Brand Launch",
  //     client: "Beauty Co.",
  //     description: "Successfully obtained cosmetic import license for international brand entry into Indian market.",
  //   },
  //   {
  //     title: "Medical Device Registration",
  //     client: "MediTech Solutions",
  //     description: "Completed CDSCO registration for Class B medical devices within 45 days.",
  //   },
  //   {
  //     title: "FSSAI Certification",
  //     client: "Organic Foods Ltd",
  //     description: "Secured FSSAI license for food manufacturing and distribution operations.",
  //   },
  //   {
  //     title: "BIS Certification",
  //     client: "Electronics India",
  //     description: "Obtained BIS certification for consumer electronics products.",
  //   },
  // ];

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navigation onConsultClick={() => navigate("/")} />
      
      {/* <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">Our Portfolio</h1>
          <p className="text-muted-foreground mb-12">
            Discover how we've helped businesses achieve regulatory compliance
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{project.client}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main> */}
      {/* <NewPortfolio/> */}
      <PortfolioPage/>
      
      <Footer />
      <WhatsAppButton />
      <LeadPopup/>
    </div>
  );
};

export default Portfolio;
