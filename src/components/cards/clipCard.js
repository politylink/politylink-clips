import * as React from "react";
import * as styles from './clipCard.module.css';
import {Link} from "gatsby";
import LazyLoad from 'react-lazyload';

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
                      headless = false
                  }) => {
    const subTitle = `${date} ${house} ${meeting}`

    return (
        <Link to={clipUrl} className={styles.card}>
            {!headless &&
                <LazyLoad once>
                    <img src={imageUrl} alt={"thumbnail"} className={styles.image}/>
                </LazyLoad>
            }
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