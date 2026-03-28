import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "What is the validity of Legal Metrology registration?",
      answer: "Legal Metrology registration is typically valid for 2 years from the date of issuance. After expiry, you need to apply for renewal at least 30 days before the validity period ends to ensure continuous compliance.",
    },
    {
      question: "Who needs Legal Metrology certification?",
      answer: "Any person or entity that manufactures, imports, packs, or sells pre-packaged commodities in India must obtain Legal Metrology certification. This includes manufacturers, importers, brand owners, and e-commerce sellers dealing with packaged goods.",
    },
    {
      question: "How long does the process take?",
      answer: "The typical processing time ranges from 15 to 30 days, depending on the state, documentation quality, and department workload. With Regacats Solutions' expert handling, we aim to complete the process within 15-20 days on average.",
    },
    {
      question: "What if my packaging is not compliant?",
      answer: "Our team will conduct a pre-compliance audit of your packaging and labeling. We'll identify gaps and provide detailed recommendations to make your packaging compliant with Legal Metrology standards before filing the application.",
    },
    {
      question: "Can foreign companies apply for LM registration in India?",
      answer: "Yes, foreign companies that import and sell packaged goods in India must obtain Legal Metrology registration. They can either register directly or appoint an authorized Indian representative. Regacats Solutions helps international brands navigate the registration process smoothly.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border-2 rounded-lg px-6 hover:border-primary transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
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
