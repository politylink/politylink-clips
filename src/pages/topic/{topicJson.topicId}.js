import * as React from "react"
import {graphql} from 'gatsby'
import Layout from "../../components/layout/layout";
import ClipCardGrid from "../../components/grids/clipCardGrid";

const TopicPage = ({data}) => {
    const title = data.topicJson.title
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
  query ($id: String, $topicId: Int) {
    topicJson (id: {eq: $id}) {
        id
        title
    }
    allClipJson (
        filter: {clip: {topicIds: {eq: $topicId}}},
        sort: {fields: [clip___date, clip___clipId], order: [DESC, ASC]}
    ) {
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


export default TopicPage
