import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://regacats.in";

export default function Canonical() {
  const location = useLocation();
  const path = location.pathname || "/";
  const canonicalUrl = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
}
