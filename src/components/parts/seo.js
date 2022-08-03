import React from "react"
import {useSiteMetadata} from "../../hooks/useSiteMetadata"
import {buildAbsoluteUrl} from "../../utils/url";

const SEO = ({title, description, path, imageUrl, twitterCard = 'summary', children}) => {
    const {
        title: defaultTitle,
        description: defaultDescription,
        twitterUsername,
        imageUrl: defaultImageUrl
    } = useSiteMetadata()
    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        url: buildAbsoluteUrl(path),
        image: imageUrl || defaultImageUrl,
        twitterCard: twitterCard,
        twitterUsername,
    }

    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description}/>
            <meta name="image" content={seo.image}/>
            <meta name="twitter:card" content={seo.twitterCard}/>
            <meta name="twitter:title" content={seo.title}/>
            <meta name="twitter:url" content={seo.url}/>
            <meta name="twitter:description" content={seo.description}/>
            <meta name="twitter:image" content={seo.image}/>
            <meta name="twitter:creator" content={seo.twitterUsername}/>
            {children}
        </>
    )
}

export default SEO
