import * as React from "react";
import * as styles from './topicChip.module.css';

import {Link} from "gatsby";

const TopicChip = ({title, imageUrl, topicUrl}) => {
    return (
        <Link to={topicUrl} className={styles.chip}>
            <img src={imageUrl} alt={"image"} className={styles.image}/>
            <p className={styles.title}>{title}</p>
        </Link>
    )
}

export default TopicChip