import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

interface BlogHeroProps {
  onGetConsulting: () => void;
}

const BlogHero = ({ onGetConsulting }: BlogHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 px-6 text-center">
      {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div> */}
      
      <div className="relative max-w-4xl mx-auto animate-fade-in">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
          <FileText className="h-4 w-4 text-white" />
          <span className="text-sm font-medium text-white">Knowledge Hub</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Insights & Updates from <br />Regacats Solutions
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Stay informed with the latest news, trends, and guides in licensing & regulatory compliance.
        </p>
        
        <Button 
          size="lg" 
          onClick={onGetConsulting}
          className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-200 shadow-lg"
        >
          Get Consulting
        </Button>
      </div>
    </section>
  );
};

export default BlogHero;
