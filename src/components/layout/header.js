import * as React from 'react'
import * as styles from './header.module.css'
import {graphql, Link, useStaticQuery} from 'gatsby'

import "../../utils/fontawesome";
import {buildCategoryUrl} from "../../utils/url";

const Header = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allCategoryJson (sort: {fields: category___categoryId}) {
                    nodes {
                        category {
                            categoryId
                            title
                        }
                    }
                }
            }
        `
    )
    const categories = data.allCategoryJson.nodes.map(node => node.category)

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
                        categories.map(category => (
                            <Link to={buildCategoryUrl(category.categoryId)}
                                  key={category.categoryId}
                                  className={styles.navLinkText}>
                                {category.title}
                            </Link>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header