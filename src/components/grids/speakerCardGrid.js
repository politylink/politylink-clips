import * as React from "react";
import * as styles from './speakerCardGrid.module.css';
import SpeakerCard from "../cards/speakerCard";

const SpeakerCardGrid = ({title, speakers}) => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>{title}</p>
            <div className={styles.grid}>
                {
                    speakers.map(speaker => (
                        <SpeakerCard
                            name={speaker.name}
                            group={speaker.group}
                            block={speaker.block}
                            speakerUrl={speaker.speakerUrl}
                            imageUrl={speaker.imageUrl}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default SpeakerCardGrid