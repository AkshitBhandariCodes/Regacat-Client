import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import midProcessImage from "@/assets/images/mid-process.png";
import midDocumentsImage from "@/assets/images/mid.png";

const services = [
  "Device classification support",
  "MD14 consultant India support",
  "MD15 import license India support",
  "CDSCO import license services",
  "Documentation review and preparation",
  "Indian Authorized Agent coordination",
  "CDSCO query handling",
  "Submission follow-up until approval",
  "Medical device regulatory consultant India support",
  "Medical device import license approval consultant India support",
];

const whoNeeds = [
  "A foreign manufacturer entering India",
  "An Indian importer bringing medical devices into the market",
  "A distributor managing a medical device portfolio",
  "A global brand that wants a compliant entry path",
  "A regulatory team that wants expert filing support",
];

const processSteps = [
  {
    title: "Step 1: Device review and strategy",
    description:
      "We review the product, intended use, and current documents. Then, we identify the right regulatory path.",
  },
  {
    title: "Step 2: Documentation support",
    description:
      "We check your documents for completeness and consistency. Moreover, we guide you on the missing files you need before submission.",
  },
  {
    title: "Step 3: Filing and submission",
    description:
      "We support the MD14 filing process and help you prepare for CDSCO review.",
  },
  {
    title: "Step 4: Query handling",
    description:
      "If CDSCO raises questions, we help you respond clearly and quickly.",
  },
  {
    title: "Step 5: MD15 approval support",
    description:
      "We stay with you until the import license process reaches approval.",
  },
];

const md14Docs = [
  "Manufacturer details",
  "Device details",
  "Product classification",
  "Device Master File",
  "Plant Master File",
  "Free Sale Certificate or equivalent documents",
  "Labeling information",
  "Authorized Agent details",
  "Supporting compliance papers",
];

const hireReasons = [
  "You are entering India for the first time",
  "You have multiple product variants",
  "Your documents need review",
  "You want faster approval",
  "You do not want to manage CDSCO communication internally",
];

const regacatsReasons = [
  "Focused CDSCO import license experience",
  "Practical MD14 and MD15 support",
  "Clear communication and structured execution",
  "Fast response to queries",
  "Support for importers and foreign manufacturers",
  "End-to-end assistance from filing to approval",
];

const deliverables = [
  "A clear compliance strategy",
  "Filing support for MD14",
  "Documentation review",
  "Query handling support",
  "MD15 approval guidance",
  "Practical help for the Indian market entry process",
];

const finalCtaPoints = [
  "CDSCO Medical Device Import License Consultant in India",
  "MD14 Consultant India",
  "MD15 Import License India",
  "CDSCO Import License Services",
  "Medical Device Import License Approval Consultant India",
];

export const SupplementalContent = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-6 py-16 space-y-14">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Hire a CDSCO Medical Device Import License Consultant in India
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Importing medical devices into India is more than a form submission. You need a regulatory plan, accurate
              documentation, and the right filing strategy. A CDSCO Medical Device Import License Consultant in India helps you
              avoid delays, reduce rejection risk, and move faster toward approval.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The CDSCO process involves classification, document review, portal filing, and query handling. Each device category
              brings different compliance expectations, so even a small filing error can slow approvals.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Regacats Solutions manages the process end to end. We work with Indian importers and foreign manufacturers who want
              a smoother path to MD14 and MD15 approval.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
            <img
              src={midProcessImage}
              alt="CDSCO Medical Device Import License Process in India"
              title="CDSCO Medical Device Import License Process in India"
              className="w-full h-auto rounded-xl object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground" id="services">
            CDSCO Medical Device Import License Consultant in India Services
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            When you hire our CDSCO Medical Device Import License Consultant in India service, you get focused support for the
            full import licensing process.
          </p>
          <p className="text-muted-foreground leading-relaxed">Our services include:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((item) => (
              <div key={item} className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed">
            We keep the process structured because that reduces errors. It also helps your application move forward with fewer
            objections from CDSCO.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
            <img
              src={midDocumentsImage}
              alt="Documents Required for Medical Device Import License (MD-14 Application)"
              title="Documents Required for Medical Device Import License (MD-14 Application)"
              className="w-full h-auto rounded-xl object-cover"
              loading="lazy"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground" id="who-needs">
              Who Needs a Medical Device Import License Consultant India
            </h2>
            <p className="text-muted-foreground leading-relaxed">You should hire a Medical Device Import License Consultant India if you are:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {whoNeeds.map((item) => (
                <div key={item} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed">
              If you are unsure about classification, documentation, or agent requirements, a consultant can save time and
              prevent costly mistakes. That is why many companies prefer expert help instead of managing the process alone.
            </p>
          </div>
        </div>

        <div className="space-y-6" id="how-to-apply">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">How Our CDSCO Import License Services Work</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our CDSCO Import License Services follow a clear, practical workflow. First, we understand your device and your
            business model. Next, we map the regulatory route. Then, we prepare the filing strategy and support the application
            until approval.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {processSteps.map((step) => (
              <div key={step.title} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground mt-2 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Because every step affects the next one, we keep the process tight and proactive.
          </p>
        </div>

        <div className="space-y-6" id="classification">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            CDSCO Medical Device Import License Consultant in India for Classification
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Device classification affects the full application journey, so the first step is to classify the product correctly
            before you file.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Medical devices fall into different risk categories. Each category affects documentation, review depth, and
            timelines. You should never guess the classification. Validate it carefully and align it with the intended use and
            device profile.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If you already have a draft classification, we can review it and confirm whether it fits the CDSCO framework. This
            step reduces rework later and strengthens the application from the start.
          </p>
        </div>

        <div className="space-y-6" id="documents">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">MD14 Consultant India for Documentation and Filing</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our MD14 Consultant India support covers the core filing work. We help you prepare the application, align the
            technical files, and organize the documents CDSCO expects. That usually includes:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {md14Docs.map((item) => (
              <div key={item} className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed">
            We also ensure the documents tell one clear story. If paperwork conflicts with the application, CDSCO may ask for
            clarifications. That is why we focus on consistency before submission.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">MD15 Import License India Support Until Approval</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our MD15 Import License India support continues after filing. We do not stop at submission. We track progress,
            manage follow-ups, and support the response cycle.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This matters because many applications slow down after filing, not before it. If CDSCO asks for clarifications, a
            quick and accurate response helps you keep momentum. A well-prepared application also reduces the chance of repeated
            objections.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            As a result, you move closer to approval with less friction and better control.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Why Medical Device Regulatory Consultant India Support Matters
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A Medical Device Regulatory Consultant India helps you avoid scattered compliance work. Medical device import
            licensing combines technical, legal, and administrative steps.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When one team handles strategy, filing, and queries, the process stays consistent. Your internal team saves time and
            can focus on supply chain, product launch, and India market planning.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            That is the value of experienced regulatory support: fewer mistakes, better alignment, and a smoother path to approval.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Hire CDSCO Consultant for Medical Device Import License</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you want to move faster and avoid avoidable delays, you should hire CDSCO Consultant for Medical Device Import
            License support early in the process.
          </p>
          <p className="text-muted-foreground leading-relaxed">This is especially helpful if:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {hireReasons.map((item) => (
              <div key={item} className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed">
            If your leadership team wants clarity on cost, timing, and approval steps, expert support gives you a realistic plan
            from the start. That helps you make better decisions and reduces last-minute surprises.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Regacats Solutions</h2>
          <p className="text-muted-foreground leading-relaxed">
            Regacats Solutions focuses on compliance, clarity, and execution. Because we work in this niche, we understand what
            CDSCO expects and what usually causes delays.
          </p>
          <p className="text-muted-foreground leading-relaxed">Why clients choose us:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {regacatsReasons.map((item) => (
              <div key={item} className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed">
            We work with a service mindset. We do not just tell you what the rules say. Instead, we help you move through the
            process with confidence.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Track Record</h2>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-2">Case Study</h3>
            <p className="text-muted-foreground leading-relaxed">
              A US-based medical device manufacturer needed CDSCO approval for six Class C diagnostic devices. Regacats managed the
              classification review, technical file review, MD14 submission, and CDSCO communication. The licenses were granted in
              about 3-4 months, and the client entered the Indian market with a controlled approval process.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">What You Get With Regacats</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {deliverables.map((item) => (
              <div key={item} className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6" id="cost-timeline">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Medical Device Import License Cost & Timeline in India
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Timelines vary by device, documentation quality, and query responses. Faster preparation usually improves the process.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Related Guides</h2>
          <p className="text-muted-foreground leading-relaxed">
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <a className="text-primary underline underline-offset-4" href="#how-to-apply">
              How to Apply for Medical Device Import License in India
            </a>
            <a className="text-primary underline underline-offset-4" href="#documents">
              Documents for Medical Device Import License
            </a>
            <a className="text-primary underline underline-offset-4" href="#cost-timeline">
              Medical Device Import License Cost & Timeline in India
            </a>
            <a className="text-primary underline underline-offset-4" href="#classification">
              Medical Device Classification India
            </a>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            You can also explore our related service page for CDSCO import licensing at{" "}
            <Link to="/cdsco-import-service" className="text-primary underline underline-offset-4">
              CDSCO Import Service
            </Link>
            .
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Final Call to Action</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you want to import medical devices into India, start with the right regulatory partner. Regacats Solutions helps you with:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {finalCtaPoints.map((item) => (
              <div key={item} className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Contact us today: contact@regacats.in | +91 9211921474
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="mailto:contact@regacats.in">
                Get Expert Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <a href="tel:+919211921474">Talk to Our Experts</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
