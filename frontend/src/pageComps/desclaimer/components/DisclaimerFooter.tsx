import { Link } from "react-router-dom";
import { Printer, Home } from "lucide-react";
import { Button } from "./ui/button";

const DisclaimerFooter = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8 print:hidden">
          <Button variant="outline" onClick={handlePrint}>
            <Printer className="h-4 w-4 mr-2" />
            Print Disclaimer
          </Button>
          <Button asChild>
            <Link to="/">
              <Home className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* Footer Info */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
          
          <div className="text-xs text-muted-foreground space-y-1">
            <p>Disclaimer Version: v[0.0]</p>
            <p>© {new Date().getFullYear()} Regacats. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DisclaimerFooter;
