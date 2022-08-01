export const filterLabels = ['全て', '社会', '経済', '外交', 'テクノロジー', '環境', '学び', '暮らし', 'エネルギー', '参議院議員']

export const isQueryMatch = (query, topic) => {
    const queryList = query.split(/\s+/)
    const text = topic.title
    for (let i = 0; i < queryList.length; i++) {
        if (text.indexOf(queryList[i]) === -1) {
            return false;
        }
    }
    return true;
}

export const isFilterMatch = (filterId, topic) => {
    if (filterId === 0) {
        return true;
    } else if (1 <= filterId && filterId <= 9) {
        return filterId === topic.categoryId;
    } else {
        return false;
    }
}