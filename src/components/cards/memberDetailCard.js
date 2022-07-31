import * as React from "react";
import * as styles from './memberDetailCard.module.css';
import ShareButtons from "../parts/shareButtons";
import FollowButton from "../parts/followButton";

const MemberDetailCard = ({name, info, summary, imageUrl, shareUrl, refUrl}) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <img src={imageUrl} alt={"image"} className={styles.image}/>
                <div className={styles.speaker}>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.info}>{info}</p>
                </div>
                <FollowButton/>
            </div>
            <div className={styles.summary}>
                <p className={styles.summaryText}>{summary}</p>
                <a href={refUrl} target="_blank" rel="noopener noreferrer">
                    <p className={styles.summaryLink}>{'参議院議員情報より'}</p>
                </a>
            </div>
            <div className={styles.share}>
                <ShareButtons
                    title={`${name}議員の国会クリップをチェックしよう`}
                    url={shareUrl}
                />
            </div>
        </div>
)
}

export default MemberDetailCard