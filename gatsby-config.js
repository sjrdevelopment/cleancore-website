module.exports = {
    siteMetadata: {
        title: `cleancore-website`,
        siteUrl: `http://www.cleancoreintelligence.com`,
    },
    plugins: [
        'gatsby-plugin-postcss',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
            },
        },
        {
            resolve: `gatsby-plugin-s3`,
            options: {
                bucketName: 'www.cleancoreintelligence.com',
            },
        },
    ],
}
