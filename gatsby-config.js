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
                name: `clip`,
                path: `${__dirname}/clip/`,
            },
        }
    ],
}
