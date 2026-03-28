// src/seo/SEO.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

const DEFAULTS = {
  title: "",
  description: "",
  siteUrl: "",
  image: "",
  twitterHandle: "",
  lang: "en",
};

export default function SEO({
  title,
  description,
  canonical,
  type = "website",
  image,
  author,
  publishedTime,
  modifiedTime,
  jsonLd,
}) {
  const metaTitle = title || DEFAULTS.title;
  const metaDesc = description || DEFAULTS.description;
  const metaUrl = canonical || DEFAULTS.siteUrl;
  const metaImage = image || DEFAULTS.image;

  return (
    <Helmet htmlAttributes={{ lang: DEFAULTS.lang }}>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDesc} />
      <meta name="robots" content="index,follow" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:site_name" content="HiddenX" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={DEFAULTS.twitterHandle} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={metaImage} />
      <link rel="canonical" href={metaUrl} />
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
