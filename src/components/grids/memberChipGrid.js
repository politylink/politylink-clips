import * as React from "react";
import * as styles from './topicCardGrid.module.css';
import {buildMemberUrl, buildSpeakerImageUrl} from "../../utils/url";
import MemberChip from "../cards/memberChip";

const MemberChipGrid = ({members, title = undefined, isWhite = true}) => {
    return (
        <div className={isWhite ? styles.containerWhite : styles.container}>
            {title &&
                <p className={styles.title}>{title}</p>
            }
            <div className={styles.grid}>
                {
                    members.map(member => (
                        <MemberChip
                            key={member.name}
                            name={member.name}
                            info={`${member.group}・${member.block}`}
                            imageUrl={buildSpeakerImageUrl()}
                            memberUrl={buildMemberUrl(member.memberId)}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default MemberChipGrid