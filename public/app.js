import fs from 'fs';
import axios from 'axios';

const API_URL = 'https://www.api.stanleyestates.in/api/properties/';
const SITEMAP_FILE_PATH = 'sitemap.xml'; // Adjust the path as needed

async function generateSitemap() {
  try {
    // Fetch data from API
    const response = await axios.get(API_URL);
    const properties = response.data.data;

    // Create sitemap content
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    // Add static URLs
    const staticUrls = [
      { loc: 'https://www.stanleyestates.in/', changefreq: 'daily', priority: 1.0 },
      { loc: 'https://www.stanleyestates.in/privacy-policy', changefreq: 'yearly', priority: 0.5 },
      { loc: 'https://www.stanleyestates.in/properties', changefreq: 'daily', priority: 0.9 },
      { loc: 'https://www.stanleyestates.in/ourstory', changefreq: 'monthly', priority: 0.6 }
    ];

    staticUrls.forEach(url => {
      sitemap += `  <url>\n`;
      sitemap += `    <loc>${url.loc}</loc>\n`;
      sitemap += `    <changefreq>${url.changefreq}</changefreq>\n`;
      sitemap += `    <priority>${url.priority}</priority>\n`;
      sitemap += `  </url>\n`;
    });

    // Add dynamic property URLs
    properties.forEach(property => {
      const slug = property.attributes.slug;
      const loc = `https://www.stanleyestates.in/${slug}`;

      sitemap += `  <url>\n`;
      sitemap += `    <loc>${loc}</loc>\n`;
      sitemap += `    <lastmod>${property.attributes.updatedAt}</lastmod>\n`;
      sitemap += `    <changefreq>daily</changefreq>\n`;
      sitemap += `    <priority>0.8</priority>\n`;
      sitemap += `  </url>\n`;
    });

    sitemap += '</urlset>\n';

    // Save sitemap to file
    fs.writeFileSync(SITEMAP_FILE_PATH, sitemap);
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

generateSitemap();
