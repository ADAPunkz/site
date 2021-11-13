/* eslint-disable camelcase */
module.exports = {
  siteMetadata: {
    siteUrl: 'https://focused-tereshkova-6d95b3.netlify.app/',
    title: 'ADAPunkz',
    author: 'ADAPunkz',
    description: 'Anonymity. Unity. Revolution',
    policyId: '76ebe108d0d58ba2ffe6024cf25cf5f6a890f4c61d77ee7911362b14',
    twitter: 'https://twitter.com/ADAPunkz',
    discord: 'https://discord.gg/mFp7PW8zm3',
    keywords: ['ADAPunkz', 'ADA', 'Punkz', 'NFT', 'Cardano', 'CNFT', 'Cryptocurrency', 'Crypto', 'Blockchain', 'Investment', 'Digital', 'Art', 'Generative'],
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'ADAPunkz',
        short_name: 'ADAPunkz',
        start_url: '/explore',
        background_color: '#00AADD',
        theme_color: '#19809F',
        display: 'standalone',
        icon: 'src/images/icon.png',
        icon_options: {
          purpose: 'any maskable',
        },
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    'gatsby-plugin-graphql-codegen',
    'gatsby-plugin-why-did-you-render',
    'gatsby-plugin-no-sourcemaps',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-netlify',
  ],
};
