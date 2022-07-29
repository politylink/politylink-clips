import * as React from "react";
import * as styles from './topicCard.module.css';

import {Link} from "gatsby";

const TopicCard = ({title, imageUrl, topicUrl}) => {
    return (
        <Link to={topicUrl} className={styles.card}>
            <img src={imageUrl} alt={"image"} className={styles.image}/>
            <p className={styles.title}>{title}</p>
        </Link>
    )
}

export default TopicCard