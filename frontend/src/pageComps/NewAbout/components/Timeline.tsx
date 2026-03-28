import { CheckCircle2 } from "lucide-react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2018",
    title: "Founded",
    description: "Regacats Solutions established with a vision to simplify licensing processes in India.",
  },
  {
    year: "2019",
    title: "100+ Clients",
    description: "Achieved milestone of serving over 100 satisfied clients across multiple industries.",
  },
  {
    year: "2021",
    title: "Pan-India Presence",
    description: "Expanded operations to serve clients across all major states in India.",
  },
  {
    year: "2023",
    title: "Industry Leader",
    description: "Recognized as a trusted partner for licensing consultancy with 1000+ successful cases.",
  },
];

export const Timeline = () => {
  return (
    <div className="relative">
      {/* Desktop Timeline - Horizontal */}
      <div className="hidden md:block">
        <div className="flex justify-between items-start relative">
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary-light to-primary" />
          
          {timelineEvents.map((event, index) => (
            <div key={index} className="flex-1 relative group">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-medium">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <div className="bg-card p-4 rounded-lg shadow-soft border border-border/50 group-hover:shadow-medium transition-shadow duration-300">
                  <div className="text-2xl font-bold text-primary mb-2">{event.year}</div>
                  <h4 className="font-semibold text-foreground mb-2">{event.title}</h4>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Mobile Timeline - Vertical */}
      <div className="md:hidden space-y-8">
        <div className="relative pl-8 border-l-2 border-primary/30">
          {timelineEvents.map((event, index) => (
            <div key={index} className="mb-8 last:mb-0 relative">
              <div className="absolute -left-9 w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center shadow-medium">
                <CheckCircle2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="bg-card p-4 rounded-lg shadow-soft border border-border/50">
                <div className="text-xl font-bold text-primary mb-1">{event.year}</div>
                <h4 className="font-semibold text-foreground mb-2">{event.title}</h4>
                <p className="text-sm text-muted-foreground">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
