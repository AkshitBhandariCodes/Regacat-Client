import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Who requires FSSAI regulatory and compliance services in India?",
      answer: "Any business involved in manufacturing, importing, exporting, marketing, or selling food, nutraceuticals, or dietary supplements in India must comply with FSSAI regulations and may require professional consulting support."
    },
    {
      question: "What services do FSSAI consultants in India provide?",
      answer: "Services include licensing and registration, product classification, formulation and label compliance, non-specified food approvals, import assistance, health claim approvals, authorized agent support, and post-market compliance."
    },
    {
      question: "Do international food companies need FSSAI consultants in India?",
      answer: "Yes. International companies entering India must comply with FSSAI regulations and often require an Indian consultant or authorized agent to manage approvals, imports, and ongoing compliance."
    },
    {
      question: "What is a Non-Specified Food under FSSAI regulations?",
      answer: "A non-specified food is a product or ingredient not specifically covered under existing FSSAI standards and requires prior approval before manufacturing, import, or sale in India."
    },
    {
      question: "How long does it take to obtain FSSAI licenses or approvals?",
      answer: "Timelines depend on service type. Basic or State licenses may take a few weeks, while Central licenses, product approvals, and non-specified food approvals can take several months."
    },
    {
      question: "Can FSSAI consultants help with product labeling and artwork compliance?",
      answer: "Yes. Consultants review formulations and artwork for ingredient permissions, declarations, warnings, claims, and label format compliance before launch."
    },
    {
      question: "What is an Indian Authorized Agent (IAA) under FSSAI?",
      answer: "An IAA represents foreign food manufacturers before FSSAI, handling regulatory communication, approvals, compliance responsibilities, and post-market obligations in India."
    },
    {
      question: "Why should businesses engage professional FSSAI consultants instead of applying directly?",
      answer: "Professional consultants reduce misclassification and misbranding risks, improve submission quality, and help prevent delays by aligning filings with current FSSAI regulatory expectations."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Heading */}
          <div className="text-center space-y-4 fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common FSSAI licensing queries
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
