import * as React from 'react'
import * as styles from './header.module.css'
import {graphql, Link, useStaticQuery} from 'gatsby'

import "../../utils/fontawesome";
import {buildCategoryUrl} from "../../utils/url";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import MediaQuery from "react-responsive";
import HamburgerMenu from "./burger";

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
                <Link to='/'>
                    <img src={'/image/header.png'} alt={'header'} height={"40"} className={styles.headerImage}/>
                </Link>
                <MediaQuery query="(min-width: 840px)">
                    <Link to="/about" className={styles.headerLinks}>
                        <p className={styles.headerLinkText}>Clipsについて</p>
                    </Link>
                </MediaQuery>
                <MediaQuery query="(max-width: 840px)">
                    <HamburgerMenu
                        categories={categories}
                    />
                </MediaQuery>
            </div>
            <MediaQuery query="(min-width: 840px)">
                <nav>
                    <ul className={styles.navLinks}>
                        <Link to="/" key={'ホーム'} className={styles.navLinkText}>{"ホーム"}</Link>
                        {
                            categories.map(category => (
                                <Link to={buildCategoryUrl(category.categoryId)}
                                      key={category.categoryId}
                                      className={styles.navLinkText}>
                                    {category.title}
                                </Link>
                            ))
                        }
                        <Link to="/search" key={'search'} className={styles.navLinkText}>
                            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="lg"/>
                        </Link>
                    </ul>
                </nav>
            </MediaQuery>
        </header>
    )
}

export default Header