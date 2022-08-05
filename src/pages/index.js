import * as React from "react"
import {graphql} from 'gatsby'
import ClipCardGrid from "../components/grids/clipCardGrid";
import CategoryCardGrid from "../components/grids/categoryCardGrid";
import * as styles from "./index.module.css";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import {useMediaQuery} from "react-responsive";
import SEO from "../components/parts/seo";
import {buildImageUrl} from "../utils/url";

const IndexPage = ({data}) => {
    const isDesktop = useMediaQuery({query: '(min-width: 840px)'})
    const clips = isDesktop ? data.homeJson.clips.slice(0, 10) : data.homeJson.clips.slice(0, 4);
    const categories = data.homeJson.categories

    // can't use layout to set white background for category section
    return (
        <div className={styles.page}>
            <title>
                {"Clips｜国会を、おもしろく。"}
            </title>
            <Header/>
            <main>
                <div className={styles.headline}>
                    <ClipCardGrid
                        clips={clips}
                    />
                </div>
                <div className={styles.category}>
                    <div className={styles.categoryContainer}>
                        <CategoryCardGrid
                            categories={categories}
                        />
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export const query = graphql`
query {
  homeJson {
    clips {
      clipId
      title
      date
      house
      meeting
      member {
        name
        group
        block
      }
    }
    categories {
      category {
        categoryId
        title
      }
      topics {
        topicId
        title
      }
      clips {
        clipId
        title
        date
        house
        meeting
        member {
          name
          group
          block
        }
      }
    }
  }
}
`

export default IndexPage
export const Head = ({location}) => {
    return (
        <SEO
            path={location.pathname}
            imageUrl={buildImageUrl('/summary_large.jpg')}
            twitterCard={'summary_large_image'}
        />
    )
}
