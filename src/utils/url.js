export const buildAbsoluteUrl = (path) => {
    return `https://clips.politylink.jp${path}`
}

export const buildImageUrl = (path) => {
    return `https://image.politylink.jp/clips${path}`
}

export const buildClipUrl = (clip_id) => {
    return `/clip/${clip_id}`
}

export const buildMemberUrl = (member_id) => {
    return `/member/${member_id}`
}

export const buildCategoryUrl = (category_id) => {
    return `/category/${category_id}`
}

export const buildTopicUrl = (topic_id) => {
    return `/topic/${topic_id}`
}

export const buildClipImageUrl = (clip_id, size = 'm') => {
    const path = `/clip/${size}/${clip_id}.jpg`
    return buildImageUrl(path)
}

export const buildMemberImageUrl = (member_id) => {
    const path = `/icon/anonymous.png`
    return buildImageUrl(path)
}

export const buildCategoryImageUrl = (category_id) => {
    const path = `/category/${category_id}.jpeg`
    return buildImageUrl(path)
}

export const buildCategoryIconUrl = (category_id) => {
    const path = `/icon/${category_id}.png`
    return buildImageUrl(path)
}

export const buildSpeakerImageUrl = () => {
    const path = `/icon/anonymous.png`
    return buildImageUrl(path)
}

