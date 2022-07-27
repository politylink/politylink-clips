
export const buildClipUrl = (clip_id) => {
    return `/clip/${clip_id}`
}

export const buildClipImageUrl = (clip_id) => {
    return `/image/clip/${clip_id}.jpg`
}

export const buildMemberUrl = (member_id) => {
    return `/member/${member_id}`
}

export const buildSpeakerImageUrl = () => {
    return '/image/anonymous.png'
}
