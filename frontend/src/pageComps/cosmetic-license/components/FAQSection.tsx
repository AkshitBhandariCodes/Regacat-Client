import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is the validity of a CDSCO cosmetic license?",
      answer: "A CDSCO cosmetic import license is typically valid for 5 years from the date of issue. After this period, you need to apply for renewal to continue importing cosmetics into India."
    },
    {
      question: "How long does the approval process take?",
      answer: "The standard approval timeline is 20–30 working days from the date of complete document submission. However, with our expert handling and direct CDSCO coordination, we often achieve faster approvals. Please note that CDSCO’s official review period may extend up to 90 working days, depending on the complexity of the application and document verification process."
    },
    {
      question: "Can foreign manufacturers apply directly?",
      answer: "No, foreign manufacturers cannot apply directly. They need an authorized Indian importer or distributor who will apply for the CDSCO import license on their behalf. Regacats can help coordinate between foreign manufacturers and Indian importers."
    },
    {
      question: "What if my documents are incomplete?",
      answer: "Incomplete documentation can lead to significant delays or rejection. Our team conducts a thorough pre-submission review to ensure all documents meet CDSCO requirements, minimizing the risk of queries or rejection."
    },
    {
      question: "Is license renewal required every year?",
      answer: "No, CDSCO cosmetic import licenses are valid for 5 years. However, you must apply for renewal before the expiry date. We provide timely reminders and assistance with the renewal process to ensure uninterrupted import operations."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-card border border-border rounded-lg px-6 shadow-card hover:shadow-elevated transition-smooth animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left font-semibold text-card-foreground hover:no-underline">
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

export default FAQSection;
