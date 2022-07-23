import * as React from "react";
import * as styles from './speechCard.module.css';

const SpeechCard = ({speech, speakerName, speakerInfo, imageUrl}) => {
    return (
        <div className={styles.card}>
            <img src={imageUrl} alt={"face"} className={styles.image}/>
            <div className={styles.body}>
                <div className={styles.speaker}>
                    <p className={styles.speakerName}>{speakerName}</p>
                    <p className={styles.speakerInfo}>{speakerInfo}</p>
                </div>
                <p className={styles.speech}>{speech}</p>
            </div>
        </div>
    )
}

export default SpeechCard