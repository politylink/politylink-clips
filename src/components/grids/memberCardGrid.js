import * as React from "react";
import * as styles from './memberCardGrid.module.css';
import MemberCard from "../cards/memberCard";
import {buildMemberUrl} from "../../utils/url";

const MemberCardGrid = ({members}) => {
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {
                    members.map(member => (
                        <MemberCard
                            key={member.name}
                            name={member.name}
                            info={`${member.group}・${member.block}`}
                            memberUrl={buildMemberUrl(member.memberId)}
                            imageUrl={member.imageUrl}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default MemberCardGrid