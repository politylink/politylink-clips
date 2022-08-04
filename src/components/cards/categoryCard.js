import * as React from "react";
import * as styles from './categoryCard.module.css';
import {Link} from "gatsby";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {buildClipUrl, buildTopicUrl} from "../../utils/url";

const CategoryCard = ({title, imageUrl, categoryUrl, topics, clips}) => {
    return (
        <div className={styles.card}>
            <Link to={categoryUrl} className={styles.link}>
                <div className={styles.header}>
                    <p className={styles.headerTitle}>{title}</p>
                    <FontAwesomeIcon icon="fa-solid fa-angle-right" size="lg" className={styles.headerIcon}/>
                </div>
                <img src={imageUrl} alt={"img"} height={"150"} className={styles.image}/>
            </Link>
            <div className={styles.topics}>
                {topics.map((topic) => (
                    <Link to={buildTopicUrl(topic.topicId)} key={topic.topicId} className={styles.link}>
                        <p className={styles.topicItem}>{topic.title}</p>
                    </Link>
                ))}
            </div>
            <div className={styles.clips}>
                {clips.map((clip) => (
                    <div key={clip.clipId} className={styles.clipItem}>
                        <Link to={buildClipUrl(clip.clipId)} className={styles.link}>
                            <p className={styles.clipItemText}>{clip.title}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CategoryCard