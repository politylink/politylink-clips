import * as React from "react"
import {graphql} from 'gatsby'
import Layout from "../../components/layout/layout";
import ClipCardGrid from "../../components/grids/clipCardGrid";
import TopicDetailCard from "../../components/cards/topicDetailCard";
import {buildAbsoluteUrl, buildCategoryImageUrl, buildTopicUrl} from "../../utils/url";
import * as styles from './topicPage.module.css'

const TopicPage = ({data}) => {
    const topic = data.topicJson
    const clips = data.allClipJson.nodes.map(node => node.clip)
    return (
        <Layout>
            <div className={styles.top}>
                <div className={styles.topLeft}>
                    <TopicDetailCard
                        title={topic.title}
                        imageUrl={buildCategoryImageUrl(topic.categoryId)}
                        topicUrl={buildAbsoluteUrl(buildTopicUrl(topic.topicId))}
                    />
                </div>
                <div className={styles.topRight}>
                    <p>right</p>
                </div>
            </div>
            <ClipCardGrid
                clips={clips}
            />
        </Layout>
    )
}

export const query = graphql`
  query ($id: String, $topicId: Int) {
    topicJson (id: {eq: $id}) {
        id
        topicId
        title
        categoryId
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
