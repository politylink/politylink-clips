import * as React from 'react'
import * as styles from './clipPage.module.css'

import Layout from '../../components/layout/layout'
import {graphql} from "gatsby";
import ClipDetailCard from "../../components/cards/clipDetailCard";
import ClipCardGrid from "../../components/grids/clipCardGrid";
import SpeechCardGrid from "../../components/grids/speechCardGrid";
import MemberCardGrid from "../../components/grids/memberCardGrid";
import {buildClipImageUrl} from "../../utils/url";

const ClipPage = ({data}) => {
    const clip = data.clipJson.clip
    const speeches = data.clipJson.speeches
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
                        imageUrl={buildClipImageUrl(clip.clipId)}
                        videoUrl={clip.videoUrl}
                        minutesUrl={clip.minutesUrl}
                    />
                    <SpeechCardGrid
                        speeches={speeches}
                    />
                </div>
                <div className={styles.right}>
                    <MemberCardGrid
                        title={"質問者"}
                        members={[clip.member]}
                    />
                    <ClipCardGrid
                        title={"関連クリップ"}
                        clips={clips}
                        isSub={true}
                    />
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
          imageUrl
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
          imageUrl
        }
      }
    }
  }
`

export default ClipPage