const path = require("path")

require("dotenv").config({
  path: `.env`,
})

console.log(process.env.GATSBY_TRACKING_ID, process.env.GATSBY_TAG_MANAGER);

module.exports = {
  siteMetadata: {
    title: `Susana Rocha Cabeleireiros`,
    description: `Susana Rocha Hairdresser Website`,
    author: `Tânia Rocha | https://github.com/taniaprocha`,
    keywords: `Cabeleireiro, Viana do Castelo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: { failOnError: false },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        root: path.join(__dirname, "src"),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GATSBY_TRACKING_ID,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GATSBY_TAG_MANAGER,
      },
    },
  ],
}
