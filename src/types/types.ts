export type DialogsType = {
    id: number
    name: string | null
    avatar: string | undefined
}
export type MessagesType = {
    id: number
    message: string
}

export type PostType = {
    id: number
    message: string | null
    likeCount: number | null
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotoType = {
    small: string
    large: string
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotoType
    aboutMe: string
}

export type UserType = {
    id: number
    name: string | null
    status: string
    photos: PhotoType
    followed: boolean
}