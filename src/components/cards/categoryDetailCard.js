import * as React from "react";
import * as styles from './categoryDetailCard.module.css';
import ShareButtons from "../parts/shareButtons";

const CategoryDetailCard = ({title, desc, imageUrl, shareUrl}) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <img src={imageUrl} alt={"image"} className={styles.image}/>
                <p className={styles.title}>{title}</p>
            </div>
            <div className={styles.desc}>
                <p className={styles.descText}>{desc}</p>
            </div>
            <div className={styles.share}>
                <ShareButtons
                    title={`「${title}」に関する国会クリップをチェックしよう`}
                    url={shareUrl}
                />
            </div>
        </div>
    )
}

export default CategoryDetailCard