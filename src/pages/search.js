import * as React from "react"
import {useState} from "react"
import Layout from "../components/layout/layout";
import SearchBox from "../components/parts/searchBox";
import TopicChipGrid from "../components/grids/topicChipGrid";
import {graphql} from "gatsby";
import {filterLabels, isMatchMember, isMatchTopic} from "../utils/search";
import * as styles from './search.module.css'
import {readLocalFilterId, readLocalQuery, storeLocalFilterId, storeLocalQuery} from "../utils/storage";
import MemberChipGrid from "../components/grids/memberChipGrid";
import SEO from "../components/parts/seo";
import {buildSearchPageDescription, buildSearchPageTitle} from "../utils/seo";

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
    const members = data.allMemberJson.nodes.map(node => node.member)
    const filteredTopics = topics.filter((topic) => {
        return isMatchTopic(query, filterId, topic);
    })
    const filteredMembers = members.filter((member) => {
        return isMatchMember(query, filterId, member);
    })

    return (
        <Layout>
            <div className={styles.search}>
                <SearchBox
                    currentQuery={query}
                    currentFilterId={filterId}
                    filterLabels={filterLabels}
                    handleQueryChange={handleQueryChange}
                    handleFilterChange={handleFilterChange}
                />
            </div>
            <div className={styles.result}>
                {filteredTopics.length > 0 &&
                    <TopicChipGrid
                        topics={filteredTopics}
                        isWhite={false}
                    />
                }
                {filteredMembers.length > 0 &&
                    <MemberChipGrid
                        members={filteredMembers}
                        isWhite={false}
                    />
                }
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
                    memberId
                    name
                    group
                    block
                }
            }
        }
    }
`

export default SearchPage
export const Head = ({location}) => {
    return (
        <SEO
            title={buildSearchPageTitle()}
            description={buildSearchPageDescription()}
            path={location.pathname}
        />
    )
}
