const postCssFocus = require('postcss-focus');
const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: 'Mastia Template  - simple bussiness website',
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [ postCssFocus(),
                          autoprefixer()],
        precision: 8,
      },
    },

  ]
}
