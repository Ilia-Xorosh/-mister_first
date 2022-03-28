import {instance, APIResponseType} from "./Api";

type MeResponseDataType = {
    id: number
    email: string
    login: string
}
type loginPostResponseDataType = {
    id: number
}

export const authAPI = {
    me() {
        return instance.get<APIResponseType<MeResponseDataType>>(`auth/me`).then(res => res.data)
    },

    loginPost(email: string, password: string, rememberMe = false, captcha = null) {
        return instance.post<APIResponseType<loginPostResponseDataType>>(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        }).then(res => res.data)
    },

    logOut() {
        return instance.delete<APIResponseType>(`auth/login`).then(res => res.data)
    }
}