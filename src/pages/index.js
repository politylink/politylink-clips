import * as React from "react"
import {graphql} from 'gatsby'
import Layout from "../components/layout/layout";
import ClipCardGrid from "../components/grids/clipCardGrid";

const IndexPage = ({data}) => {
    const clips = data.allClipJson.nodes.map(node => node.clip)
    return (
        <Layout>
            <ClipCardGrid
                title={"クリップ一覧"}
                clips={clips}
            />
        </Layout>
    )
}

export const query = graphql`
  query {
    allClipJson(sort: {fields: [clip___date, clip___clipId], order: [DESC, ASC]}) {
      nodes {
        id
        clip {
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
