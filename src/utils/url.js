
export const buildClipUrl = (clip_id) => {
    return `/clip/${clip_id}`
}

export const buildClipImageUrl = (clip_id) => {
    return `/image/clip/${clip_id}.jpg`
}

export const buildMemberUrl = (member_id) => {
    return `/member/${member_id}`
}

export const buildMemberImageUrl = (member_id) => {
    return '/image/anonymous.png'
}

export const buildSpeakerImageUrl = () => {
    return '/image/anonymous.png'
}

export const buildCategoryUrl = (category_id) => {
    return `/category/${category_id}`
}

export const buildCategoryImageUrl = (category_id) => {
    return `/image/category/${category_id}.png`
}

export const buildCoverImageUrl = (category_id) => {
    return `/image/cover/${category_id}.jpeg`
}

export const buildTopicUrl = (topic_id) => {
    return `/topic/${topic_id}`
}

export const buildAbsoluteUrl = (path) => {
    return `https://clips.politylink.jp${path}`
}