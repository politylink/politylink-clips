import * as React from "react";
import * as styles from './searchBox.module.css';

const SearchBox = ({value, placeholder, handleChange}) => {
    return (
        <input
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            className={styles.container}
        />
    )
}

export default SearchBox