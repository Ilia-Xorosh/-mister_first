import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY" : "a51074dc-dc6a-4251-a2c5-f8bb44563881"
    }
});
export enum ResultCodeEnum {
    Success = 0,
    Error = 1
}
export enum ResultCodeForCaptchaEnum {
    captchaIsRequired = 10
}

export type APIResponseType<T = {}, RC = ResultCodeEnum | ResultCodeForCaptchaEnum> = {
    data: T
    messages: Array<string>
    resultCode: RC
}