import * as React from 'react'
import * as styles from './clipPage.module.css'

import Layout from '../../components/layout/layout'
import {graphql} from "gatsby";
import ClipDetailCard from "../../components/cards/clipDetailCard";
import ClipCardGrid from "../../components/grids/clipCardGrid";
import SpeechCardGrid from "../../components/grids/speechCardGrid";
import MemberCardGrid from "../../components/grids/memberCardGrid";
import {buildAbsoluteUrl, buildClipImageUrl, buildClipUrl} from "../../utils/url";
import TopicChipGrid from "../../components/grids/topicChipGrid";
import SEO from "../../components/parts/seo";
import {buildClipPageDescription, buildClipPageTitle} from "../../utils/seo";

const ClipPage = ({data}) => {
    const clip = data.clipJson.clip
    const speeches = data.clipJson.speeches
    const topics = data.clipJson.topics
    const clips = data.clipJson.clips

    return (
        <Layout>
            <div className={styles.main}>
                <div className={styles.left}>
                    <ClipDetailCard
                        title={clip.title}
                        date={clip.date}
                        house={clip.house}
                        meeting={clip.meeting}
                        imageUrl={buildClipImageUrl(clip.clipId, 'l')}
                        videoUrl={clip.videoUrl}
                        minutesUrl={clip.minutesUrl}
                        shareUrl={buildAbsoluteUrl(buildClipUrl(clip.clipId))}
                    />
                    <SpeechCardGrid
                        speeches={speeches}
                    />
                </div>
                <div className={styles.right}>
                    <MemberCardGrid
                        members={[clip.member]}
                    />
                    {topics && topics.length > 0 &&
                        <TopicChipGrid
                            title={"関連トピック"}
                            topics={topics}
                        />
                    }
                    {clips && clips.length > 0 &&
                        <ClipCardGrid
                            title={"他のクリップも見る"}
                            clips={clips}
                            isMain={false}
                        />
                    }
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
  query ($id: String) {
    clipJson(id: {eq: $id}) {
      id
      clip {
        clipId
        title
        date
        house
        meeting
        videoUrl
        minutesUrl
        member {
          memberId
          name
          group
          block
        }
      }
      speeches {
        speaker {
          name
          info
        }
        speech
      }
      clips {
        clipId
        title
        date
        house
        meeting
        member {
          name
          group
          block
        }
      }
      topics {
        topicId
        title
        categoryId
      }
    }
  }
`

export default ClipPage
export const Head = ({location, data}) => {
    const clip = data.clipJson.clip
    return (
        <SEO
            title={buildClipPageTitle(clip)}
            description={buildClipPageDescription(clip)}
            path={location.pathname}
        />
    )
}