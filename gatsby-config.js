module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Countries`,
    description: ``,
    author: `Jaspreet Singh`,
  },
  plugins: [
    // 'gatsby-concurrent-mode',
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        // isTSX: true, // defaults to false
        // jsxPragma: `jsx`, // defaults to "React"
        // allExtensions: true, // defaults to false
      },
    },
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-tsconfig-paths`,
    // 'gatsby-plugin-tsconfig-paths',
    // {
    //   resolve: `gatsby-plugin-alias-imports`,
    //   options: {
    //     alias: {
    //       '@': 'src',
    //       '@cp': 'src/components',
    //       '@hooks': 'src/hooks',
    //       '@layout': 'src/layout',
    //       '@pages': 'src/pages',
    //     },
    //     extensions: ['js', 'jsx', 'ts', 'tsx'],
    //   },
    // },
    {
      resolve: 'gatsby-plugin-transition-link',
      options: {
        layout: require.resolve(`./src/layout/layout.tsx`),
      },
    },
    'gatsby-plugin-linaria',
  ],
}
