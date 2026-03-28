// src/seo/schema/ArticleSchema.js
export default function ArticleSchema({ title, description, author, url, image }) {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description,
      image,
      author: { "@type": "Person", name: author },
      publisher: { "@type": "Organization", name: "Regacats" },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
    };
  }
  