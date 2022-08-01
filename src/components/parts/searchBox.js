import * as React from "react";
import {useState} from "react";
import * as styles from './searchBox.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SearchBox = ({currentQuery, currentFilterId, filterLabels, handleQueryChange, handleFilterChange}) => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    return (
        <div className={styles.container}>
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="lg" className={styles.icon}/>
            <input
                type="text"
                placeholder={"トピック・議員名を検索"}
                value={currentQuery}
                onChange={handleQueryChange}
                className={styles.input}
            />
            <button onClick={() => setIsFilterOpen(!isFilterOpen)} className={styles.toggle}>
                <div className={styles.toggleText}>
                    {filterLabels[currentFilterId]}
                </div>
                <div className={styles.toggleIcon}>
                    {isFilterOpen
                        ? <FontAwesomeIcon icon="fa-solid fa-angle-down" size="lg" className={styles.icon}/>
                        : <FontAwesomeIcon icon="fa-solid fa-angle-up" size="lg" className={styles.icon}/>
                    }
                </div>
            </button>
            {isFilterOpen &&
                <div className={styles.filter}>
                    {filterLabels.map((label, filterId) => (
                        <button onClick={() => {
                            handleFilterChange(filterId);
                            setIsFilterOpen(false);
                        }} className={styles.filterItem}>
                            <p className={currentFilterId === filterId ? styles.filterTextSelected : styles.filterText}>
                                {label}
                            </p>
                        </button>
                    ))}
                </div>
            }
        </div>
    )
}

export default SearchBox