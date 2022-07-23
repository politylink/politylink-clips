import * as React from "react";
import * as styles from './speechCardGrid.module.css';
import SpeechCard from "../cards/speechCard";
import {buildSpeakerImageUrl} from "../../utils/url";

const SpeechCardGrid = ({speeches}) => {
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {
                    speeches.map(speech => (
                        <SpeechCard
                            key={speech.speaker.name}
                            speech={speech.speech}
                            speakerName={speech.speaker.name}
                            speakerInfo={speech.speaker.info}
                            imageUrl={buildSpeakerImageUrl()}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default SpeechCardGrid