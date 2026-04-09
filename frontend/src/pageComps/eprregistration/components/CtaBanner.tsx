import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CtaBannerProps {
  onCtaClick: () => void;
}

export const CtaBanner = ({ onCtaClick }: CtaBannerProps) => {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="mb-4 text-slate-900">Still have questions?</h2>
          <p className="text-base md:text-lg text-slate-600">
            Our EPR experts are here to help. Contact us for personalized guidance.
          </p>
          <div className="mt-10 flex justify-center">
            <Button
              onClick={onCtaClick}
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-700 border border-blue-600 shadow-medium font-semibold px-10 py-4 h-auto rounded-lg group"
            >
              Talk to Our Experts
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
