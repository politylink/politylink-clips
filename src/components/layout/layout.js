import * as React from 'react'
import * as styles from './layout.module.css'

import Footer from "./footer";
import Header from "./header";

const Layout = ({children}) => {
    return (
        <div className={styles.page}>
            <title>
                {"Clips｜国会は、メディアだ。"}
            </title>
            <Header/>
            <main className={styles.main}>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout