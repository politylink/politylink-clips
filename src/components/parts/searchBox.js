import * as React from "react";
import {useState} from "react";
import * as styles from './searchBox.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SearchBox = ({value, handleChange}) => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filterId, setFilterId] = useState(0);
    const filters = ['全て', '参議院議員', '社会', '経済', '外交', 'テクノロジー', '環境', '学び', '暮らし', 'エネルギー']


    return (
        <div className={styles.container}>
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="lg" className={styles.icon}/>
            <input
                type="text"
                value={value}
                placeholder={"トピック・議員名を検索"}
                onChange={handleChange}
                className={styles.input}
            />
            <button onClick={() => setIsFilterOpen(!isFilterOpen)} className={styles.toggle}>
                <div className={styles.toggleText}>
                    {filters[filterId]}
                </div>
                <div className={styles.toggleIcon}>
                    {isFilterOpen &&
                        <FontAwesomeIcon icon="fa-solid fa-angle-down" size="lg" className={styles.icon}/>
                    }
                    {!isFilterOpen &&
                        <FontAwesomeIcon icon="fa-solid fa-angle-up" size="lg" className={styles.icon}/>
                    }
                </div>
            </button>
            {isFilterOpen &&
                <div className={styles.filter}>
                    {filters.map((value, index) => (
                        <button onClick={() => {
                            setFilterId(index);
                            setIsFilterOpen(false);
                        }} className={styles.filterItem}>
                            <p className={filterId == index ? styles.filterTextSelected : styles.filterText}>{value}</p>
                        </button>
                    ))}
                </div>
            }
        </div>
    )
}

export default SearchBox