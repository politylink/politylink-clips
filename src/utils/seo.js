export const buildCategoryPageTitle = (category) => {
    return `${category.title}｜Clips`
}

export const buildCategoryPageDescription = (category) => {
    return `「${category.title}」に関する国会クリップをチェックしよう。`
}

export const buildTopicPageTitle = (topic) => {
    return `${topic.title}｜Clips`
}

export const buildTopicPageDescription = (topic) => {
    return `「${topic.title}」に関する国会クリップをチェックしよう。`
}

export const buildMemberPageTitle = (member) => {
    return `${member.name}｜Clips`
}

export const buildMemberPageDescription = (member) => {
    return `${member.name}議員による国会クリップをチェックしよう。`
}

export const buildClipPageTitle = (clip) => {
    return `${clip.title}｜Clips`
}

export const buildClipPageDescription = (clip) => {
    return `${clip.title}について、${clip.member.name}議員が質問しました。`
}

export const buildSearchPageTitle = () => {
    return `検索する｜Clips`
}

export const buildSearchPageDescription = () => {
    return `気になるトピックの国会クリップを検索しよう。`
}
