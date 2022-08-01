import * as React from "react";
import * as mainStyles from './clipCardGrid.main.module.css'
import * as subStyles from './clipCardGrid.sub.module.css';
import ClipCard from "../cards/clipCard";
import {buildClipImageUrl, buildClipUrl, buildSpeakerImageUrl} from "../../utils/url";

const ClipCardGrid = ({clips, title = undefined, isMain = true}) => {
    const styles = isMain ? mainStyles : subStyles;
    return (
        <div className={styles.container}>
            {title &&
                <p className={styles.title}>{title}</p>
            }
            <div className={styles.grid}>
                {
                    clips.map(clip => (
                        <ClipCard
                            key={clip.clipId}
                            title={clip.title}
                            date={clip.date}
                            house={clip.house}
                            meeting={clip.meeting}
                            clipUrl={buildClipUrl(clip.clipId)}
                            imageUrl={buildClipImageUrl(clip.clipId)}
                            speakerName={clip.member.name}
                            speakerInfo={`${clip.member.group}・${clip.member.block}`}
                            speakerImageUrl={buildSpeakerImageUrl()}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ClipCardGrid