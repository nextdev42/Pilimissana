module.exports = {
  siteMetadata: {
    title: `PILI MISSANA - Sober house foundation`,
    description: `Tuna toa tiba za maradhi ya uraibu wa madawa ya kulevya kama vile pombe, bangi, heroin, cocaine, tramadol, na dawa nyingine za kulevya`,
    siteUrl: "https://pilimissanasoberhouse.co.tz", // Required for sitemap
    author: `Said Abdulkadir <said.abdulkadiri@protonmail.com>`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src`,
        name: "_content",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/gallery`,
        name: "gallery",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              ignoreFileExtensions: [
                `png`,
                `jpg`,
                `jpeg`,
                `bmp`,
                `tiff`,
                `webp`,
              ],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1360,
              quality: 100,
              showCaptions: false,
              withWebp: false,
              wrapperStyle: `margin: 7vw 0;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pilimissana Sober House`,
        short_name: `Pilimissana`,
        start_url: `/`,
        background_color: `#ebebfa`,
        theme_color: `#ebebfa`,
        display: `standalone`,
        icon: `src/images/3D-liquid-abstract-5.webp`,
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        enableIdentityWidget: false,
      },
    },
    {
      resolve: "gatsby-plugin-decap-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        resolveSiteUrl: () => `https://pilimissanasoberhouse.co.tz`,
        serialize: ({ path }) => {
          return {
            url: `https://pilimissanasoberhouse.co.tz${path}`,
            changefreq: `daily`,
            priority: 0.7,
          };
        },
      },
    },
  ],
};
