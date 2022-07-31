import React from "react";
import {
    TwitterIcon,
    TwitterShareButton,
    FacebookIcon,
    FacebookShareButton,
    LineIcon,
    LineShareButton,
    HatenaIcon,
    HatenaShareButton
} from "react-share";
import * as styles from "./shareButtons.module.css"

const ShareButtons = ({title, url}) => {
    const iconSize = 40;
    const iconStyle = {fill: 'white'}
    const iconFill = '#333333'

    return (
        <div className={styles.container}>
            <p className={styles.text}>SHARE</p>
            <TwitterShareButton url={url} title={title} className={styles.icon}>
                <TwitterIcon size={iconSize} round={true} bgStyle={iconStyle} iconFillColor={iconFill}/>
            </TwitterShareButton>
            <FacebookShareButton url={url} quote={title} className={styles.icon}>
                <FacebookIcon size={iconSize} round={true} bgStyle={iconStyle} iconFillColor={iconFill}/>
            </FacebookShareButton>
            <LineShareButton url={url} title={title} className={styles.icon}>
                <LineIcon size={iconSize} round={true} bgStyle={iconStyle} iconFillColor={iconFill}/>
            </LineShareButton>
            <HatenaShareButton url={url} title={title} className={styles.icon}>
                <HatenaIcon size={iconSize} round={true} bgStyle={iconStyle} iconFillColor={iconFill}/>
            </HatenaShareButton>
        </div>
    )
}

export default ShareButtons