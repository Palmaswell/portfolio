module.exports = {
  siteMetadata: {
    title: 'Mauricio Palma Portfolio',
    description: 'A collection of thoughts and work',
    author: '@palmaswell'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-root-import',
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
  ]
}
