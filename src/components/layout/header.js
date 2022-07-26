import * as React from 'react'
import * as styles from './header.module.css'
import {graphql, Link, useStaticQuery} from 'gatsby'

import "../../utils/fontawesome";

const Header = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allCategoryJson {
                    nodes {
                        categoryId
                        name
                    }
                }
            }
        `
    )
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
                    <Link to="/" key={0} className={styles.navLinkText}>{"ホーム"}</Link>
                    {
                        data.allCategoryJson.nodes.map(node => (
                            <Link to={`/category/${node.categoryId}`}
                                  key={node.categoryId}
                                  className={styles.navLinkText}>
                                {node.name}
                            </Link>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header