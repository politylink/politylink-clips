require("dotenv").config({
    path: `.env`,
})
console.log(process.env.GOOGLE_ANALYTICS_TRACKING_ID)
module.exports = {
    siteMetadata: {
        title: `Clips｜国会を、おもしろく。`,
        description: `Clips（クリップス）は国会での議論をトピックごとに整理した、新しい国会専門メディアです。`,
        twitterUsername: `@politylink`,
        siteUrl: `https://clips.politylink.jp`,
        imageUrl: `https://image.politylink.jp/clips/summary.jpg`
    },
    plugins: [
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/artifact/clip/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/artifact/category/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/artifact/member/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/artifact/topic/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/artifact/home/`,
            },
        },
        {
            resolve: `gatsby-plugin-s3`,
            options: {
                bucketName: 'politylink-clips',
            },
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [process.env.GOOGLE_ANALYTICS_TRACKING_ID],
            },
        },
    ],
}
