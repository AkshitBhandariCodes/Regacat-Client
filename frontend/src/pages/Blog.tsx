import { Navigation } from "@/components/Navigation";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import NewBlog from "@/pageComps/regacatsblogs/pages/Blog";
import  {LeadPopup}  from "@/components/LeadPopup";

const Blog = () => {
  const navigate = useNavigate();

  // const posts = [
  //   {
  //     title: "Complete Guide to CDSCO Registration in 2024",
  //     date: "March 15, 2024",
  //     excerpt: "Everything you need to know about CDSCO registration process, requirements, and timeline.",
  //   },
  //   {
  //     title: "How to Obtain Cosmetic Import License",
  //     date: "March 10, 2024",
  //     excerpt: "Step-by-step guide to getting your cosmetic import license approved quickly.",
  //   },
  //   {
  //     title: "Medical Device Classification in India",
  //     date: "March 5, 2024",
  //     excerpt: "Understanding the classification system for medical devices and its impact on licensing.",
  //   },
  //   {
  //     title: "FSSAI License: What You Need to Know",
  //     date: "February 28, 2024",
  //     excerpt: "Comprehensive guide to FSSAI licensing requirements for food businesses.",
  //   },
  // ];

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navigation onConsultClick={() => navigate("/")} />
      
      {/* <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">Blog & Resources</h1>
          <p className="text-muted-foreground mb-12">
            Latest insights and guides on regulatory compliance
          </p>
          
          <div className="space-y-6">
            {posts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <a href="#" className="text-primary hover:underline">Read more →</a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main> */}
      <NewBlog/>
      
      <Footer />
      <WhatsAppButton />
      <LeadPopup/>
    </div>
  );
};

export default Blog;
