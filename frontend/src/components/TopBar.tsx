import { useEffect, useRef } from "react";
import { Mail, Phone } from "lucide-react";

export const TopBar = () => {
  const topBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setTopBarHeight = () => {
      const height = topBarRef.current?.offsetHeight ?? 0;
      document.documentElement.style.setProperty("--topbar-height", `${height}px`);
    };

    setTopBarHeight();
    window.addEventListener("resize", setTopBarHeight);

    return () => {
      window.removeEventListener("resize", setTopBarHeight);
    };
  }, []);

  return (
    <div
      ref={topBarRef}
      className="sticky top-0 z-[80] bg-primary text-primary-foreground py-2 border-b border-primary/20"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:justify-end items-start sm:items-center gap-3 text-sm">

          {/* Email */}
          <a 
            href="mailto:contact@regacats.in" 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity block w-full sm:w-auto py-2"
          >
            <Mail className="h-4 w-4 animate-vibrate" />
            <span>contact@regacats.in</span>
          </a>

          {/* Phone */}
          <a 
            href="tel:+919211921474"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity block w-full sm:w-auto py-2"
          >
            <Phone className="h-4 w-4 animate-vibrate" />
            <span>+91 9211921474 / +91 9711467307</span>
          </a>

        </div>
      </div>
    </div>
  );
};
