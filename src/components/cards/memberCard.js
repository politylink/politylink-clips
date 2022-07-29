import * as React from "react";
import * as styles from './memberCard.module.css';

import {Link} from "gatsby";
import Follow from "../parts/follow";

const MemberCard = ({name, group, block, memberUrl, imageUrl}) => {
    return (
        <div className={styles.card}>
            <Link to={memberUrl} className={styles.member}>
                <img src={imageUrl} alt={"face"} className={styles.image}/>
                <div className={styles.detail}>
                    <p className={styles.name}>{name}</p>
                    <div className={styles.info}>
                        <p className={styles.infoText}>{group}</p>
                        <p className={styles.infoText}>{block}</p>
                    </div>
                </div>
            </Link>
            <Follow/>
        </div>
    )
}

export default MemberCard