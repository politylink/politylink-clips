import * as React from "react";
import * as styles from './speakerCard.module.css';

import {Link} from "gatsby";

const SpeakerCard = ({name, group, block, speakerUrl, imageUrl}) => {
    return (
        <div className={styles.card}>
            <Link to={speakerUrl} className={styles.speaker}>
                <img src={imageUrl} alt={"顔写真"} className={styles.image}/>
                <div className={styles.detail}>
                    <p className={styles.name}>{name}</p>
                    <div className={styles.info}>
                        <p className={styles.infoText}>{group}</p>
                        <p className={styles.infoText}>{block}</p>
                    </div>
                </div>
            </Link>
            <div className={styles.follow}>
                <p className={styles.followText}>{"フォローする"}</p>
            </div>
        </div>
    )
}

export default SpeakerCard