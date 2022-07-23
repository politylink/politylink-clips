import * as React from "react";
import * as styles from './clipCard.module.css';
import {Link} from "gatsby";

const ClipCard = ({title, date, house, meeting, clipUrl, imageUrl, speakerImageUrl, speakerName, speakerInfo}) => {
    const subTitle = `${date} ${house} ${meeting}`
    return (
        <Link to={clipUrl} className={styles.card}>
            <img src={imageUrl} alt={"thumbnail"} className={styles.image}/>
            <div className={styles.body}>
                <p className={styles.title}>{title}</p>
                <p className={styles.subTitle}>{subTitle}</p>
                <div className={styles.speaker}>
                    <img src={speakerImageUrl} alt={"face"} className={styles.speakerImage}/>
                    <p className={styles.speakerName}>{speakerName}</p>
                    <p className={styles.speakerInfo}>{speakerInfo}</p>
                </div>
            </div>
        </Link>
    )
}

export default ClipCard