import * as React from "react";
import * as styles from './clipCard.module.css';

const ClipCard = ({
                      title,
                      date,
                      house,
                      meeting,
                      clipUrl,
                      imageUrl,
                      speakerImageUrl,
                      speakerName,
                      speakerInfo,
                      isExternal = false,
                  }) => {
    const subTitle = `${date} ${house} ${meeting}`
    const target = isExternal ? "_blank" : "_self"

    return (
        <a href={clipUrl} target={target} className={styles.card}>
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
        </a>
    )
}

export default ClipCard