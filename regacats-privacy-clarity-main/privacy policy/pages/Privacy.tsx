import Header from "@/components/Header";
import PolicyHero from "@/components/PolicyHero";
import PolicySection from "@/components/PolicySection";
import PolicySidebar from "@/components/PolicySidebar";
import {
  FileText,
  Database,
  TrendingUp,
  Scale,
  Clock,
  Cookie,
  Share2,
  Shield,
  UserCheck,
  Baby,
  RefreshCw,
  MessageCircle,
} from "lucide-react";

const policySections = [
  {
    id: "introduction",
    title: "Introduction",
    icon: <FileText className="h-5 w-5" />,
    content: "This Privacy Policy describes how Regacats ('we', 'us', or 'our') collects, uses, and shares your personal information when you use our services. We are committed to protecting your privacy and ensuring transparency in our data practices. This policy applies to all information collected through our website, applications, and related services.",
  },
  {
    id: "data-collection",
    title: "What Information We Collect",
    icon: <Database className="h-5 w-5" />,
    content: "We collect various types of information to provide and improve our services. This includes information you provide directly (such as name, email address, and account credentials), information collected automatically (such as device information, IP address, and usage data), and information from third-party sources when you connect external services to your account.",
  },
  {
    id: "data-usage",
    title: "How We Use Your Information",
    icon: <TrendingUp className="h-5 w-5" />,
    content: "We use the collected information to provide, maintain, and improve our services, communicate with you about updates and offers, ensure security and prevent fraud, comply with legal obligations, and personalize your experience. We process your data only for legitimate purposes and in accordance with applicable privacy laws.",
  },
  {
    id: "legal-basis",
    title: "Legal Basis for Processing",
    icon: <Scale className="h-5 w-5" />,
    content: "Under GDPR and other privacy regulations, we process your personal data based on various legal grounds including: your consent, performance of a contract, compliance with legal obligations, protection of vital interests, and our legitimate business interests. You have the right to withdraw consent at any time where we rely on consent as the legal basis.",
  },
  {
    id: "data-retention",
    title: "Data Retention",
    icon: <Clock className="h-5 w-5" />,
    content: "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Account information is retained while your account is active and for a reasonable period thereafter. Usage data is typically retained for shorter periods unless required for security or legal purposes.",
  },
  {
    id: "cookies",
    title: "Cookies & Tracking Technologies",
    icon: <Cookie className="h-5 w-5" />,
    content: "We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and deliver personalized content. These include essential cookies required for basic functionality, analytics cookies to understand how you use our services, and preference cookies to remember your settings. You can control cookie preferences through your browser settings.",
  },
  {
    id: "third-party",
    title: "Third-Party Services & Data Transfers",
    icon: <Share2 className="h-5 w-5" />,
    content: "We may share your information with trusted third-party service providers who assist us in operating our services, conducting our business, or serving our users. We ensure these parties are contractually bound to protect your information. When data is transferred internationally, we implement appropriate safeguards such as Standard Contractual Clauses.",
  },
  {
    id: "security",
    title: "Security Measures",
    icon: <Shield className="h-5 w-5" />,
    content: "We implement industry-standard security measures to protect your personal information, including encryption in transit and at rest, regular security assessments, access controls and authentication mechanisms, and incident response procedures. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    id: "data-rights",
    title: "Your Data Rights & How to Exercise Them",
    icon: <UserCheck className="h-5 w-5" />,
    content: "You have the right to access your personal data, request correction of inaccurate data, request deletion of your data, object to or restrict processing, data portability, and withdraw consent. To exercise these rights, please contact our Data Protection Officer using the contact information provided. We will respond to your request within the timeframes required by applicable law.",
  },
  {
    id: "children",
    title: "Children's Privacy",
    icon: <Baby className="h-5 w-5" />,
    content: "Our services are not intended for children under the age of 16. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child under 16 without parental consent, we will take steps to delete that information. If you believe we have collected information from a child, please contact us immediately.",
  },
  {
    id: "policy-changes",
    title: "Changes to This Policy",
    icon: <RefreshCw className="h-5 w-5" />,
    content: "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the new policy on this page and updating the 'Last updated' date. We encourage you to review this policy periodically to stay informed about how we protect your information.",
  },
  {
    id: "contact",
    title: "Contact & Complaints",
    icon: <MessageCircle className="h-5 w-5" />,
    content: "If you have questions, concerns, or complaints about this Privacy Policy or our data practices, please contact our Data Protection Officer at dpo@regacats.com. You also have the right to lodge a complaint with a supervisory authority if you believe your privacy rights have been violated. We take all privacy concerns seriously and will work to resolve any issues promptly.",
  },
];

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PolicyHero />
      
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-6">
            {policySections.map((section) => (
              <PolicySection
                key={section.id}
                id={section.id}
                title={section.title}
                icon={section.icon}
                content={section.content}
              />
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <PolicySidebar />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="h-6 w-6 rounded bg-primary" />
              <span>© 2025 Regacats. All rights reserved.</span>
            </div>
            <div className="text-xs text-muted-foreground">
              Policy Version: v1.0 | Last Updated: January 15, 2025
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
