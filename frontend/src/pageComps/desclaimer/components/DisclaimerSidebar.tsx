import { Link } from "react-router-dom";
import { FileText, Shield, Cookie, HelpCircle, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

interface Section {
  id: string;
  title: string;
}

interface DisclaimerSidebarProps {
  sections: Section[];
}

const DisclaimerSidebar = ({ sections }: DisclaimerSidebarProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside className="space-y-6">
      {/* Quick Navigation */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Navigation</CardTitle>
        </CardHeader>
        <CardContent>
          <nav className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="w-full text-left text-sm text-muted-foreground hover:text-primary transition-colors py-1.5 px-2 rounded hover:bg-muted/50"
              >
                {section.title}
              </button>
            ))}
          </nav>
        </CardContent>
      </Card>

      {/* Need Help */}
      <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <HelpCircle className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">Need Help?</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Have questions about our disclaimer? We're here to help.
          </p>
          <Button variant="outline" size="sm" className="w-full" asChild>
            <a href="mailto:support@regacats.com">
              <Mail className="h-4 w-4 mr-2" />
              Contact Support
            </a>
          </Button>
        </CardContent>
      </Card>

      {/* Related Legal Pages */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Related Pages</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <Link
              to="/privacy"
              className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <Shield className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span>Privacy Policy</span>
            </Link>
            <Link
              to="/terms"
              className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <FileText className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span>Terms of Service</span>
            </Link>
            <Link
              to="/cookies"
              className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <Cookie className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span>Cookie Policy</span>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Note */}
      <Card className="bg-muted/50 border-muted">
        <CardContent className="pt-6">
          <p className="text-xs text-muted-foreground italic">
            This disclaimer may be updated without prior notice. Please check back regularly for any changes.
          </p>
        </CardContent>
      </Card>
    </aside>
  );
};

export default DisclaimerSidebar;
