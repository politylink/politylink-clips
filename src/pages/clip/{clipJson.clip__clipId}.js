import * as React from 'react'
import * as styles from './clipPage.module.css'

import Layout from '../../components/layout/layout'
import {graphql} from "gatsby";
import ClipDetailCard from "../../components/cards/clipDetailCard";
import ClipCardGrid from "../../components/grids/clipCardGrid";
import SpeechCardGrid from "../../components/grids/speechCardGrid";
import SpeakerCardGrid from "../../components/grids/speakerCardGrid";
import {buildClipImageUrl} from "../../utils/url";

const ClipPage = ({data}) => {
    const clip = data.clipJson.clip
    const speeches = data.clipJson.speeches
    const speakers = data.clipJson.speakers
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
                    <SpeakerCardGrid
                        title={"発言者"}
                        speakers={speakers}
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
      }
      speeches {
        speaker {
          name
          info
        }
        speech
      }
      speakers {
        name
        group
        block
      }
      clips {
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
`

export default ClipPage