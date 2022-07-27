import * as React from "react"
import {graphql} from 'gatsby'
import Layout from "../../components/layout/layout";
import ClipCardGrid from "../../components/grids/clipCardGrid";

const MemberPage = ({data}) => {
    const title = data.memberJson.name
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
  query ($id: String, $memberId: Int) {
    memberJson (id: {eq: $id}) {
        id
        name
    }
    allClipJson (
        filter: {clip: {speaker: {memberId: {eq: $memberId}}}}, 
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


export default MemberPage
