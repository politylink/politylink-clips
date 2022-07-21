import * as React from "react";
import * as styles from './clipCardGrid.module.css';
import ClipCard from "../cards/clipCard";

const ClipCardGrid = ({title, clips}) => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>{title}</p>
            <div className={styles.grid}>
                {
                    clips.map(clip => (
                        <ClipCard
                            title={clip.title}
                            date={clip.date}
                            house={clip.house}
                            meeting={clip.meeting}
                            clipUrl={clip.clipUrl}
                            imageUrl={clip.imageUrl}
                            speakerImageUrl={clip.speaker.imageUrl}
                            speakerName={clip.speaker.name}
                            speakerInfo={clip.speaker.info}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ClipCardGrid