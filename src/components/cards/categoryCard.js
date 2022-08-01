import * as React from "react";
import * as styles from './categoryCard.module.css';
import {Link} from "gatsby";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const CategoryCard = ({title, imageUrl, categoryUrl, topics, clips}) => {
    return (
        <div className={styles.card}>
            <Link to={categoryUrl}>
                <div className={styles.header}>
                    <p className={styles.headerTitle}>{title}</p>
                    <FontAwesomeIcon icon="fa-solid fa-angle-right" size="lg" className={styles.headerIcon}/>
                </div>
                <img src={imageUrl} alt={"img"} className={styles.image}/>
            </Link>
            <div className={styles.topics}>
                {topics.map((topic) => (
                    <p className={styles.topicItem}>{topic.title}</p>
                ))}
            </div>
            <div className={styles.clips}>
                {clips.map((clip) => (
                    <p className={styles.clipItem}>{clip.title}</p>
                ))}
            </div>
        </div>
    )
}

export default CategoryCard