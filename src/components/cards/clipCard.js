import * as React from "react";
import * as styles from './clipCard.module.css';

const ClipCard = ({title, date, house, meeting, imageUrl}) => {
    const subTitle = `${date} ${house} ${meeting}`
    return (
        <div className={styles.card}>
            <img src={imageUrl} alt={"スクリーンショット"} className={styles.image}/>
            <div className={styles.detail}>
                <p className={styles.detailTitle}>{title}</p>
                <p className={styles.detailSubTitle}>{subTitle}</p>
            </div>
        </div>
    )
}

export default ClipCard