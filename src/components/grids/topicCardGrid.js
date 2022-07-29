import * as React from "react";
import * as styles from './topicCardGrid.module.css';
import {buildCategoryImageUrl, buildTopicUrl} from "../../utils/url";
import TopicCard from "../cards/topicCard";

const TopicCardGrid = ({title, topics}) => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>{title}</p>
            <div className={styles.grid}>
                {
                    topics.map(topic => (
                        <TopicCard
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

export default TopicCardGrid