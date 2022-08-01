import * as React from "react"
import {useState} from "react"
import Layout from "../components/layout/layout";
import SearchBox from "../components/parts/searchBox";
import TopicCardGrid from "../components/grids/topicCardGrid";
import {graphql} from "gatsby";
import {filterLabels, isFilterMatch, isQueryMatch} from "../utils/search";
import * as styles from './search.module.css'
import {readLocalFilterId, readLocalQuery, storeLocalFilterId, storeLocalQuery} from "../utils/storage";

const SearchPage = ({data}) => {
    const [query, setQuery] = useState(readLocalQuery())
    const [filterId, setFilterId] = useState(readLocalFilterId());

    const handleQueryChange = (event) => {
        const value = event.target.value;
        storeLocalQuery(value);
        setQuery(value);
    }

    const handleFilterChange = (filterId) => {
        storeLocalFilterId(filterId);
        setFilterId(filterId);
    }

    const topics = data.allTopicJson.nodes.map(node => node.topic)
    const filteredTopics = topics.filter((topic) => {
        return isQueryMatch(query, topic) && isFilterMatch(filterId, topic)
    })

    return (
        <Layout>
            <div className={styles.search}>
                <SearchBox
                    value={query}
                    currentFilterId={filterId}
                    filterLabels={filterLabels}
                    handleQueryChange={handleQueryChange}
                    handleFilterChange={handleFilterChange}
                />
            </div>
            <div className={styles.result}>
                <TopicCardGrid
                    topics={filteredTopics}
                    isWhite={false}
                />
            </div>
        </Layout>
    )
}

export const query = graphql`
    query {
        allTopicJson {
            nodes {
                topic {
                    topicId
                    title
                    categoryId
                }
            }
        }
        allMemberJson {
            nodes {
                member {
                    name
                    group
                    block
                }
            }
        }
    }
`

export default SearchPage
