import * as React from "react";
import * as styles from './memberDetailCard.module.css';
import Share from "../parts/share";
import Follow from "../parts/follow";

const MemberDetailCard = ({name, group, block, summary, imageUrl, memberUrl, refUrl}) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <img src={imageUrl} alt={"image"} className={styles.image}/>
                <div className={styles.speaker}>
                    <p className={styles.name}>{name}</p>
                    <div className={styles.info}>
                        <p className={styles.infoText}>{'自由民主党'}</p>
                        <p className={styles.infoText}>{'東京都'}</p>
                    </div>
                </div>
                <Follow/>
            </div>
            <div className={styles.summary}>
                <p>{'吾輩は猫である。'}</p>
            </div>
            <div className={styles.share}>
                <Share
                    title={`${name}議員の国会クリップをチェックしよう`}
                    url={memberUrl}
                />
            </div>
        </div>
    )
}

export default MemberDetailCard