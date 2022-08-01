import * as React from "react"
import Layout from "../components/layout/layout";
import SearchBox from "../components/parts/searchBox";
import TopicCardGrid from "../components/grids/topicCardGrid";
import {graphql} from "gatsby";
import {QUERY_KEY} from "../utils/constants";
import {isMatch} from "../utils/search";
import * as styles from './search.module.css'
import {readQuery, storeQuery} from "../utils/storage";

export default class SearchPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filterText: readQuery()
        }
        this.handleTextInput = this.handleTextInput.bind(this);
    }

    handleTextInput(event) {
        storeQuery(event.target.value);
        this.setState({filterText: event.target.value});
    }

    filterTopics(topics) {
        return (topics
                .filter((topic) => {
                    const joinedText = topic.title
                    return isMatch(this.state.filterText, joinedText)
                })
        );
    }

    render() {
        const topics = this.props.data.allTopicJson.nodes.map(node => node.topic)
        const filteredTopics = this.filterTopics(topics)
        return (
            <Layout>
                <div className={styles.search}>
                    <SearchBox
                        handleChange={this.handleTextInput}
                        value={this.state.filterText}
                        placeholder="トピック・議員を検索"
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
    }
`
