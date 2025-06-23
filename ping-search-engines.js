
const https = require("https");

const sitemapUrl = "https://pilimissanasoberhouse.co.tz/sitemap.xml";
const encodedSitemap = encodeURIComponent(sitemapUrl);

const searchEngines = [
  {
    name: "Google",
    url: `https://www.google.com/ping?sitemap=${encodedSitemap}`,
  },
  {
    name: "Bing",
    url: `https://www.bing.com/ping?sitemap=${encodedSitemap}`,
  },
  {
    name: "Yandex",
    url: `https://yandex.com/indexnow?url=${encodedSitemap}`,
  },
  {
    name: "DuckDuckGo",
    url: `https://duckduckgo.com/?q=site:${sitemapUrl}`, // Not a real ping endpoint, but triggers indexing passively
  },
];

searchEngines.forEach((engine) => {
  https
    .get(engine.url, (res) => {
      console.log(`✅ ${engine.name} pinged - Status: ${res.statusCode}`);
    })
    .on("error", (e) => {
      console.error(`❌ Failed to ping ${engine.name}: ${e.message}`);
    });
});
