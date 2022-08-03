import * as React from "react"
import {graphql} from 'gatsby'
import Layout from "../../components/layout/layout";
import ClipCardGrid from "../../components/grids/clipCardGrid";
import TopicDetailCard from "../../components/cards/topicDetailCard";
import {buildAbsoluteUrl, buildCategoryIconUrl, buildTopicUrl} from "../../utils/url";
import * as styles from './topicPage.module.css'
import TopicChipGrid from "../../components/grids/topicChipGrid";
import SEO from "../../components/parts/seo";
import {buildMemberPageDescription, buildTopicPageDescription} from "../../utils/seo";

const TopicPage = ({data}) => {
    const topic = data.topicJson.topic
    const topics = data.topicJson.topics
    const clips = data.allClipJson.nodes.map(node => node.clip)
    return (
        <Layout>
            <div className={styles.top}>
                <div className={styles.topLeft}>
                    <TopicDetailCard
                        title={topic.title}
                        imageUrl={buildCategoryIconUrl(topic.categoryId)}
                        shareUrl={buildAbsoluteUrl(buildTopicUrl(topic.topicId))}
                    />
                </div>
                <div className={styles.topRight}>
                    <TopicChipGrid
                        title={'他のトピックも見る'}
                        topics={topics}
                    />
                </div>
            </div>
            <div className={styles.body}>
                <ClipCardGrid
                    clips={clips}
                />
            </div>
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
      topics {
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
export const Head = ({location, data}) => {
    const topic = data.topicJson.topic
    return (
        <SEO
            description={buildTopicPageDescription(topic)}
            path={location.pathname}
            imagePath={buildCategoryIconUrl(topic.categoryId)}
        />
    )
}
