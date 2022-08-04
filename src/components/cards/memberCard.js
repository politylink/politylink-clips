import * as React from "react";
import * as styles from './memberCard.module.css';

import {Link} from "gatsby";
import FollowButton from "../parts/followButton";

const MemberCard = ({name, info, memberUrl, imageUrl}) => {
    return (
        <div className={styles.card}>
            <Link to={memberUrl} className={styles.member}>
                <img src={imageUrl} alt={"face"} width={"50"} height={"50"} className={styles.image}/>
                <div className={styles.detail}>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.info}>{info}</p>
                </div>
            </Link>
            <FollowButton/>
        </div>
    )
}

export default MemberCard