export const buildCategoryPageDescription = (category) => {
    return `「${category.title}」に関する国会クリップをチェックしよう。`
}

export const buildTopicPageDescription = (topic) => {
    return `「${topic.title}」に関する国会クリップをチェックしよう。`
}

export const buildMemberPageDescription = (member) => {
    return `${member.name}議員による国会クリップをチェックしよう。`
}

export const buildClipPageDescription = (clip) => {
    return `${clip.title}について、${clip.member.name}議員が質問しました。`
}

export const buildSearchPageDescription = () => {
    return `気になるトピックの国会クリップを検索しよう。`
}
