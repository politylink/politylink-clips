import * as React from "react";
import * as styles from './memberChip.module.css';

import {Link} from "gatsby";

const MemberChip = ({name, info, imageUrl, memberUrl}) => {
    return (
        <Link to={memberUrl} className={styles.chip}>
            <img src={imageUrl} alt={"image"} className={styles.image}/>
            <p className={styles.title}>{name}</p>
            <p className={styles.info}>{info}</p>
        </Link>
    )
}

export default MemberChip