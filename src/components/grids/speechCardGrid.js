import * as React from "react";
import * as styles from './speechCardGrid.module.css';
import SpeechCard from "../cards/speechCard";

const SpeechCardGrid = ({speeches}) => {
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {
                    speeches.map(speech => (
                        <SpeechCard
                            speech={speech.speech}
                            speakerName={speech.speaker.name}
                            speakerInfo={speech.speaker.info}
                            imageUrl={speech.speaker.imageUrl}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default SpeechCardGrid