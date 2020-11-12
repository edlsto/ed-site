const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Ed Stoner`,
    titleTemplate: "%s - Front-End Developer",
    description: `Front-end developer based in Denver, Colorado - React, React Native, JavaScript`,
    author: `Ed Stoner`,
    url: "https://www.edstoner.dev",
    image: "/images/edstoner.jpg",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
        },
        gatsbyRemarkPlugins: [
          "gatsby-remark-images",
          {
            resolve: `gatsby-remark-highlight-code`,
          },
        ],
        plugins: ["gatsby-remark-images"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `projects`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-173458814-1",
      },
    },
  ],
}
