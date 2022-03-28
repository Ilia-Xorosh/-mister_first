import {instance, APIResponseType} from "./Api";
import {profileAPI} from "./profile-api";
import {UserType} from "../types/types";

type GetUsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

export const usersAPI = {

    getProfile(userId: number) {
        console.warn('Obsolete method. Please ProfileAPI object.')
        return profileAPI.getProfile(userId)
    },

    getUsers(currentPage: number = 1, pageSize: number = 5) {
        return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    },

    unfollow(userId: number) {
        return instance.delete<APIResponseType>(`follow/${userId}`).then(res => res.data)
    },

    follow(userId: number) {
        return instance.post<APIResponseType>(`follow/${userId}`).then(res => res.data)
    }
}