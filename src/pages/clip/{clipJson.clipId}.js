import * as React from 'react'
import * as styles from './clipPage.module.css'

import Layout from '../../components/layout/layout'
import {graphql} from "gatsby";
import ClipDetailCard from "../../components/cards/clipDetailCard";
import SpeakerDetailCard from "../../components/cards/speakerDetailCard";

const ClipPage = ({data}) => {
    const clip = data.clipJson
    return (
        <Layout>
            <div className={styles.main}>
                <div className={styles.left}>
                    <ClipDetailCard
                        title={clip.title}
                        date={clip.date}
                        house={clip.house}
                        meeting={clip.meeting}
                        imageUrl={clip.imageUrl}
                        videoUrl={clip.videoUrl}
                        minutesUrl={clip.minutesUrl}
                    />
                </div>
                <div className={styles.right}>
                    <SpeakerDetailCard
                        name={"木村　英子"}
                        group={"れいわ新撰組"}
                        district={"比例代表"}
                        speakerUrl={"/"}
                        imageUrl={"/kimura.jpeg"}
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
        clipId
        title
        date
        house
        meeting
        imageUrl
        videoUrl
        minutesUrl
    }
  }
`

export default ClipPage