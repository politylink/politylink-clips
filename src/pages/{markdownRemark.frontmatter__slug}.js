import React from "react"
import {graphql} from 'gatsby'
import Layout from "../components/layout/layout";
import * as styles from './markdown.module.css'

const MarkdownPage = ({data}) => {
    const {markdownRemark} = data
    const {html} = markdownRemark
    return (
        <Layout>
            <div className={styles.container}>
                <div dangerouslySetInnerHTML={{__html: html}}/>
                <div className={styles.coffee}>
                    <a href="https://www.buymeacoffee.com/mitsukiusui" target="_blank">
                        <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee"
                             className={styles.coffeeImage}/>
                    </a>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
query($id: String!)
    {
        markdownRemark(id
    :
        {
            eq: $id
        }
    )
        {
            html
            frontmatter
            {
                slug
                title
            }
        }
    }
`

export default MarkdownPage