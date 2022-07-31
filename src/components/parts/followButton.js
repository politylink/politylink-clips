import * as React from "react";
import * as styles from './followButton.module.css';

const FollowButton = () => {
    return (
        <div className={styles.container}>
            <p className={styles.text}>{"フォローする"}</p>
        </div>
    )
}

export default FollowButton