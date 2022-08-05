import * as React from "react";
import * as styles from './footer.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Footer = () => {
    return (
        <footer>
            <div className={styles.footer}>
                <div className={styles.footerIcons}>
                    <a href={"https://twitter.com/politylink"} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon="fa-brands fa-twitter" size="sm" className={styles.footerIconItem}/>
                    </a>
                    <a href={"https://instagram.com/politylink/"} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon="fa-brands fa-instagram" size="sm" className={styles.footerIconItem}/>
                    </a>
                    <a href={"https://forms.gle/yYuFtgjz6d6xMZzv5"} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon="fa-envelope" size="sm" className={styles.footerIconItem}/>
                    </a>
                </div>
                <p className={styles.footerText}>{"© 2022 PolityLink - All Rights Reserved"}</p>
            </div>
        </footer>
    )
}

export default Footer