// src/seo/schema/WebsiteSchema.js
export default function WebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Regacats Solutions",
    "url": "https://regacats.in",
    "description": "Regulatory consulting services for CDSCO, FSSAI, Indian Authorized Agent, EPR, and Legal Metrology compliance.",
    "inLanguage": "en-IN",
    "publisher": {
      "@type": "Organization",
      "name": "Regacats Solutions",
      "url": "https://regacats.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://blogs.regacats.in/wp-content/uploads/2026/02/regacats-cdsco-import-license.webp"
      },
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61588567147618",
        "https://x.com/regacats",
        "https://www.linkedin.com/company/regacats-solutions",
        "https://www.instagram.com/regacatsonline/"
      ]
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://regacats.in/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
}
  