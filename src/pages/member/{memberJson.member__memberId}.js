import * as React from "react"
import {graphql} from 'gatsby'
import Layout from "../../components/layout/layout";
import ClipCardGrid from "../../components/grids/clipCardGrid";
import * as styles from "./memberPage.module.css";
import MemberDetailCard from "../../components/cards/memberDetailCard";
import {buildAbsoluteUrl, buildMemberUrl} from "../../utils/url";
import TopicChipGrid from "../../components/grids/topicChipGrid";

const MemberPage = ({data}) => {
    const member = data.memberJson.member
    const topics = data.memberJson.topics
    const clips = data.allClipJson.nodes.map(node => node.clip)

    return (
        <Layout>
            <div className={styles.top}>
                <div className={styles.topLeft}>
                    <MemberDetailCard
                        name={member.name}
                        info={`${member.group}・${member.block}`}
                        summary={member.summary}
                        imageUrl={member.imageUrl}
                        refUrl={member.refUrl}
                        shareUrl={buildAbsoluteUrl(buildMemberUrl(member.memberId))}
                    />
                </div>
                <div className={styles.topRight}>
                    {topics && topics.length > 0 &&
                        <TopicChipGrid
                            title={'関連トピック'}
                            topics={topics.slice(0, 5)}
                        />
                    }
                </div>
            </div>
            <ClipCardGrid
                clips={clips}
            />
        </Layout>
    )
}

export const query = graphql`
  query ($id: String, $member__memberId: Int) {
    memberJson (id: {eq: $id}) {
      member {
        memberId
        name
        group
        block
        summary
        refUrl
        imageUrl
      }
      topics {
        topicId
        title
        categoryId
      }
    }
    allClipJson (
        filter: {clip: {member: {memberId: {eq: $member__memberId}}}},
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


export default MemberPage
