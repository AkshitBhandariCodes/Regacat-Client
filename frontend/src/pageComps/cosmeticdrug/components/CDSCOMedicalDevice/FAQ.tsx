import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "What is a CDSCO Drug Manufacturing License?",
      answer: "A CDSCO Manufacturing License is mandatory approval that allows a company to legally manufacture drugs, pharmaceuticals, or APIs in India under the Drugs & Cosmetics Act, 1940."
    },
    {
      question: "What is a CDSCO Drug Import License?",
      answer: "A Drug Import License (Form 10, 45, 46, etc.) is required to import finished formulations, APIs, medical products, or raw materials into India for sale or distribution."
    },
    {
      question: "Who needs a Drug Import License in India?",
      answer: "Any company importing drugs, APIs, vaccines, biologicals, or finished formulations must obtain a CDSCO Import License through an Authorized Indian Agent."
    },
    {
      question: "What documents are required for a Drug Import License?",
      answer: "Common documents include the Free Sale Certificate, CoA, Stability Data, Manufacturing License, GMP Certificate, Product Labels, and Technical Dossiers."
    },
    {
      question: "Do imported drugs need to undergo testing in India?",
      answer: "Yes. Samples may be tested at government-approved labs based on the drug category and CDSCO requirements."
    },
    {
      question: "Is a local Authorized Indian Agent required for foreign manufacturers?",
      answer: "Yes. Foreign companies must appoint an Indian Authorized Agent to represent them for licensing, documentation, and communication with CDSCO."
    },
    {
      question: "Does each drug or formulation require separate approval?",
      answer: "Yes. Each SKU/formulation/strength must be registered individually with CDSCO before import or manufacturing."
    },
    {
      question: "How can Regacats Solutions help with CDSCO licensing?",
      answer: "We manage the entire process—documentation, dossier preparation, liaison with CDSCO, query handling, product registration, import licensing, and post-compliance support."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Common questions about CDSCO Medical Device Licensing answered by our experts
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-border rounded-xl px-6 hover:border-primary transition-colors bg-card shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-card-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center p-8 bg-secondary/30 rounded-xl">
            <p className="text-lg font-medium text-card-foreground mb-2">
              Have more questions?
            </p>
            <p className="text-muted-foreground">
              Our regulatory experts are here to help. Contact us for personalized guidance on your 
              specific medical device licensing needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
