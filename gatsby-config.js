module.exports = {
    siteMetadata: {
        title: `Clips.`,
        siteUrl: `https://clips.politylink.jp`,
    },
    plugins: [
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/data/clip/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/data/category/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/data/member/`,
            },
        },
    ],
}
