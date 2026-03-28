// src/seo/sitemap-generator.js
import fs from "fs";

const pages = [
  { loc: "https://regacats.in/", priority: 1.0 },
  { loc: "https://regacats.in/cosmetic-import-license-india", priority: 1.0 },
  { loc: "https://regacats.in/medical-device-import-license-india", priority: 1.0 },
  { loc: "https://regacats.in/fssai-consultants-india", priority: 1.0 },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) =>
      `<url>
        <loc>${p.loc}</loc>
        <priority>${p.priority}</priority>
      </url>`
  )
  .join("")}
</urlset>`;

fs.writeFileSync("public/sitemap.xml", sitemap);
console.log("✅ Sitemap generated!");
