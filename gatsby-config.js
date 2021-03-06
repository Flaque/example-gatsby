module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-netlify-cms",

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/_local`,
        name: "_local"
      }
    },
    "gatsby-transformer-remark"
  ]
};
