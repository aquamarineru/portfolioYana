// next-sitemap.js
module.exports = {
    siteUrl: 'https://www.yanakorobeinykphoto.com/', 
    generateRobotsTxt: true,
    dynamicSitemap: [
      {
        route: '/', // Home page
        lastmod: '2023-07-28', 
        changefreq: 'daily', 
        priority: 0.7, 
      },
      {
        route: '/portfolio', // Portfolio page
        lastmod: '2023-07-28',
        changefreq: 'daily', 
        priority: 0.7, 
      },
      {
        route: '/portfolio/[slug]', // Dynamic portfolio pages with slugs
        lastmod: '2023-07-28', 
        changefreq: 'daily', 
        priority: 0.7, 
      },
    ],
  }; 
  