import * as React from "react";
import * as styles from './topicDetailCard.module.css';
import Share from "../parts/share";

const TopicDetailCard = ({title, imageUrl, topicUrl}) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <img src={imageUrl} alt={"image"} className={styles.image}/>
                <p className={styles.title}>{title}</p>
                <div className={styles.follow}>
                    <p className={styles.followText}>{"フォローする"}</p>
                </div>
            </div>
            <div className={styles.share}>
                <Share
                    title={`「${title}」に関する国会クリップをチェックしよう`}
                    url={topicUrl}
                />
            </div>
        </div>
    )
}

export default TopicDetailCard