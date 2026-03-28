import Hero from "@/pageComps/testimonial/components/portfolio/Hero";
import PortfolioShowcase from "@/pageComps/testimonial/components/portfolio/PortfolioShowcase";
import FeaturedCaseStudy from "@/pageComps/testimonial/components/portfolio/FeaturedCaseStudy";
import Testimonials from "@/pageComps/testimonial/components/portfolio/Testimonials";
import IndustriesServed from "@/pageComps/testimonial/components/portfolio/IndustriesServed";
import CTASection from "@/pageComps/testimonial/components/portfolio/CTASection";
import FloatingCTA from "@/pageComps/testimonial/components/portfolio/FloatingCTA";

const PortfolioPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <PortfolioShowcase />
      <FeaturedCaseStudy />
      <Testimonials />
      <IndustriesServed />
      <CTASection />
      <FloatingCTA />
    </main>
  );
};

export default PortfolioPage;
