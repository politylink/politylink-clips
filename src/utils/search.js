export const filterLabels = ['全て', '社会', '経済', '外交', 'テクノロジー', '環境', '学び', '暮らし', 'エネルギー', '参議院議員']

export const isMatchTopic = (query, filterId, topic) => {
    return isFilterMatchTopic(filterId, topic) && isQueryMatchTopic(query, topic)
}

export const isMatchMember = (query, filterId, member) => {
    return isFilterMatchMember(filterId, member) && isQueryMatchMember(query, member)
}


export const isQueryMatchTopic = (query, topic) => {
    return isQueryMatch(query, topic.title)
}

export const isQueryMatchMember = (query, member) => {
    const text = `${member.name} ${member.group} ${member.block}`
    return isQueryMatch(query, text)
}

export const isQueryMatch = (query, text) => {
    const queryList = query.split(/\s+/)
    for (let i = 0; i < queryList.length; i++) {
        if (text.indexOf(queryList[i]) === -1) {
            return false;
        }
    }
    return true;
}

export const isFilterMatchTopic = (filterId, topic) => {
    if (filterId === 0) {
        return true;
    } else if (1 <= filterId && filterId < 9) {
        return filterId === topic.categoryId;
    } else {
        return false;
    }
}

export const isFilterMatchMember = (filterId, member) => {
    return filterId === 0 || filterId === 9
}