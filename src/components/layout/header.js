import * as React from 'react'
import * as styles from './header.module.css'
import {Link} from 'gatsby'

import "../../utils/fontawesome";

const Header = () => {
    const navLinkTexts = ['ホーム', '社会', '経済', '外交', 'テクノロジー', '環境', '暮らし', 'エネルギー']
    return (
        <header>
            <div className={styles.header}>
                <Link className={styles.headerTitle} to='/'>
                    Clips.
                </Link>
                <div className={styles.headerLinks}>
                    <p className={styles.headerLinkText}>Clipsについて</p>
                    <p className={styles.headerLinkText}>ログイン</p>
                </div>
            </div>
            <nav>
                <ul className={styles.navLinks}>
                    {
                        navLinkTexts.map(text => (
                            <Link to="/" className={styles.navLinkText}>{text}</Link>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header