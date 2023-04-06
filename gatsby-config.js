/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteMetadata: {
      title: "My First Gatsby Site",
    },
    title: `Alejandro-tech`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    }]

  // {
  //   resolve: 'gatsby-source-filesystem',
  //   options: {
  //     "name": "images",
  //     "path": "./src/images/"
  //   },
  //   __key: "images"
  // }, 
  // {
  //   resolve: 'gatsby-source-filesystem',
  //   options: {
  //     "name": "pages",
  //     "path": "./src/pages/"
  //   },
  //   __key: "pages"
  // }]
};