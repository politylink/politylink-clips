import * as React from "react";
import * as styles from './speakerDetailCard.module.css';

import {Link} from "gatsby";

const SpeakerDetailCard = ({name, group, district, speakerUrl, imageUrl}) => {
    return (
        <div className={styles.card}>
            <p className={styles.title}>{"質問者"}</p>
            <div className={styles.body}>
                <Link to={speakerUrl} className={styles.detail}>
                    <img src={imageUrl} alt={"顔写真"} className={styles.image}/>
                    <div className={styles.info}>
                        <p className={styles.infoName}>{name}</p>
                        <div className={styles.infoDetail}>
                            <p className={styles.infoText}>{group}</p>
                            <p className={styles.infoText}>{district}</p>
                        </div>
                    </div>
                </Link>
                <div className={styles.follow}>
                    <p className={styles.followText}>{"フォローする"}</p>
                </div>
            </div>
        </div>
    )
}

export default SpeakerDetailCard