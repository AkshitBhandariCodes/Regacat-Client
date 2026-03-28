// src/seo/sitemap-generator.js
import fs from "fs";

const today = new Date().toISOString().split("T")[0];

const pages = [
  { loc: "https://regacats.in/", priority: "1.0", changefreq: "weekly" },
  { loc: "https://regacats.in/about", priority: "0.8", changefreq: "monthly" },
  { loc: "https://regacats.in/portfolio", priority: "0.8", changefreq: "monthly" },
  { loc: "https://regacats.in/team", priority: "0.7", changefreq: "monthly" },
  { loc: "https://regacats.in/blog", priority: "0.8", changefreq: "weekly" },
  { loc: "https://regacats.in/contact", priority: "0.9", changefreq: "monthly" },
  { loc: "https://regacats.in/cosmetic-import-license-india", priority: "0.9", changefreq: "monthly" },
  { loc: "https://regacats.in/cdsco-registration", priority: "0.9", changefreq: "monthly" },
  { loc: "https://regacats.in/medical-device-import-license-india", priority: "0.9", changefreq: "monthly" },
  { loc: "https://regacats.in/fssai-consultants-india", priority: "0.9", changefreq: "monthly" },
  { loc: "https://regacats.in/fssai-nutraceutical-import-consultant-india", priority: "0.8", changefreq: "monthly" },
  { loc: "https://regacats.in/fssai-license-registration-services-india", priority: "0.8", changefreq: "monthly" },
  { loc: "https://regacats.in/fssai-import-assistance-services-india", priority: "0.8", changefreq: "monthly" },
  { loc: "https://regacats.in/fssai-health-claim-approval-services-india", priority: "0.8", changefreq: "monthly" },
  { loc: "https://regacats.in/fssai-consultant-nutraceutical-supplement-india", priority: "0.8", changefreq: "monthly" },
  { loc: "https://regacats.in/indian-authorized-agent-for-fssai-products-india", priority: "0.8", changefreq: "monthly" },
  { loc: "https://regacats.in/non-specified-food-ingredient-approval-india", priority: "0.8", changefreq: "monthly" },
  { loc: "https://regacats.in/foreign-food-manufacturing-facility-registration-india", priority: "0.8", changefreq: "monthly" },
  { loc: "https://regacats.in/foreign-food-manufacturing-facility-registration-in-india", priority: "0.8", changefreq: "monthly" },
  { loc: "https://regacats.in/vegan-endorsement-india", priority: "0.8", changefreq: "monthly" },
  { loc: "https://regacats.in/cdsco-import-license", priority: "0.9", changefreq: "monthly" },
  { loc: "https://regacats.in/indian-authorized-agent-for-drugs", priority: "0.8", changefreq: "monthly" },
  { loc: "https://regacats.in/indian-authorized-agent-for-medical-devices", priority: "0.8", changefreq: "monthly" },
  { loc: "https://regacats.in/indian-authorized-agent-for-cosmetics-in-india", priority: "0.8", changefreq: "monthly" },
  { loc: "https://regacats.in/indian-authorized-agent-for-fssai-products", priority: "0.8", changefreq: "monthly" },
  { loc: "https://regacats.in/indian-authorized-agent-services-india", priority: "0.8", changefreq: "monthly" },
  { loc: "https://regacats.in/legal-metrology", priority: "0.7", changefreq: "monthly" },
  { loc: "https://regacats.in/epr-registration", priority: "0.7", changefreq: "monthly" },
  { loc: "https://regacats.in/disclaimer", priority: "0.3", changefreq: "yearly" },
  { loc: "https://regacats.in/terms-and-conditions", priority: "0.3", changefreq: "yearly" },
  { loc: "https://regacats.in/privacy-policy", priority: "0.3", changefreq: "yearly" },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) =>
      `<url>
        <loc>${p.loc}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>${p.changefreq}</changefreq>
        <priority>${p.priority}</priority>
      </url>`
  )
  .join("")}
</urlset>`;

fs.writeFileSync("public/sitemap.xml", sitemap);
console.log("✅ Sitemap generated!");
