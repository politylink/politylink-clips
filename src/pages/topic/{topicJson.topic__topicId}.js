import * as React from "react"
import {graphql} from 'gatsby'
import Layout from "../../components/layout/layout";
import ClipCardGrid from "../../components/grids/clipCardGrid";
import TopicDetailCard from "../../components/cards/topicDetailCard";
import {buildAbsoluteUrl, buildCategoryImageUrl, buildTopicUrl} from "../../utils/url";
import * as styles from './topicPage.module.css'
import TopicCardGrid from "../../components/grids/topicCardGrid";

const TopicPage = ({data}) => {
    const topic = data.topicJson.topic
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
                    <TopicDetailCard
                        title={topic.title}
                        imageUrl={buildCategoryImageUrl(topic.categoryId)}
                        topicUrl={buildAbsoluteUrl(buildTopicUrl(topic.topicId))}
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
  query ($id: String, $topic__topicId: Int) {
    topicJson (id: {eq: $id}) {
      topic {
        topicId
        title
        categoryId
      }
    }
    allClipJson (
        filter: {clip: {topicIds: {eq: $topic__topicId}}},
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


export default TopicPage
