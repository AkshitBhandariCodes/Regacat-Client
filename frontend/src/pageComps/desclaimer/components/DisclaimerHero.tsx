import { CalendarDays } from "lucide-react";

const DisclaimerHero = () => {
  return (
    <section className="w-full border-b bg-gradient-to-br from-primary/5 via-accent/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Disclaimer
          </h1>
          
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mb-4">
            <CalendarDays className="h-4 w-4" />
            <span>Last updated: [Date Placeholder]</span>
          </div>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            This Disclaimer outlines the limitations and conditions of using our website. Please read carefully to understand your rights and responsibilities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerHero;
