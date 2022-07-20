import * as React from "react";
import * as styles from './footer.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Footer = () => {
    return (
        <footer>
            <div className={styles.footer}>
                <div className={styles.footerIcons}>
                    <FontAwesomeIcon icon="fa-brands fa-twitter" size="m" className={styles.footerIconItem}/>
                    <FontAwesomeIcon icon="fa-brands fa-instagram" size="m" className={styles.footerIconItem}/>
                    <FontAwesomeIcon icon="fa-envelope-open" size="m" className={styles.footerIconItem}/>
                </div>
                <p className={styles.footerText}>{"© 2022 PolityLink - All Rights Reserved"}</p>
            </div>
        </footer>
    )
}

export default Footer