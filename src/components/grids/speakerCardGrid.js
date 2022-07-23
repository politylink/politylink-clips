import * as React from "react";
import * as styles from './speakerCardGrid.module.css';
import SpeakerCard from "../cards/speakerCard";
import {buildSpeakerImageUrl, buildSpeakerUrl} from "../../utils/url";

const SpeakerCardGrid = ({title, speakers}) => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>{title}</p>
            <div className={styles.grid}>
                {
                    speakers.map(speaker => (
                        <SpeakerCard
                            key={speaker.name}
                            name={speaker.name}
                            group={speaker.group}
                            block={speaker.block}
                            speakerUrl={buildSpeakerUrl()}
                            imageUrl={buildSpeakerImageUrl()}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default SpeakerCardGrid