import * as React from "react"
import {graphql} from 'gatsby'
import Layout from "../../components/layout/layout";
import ClipCardGrid from "../../components/grids/clipCardGrid";
import * as styles from "./memberPage.module.css";
import MemberDetailCard from "../../components/cards/memberDetailCard";
import {buildAbsoluteUrl, buildMemberImageUrl, buildMemberUrl} from "../../utils/url";
import TopicCardGrid from "../../components/grids/topicCardGrid";

const MemberPage = ({data}) => {
    const member = data.memberJson
    const clips = data.allClipJson.nodes.map(node => node.clip)
    const topics = [
        {'topicId': 10, 'title': 'デジタル化', 'categoryId': 4},
        {'topicId': 13, 'title': 'トリガー条項', 'categoryId': 2},
        {'topicId': 14, 'title': '脱炭素', 'categoryId': 5},
    ]

    return (
        <Layout>
            <div className={styles.top}>
                <div className={styles.topLeft}>
                    <MemberDetailCard
                        name={member.name}
                        group={member.group}
                        block={member.block}
                        summary={member.summary}
                        imageUrl={member.imageUrl}
                        refUrl={member.refUrl}
                        shareUrl={buildAbsoluteUrl(buildMemberUrl(member.memberId))}
                    />
                </div>
                <div className={styles.topRight}>
                    <TopicCardGrid
                        title={'関連トピック'}
                        topics={topics}
                    />
                </div>
            </div>
            <ClipCardGrid
                clips={clips}
            />
        </Layout>
    )
}

export const query = graphql`
  query ($id: String, $memberId: Int) {
    memberJson (id: {eq: $id}) {
        memberId
        name
        group
        block
        summary
        refUrl
        imageUrl
    }
    allClipJson (
        filter: {clip: {member: {memberId: {eq: $memberId}}}}, 
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
