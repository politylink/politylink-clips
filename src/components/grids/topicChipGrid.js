import * as React from "react";
import * as styles from './topicChipGrid.module.css';
import {buildCategoryImageUrl, buildTopicUrl} from "../../utils/url";
import TopicChip from "../cards/topicChip";

const TopicChipGrid = ({topics, title = undefined, isWhite = true}) => {
    return (
        <div className={isWhite ? styles.containerWhite : styles.container}>
            {title &&
                <p className={styles.title}>{title}</p>
            }
            <div className={styles.grid}>
                {
                    topics.map(topic => (
                        <TopicChip
                            key={topic.title}
                            title={topic.title}
                            imageUrl={buildCategoryImageUrl(topic.categoryId)}
                            topicUrl={buildTopicUrl(topic.topicId)}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default TopicChipGrid