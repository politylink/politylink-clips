import * as React from "react"
import {graphql} from 'gatsby'
import Layout from "../../components/layout/layout";
import ClipCardGrid from "../../components/grids/clipCardGrid";

const CategoryPage = ({data}) => {
    const title = data.categoryJson.name
    const clips = data.allClipJson.nodes.map(node => node.clip)
    return (
        <Layout>
            <ClipCardGrid
                title={title}
                clips={clips}
            />
        </Layout>
    )
}

export const query = graphql`
  query ($id: String, $categoryId: Int) {
    categoryJson (id: {eq: $id}) {
        id
        name
    }
    allClipJson (filter: {clip: {categoryId: {eq: $categoryId}}}) {
      nodes {
        id
        clip {
          clipId
          title
          date
          house
          meeting
          speaker {
            name
            info
          }
        }
      }
    }
  }
`


export default CategoryPage
