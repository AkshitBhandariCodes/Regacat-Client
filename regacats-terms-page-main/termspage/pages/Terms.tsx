import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ChevronDown, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

// Insert the provided Terms & Conditions copy below
const SECTIONS = [
  {
    id: "interpretation",
    title: "1. Interpretation and Definitions",
    subsections: [
      { id: "interpretation-def", title: "Interpretation" },
      { id: "definitions", title: "Definitions" }
    ]
  },
  {
    id: "acknowledgment",
    title: "2. Acknowledgment"
  },
  {
    id: "links",
    title: "3. Links to Other Websites"
  },
  {
    id: "termination",
    title: "4. Termination"
  },
  {
    id: "limitation",
    title: "5. Limitation of Liability"
  },
  {
    id: "disclaimer",
    title: "6. \"AS IS\" and \"AS AVAILABLE\" Disclaimer"
  },
  {
    id: "governing-law",
    title: "7. Governing Law"
  },
  {
    id: "disputes",
    title: "8. Disputes Resolution"
  },
  {
    id: "severability",
    title: "9. Severability and Waiver",
    subsections: [
      { id: "severability-def", title: "Severability" },
      { id: "waiver", title: "Waiver" }
    ]
  },
  {
    id: "translation",
    title: "10. Translation Interpretation"
  },
  {
    id: "changes",
    title: "11. Changes to These Terms and Conditions"
  },
  {
    id: "contact",
    title: "12. Contact Us"
  }
];

const Terms = () => {
  const [isTocOpen, setIsTocOpen] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsTocOpen(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Terms & Conditions — Regacats</title>
        <meta 
          name="description" 
          content="Read Regacats' Terms and Conditions governing the use of our website and services. Last updated November 17, 2025." 
        />
        <link rel="canonical" href="https://regacats.in/terms" />
        <meta property="og:title" content="Terms & Conditions — Regacats" />
        <meta property="og:description" content="Terms and Conditions for using Regacats services and website." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-legal-bg">
        {/* Header */}
        <header className="no-print sticky top-0 z-50 w-full border-b border-legal-border bg-legal-card/95 backdrop-blur supports-[backdrop-filter]:bg-legal-card/60">
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-primary">Regacats</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm">
              <a 
                href="/privacy" 
                className="text-legal-text hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="mailto:support@regacats.in" 
                className="text-legal-text hover:text-primary transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8 lg:py-12">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-[260px_1fr] lg:gap-8">
              {/* Mobile TOC */}
              <div className="lg:hidden mb-6 no-print">
                <Collapsible open={isTocOpen} onOpenChange={setIsTocOpen}>
                  <CollapsibleTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="w-full justify-between"
                      aria-label="Toggle table of contents"
                    >
                      <span>Table of Contents</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${isTocOpen ? 'rotate-180' : ''}`} />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2">
                    <nav className="rounded-lg border border-legal-border bg-legal-card p-4">
                      <TableOfContents sections={SECTIONS} onNavigate={scrollToSection} />
                    </nav>
                  </CollapsibleContent>
                </Collapsible>
              </div>

              {/* Desktop TOC */}
              <aside className="hidden lg:block no-print">
                <nav className="sticky top-24 rounded-lg border border-legal-border bg-legal-card p-6">
                  <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-legal-heading">
                    Contents
                  </h2>
                  <TableOfContents sections={SECTIONS} onNavigate={scrollToSection} />
                </nav>
              </aside>

              {/* Content */}
              <article className="print-full-width">
                <div className="rounded-lg border border-legal-border bg-legal-card p-6 md:p-8 lg:p-10">
                  <header className="mb-8 border-b border-legal-border pb-6">
                    <h1 className="mb-2 text-3xl font-bold text-legal-heading md:text-4xl">
                      Terms and Conditions
                    </h1>
                    <p className="text-sm text-legal-text">
                      Last updated: <time dateTime="2025-11-17">17 November 2025</time>
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={handlePrint}
                      className="mt-4 no-print"
                      aria-label="Print terms and conditions"
                    >
                      <Printer className="mr-2 h-4 w-4" />
                      Print
                    </Button>
                  </header>

                  <div className="prose prose-slate max-w-none">
                    <p className="lead text-legal-text">
                      Please read these terms and conditions carefully before using Our Service.
                    </p>

                    <Section id="interpretation" title="Interpretation and Definitions">
                      <h3 id="interpretation-def" className="text-xl font-semibold text-legal-heading mt-6 mb-3">
                        Interpretation
                      </h3>
                      <p className="text-legal-text leading-relaxed mb-4">
                        The words of which the initial letter is capitalized have meanings defined under the following conditions. 
                        The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                      </p>

                      <h3 id="definitions" className="text-xl font-semibold text-legal-heading mt-6 mb-3">
                        Definitions
                      </h3>
                      <p className="text-legal-text leading-relaxed mb-3">
                        For the purposes of these Terms and Conditions:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-legal-text">
                        <li>
                          <strong className="text-legal-heading">Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, 
                          where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
                        </li>
                        <li>
                          <strong className="text-legal-heading">Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Regacats.
                        </li>
                        <li>
                          <strong className="text-legal-heading">Country</strong> refers to: India
                        </li>
                        <li>
                          <strong className="text-legal-heading">Service</strong> refers to the Website.
                        </li>
                        <li>
                          <strong className="text-legal-heading">Terms and Conditions</strong> (also referred as "Terms") mean these Terms and Conditions that form the entire agreement 
                          between You and the Company regarding the use of the Service.
                        </li>
                        <li>
                          <strong className="text-legal-heading">Third-party Social Media Service</strong> means any services or content (including data, information, products or services) 
                          provided by a third-party that may be displayed, included or made available by the Service.
                        </li>
                        <li>
                          <strong className="text-legal-heading">Website</strong> refers to Regacats, accessible from{" "}
                          <a href="https://regacats.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            https://regacats.in
                          </a>
                        </li>
                        <li>
                          <strong className="text-legal-heading">You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which 
                          such individual is accessing or using the Service, as applicable.
                        </li>
                      </ul>
                    </Section>

                    <Section id="acknowledgment" title="Acknowledgment">
                      <p className="text-legal-text leading-relaxed mb-4">
                        These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. 
                        These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
                      </p>
                      <p className="text-legal-text leading-relaxed mb-4">
                        Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. 
                        These Terms and Conditions apply to all visitors, users and others who access or use the Service.
                      </p>
                      <p className="text-legal-text leading-relaxed mb-4">
                        By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these 
                        Terms and Conditions then You may not access the Service.
                      </p>
                      <p className="text-legal-text leading-relaxed mb-4">
                        You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
                      </p>
                      <p className="text-legal-text leading-relaxed">
                        Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. 
                        Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use 
                        the application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully 
                        before using Our Service.
                      </p>
                    </Section>

                    <Section id="links" title="Links to Other Websites">
                      <p className="text-legal-text leading-relaxed mb-4">
                        Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
                      </p>
                      <p className="text-legal-text leading-relaxed mb-4">
                        The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party 
                        web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, 
                        for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or 
                        services available on or through any such web sites or services.
                      </p>
                      <p className="text-legal-text leading-relaxed">
                        We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.
                      </p>
                    </Section>

                    <Section id="termination" title="Termination">
                      <p className="text-legal-text leading-relaxed mb-4">
                        We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without 
                        limitation if You breach these Terms and Conditions.
                      </p>
                      <p className="text-legal-text leading-relaxed">
                        Upon termination, Your right to use the Service will cease immediately.
                      </p>
                    </Section>

                    <Section id="limitation" title="Limitation of Liability">
                      <p className="text-legal-text leading-relaxed mb-4">
                        Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision 
                        of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the 
                        Service or 100 USD if You haven't purchased anything through the Service.
                      </p>
                      <p className="text-legal-text leading-relaxed mb-4">
                        To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, 
                        indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, 
                        for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the 
                        Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), 
                        even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.
                      </p>
                      <p className="text-legal-text leading-relaxed">
                        Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means 
                        that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.
                      </p>
                    </Section>

                    <Section id="disclaimer" title="&quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer">
                      <p className="text-legal-text leading-relaxed mb-4">
                        The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum 
                        extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors 
                        and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, 
                        including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may 
                        arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides 
                        no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, 
                        be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or 
                        reliability standards or be error free or that any errors or defects can or will be corrected.
                      </p>
                      <p className="text-legal-text leading-relaxed mb-4">
                        Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express 
                        or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; 
                        (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content 
                        provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free 
                        of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.
                      </p>
                      <p className="text-legal-text leading-relaxed">
                        Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, 
                        so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth 
                        in this section shall be applied to the greatest extent enforceable under applicable law.
                      </p>
                    </Section>

                    <Section id="governing-law" title="Governing Law">
                      <p className="text-legal-text leading-relaxed">
                        The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the 
                        Application may also be subject to other local, state, national, or international laws.
                      </p>
                    </Section>

                    <Section id="disputes" title="Disputes Resolution">
                      <p className="text-legal-text leading-relaxed">
                        If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.
                      </p>
                    </Section>

                    <Section id="severability" title="Severability and Waiver">
                      <h3 id="severability-def" className="text-xl font-semibold text-legal-heading mt-6 mb-3">
                        Severability
                      </h3>
                      <p className="text-legal-text leading-relaxed mb-4">
                        If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish 
                        the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full 
                        force and effect.
                      </p>

                      <h3 id="waiver" className="text-xl font-semibold text-legal-heading mt-6 mb-3">
                        Waiver
                      </h3>
                      <p className="text-legal-text leading-relaxed">
                        Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect 
                        a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute 
                        a waiver of any subsequent breach.
                      </p>
                    </Section>

                    <Section id="translation" title="Translation Interpretation">
                      <p className="text-legal-text leading-relaxed">
                        These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original 
                        English text shall prevail in the case of a dispute.
                      </p>
                    </Section>

                    <Section id="changes" title="Changes to These Terms and Conditions">
                      <p className="text-legal-text leading-relaxed mb-4">
                        We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make 
                        reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will 
                        be determined at Our sole discretion.
                      </p>
                      <p className="text-legal-text leading-relaxed mb-4">
                        By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You 
                        do not agree to the new terms, in whole or in part, please stop using the website and the Service.
                      </p>
                    </Section>

                    <Section id="contact" title="Contact Us">
                      <p className="text-legal-text leading-relaxed mb-3">
                        If you have any questions about these Terms and Conditions, You can contact us:
                      </p>
                      <ul className="list-none space-y-2 text-legal-text">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>
                            By email:{" "}
                            <a 
                              href="mailto:support@regacats.in" 
                              className="text-primary hover:underline"
                            >
                              support@regacats.in
                            </a>
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>
                            By visiting this page on our website:{" "}
                            <a 
                              href="https://regacats.in/contact" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              https://regacats.in/contact
                            </a>
                          </span>
                        </li>
                      </ul>
                    </Section>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="no-print border-t border-legal-border bg-legal-card py-8 mt-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-center text-sm text-legal-text md:text-left">
                © {new Date().getFullYear()} Regacats. All rights reserved.
              </p>
              <nav className="flex flex-wrap justify-center gap-4 text-sm">
                <a href="/" className="text-legal-text hover:text-primary transition-colors">
                  Home
                </a>
                <a href="/privacy" className="text-legal-text hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-legal-text hover:text-primary transition-colors">
                  Terms
                </a>
                <a 
                  href="mailto:support@regacats.in" 
                  className="text-legal-text hover:text-primary transition-colors"
                >
                  support@regacats.in
                </a>
              </nav>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section = ({ id, title, children }: SectionProps) => (
  <section id={id} className="mb-8 scroll-mt-24">
    <h2 className="mb-4 text-2xl font-bold text-legal-heading border-b border-legal-border pb-2">
      {title}
    </h2>
    {children}
  </section>
);

interface TOCProps {
  sections: typeof SECTIONS;
  onNavigate: (id: string) => void;
}

const TableOfContents = ({ sections, onNavigate }: TOCProps) => (
  <ul className="space-y-2 text-sm">
    {sections.map((section) => (
      <li key={section.id}>
        <button
          onClick={() => onNavigate(section.id)}
          className="text-left text-legal-text hover:text-primary transition-colors focus:outline-none focus:text-primary w-full"
        >
          {section.title}
        </button>
        {section.subsections && (
          <ul className="ml-4 mt-2 space-y-1.5 border-l border-legal-border pl-3">
            {section.subsections.map((subsection) => (
              <li key={subsection.id}>
                <button
                  onClick={() => onNavigate(subsection.id)}
                  className="text-left text-legal-text hover:text-primary transition-colors focus:outline-none focus:text-primary text-sm w-full"
                >
                  {subsection.title}
                </button>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
);

export default Terms;
