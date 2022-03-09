export type DialogsType = {
    id: number
    name: string | null
    avatar: string | null
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
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}
export type PhotoType = {
    small: string | null
    large: string | null
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    contacts: ContactsType
    photos: PhotoType
}

export type UserType = {
    id: number
    name: string | null
    status: string | null
    photos: PhotoType | null
    followed: boolean
}