import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FaqSection = () => {
  const faqs = [
    {
      question: "What is the validity of EPR Authorization?",
      answer: "EPR Authorization is typically valid for one financial year (April to March) and needs to be renewed annually. However, the certificate itself remains valid as long as you maintain compliance with your declared recycling targets and submit annual returns to CPCB on time.",
    },
    {
      question: "Who needs EPR Authorization?",
      answer: "All producers, importers, and brand owners (PIBOs) who introduce plastic packaging into the Indian market need EPR Authorization. This includes manufacturers of FMCG products, e-commerce companies using plastic packaging, importers of packaged goods, and any business that puts branded plastic packaging in the market.",
    },
    {
      question: "How long does the approval process take?",
      answer: "The typical timeline for EPR Authorization approval is 45-60 working days from the date of complete application submission. However, with Regacats Solutions' expertise and direct CPCB coordination, we've achieved approvals in as little as 30 working days. The timeline depends on document completeness and CPCB's query response time.",
    },
    {
      question: "Can small businesses apply for EPR Authorization?",
      answer: "Yes, absolutely! EPR Authorization is mandatory for all businesses, regardless of size, that introduce plastic packaging into the market. Small businesses can apply individually or through Producer Responsibility Organizations (PROs). Regacats Solutions specializes in helping small and medium businesses navigate the EPR process cost-effectively.",
    },
    {
      question: "Is renewal required every year?",
      answer: "Yes, EPR compliance requires annual renewal. You need to submit annual returns to CPCB declaring your plastic packaging quantities and recycling achievements. While the authorization certificate doesn't need full reapplication, you must maintain active compliance, meet recycling targets, and submit timely reports. Regacats Solutions offers annual compliance management services to ensure you never miss deadlines.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="mb-4 text-foreground">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Get answers to common questions about EPR Authorization
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card shadow-soft hover:shadow-medium transition-smooth animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <p className="text-sm text-muted-foreground">
              Our EPR experts are here to help. Contact us for personalized guidance.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  );
};
