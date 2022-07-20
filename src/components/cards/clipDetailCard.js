import * as React from "react";
import * as styles from './clipDetailCard.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ClipDetailCard = ({title, date, house, meeting, imageUrl, minutesUrl, videoUrl}) => {
    const subTitle = `${date} ${house} ${meeting}`
    return (
        <div className={styles.card}>
            <img src={imageUrl} alt={"スクリーンショット"} className={styles.image}/>
            <div className={styles.detail}>
                <p className={styles.detailTitle}>{title}</p>
                <p className={styles.detailSubTitle}>{subTitle}</p>
                <div className={styles.links}>
                    <a href={videoUrl} target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                        <FontAwesomeIcon icon="fa-solid fa-file-video" size="m"/>
                        <p className={styles.linkItemText}>{"映像を見る"}</p>
                    </a>
                    <a href={minutesUrl} target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                        <FontAwesomeIcon icon="fa-solid fa-book" size="m"/>
                        <p className={styles.linkItemText}>{"会議録を読む"}</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ClipDetailCard