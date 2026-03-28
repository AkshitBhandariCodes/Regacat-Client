import { Link2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface PolicySectionProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string;
}

const PolicySection = ({ id, title, icon, content }: PolicySectionProps) => {
  const copyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
  };

  return (
    <div id={id} className="scroll-mt-20">
      <Accordion type="single" collapsible defaultValue={id} className="w-full">
        <AccordionItem value={id} className="border rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow">
          <AccordionTrigger className="px-6 py-4 hover:no-underline group">
            <div className="flex items-start gap-3 text-left flex-1">
              <div className="mt-0.5 text-primary">{icon}</div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-1">{title}</h2>
                <p className="text-sm text-muted-foreground">Click to expand section details</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6 pt-2">
            <div className="prose prose-sm max-w-none">
              <p className="text-muted-foreground leading-relaxed">{content}</p>
            </div>
            <button
              onClick={copyLink}
              className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
              aria-label="Copy section link"
            >
              <Link2 className="h-3 w-3" />
              Copy link to this section
            </button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default PolicySection;
