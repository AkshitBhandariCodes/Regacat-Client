import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Who needs an FSSAI License?",
      answer: "Any business involved in food manufacturing, processing, packaging, storage, distribution, or sale must obtain an FSSAI license. This includes restaurants, cafes, cloud kitchens, food manufacturers, importers, retailers, and even small home-based food businesses. The type of license depends on your annual turnover and scale of operations."
    },
    {
      question: "How long does it take to get FSSAI approval?",
      answer: "Basic FSSAI Registration typically takes 7-10 working days once all documents are submitted. State License approval takes 30-60 days, while Central License may take 60-90 days. With Regacats Solutions handling your application, we ensure optimal processing time by maintaining accurate documentation and proactive follow-ups with authorities."
    },
    {
      question: "What's the difference between State and Central License?",
      answer: "State License is for businesses with turnover between ₹12 lakhs and ₹20 crores operating within a single state. Central License is mandatory for businesses with turnover above ₹20 crores, those operating across multiple states, importers/exporters, or manufacturers of specific food categories like supplements, organic foods, or novel foods."
    },
    {
      question: "Is FSSAI renewal mandatory every year?",
      answer: "FSSAI licenses are typically valid for 1-5 years depending on the license type and the validity period you choose during application. Renewal is mandatory before the expiry date. Operating with an expired license can result in penalties. Regacats Solutions offers renewal assistance and sends timely reminders to ensure continuous compliance."
    },
    {
      question: "Can you operate multiple locations under one license?",
      answer: "No, each food business premises requires a separate FSSAI license. If you operate multiple branches or manufacturing units, you'll need individual licenses for each location. However, a Central License holder can manufacture the same category of products at different locations by getting additional premises approved under the same license through an amendment process."
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
