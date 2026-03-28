import { Download, Mail, Shield, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const quickLinks = [
  { id: "introduction", label: "Introduction" },
  { id: "data-collection", label: "Data Collection" },
  { id: "data-usage", label: "Data Usage" },
  { id: "legal-basis", label: "Legal Basis" },
  { id: "data-retention", label: "Data Retention" },
  { id: "cookies", label: "Cookies & Tracking" },
  { id: "third-party", label: "Third-Party Services" },
  { id: "security", label: "Security Measures" },
  { id: "data-rights", label: "Your Data Rights" },
  { id: "children", label: "Children's Privacy" },
  { id: "policy-changes", label: "Policy Changes" },
  { id: "contact", label: "Contact & Complaints" },
];

const PolicySidebar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <aside className="space-y-6">
      {/* Quick Navigation */}
      <Card className="bg-background shadow-sm">
        <CardHeader>
          <CardTitle className="text-sm font-semibold">Quick Navigation</CardTitle>
        </CardHeader>
        <CardContent>
          <nav className="space-y-1">
            {quickLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </CardContent>
      </Card>

      {/* Key Privacy Points */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-semibold flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary" />
            Key Privacy Points
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
              <span>We never sell your personal data</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
              <span>You can request data deletion at any time</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
              <span>We use industry-standard encryption</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Contact Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-semibold">Data Protection Officer</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Have questions about your privacy?
          </p>
          <Button variant="outline" size="sm" className="w-full gap-2">
            <Mail className="h-4 w-4" />
            dpo@regacats.com
          </Button>
        </CardContent>
      </Card>

      {/* Download */}
      <Card>
        <CardContent className="pt-6">
          <Button variant="default" className="w-full gap-2">
            <Download className="h-4 w-4" />
            Download Policy (PDF)
          </Button>
        </CardContent>
      </Card>

      {/* Version History */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-semibold flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            Version History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <div className="w-px h-full bg-border" />
              </div>
              <div className="flex-1 pb-4">
                <p className="text-sm font-medium">v1.0</p>
                <p className="text-xs text-muted-foreground">Jan 15, 2025</p>
                <p className="text-xs text-muted-foreground mt-1">Initial release</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="h-2 w-2 rounded-full bg-muted" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-muted-foreground">Future updates</p>
                <p className="text-xs text-muted-foreground">Will appear here</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
};

export default PolicySidebar;
