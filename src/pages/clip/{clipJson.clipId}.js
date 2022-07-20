import * as React from 'react'
import * as styles from './clipPage.module.css'

import Layout from '../../components/layout/layout'
import {graphql} from "gatsby";
import ClipDetailCard from "../../components/cards/clipDetailCard";
import SpeakerDetailCard from "../../components/cards/speakerDetailCard";
import ClipCardGrid from "../../components/grids/clipCardGrid";
import SpeechCardGrid from "../../components/grids/speechCardGrid";

const ClipPage = ({data}) => {
    const clip = data.clipJson
    const speeches = [
        {
            name: "木村 英子",
            info: "れいわ新撰組・比例代表",
            speech: "ありがとうございます。早急にガイドラインを作っていただくようにお願いいたします。次に、今回の航空法の改正案では、航空業界の脱炭素化に向けて、ＣＯ２の排出量を大幅に削減できる持続可能な航空燃料、ＳＡＦの導入促進が盛り込まれています。特に、廃食用油を再利用して作るＳＡＦは最も実用化が期待されている航空燃料の一つです。...",
            imageUrl: "/kimura.jpeg",
        },
        {
            name: "斉藤 鉄夫",
            info: "国土交通大臣",
            speech: "四月にお話がございましたように、ＳＡＦの導入の加速化を図るため官民協議会を立ち上げたところでございます。供給側、需要側及び政府一体の枠組みとして。そして、この協議会には、原料確保の重要性を踏まえて農林水産省や環境省も参加していただいております。...",
            imageUrl: "/saito.jpeg",
        }
    ]

    const similarClip = {
        title: "ＳＡＦの安定供給に係るサプライチェーンの構築に向けた取組状況",
        date: "2022/6/2",
        house: "参議院",
        meeting: "国土交通委員会",
        imageUrl: "/509.jpg",
        speakerImageUrl: "/kimura.jpeg"
    }
    const clips = [similarClip, similarClip, similarClip]

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
                    <SpeechCardGrid
                        speeches={speeches}
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
                    <ClipCardGrid
                        title={"関連クリップ一覧"}
                        clips={clips}
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