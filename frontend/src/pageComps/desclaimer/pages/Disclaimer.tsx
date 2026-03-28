// import DisclaimerHeader from "@/components/DisclaimerHeader";
import DisclaimerHero from "../components/DisclaimerHero";
import DisclaimerSection from "../components/DisclaimerSection";
import DisclaimerSidebar from "../components/DisclaimerSidebar";
import DisclaimerFooter from "../components/DisclaimerFooter";
import {
  Info,
  Globe,
  ExternalLink,
  Briefcase,
  ShieldAlert,
  AlertTriangle,
  Scale,
  MessageSquare,
  XCircle,
  Mail,
} from "lucide-react";

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "general-info", title: "General Information Disclaimer" },
  { id: "external-links", title: "External Links Disclaimer" },
  { id: "professional-advice", title: "Professional Advice Disclaimer" },
  { id: "liability", title: "Liability Limitation" },
  { id: "errors-omissions", title: "Errors and Omissions Disclaimer" },
  { id: "fair-use", title: "Fair Use Disclaimer" },
  { id: "views-expressed", title: "Views Expressed Disclaimer" },
  { id: "no-responsibility", title: "No Responsibility Disclaimer" },
  { id: "contact", title: "Contact Information" },
];

const Disclaimer = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* <DisclaimerHeader /> */}
      <DisclaimerHero />

      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_350px] gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="space-y-6">
              <DisclaimerSection id="introduction" title="Introduction" icon={Info}>
                <p className="text-muted-foreground leading-relaxed">
                  [Placeholder: Welcome message introducing the purpose and scope of this disclaimer.
                  This section provides an overview of what users can expect from the following sections.]
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  [Placeholder: Additional introductory paragraph explaining the importance of reading
                  and understanding this disclaimer before using our services.]
                </p>
              </DisclaimerSection>

              <DisclaimerSection
                id="general-info"
                title="General Information Disclaimer"
                icon={Globe}
              >
                <p className="text-muted-foreground leading-relaxed">
                  [Placeholder: Statement clarifying that information provided on this website is for
                  general informational purposes only.]
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>[Placeholder: Key point about information accuracy]</li>
                  <li>[Placeholder: Key point about information completeness]</li>
                  <li>[Placeholder: Key point about information timeliness]</li>
                </ul>
                <p className="text-sm text-muted-foreground italic mt-4">
                  [Short description placeholder: Brief note about verification recommendations]
                </p>
              </DisclaimerSection>

              <DisclaimerSection
                id="external-links"
                title="External Links Disclaimer"
                icon={ExternalLink}
              >
                <p className="text-muted-foreground leading-relaxed">
                  [Placeholder: Explanation that our website may contain links to external websites
                  that are not provided or maintained by us.]
                </p>
                <div className="bg-muted/50 rounded-lg p-4 border">
                  <p className="text-sm text-muted-foreground">
                    [Placeholder: Important note about not guaranteeing the accuracy, relevance, or
                    completeness of external content]
                  </p>
                </div>
              </DisclaimerSection>

              <DisclaimerSection
                id="professional-advice"
                title="Professional Advice Disclaimer"
                icon={Briefcase}
              >
                <p className="text-muted-foreground leading-relaxed">
                  [Placeholder: Clear statement that content on this website does not constitute
                  professional advice.]
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  [Placeholder: Recommendation to consult with qualified professionals before making
                  decisions based on information found here.]
                </p>
              </DisclaimerSection>

              <DisclaimerSection id="liability" title="Liability Limitation" icon={ShieldAlert}>
                <p className="text-muted-foreground leading-relaxed">
                  [Placeholder: Statement limiting our liability for any damages arising from use of
                  this website.]
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>[Placeholder: Type of damage 1 we're not liable for]</li>
                  <li>[Placeholder: Type of damage 2 we're not liable for]</li>
                  <li>[Placeholder: Type of damage 3 we're not liable for]</li>
                </ul>
              </DisclaimerSection>

              <DisclaimerSection
                id="errors-omissions"
                title="Errors and Omissions Disclaimer"
                icon={AlertTriangle}
              >
                <p className="text-muted-foreground leading-relaxed">
                  [Placeholder: Acknowledgment that despite best efforts, this website may contain
                  errors or omissions.]
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  [Placeholder: Statement about our commitment to correcting errors when brought to
                  our attention.]
                </p>
              </DisclaimerSection>

              <DisclaimerSection id="fair-use" title="Fair Use Disclaimer" icon={Scale}>
                <p className="text-muted-foreground leading-relaxed">
                  [Placeholder: Statement regarding fair use of copyrighted material on this website.]
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  [Placeholder: Explanation of our good faith belief that content falls under fair
                  use provisions.]
                </p>
              </DisclaimerSection>

              <DisclaimerSection
                id="views-expressed"
                title="Views Expressed Disclaimer"
                icon={MessageSquare}
              >
                <p className="text-muted-foreground leading-relaxed">
                  [Placeholder: Clarification that views and opinions expressed on this website are
                  those of the authors.]
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  [Placeholder: Statement that these views do not necessarily reflect official policy
                  or position of Regacats.]
                </p>
              </DisclaimerSection>

              <DisclaimerSection
                id="no-responsibility"
                title="No Responsibility Disclaimer"
                icon={XCircle}
              >
                <p className="text-muted-foreground leading-relaxed">
                  [Placeholder: Statement disclaiming responsibility for actions taken based on
                  information from this website.]
                </p>
                <div className="bg-destructive/10 rounded-lg p-4 border border-destructive/20">
                  <p className="text-sm text-destructive font-medium">
                    [Placeholder: Important warning about user responsibility for their own decisions]
                  </p>
                </div>
              </DisclaimerSection>

              <DisclaimerSection id="contact" title="Contact Information" icon={Mail}>
                <p className="text-muted-foreground leading-relaxed">
                  [Placeholder: Invitation to contact us with questions or concerns about this
                  disclaimer.]
                </p>
                <div className="bg-primary/5 rounded-lg p-6 border border-primary/10 space-y-3">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">[legal@regacats.com]</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Globe className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Website</p>
                      <p className="text-sm text-muted-foreground">[www.regacats.com/contact]</p>
                    </div>
                  </div>
                </div>
              </DisclaimerSection>
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-20 lg:self-start">
              <DisclaimerSidebar sections={sections} />
            </div>
          </div>
        </div>
      </main>

      <DisclaimerFooter />

      {/* Print Styles */}
      <style>{`
        @media print {
          header, .print\\:hidden, footer button {
            display: none !important;
          }
          
          body {
            background: white !important;
          }
          
          .lg\\:grid-cols-\\[1fr_300px\\] {
            grid-template-columns: 1fr !important;
          }
          
          aside {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Disclaimer;
