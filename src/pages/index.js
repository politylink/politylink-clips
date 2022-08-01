import * as React from "react"
import {graphql} from 'gatsby'
import Layout from "../components/layout/layout";
import ClipCardGrid from "../components/grids/clipCardGrid";
import CategoryCard from "../components/cards/categoryCard";
import CategoryCardGrid from "../components/grids/categoryCardGrid";

const IndexPage = ({data}) => {
    const clips = data.homeJson.clips
    const categories = data.homeJson.categories

    return (
        <Layout>
            <ClipCardGrid
                clips={clips}
            />
            <CategoryCardGrid
                categories={categories}
            />
        </Layout>
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
        imageUrl
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
          imageUrl
        }
      }
    }
  }
}
`

export default IndexPage
