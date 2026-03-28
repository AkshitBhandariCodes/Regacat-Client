import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface FloatingContactButtonProps {
  onClick: () => void;
}

export const FloatingContactButton = ({ onClick }: FloatingContactButtonProps) => {
  return (
    <Button
      onClick={onClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 bg-primary hover:bg-primary/90 animate-fade-in"
      aria-label="Contact us"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};
