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
                            house={"参議院"}
                            meeting={"国土交通委員会"}
                            imageUrl={"/509.jpg"}
                            speakerImageUrl={"/kimura.jpeg"}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ClipCardGrid