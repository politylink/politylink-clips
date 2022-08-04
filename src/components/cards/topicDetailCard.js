import * as React from "react";
import * as styles from './topicDetailCard.module.css';
import ShareButtons from "../parts/shareButtons";
import FollowButton from "../parts/followButton";

const TopicDetailCard = ({title, imageUrl, shareUrl, description}) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <img src={imageUrl} alt={"image"} className={styles.image}/>
                <p className={styles.title}>{title}</p>
                <FollowButton/>
            </div>
            {description &&
                <div className={styles.description}>
                    <p className={styles.descriptionText}>{description}</p>
                </div>
            }
            <div className={styles.share}>
                <ShareButtons
                    title={`「${title}」に関する国会クリップをチェックしよう`}
                    url={shareUrl}
                />
            </div>
        </div>
    )
}

export default TopicDetailCard