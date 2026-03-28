// src/seo/sitemap-generator.js
import fs from "fs";

const today = new Date().toISOString().split("T")[0];
const siteUrl = "https://regacat-client.vercel.app";

const pages = [
  { loc: `${siteUrl}/`, priority: "1.0", changefreq: "weekly" },
  { loc: `${siteUrl}/about`, priority: "0.8", changefreq: "monthly" },
  { loc: `${siteUrl}/portfolio`, priority: "0.8", changefreq: "monthly" },
  { loc: `${siteUrl}/team`, priority: "0.7", changefreq: "monthly" },
  { loc: `${siteUrl}/blog`, priority: "0.8", changefreq: "weekly" },
  { loc: `${siteUrl}/blog/cdsco-registration-guide`, priority: "0.8", changefreq: "monthly" },
  { loc: `${siteUrl}/blog/fssai-license-process`, priority: "0.8", changefreq: "monthly" },
  { loc: `${siteUrl}/blog/bis-certification-india`, priority: "0.8", changefreq: "monthly" },
  { loc: `${siteUrl}/contact`, priority: "0.9", changefreq: "monthly" },
  { loc: `${siteUrl}/cosmetic-import-license-india`, priority: "0.9", changefreq: "monthly" },
  { loc: `${siteUrl}/cdsco-registration`, priority: "0.9", changefreq: "monthly" },
  { loc: `${siteUrl}/medical-device-import-license-india`, priority: "0.9", changefreq: "monthly" },
  { loc: `${siteUrl}/fssai-consultants-india`, priority: "0.9", changefreq: "monthly" },
  { loc: `${siteUrl}/fssai-nutraceutical-import-consultant-india`, priority: "0.8", changefreq: "monthly" },
  { loc: `${siteUrl}/fssai-license-registration-services-india`, priority: "0.8", changefreq: "monthly" },
  { loc: `${siteUrl}/fssai-import-assistance-services-india`, priority: "0.8", changefreq: "monthly" },
  { loc: `${siteUrl}/fssai-health-claim-approval-services-india`, priority: "0.8", changefreq: "monthly" },
  { loc: `${siteUrl}/fssai-consultant-nutraceutical-supplement-india`, priority: "0.8", changefreq: "monthly" },
  { loc: `${siteUrl}/indian-authorized-agent-for-fssai-products-india`, priority: "0.8", changefreq: "monthly" },
  { loc: `${siteUrl}/non-specified-food-ingredient-approval-india`, priority: "0.8", changefreq: "monthly" },
  { loc: `${siteUrl}/foreign-food-manufacturing-facility-registration-india`, priority: "0.8", changefreq: "monthly" },
  { loc: `${siteUrl}/foreign-food-manufacturing-facility-registration-in-india`, priority: "0.8", changefreq: "monthly" },
  { loc: `${siteUrl}/vegan-endorsement-india`, priority: "0.8", changefreq: "monthly" },
  { loc: `${siteUrl}/cdsco-import-license`, priority: "0.9", changefreq: "monthly" },
  { loc: `${siteUrl}/indian-authorized-agent-for-drugs`, priority: "0.8", changefreq: "monthly" },
  { loc: `${siteUrl}/indian-authorized-agent-for-medical-devices`, priority: "0.8", changefreq: "monthly" },
  { loc: `${siteUrl}/indian-authorized-agent-for-cosmetics-in-india`, priority: "0.8", changefreq: "monthly" },
  { loc: `${siteUrl}/indian-authorized-agent-for-fssai-products`, priority: "0.8", changefreq: "monthly" },
  { loc: `${siteUrl}/indian-authorized-agent-services-india`, priority: "0.8", changefreq: "monthly" },
  { loc: `${siteUrl}/legal-metrology`, priority: "0.7", changefreq: "monthly" },
  { loc: `${siteUrl}/epr-registration`, priority: "0.7", changefreq: "monthly" },
  { loc: `${siteUrl}/disclaimer`, priority: "0.3", changefreq: "yearly" },
  { loc: `${siteUrl}/terms-and-conditions`, priority: "0.3", changefreq: "yearly" },
  { loc: `${siteUrl}/privacy-policy`, priority: "0.3", changefreq: "yearly" },
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
