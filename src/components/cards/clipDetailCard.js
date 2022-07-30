import * as React from "react";
import * as styles from './clipDetailCard.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Share from "../parts/share";

const ClipDetailCard = ({title, date, house, meeting, imageUrl, minutesUrl, videoUrl, shareUrl}) => {
    const subTitle = `${date} ${house} ${meeting}`
    return (
        <div className={styles.card}>
            <img src={imageUrl} alt={"screenshot"} className={styles.image}/>
            <div className={styles.body}>
                <p className={styles.title}>{title}</p>
                <p className={styles.subTitle}>{subTitle}</p>
                <div className={styles.links}>
                    <a href={videoUrl} target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                        <FontAwesomeIcon icon="fa-solid fa-file-video" size="lg"/>
                        <p className={styles.linkItemText}>{"映像を見る"}</p>
                    </a>
                    <a href={minutesUrl} target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                        <FontAwesomeIcon icon="fa-solid fa-book" size="lg"/>
                        <p className={styles.linkItemText}>{"会議録を読む"}</p>
                    </a>
                </div>
                <Share
                    title={title}
                    url={shareUrl}
                />
            </div>
        </div>
    )
}

export default ClipDetailCard