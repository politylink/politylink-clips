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
                            speakerName={speech.name}
                            speakerInfo={speech.info}
                            speech={speech.speech}
                            imageUrl={speech.imageUrl}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default SpeechCardGrid