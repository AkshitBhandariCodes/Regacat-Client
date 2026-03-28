// import { Button } from "@/components/ui/button";
// import { ArrowRight, MessageCircle } from "lucide-react";

// const CTASection = () => {
//   return (
//     <section className="py-24 px-4 bg-muted/30 relative overflow-hidden">
//       {/* Animated gradient background */}
//       <div 
//         className="absolute inset-0 opacity-20 animate-gradient-flow"
//         style={{
//           background: "var(--gradient-hero)",
//           backgroundSize: "200% 200%",
//         }}
//       />
      
//       {/* Wave pattern */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
//         <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//           <path 
//             d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" 
//             fill="hsl(var(--secondary))"
//           />
//         </svg>
//       </div>
      
//       <div className="container mx-auto relative z-10 text-center">
//         <div className="max-w-4xl mx-auto">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 mb-6 animate-fade-in">
//             <MessageCircle className="w-4 h-4" />
//             <span className="text-sm font-semibold">Ready to Get Started?</span>
//           </div>
          
//           <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6 animate-fade-up">
//             Let's Build Your
//             <br />
//             <span className="text-secondary">Success Story Next</span>
//           </h2>
          
//           <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
//             Connect with Regacats Solutions for your compliance & licensing needs. 
//             Our experts are ready to help you achieve fast, compliant growth.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
//             <Button 
//               size="lg"
//               className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-6 text-lg group"
//             >
//               Get in Touch
//               <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </Button>
            
//             <Button 
//               size="lg"
//               variant="outline"
//               className="border-2 border-border hover:border-secondary hover:text-secondary font-semibold px-8 py-6 text-lg"
//             >
//               Schedule Consultation
//             </Button>
//           </div>
          
//           {/* Contact info */}
//           <div className="mt-12 pt-12 border-t border-border/50 flex flex-col md:flex-row items-center justify-center gap-8 text-muted-foreground animate-fade-up" style={{ animationDelay: "0.6s" }}>
//             <div className="flex items-center gap-2">
//               <span className="text-secondary">📧</span>
//               <span>contact@regacats.in</span>
//             </div>
//             <div className="hidden md:block w-px h-6 bg-border" />
//             <div className="flex items-center gap-2">
//               <span className="text-secondary">📞</span>
//               <span>+91 92</span>
//             </div>
//             <div className="hidden md:block w-px h-6 bg-border" />
//             <div className="flex items-center gap-2">
//               <span className="text-secondary">⏱️</span>
//               <span>Mon-Sat, 9AM-6PM IST</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CTASection;


import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section
      className="py-24 px-4 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg,rgb(0, 85, 255) 0%, #e0f2fe 100%)",
      }}
    >
      {/* Animated gradient overlay */}
      <div 
        className="absolute inset-0 opacity-30 animate-gradient-flow"
        style={{
          background: "linear-gradient(120deg,rgb(2, 103, 146), #ffffff, #0ea5e9)",
          backgroundSize: "250% 250%",
        }}
      />

      {/* Wave pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" 
            fill="rgba(255,255,255,0.5)"
          />
        </svg>
      </div>

      <div className="container mx-auto relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur text-secondary border border-white/40 mb-6 animate-fade-in">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-semibold">Ready to Get Started?</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6 animate-fade-up">
            Let's Build Your
            <br />
            <span className="text-secondary">Success Story Next</span>
          </h2>
          
          <p className="text-xl text-white mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Connect with Regacats Solutions for your compliance & licensing needs. 
            Our experts are ready to help you achieve fast, compliant growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg"
              className="bg-primary hover:bg-secondary/90 text-white font-semibold px-8 py-6 text-lg group"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white hover:border-secondary text-primary font-semibold px-8 py-6 text-lg"
            >
              Schedule Consultation
            </Button>
          </div>
          
          {/* Contact info */}
          <div className="mt-12 pt-12 border-t border-white/60 flex flex-col md:flex-row items-center justify-center gap-8 text-white animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center gap-2">
              <span className="text-secondary">📧</span>
              <span>contact@regacats.in</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/60" />
            <div className="flex items-center gap-2">
              <span className="text-secondary">📞</span>
              <span>+91 9211921474</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/60" />
            <div className="flex items-center gap-2">
              <span className="text-secondary">⏱️</span>
              <span>Mon-Fri, 9AM-6PM IST</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
