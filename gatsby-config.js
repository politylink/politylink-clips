require("dotenv").config({
    path: `.env`,
})
console.log(process.env.GOOGLE_ANALYTICS_TRACKING_ID)
module.exports = {
    siteMetadata: {
        title: `Clips｜国会を、もっとおもしろく。`,
        description: `Clips（クリップス）は、あなたの興味にあった国会中継を見つけられる、国会メディアです。国会中継がクリップ（短編動画）として切り出され、トピックごとに整理されているため、注目の話題や、気になる議題を簡単にチェックできます。`,
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
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Clips.`,
                short_name: `Clips.`,
                start_url: `/`,
                background_color: `#000000`,
                theme_color: `#000000`,
                display: `standalone`,
                icon: `static/image/icon.png`
            },
        },
        `gatsby-plugin-offline`,
    ],
}
