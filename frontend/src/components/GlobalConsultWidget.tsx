import { useEffect, useState } from "react";
import { ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/LeadForm";

export const GlobalConsultWidget = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isFormMinimized, setIsFormMinimized] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  // Show a soft reminder every 40 seconds when the form is not open.
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isFormOpen) {
        setShowPrompt(true);
      }
    }, 40000);

    return () => clearInterval(interval);
  }, [isFormOpen]);

  const handleConsultClick = () => {
    setIsFormOpen(true);
    setIsFormMinimized(false);
    setShowPrompt(false);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
    setIsFormMinimized(false);
  };

  const handleFormMinimize = () => {
    setIsFormMinimized((prev) => !prev);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleConsultClick}
        aria-label="Avail Service"
        className="fixed right-4 bottom-6 z-40 group"
      >
        <div className="rounded-2xl border border-primary/20 bg-card/95 backdrop-blur px-3 py-3 shadow-xl transition-all group-hover:shadow-2xl group-hover:-translate-y-0.5">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <ClipboardCheck className="h-5 w-5" />
            </span>
            <span className="text-xs font-semibold tracking-wide text-foreground">Avail Service</span>
          </div>
        </div>
      </button>

      {showPrompt && (
        <div className="fixed right-4 bottom-28 z-40 w-72 rounded-xl border border-border bg-card p-4 shadow-xl animate-fade-in">
          <p className="text-sm font-semibold text-foreground">Need help with compliance?</p>
          <p className="text-xs text-muted-foreground mt-1">Would you like to avail our service now?</p>
          <div className="mt-3 flex items-center gap-2">
            <Button type="button" size="sm" onClick={handleConsultClick}>
              Avail Service
            </Button>
            <Button type="button" size="sm" variant="outline" onClick={() => setShowPrompt(false)}>
              Later
            </Button>
          </div>
        </div>
      )}

      <LeadForm
        isOpen={isFormOpen}
        onClose={handleFormClose}
        isMinimized={isFormMinimized}
        onMinimize={handleFormMinimize}
      />
    </>
  );
};
