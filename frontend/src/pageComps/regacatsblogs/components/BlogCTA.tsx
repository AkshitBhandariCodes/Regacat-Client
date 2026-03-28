import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

interface BlogCTAProps {
  onGetConsulting: () => void;
}

const BlogCTA = ({ onGetConsulting }: BlogCTAProps) => {
  return (
    <section className="bg-gradient-hero py-16 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <MessageSquare className="h-12 w-12 text-white mx-auto" />
        
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Want Expert Guidance for Your Licensing Process?
        </h2>
        
        <p className="text-lg text-white/90 max-w-2xl mx-auto">
          Our team helps you navigate complex compliance with ease. Get personalized consulting tailored to your business needs.
        </p>
        
        <Button 
          size="lg"
          onClick={onGetConsulting}
          className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-200 shadow-lg"
        >
          Talk to Our Experts
        </Button>
      </div>
    </section>
  );
};

export default BlogCTA;
