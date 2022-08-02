import * as React from "react"
import {graphql} from 'gatsby'
import Layout from "../../components/layout/layout";
import ClipCardGrid from "../../components/grids/clipCardGrid";
import * as styles from "../topic/topicPage.module.css";
import {buildAbsoluteUrl, buildCategoryIconUrl, buildCategoryUrl} from "../../utils/url";
import TopicChipGrid from "../../components/grids/topicChipGrid";
import CategoryDetailCard from "../../components/cards/categoryDetailCard";

const CategoryPage = ({data}) => {
    const category = data.categoryJson.category
    const topics = data.categoryJson.topics
    const clips = data.allClipJson.nodes.map(node => node.clip)
    return (
        <Layout>
            <div className={styles.top}>
                <div className={styles.topLeft}>
                    <CategoryDetailCard
                        title={`${category.title}カテゴリ`}
                        desc={`${category.title}に関するクリップを集めました`}
                        imageUrl={buildCategoryIconUrl(category.categoryId)}
                        shareUrl={buildAbsoluteUrl(buildCategoryUrl(category.categoryId))}
                    />
                </div>
                <div className={styles.topRight}>
                    <TopicChipGrid
                        title={'関連トピック'}
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
  query ($id: String, $category__categoryId: Int) {
    categoryJson (id: {eq: $id}) {
        category {
            categoryId
            title
            desc
        }
        topics {
            topicId
            title
            categoryId
        }
    }
    allClipJson (
        filter: {clip: {categoryId: {eq: $category__categoryId}}},
        sort: {fields: [clip___date, clip___clipId], order: [DESC, ASC]},
        limit: 100,
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


export default CategoryPage
