import {slide as Menu} from "react-burger-menu";
import {Link} from "gatsby";
import React from "react";
import {buildCategoryUrl} from "../../utils/url";

const styles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '30px',
        height: '25px',
        right: '15px',
        top: '15px'
    },
    bmBurgerBars: {
        background: '#ffffff'
    },
    bmCrossButton: {
        height: '40px',
        width: '40px'
    },
    bmCross: {
        background: '#ffffff',
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%'
    },
    bmMenu: {
        background: '#000000',
        padding: '1em',
        fontSize: '1.2em'
    },
    bmItemList: {
        color: '#ffffff',
        padding: '0.8em'
    },
    bmItem: {
        color: '#ffffff',
        textDecoration: 'none',
        margin: '1em',
        outline: 'none'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
}

const HamburgerMenu = ({categories}) => {
    return (
        <Menu right noOverlay styles={styles}>
            <Link to='/' className='menu-item'>ホーム</Link>
            {
                categories.map(category => (
                    <Link to={buildCategoryUrl(category.categoryId)}
                          key={category.categoryId}
                          className='menu-item'>
                        {category.title}
                    </Link>
                ))
            }
            <Link to='/search' className='menu-item'>検索する</Link>
            <Link to='/about' className='menu-item'>Clipsについて</Link>
        </Menu>
    );
}

export default HamburgerMenu