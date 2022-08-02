import * as React from "react";
import * as styles from './categoryCardGrid.module.css'
import {buildCategoryUrl, buildCoverImageUrl} from "../../utils/url";
import CategoryCard from "../cards/categoryCard";

const CategoryCardGrid = ({categories}) => {
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {
                    categories.map(category => (
                        <CategoryCard
                            key={category.category.categoryId}
                            title={category.category.title}
                            imageUrl={buildCoverImageUrl(category.category.categoryId)}
                            categoryUrl={buildCategoryUrl(category.category.categoryId)}
                            topics={category.topics}
                            clips={category.clips.slice(0, 2)}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default CategoryCardGrid