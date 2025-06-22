const https = require("https");

const sitemapUrl = "https://pilimissanasoberhouse.co.tz/sitemap.xml";
const pingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;

https.get(pingUrl, (res) => {
  console.log("Pinged Google Sitemap:", res.statusCode);
});
