module.exports = {
  siteMetadata: {
    title: 'FreshShift',
    description: 'Fresh Shift in Belair',
    siteUrl: 'https://freshshift.io',
    author: `@freshshift`,
    branch: process.env.BRANCH || 'master',
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-sass`,
    'gatsby-plugin-react-helmet',
    /* {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/res`,
        name: 'assets'
      }
    }, */
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /res\/.*\.svg/,
          omitKeys: [
            'height',
            'width',
            'rdfResource',
            'rdfAbout',
            'xmlnsDc',
            'xmlnsCc',
            'xmlnsRdf',
            'xmlnsSvg',
          ]
        }
      }
    }
  ]
};
