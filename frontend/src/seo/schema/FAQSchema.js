// src/seo/schema/FAQSchema.js
export default function FAQSchema(faqs = []) {
  const validFaqs = faqs.filter((f) => f?.question && f?.answer);

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: validFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}
  