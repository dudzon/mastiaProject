const postCssFocus = require('postcss-focus');
const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: 'Mastia Template  - simple bussiness website',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
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
