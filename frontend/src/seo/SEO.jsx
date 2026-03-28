// src/seo/SEO.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

const DEFAULTS = {
  title: "Regacats Solutions | CDSCO & FSSAI Consultant in India",
  description:
    "Regacats Solutions provides expert CDSCO, FSSAI, IAA, EPR, and Legal Metrology compliance services for Indian and global businesses.",
  siteUrl: "https://regacats.in",
  image: "https://blogs.regacats.in/wp-content/uploads/2026/02/regacats-cdsco-import-license.webp",
  twitterHandle: "@regacats",
  twitterSite: "@regacats",
  locale: "en_IN",
  lang: "en",
  keywords:
    "CDSCO consultant, FSSAI consultant, Indian authorized agent, cosmetic import license India, medical device import license India, drug registration India, EPR authorization, legal metrology",
};

export default function SEO({
  title,
  description,
  canonical,
  type = "website",
  image,
  author,
  keywords,
  noindex = false,
  publishedTime,
  modifiedTime,
  jsonLd,
}) {
  const metaTitle = title || DEFAULTS.title;
  const metaDesc = description || DEFAULTS.description;
  const currentPath =
    typeof window !== "undefined" ? `${window.location.pathname}${window.location.search || ""}` : "";
  const metaUrl = canonical || `${DEFAULTS.siteUrl}${currentPath}`;
  const metaImage = image || DEFAULTS.image;
  const robots = noindex ? "noindex,nofollow" : "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1";
  const metaKeywords = keywords || DEFAULTS.keywords;

  return (
    <Helmet htmlAttributes={{ lang: DEFAULTS.lang }}>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDesc} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="robots" content={robots} />
      <meta name="author" content={author || "Regacats Solutions"} />
      <meta property="og:locale" content={DEFAULTS.locale} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:site_name" content="Regacats Solutions" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={DEFAULTS.twitterSite} />
      <meta name="twitter:creator" content={DEFAULTS.twitterHandle} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={metaImage} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      <link rel="canonical" href={metaUrl} />
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
