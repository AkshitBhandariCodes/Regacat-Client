import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "What are the key CDSCO Regulatory Requirements for Importing Medical Devices into India?",
      answer: "Key requirements include obtaining an import license from CDSCO regulatory, ensuring compliance with applicable standards, and adhering to post-import obligations. RegaCats can guide you through the complexities of CDSCO regulations for importing medical devices, ensuring compliance with all relevant requirements."
    },
    {
      question: "How are Medical Devices Classified by CDSCO?",
      answer: "Understanding the CDSCO classification system is crucial for import registration. RegaCats can help you classify your devices accurately and determine the appropriate regulatory pathway. At our consultancy we solve the complex classification at CDSCO for you so that our clients can experience the smooth CDSCO approvals."
    },
    {
      question: "What Documents are Required for CDSCO Import Registration of Medical Devices?",
      answer: "RegaCats can assist you in preparing the necessary documentation for CDSCO import registration, the documents can include Power of Attorney, technical documentation, and clinical data (if applicable), export license, business registration related documents. Additionally, you may need to provide evidence of the foreign manufacturer's compliance with applicable regulations in their country of origin. This is because the compliances of CDSCO and other country’s regulatory can be different or similar at some points."
    },
    {
      question: "What are the Timelines for Obtaining CDSCO Import Licenses and Approvals?",
      answer: "MD (Medical devices) import approval under CDSCO regulatory can have varying timelines depends on what product you are importing and from where, however this is seen sometimes it takes 60-90 days if done quickly. However this duration can be increases under different circumstances. RegaCats can help you understand the expected timelines and develop a proactive import strategy to minimize delays."
    },

    {
      question: "What are the CDSCO Labeling and Packaging Requirements for Imported Medical Devices?",
      answer: "Complying with CDSCO labeling and packaging regulations is essential because incorrect or incomplete labeling can lead to product recalls, fines, and even market withdrawal. However, navigating these regulations can be complex. Regacats can advise on compliant labeling content, including mandatory information such as device name, manufacturer details, indications for use, warnings, and precautions. We can also guide you on language requirements, ensuring your labels are in English and any other required languages. Furthermore, Regacats can help you determine appropriate packaging specifications, including materials, size, and tamper-evident features, to ensure the safe and effective transportation and storage of your medical devices. RegaCats can advise on compliant labeling content, language requirements, and packaging specifications to avoid potential issues."
    },
    {
      question :"What are the CDSCO Post-Market Surveillance Requirements for Imported Medical Devices?",
      answer: "Post-market surveillance is crucial for ensuring the continued safety and effectiveness of imported devices because it allows for the ongoing monitoring of device performance and the identification of any potential safety issues after they have been placed on the market. However, understanding and fulfilling post-market surveillance obligations can be challenging. Regacats can help you understand your specific post-market surveillance responsibilities, including adverse event reporting, field safety corrective actions, and periodic safety updates. Importers are responsible for post-import activities, including proper storage, distribution, and recall procedures, all of which are critical for ensuring the safety and efficacy of the imported medical devices."
    },
    {
      question : "What are the Penalties for Non-Compliance with CDSCO Import Regulations for Medical Devices?",
      answer : "Non-compliance can lead to significant penalties and delays. RegaCats can help you minimize these risks by ensuring your import process adheres to all CDSCO regulations."
    },
    {
      question : "How can RegaCats Help me Ensure the Quality and Safety of Imported Medical Devices according to CDSCO Guidelines?",
      answer : "RegaCats can help you establish and maintain a robust quality management system aligned with CDSCO guidelines, ensuring your imported devices meet the highest safety and quality standards."
    },
    {
      question : "What are the CDSCO Requirements for Maintaining Records Related to Imported Medical Devices?",
      answer : "Maintaining accurate and complete records is crucial for demonstrating compliance. RegaCats can advise on CDSCO record-keeping requirements and help you develop a compliant record-keeping system."
    },
    {
      question : "What are the Ongoing CDSCO Regulatory Changes and Updates that Importers Need to be Aware of?",
      answer : "Staying updated on regulatory changes is essential. RegaCats can keep you informed about the latest CDSCO updates and ensure your import practices remain compliant with the evolving regulatory landscape."
    },
    {
      question : "How can RegaCats Help me Appeal a CDSCO Decision Regarding Medical Device Import?",
      answer : "If you face a challenging CDSCO decision, RegaCats can provide expert guidance and support throughout the appeal process."
    },
    {
      question : "How can RegaCats Help me Obtain a CDSCO License to Import and Distribute Medical Devices in India?",
      answer : "RegaCats can guide you through the entire process of obtaining a CDSCO license for importing and distributing medical devices in India."
    },
    {
      question : "What are the Benefits of Working with a CDSCO Medical Device Regulatory Affairs Consultant like RegaCats?",
      answer : "RegaCats offers a comprehensive range of services, including regulatory consulting, training, and support throughout the entire product lifecycle."
    },
    {
      question : "Does RegaCats Offer Training Programs on CDSCO Medical Device Import Regulations?",
      answer : "RegaCats may offer training programs to help you and your team understand CDSCO regulations and best practices, our process includes the overall coverage of understanding the compliances and goals of CDSCO."
    },
    {
      question : "How can I Contact RegaCats to Discuss my Specific Medical Device Import Needs?",
      answer : "Contact RegaCats today for a free consultation to discuss your specific requirements."
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
