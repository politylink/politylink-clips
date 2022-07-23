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
    allClipJson (limit:1000) {
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

export default IndexPage
