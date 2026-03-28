// src/seo/schema/ArticleSchema.js
export default function ArticleSchema({ title, description, author, url, image }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image,
    author: {
      "@type": "Organization",
      name: author || "Regacats Solutions",
    },
    publisher: {
      "@type": "Organization",
      name: "Regacats Solutions",
      logo: {
        "@type": "ImageObject",
        url: "https://blogs.regacats.in/wp-content/uploads/2026/02/regacats-cdsco-import-license.webp",
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}
  